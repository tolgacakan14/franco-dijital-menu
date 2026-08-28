import { menu as fallbackMenu, type Category, type Product, type ProductStatus } from "@/data/menu";

const requiredHeaders = ["kategori_kodu", "kategori_adı", "ürün_kodu", "ürün_adı", "fiyat", "durum"] as const;

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') { value += '"'; index += 1; }
      else if (char === '"') quoted = false;
      else value += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") { row.push(value); value = ""; }
    else if (char === "\n") { row.push(value.replace(/\r$/, "")); rows.push(row); row = []; value = ""; }
    else value += char;
  }
  if (value || row.length) { row.push(value.replace(/\r$/, "")); rows.push(row); }
  return rows.filter(item => item.some(cell => cell.trim()));
}

const numberValue = (value: string, fallback: number) => {
  const normalized = value.trim().replace(/\s/g, "").replace("₺", "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export function menuFromCsv(csv: string): Category[] {
  const [headerRow, ...dataRows] = parseCsv(csv);
  if (!headerRow) throw new Error("Google Sheets tablosu boş.");
  const headers = headerRow.map(header => header.trim().toLocaleLowerCase("tr-TR"));
  for (const required of requiredHeaders) if (!headers.includes(required)) throw new Error(`Eksik sütun: ${required}`);
  const get = (row: string[], key: string) => row[headers.indexOf(key)]?.trim() ?? "";
  type OrderedProduct = Product & { order: number };
  type OrderedCategory = Omit<Category, "products"> & { order: number; products: OrderedProduct[] };
  const categories = new Map<string, OrderedCategory>();

  for (const row of dataRows) {
    const visibility = get(row, "durum").toLocaleLowerCase("tr-TR");
    if (visibility === "gizli") continue;
    const categoryId = get(row, "kategori_kodu");
    const productName = get(row, "ürün_adı");
    if (!categoryId || !productName) continue;
    const fallbackCategory = fallbackMenu.find(category => category.id === categoryId);
    const fallbackProduct = fallbackCategory?.products.find(product => product.id === get(row, "ürün_kodu"))
      ?? fallbackCategory?.products.find(product => product.name === productName);
    if (!categories.has(categoryId)) {
      categories.set(categoryId, {
        id: categoryId,
        name: get(row, "kategori_adı") || fallbackCategory?.name || categoryId,
        eyebrow: get(row, "kategori_alt_başlık") || fallbackCategory?.eyebrow || "Franco seçkisi",
        icon: get(row, "kategori_ikonu") || fallbackCategory?.icon || "FR",
        order: numberValue(get(row, "kategori_sırası"), fallbackMenu.findIndex(category => category.id === categoryId) + 1),
        products: []
      });
    }
    const intensityValue = numberValue(get(row, "yoğunluk"), fallbackProduct?.intensity ?? 2);
    const product: OrderedProduct = {
      ...fallbackProduct,
      id: get(row, "ürün_kodu") || fallbackProduct?.id || `${categoryId}-${productName}`,
      name: productName,
      price: numberValue(get(row, "fiyat"), fallbackProduct?.price ?? 0),
      description: get(row, "açıklama") || fallbackProduct?.description,
      profile: get(row, "tat_profili") || fallbackProduct?.profile,
      pairing: get(row, "eşleşme") || fallbackProduct?.pairing,
      intensity: Math.min(4, Math.max(1, intensityValue)) as 1 | 2 | 3 | 4,
      status: (visibility === "tükendi" ? "sold-out" : "active") as ProductStatus,
      imageIndex: numberValue(get(row, "görsel_indeksi"), fallbackProduct?.imageIndex ?? 0),
      imageUrl: get(row, "görsel_url") || fallbackProduct?.imageUrl,
      order: numberValue(get(row, "ürün_sırası"), (fallbackProduct?.imageIndex ?? 0) + 1)
    };
    categories.get(categoryId)!.products.push(product);
  }

  return [...categories.values()]
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...category }) => ({
      ...category,
      products: category.products
        .sort((a, b) => a.order - b.order)
        .map(({ order: _productOrder, ...product }) => product)
    }))
    .filter(category => category.products.length);
}
