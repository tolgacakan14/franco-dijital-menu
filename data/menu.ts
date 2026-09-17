import { productKnowledge } from "./menu-intelligence";

export type ProductStatus = "active" | "sold-out";
export type Product = { id: string; name: string; price: number | null; description?: string; profile?: string; intensity?: 1 | 2 | 3 | 4; pairing?: string; tags?: string[]; badge?: string; status?: ProductStatus; imageIndex?: number; imageUrl?: string };
export type Category = { id: string; name: string; eyebrow: string; icon: string; products: Product[] };

const productImages: Record<string, string> = {
  "Nutella": "/products/generated/gelato-nutella-v2.jpg",
  "Belçika Çikolatası": "/products/generated/gelato-belcika-cikolatasi-v2.jpg",
  "Portakallı": "/products/generated/gelato-portakalli-v2.jpg",
  "Nutella Cookies": "/products/generated/nutella-cookies-v3.jpg",
  "Franco Snickers": "/products/generated/franco-snickers-v2.jpg",
  "Roma 66": "/products/generated/summer-edition/roma-66.jpg",
  "Cool lime 2.0": "/products/generated/summer-edition/cool-lime-2.jpg",
  "Metropolitan": "/products/generated/summer-edition/metropolitan.jpg",
  "Narsist": "/products/generated/summer-edition/narsist.jpg",
  "Franco Mango": "/franco-mango-0.png",
  "Rooibos Peach": "/rooibos-peach-1.png",
  "Fire Classic": "/products/generated/fire-classic.jpg",
  "Adrenalin Burger": "/products/generated/adrenalin.jpg",
  "Guaca Burger": "/products/generated/guaca-burger.jpg",
  "Three Mushroom": "/products/generated/mushroom-burger.jpg",
  "Basic Child Burger": "/products/generated/basic-child.jpg",
  "Crunchicken": "/products/generated/crunchicken.jpg",
  "Cafe de Pari Burger": "/products/generated/cafe-de-paris.jpg",
  "Louisiana Chicken Taste": "/products/generated/louisiana-chicken-taste.jpg",
  "Smash Taste": "/products/generated/smash-taste.jpg",
  "Mozzarella Topları": "/products/generated/mozzarella-bar.jpg",
  "Trüflü Parmesan Patates Kızartması": "/products/generated/french-fries.jpg",
  "Panna Cotta": "/products/generated/panna-cotta.jpg"
};

const fireHandDetails: Record<string, Pick<Product, "profile" | "pairing">> = {
  "Fire Classic": { profile: "Burger · klasik", pairing: "Cola" },
  "Adrenalin Burger": { profile: "Burger · acı", pairing: "Cola" },
  "Guaca Burger": { profile: "Burger · avokado", pairing: "Cola" },
  "Three Mushroom": { profile: "Burger · mantar", pairing: "Cola" },
  "Basic Child Burger": { profile: "Burger · sade", pairing: "Cola" },
  "Crunchicken": { profile: "Burger · çıtır tavuk", pairing: "Cola" },
  "Cafe de Pari Burger": { profile: "Burger · soslu", pairing: "Cola" },
  "Louisiana Chicken Taste": { profile: "Taco · tavuk", pairing: "Cola" },
  "Smash Taste": { profile: "Taco · dana", pairing: "Cola" },
  "Mozzarella Topları": { profile: "Yan ürün · çıtır", pairing: "Cola" },
  "Trüflü Parmesan Patates Kızartması": { profile: "Yan ürün · patates", pairing: "Cola" },
  "Panna Cotta": { profile: "Tatlı · sütlü", pairing: "Americano" }
};

const products = (items: Array<[string, number | null]>): Product[] => items.map(([name, price], index) => ({
  id: `${name.toLocaleLowerCase("tr-TR").replace(/[^a-z0-9çğıöşü]+/gi, "-").replace(/^-|-$/g, "")}-${index}`,
  name,
  price,
  imageIndex: index,
  imageUrl: productImages[name],
  ...productKnowledge[name],
  ...(fireHandDetails[name] ?? {})
}));

// 25 Ağustos 2026 tarihinde Franco'nun QRall menüsünden aktarıldı.
export const menu: Category[] = [
  { id: "tatlilar", name: "Tatlılar", eyebrow: "Tatlı bir mola", icon: "TL", products: products([
    ["Dondurmalı Brownie",400],["Belçika Çikolatalı Brownie",400],["San Sebastian",360],
    ["Belçika Çikolatalı Profiterol",400],["Dubai Cup",360],["Nutella Cookies",360],
    ["Spoonful Cup",350],["Tiramisu",350],["Franco Snickers",350],["Çilekli Magnolia",350],["Lotus Küre",360]
  ])},
  { id: "soguk-kahveler", name: "Iced Espresso Bar", eyebrow: "Buz gibi espresso", icon: "IE", products: products([
    ["Ice Latte",220],["Ice Americano",220],["Ice Caramel Latte",240],["Ice Vanilla Latte",240],
    ["Ice White Chocolate Mocha",240],["Ice Mocha",240],["Ice Toffee Nut Latte",240],["Frappe",230]
  ])},
  { id: "dondurma", name: "Dondurma", eyebrow: "Franco gelato", icon: "GL", products: products([
    ["Sütlü",80],["Kakao",80],["Karamel",80],["Tahin",80],["İtalyan Karameli",80],["Bal Badem",80],
    ["Vişne",80],["Çilek",80],["Oreo",80],["Kavun",80],["Limon",80],["Yeşil Elma",80],
    ["İncir&Ceviz",80],["Lotus",80],["Böğürtlen",80],["Antep Fıstığı",80],["Nutella",80],["Belçika Çikolatası",80],["Portakallı",80]
  ])},
  { id: "summer-edition", name: "Kokteyl", eyebrow: "Franco imza içecekleri", icon: "KT", products: products([
    ["Franco Mango",250],["Rooibos Peach",250]
  ])},
  { id: "summer-edition-drinks", name: "Summer Edition", eyebrow: "Yaza özel içecekler", icon: "SE", products: products([
    ["Roma 66",250],["Cool lime 2.0",250],["Metropolitan",250],["Narsist",250]
  ])},
  { id: "sicak-kahveler", name: "Espresso Bar", eyebrow: "Espresso temelli kahveler", icon: "EB", products: products([
    ["Espresso",130],["Double Espresso",150],["Americano",180],["Latte",210],["Flat White",190],
    ["Cappuccino",210],["Cortado",180],["Vanilla Latte",220],["Caramel Latte",220],
    ["Toffienut Latte",220],["Mocha",220],["White Chocolate Mocha",220],["Affogato",230]
  ])},
  { id: "brew-bar", name: "Brew Bar", eyebrow: "Demleme kahveler", icon: "BR", products: products([
    ["Türk Kahvesi",150],["Double Türk Kahvesi",225],["Filtre Kahve",170],["Ice Filtre Kahve",170]
  ])},
  { id: "dondurmali-milkshake", name: "Milkshake", eyebrow: "Yoğun ve serin", icon: "MS", products: products([
    ["Çilek & Vanilya Milkshake",250],["Oreo & Çikolata Milkshake",250],
    ["Antepfıstıklı Milkshake",250],["Lotus Milkshake",250]
  ])},
  { id: "soguk-icecekler", name: "Soft", eyebrow: "Soğuk içecekler", icon: "SF", products: products([
    ["Cola",110],["Sprite",110],["Fanta",110],["Avşar",110],["Redbull",170],
    ["Su",60],["Sade Soda",80],["Sıkma Limon Soda",100],["Churchill",100]
  ])},
  { id: "sicak-icecekler", name: "Hot", eyebrow: "Sıcak içecekler", icon: "HT", products: products([
    ["Çay",70],["Fincan Çay",100]
  ])},
  { id: "fire-hand", name: "x Fire Hand", eyebrow: "Fire Hand mutfağından", icon: "FH", products: products([
    ["Fire Classic",null],
    ["Adrenalin Burger",null],
    ["Guaca Burger",null],
    ["Three Mushroom",null],
    ["Basic Child Burger",null],
    ["Crunchicken",null],
    ["Cafe de Pari Burger",null],
    ["Louisiana Chicken Taste",null],
    ["Smash Taste",null],
    ["Mozzarella Topları",null],
    ["Trüflü Parmesan Patates Kızartması",null],
    ["Panna Cotta",null]
  ])}
];
