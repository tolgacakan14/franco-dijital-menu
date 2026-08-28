import { menu } from "@/data/menu";
import { menuFromCsv } from "@/lib/sheets-menu";

export const dynamic = "force-dynamic";

export async function GET() {
  const sheetUrl = process.env.GOOGLE_SHEETS_MENU_CSV_URL;
  if (!sheetUrl) return Response.json({ menu, source: "local" }, { headers: { "Cache-Control": "no-store" } });
  try {
    const response = await fetch(sheetUrl, { cache: "no-store", signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`Google Sheets ${response.status} yanıtı verdi.`);
    const liveMenu = menuFromCsv(await response.text());
    if (!liveMenu.length) throw new Error("Google Sheets geçerli ürün döndürmedi.");
    return Response.json({ menu: liveMenu, source: "google-sheets" }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Google Sheets menüsü okunamadı; yerel menü kullanılıyor.", error);
    return Response.json({ menu, source: "local-fallback" }, { headers: { "Cache-Control": "no-store" } });
  }
}
