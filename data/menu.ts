import { productKnowledge } from "./menu-intelligence";

export type ProductStatus = "active" | "sold-out";
export type Product = { id: string; name: string; price: number; description?: string; profile?: string; intensity?: 1 | 2 | 3 | 4; pairing?: string; tags?: string[]; badge?: string; status?: ProductStatus; imageIndex?: number; imageUrl?: string };
export type Category = { id: string; name: string; eyebrow: string; icon: string; products: Product[] };

const productImages: Record<string, string> = {
  "Nutella": "/products/generated/gelato-nutella-v2.jpg",
  "Belçika Çikolatası": "/products/generated/gelato-belcika-cikolatasi-v2.jpg",
  "Nutella Cookies": "/products/generated/nutella-cookies-v3.jpg",
  "Franco Snickers": "/products/generated/franco-snickers-v2.jpg"
};

const products = (items: Array<[string, number]>): Product[] => items.map(([name, price], index) => ({
  id: `${name.toLocaleLowerCase("tr-TR").replace(/[^a-z0-9çğıöşü]+/gi, "-").replace(/^-|-$/g, "")}-${index}`,
  name,
  price,
  imageIndex: index,
  imageUrl: productImages[name],
  ...productKnowledge[name]
}));

// 25 Ağustos 2026 tarihinde Franco'nun QRall menüsünden aktarıldı.
export const menu: Category[] = [
  { id: "dondurma", name: "Dondurma", eyebrow: "Franco gelato", icon: "GL", products: products([
    ["Sütlü",80],["Kakao",80],["Karamel",80],["Tahin",80],["İtalyan Karameli",80],["Bal Badem",80],
    ["Vişne",80],["Çilek",80],["Oreo",80],["Kavun",80],["Limon",80],["Yeşil Elma",80],
    ["İncir&Ceviz",80],["Lotus",80],["Böğürtlen",80],["Antep Fıstığı",80],
    ["Nutella",80],["Belçika Çikolatası",80]
  ])},
  { id: "soguk-kahveler", name: "Soğuk Kahveler", eyebrow: "Buz gibi kahve", icon: "SK", products: products([
    ["Affagato",230],["Ice Latte",220],["Ice Vanilla Latte",240],["Ice Caramel Latte",240],
    ["Ice Toffee Nut Latte",240],["Ice Americano",220],["Ice Filtre Kahve",170],["Ice Mocha",240],
    ["Ice White Chocolate Mocha",240],["Frappe",230]
  ])},
  { id: "soguk-icecekler", name: "Soğuk İçecekler", eyebrow: "Serinleten tatlar", icon: "Sİ", products: products([
    ["Su",60],["Sade Soda",80],["Sıkma Limon Soda",100],["Churchill",100],["Redbull",170],
    ["Avşar",110],["Fanta",110],["Sprite",110],["Cola",110]
  ])},
  { id: "summer-edition", name: "Summer Edition", eyebrow: "Yaza özel", icon: "SE", products: products([
    ["Franco Mango",250],["Rooibos Peach",250]
  ])},
  { id: "sicak-kahveler", name: "Sıcak Kahveler", eyebrow: "Taze hazırlanır", icon: "KK", products: products([
    ["Double Türk Kahvesi",225],["Türk Kahvesi",150],["Latte",210],["Vanilla Latte",220],
    ["Caramel Latte",220],["Toffienut Latte",220],["Americano",180],["Filtre Kahve",170],
    ["Espresso",130],["Double Espresso",150],["Mocha",220],["White Chocolate Mocha",220],
    ["Cortado",180],["Flat White",190],["Cappuccino",210]
  ])},
  { id: "sicak-icecekler", name: "Sıcak İçecekler", eyebrow: "Sıcacık bir mola", icon: "SÇ", products: products([
    ["Fincan Çay",100],["Çay",70]
  ])},
  { id: "dondurmali-milkshake", name: "Dondurmalı Milkshake", eyebrow: "Yoğun ve serin", icon: "MS", products: products([
    ["Lotus Milkshake",250],["Antepfıstıklı Milkshake",250],["Oreo & Çikolata Milkshake",250],["Çilek & Vanilya Milkshake",250]
  ])},
  { id: "tatlilar", name: "Tatlılar", eyebrow: "Tatlı bir mola", icon: "TL", products: products([
    ["Dondurmalı Brownie",400],["Belçika Çikolatalı Brownie",400],["San Sabastian",360],
    ["Belçika Çikolatalı Profiretol",400],["Dubai Cup",360],
    ["Nutella Cookies",360],["Spoonful Cup",350],["Tiramisu",350],["Franco Snickers",350],
    ["Çilekli Magnolia",350],["Lotus Küre",360]
  ])}
];
