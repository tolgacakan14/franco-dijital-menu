"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { menu, type Category, type Product } from "@/data/menu";

const money = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 });
const sprites: Record<string, { src: string; columns: number; rows: number }> = {
  dondurma: { src: "/menu-gelato-sprite-v1.png", columns: 4, rows: 4 },
  "soguk-kahveler": { src: "/menu-iced-coffee-sprite-v1.png", columns: 4, rows: 3 },
  "dondurmali-milkshake": { src: "/menu-milkshake-sprite-v1.png", columns: 2, rows: 2 },
  tatlilar: { src: "/menu-dessert-sprite-v1.png", columns: 4, rows: 3 }
};
type SceneProduct = { product: Product; category: Category; index: number };
type Panel = "journey" | "composer" | "passport" | null;
const journeyQuestions = [
  { title: "Bugün nasıl hissediyorsun?", key: "mood", options: [["Ferah", "fresh"], ["Keyifli", "happy"], ["Enerjik", "energy"], ["Yoğun", "intense"]] },
  { title: "Nasıl olsun?", key: "temperature", options: [["Buz gibi", "cold"], ["Sıcacık", "hot"]] },
  { title: "Son dokunuş?", key: "taste", options: [["Hafif", "light"], ["Tatlı", "sweet"], ["Dengeli", "balanced"]] }
] as const;

function artStyle(category: Category, index: number) {
  const sprite = sprites[category.id];
  if (!sprite) return undefined;
  return { backgroundImage: `url(${sprite.src})`, backgroundSize: `${sprite.columns * 100}% ${sprite.rows * 100}%`, backgroundPosition: `${(index % sprite.columns) * 100 / (sprite.columns - 1)}% ${Math.floor(index / sprite.columns) * 100 / (sprite.rows - 1)}%` };
}
function findProduct(name: string): SceneProduct {
  for (const category of menu) { const index = category.products.findIndex(product => product.name === name); if (index >= 0) return { product: category.products[index], category, index }; }
  return { product: menu[0].products[0], category: menu[0], index: 0 };
}

function scoopStyle(flavor: string, index: number): CSSProperties {
  const name = flavor.toLocaleLowerCase("tr-TR");
  let palette = ["#f3dfc4", "#d9b98e", "#fff3dc"];
  if (name.includes("kakao") || name.includes("oreo")) palette = ["#76503f", "#3d2925", "#b98362"];
  else if (name.includes("çilek")) palette = ["#eaa2a0", "#bd5f68", "#ffd3c8"];
  else if (name.includes("vişne")) palette = ["#b95967", "#713344", "#e99696"];
  else if (name.includes("böğürtlen")) palette = ["#75506c", "#4a3149", "#b78aa8"];
  else if (name.includes("fıstık") || name.includes("elma")) palette = ["#b8bd83", "#768252", "#e0d7a5"];
  else if (name.includes("limon")) palette = ["#e9d77a", "#b9a63e", "#fff0a6"];
  else if (name.includes("kavun")) palette = ["#e7bd72", "#bc8548", "#f5dca0"];
  else if (name.includes("karamel") || name.includes("lotus")) palette = ["#c78b58", "#8e5838", "#edbd7e"];
  else if (name.includes("tahin")) palette = ["#d8c09d", "#aa8764", "#f2dfbd"];
  else if (name.includes("incir") || name.includes("ceviz")) palette = ["#b69783", "#71564c", "#d9bd9e"];
  else if (name.includes("badem")) palette = ["#dfc698", "#ad8557", "#f4dfb4"];
  return { "--scoop-main": palette[0], "--scoop-deep": palette[1], "--scoop-light": palette[2], "--scoop-x": `${index % 2 ? 6 : -5}px`, "--scoop-tilt": `${index % 2 ? 3 : -3}deg`, "--scoop-level": index } as CSSProperties;
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [scene, setScene] = useState<SceneProduct | null>(null);
  const [panel, setPanel] = useState<Panel>(null);
  const [journeyStep, setJourneyStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [journeyResult, setJourneyResult] = useState<SceneProduct | null>(null);
  const [scoops, setScoops] = useState<string[]>([]);
  const [vessel, setVessel] = useState<"cone" | "cup">("cone");
  const [servingTurn, setServingTurn] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hour, setHour] = useState(14);
  const active = menu[activeIndex];
  const sprite = sprites[active.id];

  useEffect(() => { setHour(new Date().getHours()); try { setFavorites(JSON.parse(localStorage.getItem("franco-passport") || "[]")); } catch { setFavorites([]); } }, []);
  useEffect(() => { localStorage.setItem("franco-passport", JSON.stringify(favorites)); }, [favorites]);

  const rhythm = hour < 12 ? { eyebrow: "Günün ilk ritüeli", title: "Güne Franco ile başla", copy: "Taze kahve, sakin bir başlangıç.", product: "Latte" } : hour < 18 ? { eyebrow: "Öğleden sonra", title: "Tatlı bir mola zamanı", copy: "Bir kahve, bir gelato; çünkü bir lezzet asla yetmez.", product: "San Sabastian" } : { eyebrow: "Akşam seçkisi", title: "Günü tatlı bitir", copy: "Yoğun kahve ve Franco tatlıları şimdi sahnede.", product: "Tiramisu" };
  const results = useMemo(() => { const q = query.trim().toLocaleLowerCase("tr-TR"); if (!q) return []; return menu.flatMap(category => category.products.map((product, index) => ({ product, category, index })).filter(item => item.product.name.toLocaleLowerCase("tr-TR").includes(q))); }, [query]);

  const selectCategory = (index: number) => {
    const update = () => { setActiveIndex(index); setSearching(false); setQuery(""); };
    const doc = document as Document & { startViewTransition?: (callback: () => void) => void };
    if (doc.startViewTransition) doc.startViewTransition(update); else update();
    document.querySelector(".menu-stage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const openPanel = (next: Panel) => { setPanel(next); setScene(null); if (next === "journey") { setJourneyStep(0); setAnswers({}); setJourneyResult(null); } };
  const answerJourney = (key: string, value: string) => {
    const nextAnswers = { ...answers, [key]: value }; setAnswers(nextAnswers);
    if (journeyStep < journeyQuestions.length - 1) return setJourneyStep(step => step + 1);
    const picked = nextAnswers.taste === "sweet" ? (nextAnswers.temperature === "cold" ? "Çilek & Vanilya Milkshake" : "San Sabastian") : nextAnswers.temperature === "hot" ? (nextAnswers.mood === "intense" ? "Double Espresso" : "Latte") : (nextAnswers.mood === "fresh" ? "Franco Mango" : "Ice Latte");
    setJourneyResult(findProduct(picked));
  };
  const pairingFor = (item: SceneProduct) => item.category.id === "tatlilar" ? findProduct("Latte") : item.category.id.includes("kahve") ? findProduct("San Sabastian") : item.category.id === "dondurma" ? findProduct("Ice Latte") : findProduct("Tiramisu");
  const toggleFavorite = (id: string) => setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const selectScoop = (flavor: string) => {
    setScoops(current => current.includes(flavor) ? current.filter(name => name !== flavor) : current.length < 3 ? [...current, flavor] : current);
    setServingTurn(turn => turn + 1);
  };
  const favoriteProducts = menu.flatMap(category => category.products.map((product, index) => ({ product, category, index }))).filter(item => favorites.includes(item.product.id));
  const gelato = menu.find(category => category.id === "dondurma")!;

  return <main className="site-shell">
    <header className="masthead"><div className="hero-lockup"><h1><img className="brand-wordmark" src="/franco-wordmark-v3.png" alt="Franco" width="1697" height="927" /></h1><p className="hero-subline" aria-label="Coffee Gelato"><span>COFFEE</span><span>GELATO</span></p><span className="hero-divider" aria-hidden="true" /><p className="hero-slogan">BECAUSE ONE TREAT<br />IS NEVER ENOUGH</p></div></header>

    <section className="rhythm-card" aria-label="Günün Franco seçkisi"><div><small>{rhythm.eyebrow}</small><h2>{rhythm.title}</h2><p>{rhythm.copy}</p></div><button onClick={() => setScene(findProduct(rhythm.product))}>Seçkiyi gör <span>↗</span></button></section>
    <section className="experience-strip" aria-label="Franco deneyimleri">
      <button data-mark="F" onClick={() => openPanel("journey")}><small>01 · Sana özel</small><strong>Lezzet Yolculuğu</strong><span>Üç dokunuşta Franco seçimin</span></button>
      <button data-mark="G" onClick={() => openPanel("composer")}><small>02 · Kendi lezzetin</small><strong>Dondurmanı Oluştur</strong><span>Lezzetlerini seç, uyumunu yarat</span></button>
      <button data-mark="P" onClick={() => openPanel("passport")}><small>03 · Senin Franco’n</small><strong>Franco Passport</strong><span>{favorites.length ? `${favorites.length} favorin kayıtlı` : "Favorilerini yanında tut"}</span></button>
    </section>

    <nav className="category-rail" aria-label="Menü kategorileri"><div className="rail-head"><p className="rail-label">Ne arzu edersiniz?</p><button className="search-trigger" onClick={() => setSearching(true)} aria-label="Menüde ara">Ara <span aria-hidden="true">↗</span></button></div><div className="rail-track">{menu.map((category, index) => <button key={category.id} className={index === activeIndex ? "active" : ""} onClick={() => selectCategory(index)} aria-current={index === activeIndex ? "page" : undefined}><small>{String(index + 1).padStart(2, "0")}</small><span>{category.name}</span></button>)}</div></nav>

    <section className="menu-stage" key={active.id}><div className="chapter-head"><span className="chapter-number">{String(activeIndex + 1).padStart(2, "0")}</span><div><p>{active.eyebrow}</p><h2>{active.name}</h2></div><span className="chapter-mark" aria-hidden="true">{active.icon}</span></div><div className="menu-board">{active.products.map((product, index) => <article className={`menu-line art-style-${(index + activeIndex) % 4}`} key={product.id}><button className="product-open" onClick={() => setScene({ product, category: active, index })} aria-label={`${product.name} detayını aç`}><div className={`product-art ${sprite ? "has-photo" : ""}`} style={artStyle(active, index)} aria-hidden="true">{!sprite && <span>{product.name.slice(0, 2).toLocaleUpperCase("tr-TR")}</span>}{!sprite && <small>FRANCO · {String(index + 1).padStart(2, "0")}</small>}{favorites.includes(product.id) && <b className="favorite-dot">♥</b>}</div><div className="product-info"><h3>{product.name}</h3><p>{active.eyebrow}</p><strong>{money.format(product.price)}</strong></div></button></article>)}</div><button className="next-chapter" onClick={() => selectCategory((activeIndex + 1) % menu.length)}><span>Sıradaki bölüm</span><strong>{menu[(activeIndex + 1) % menu.length].name}</strong><b aria-hidden="true">→</b></button></section>

    <aside className="marquee" aria-label="Franco sloganı"><div>COFFEE <span>✦</span> GELATO <span>✦</span> GOOD TIMES <span>✦</span> FRANCO <span>✦</span> COFFEE <span>✦</span> GELATO <span>✦</span></div></aside>
    <footer><div className="footer-seal"><span>F</span><small>EST. · 2024</small></div><div><p>Franco Coffee &amp; Gelato</p><small>Fiyatlara KDV dahildir. Alerjen bilgileri için ekibimize danışabilirsiniz.</small></div><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></footer>

    {scene && <ProductScene item={scene} pair={pairingFor(scene)} favorites={favorites} close={() => setScene(null)} select={setScene} toggleFavorite={toggleFavorite} />}
    {panel === "journey" && <section className="experience-room journey-room" role="dialog" aria-modal="true" aria-label="Franco Lezzet Yolculuğu"><RoomNav title="FRANCO · LEZZET YOLCULUĞU" close={() => setPanel(null)} />{!journeyResult ? <div className="journey-step"><small>0{journeyStep + 1} / 03</small><div className="journey-progress"><i style={{ width: `${(journeyStep + 1) * 33.333}%` }} /></div><h2>{journeyQuestions[journeyStep].title}</h2><div className="journey-options">{journeyQuestions[journeyStep].options.map(([label, value]) => <button key={value} onClick={() => answerJourney(journeyQuestions[journeyStep].key, value)}>{label}<span>→</span></button>)}</div></div> : <div className="journey-result"><small>Franco senin için seçti</small><h2>{journeyResult.product.name}</h2><p>Bugünkü ritmine ve damak zevkine en yakın Franco seçimi.</p><strong>{money.format(journeyResult.product.price)}</strong><button onClick={() => { setPanel(null); setScene(journeyResult); }}>Ürünü sahneye al →</button><button className="text-button" onClick={() => { setJourneyStep(0); setAnswers({}); setJourneyResult(null); }}>Baştan dene</button></div>}</section>}
    {panel === "composer" && <section className="experience-room composer-room" role="dialog" aria-modal="true" aria-label="Dondurmanı Oluştur">
      <RoomNav title="FRANCO · DONDURMANI OLUŞTUR" close={() => setPanel(null)} />
      <div className="composer-layout">
        <div className="gelato-preview">
          <small>SENİN FRANCO’N</small>
          <div className="vessel-switch" aria-label="Sunum şeklini seç">
            <button className={vessel === "cone" ? "active" : ""} onClick={() => setVessel("cone")}>Külah</button>
            <button className={vessel === "cup" ? "active" : ""} onClick={() => setVessel("cup")}>Kase</button>
          </div>
          <div className={`scoop-stack ${vessel} turn-${servingTurn % 2}`} aria-live="polite">
            {scoops.map((flavor, index) => <i className="graphic-scoop" key={`${flavor}-${index}`} style={scoopStyle(flavor, index)} aria-label={flavor}><span>{flavor}</span></i>)}
            <button className={`serving-piece ${vessel}`} onClick={() => setServingTurn(turn => turn + 1)} aria-label={`${vessel === "cone" ? "Külahı" : "Kaseyi"} döndür`}><em>Franco</em></button>
          </div>
          <span className="tap-hint">Dokun ve çevir</span>
          <p>{scoops.length ? scoops.join(" + ") : "İlk lezzetini seç"}</p>
          <strong>{money.format(scoops.length * 80)}</strong>
        </div>
        <div className="flavor-picker">
          <div className="composer-status"><small>{scoops.length} / 3 LEZZET SEÇİLDİ</small>{scoops.length > 0 && <button onClick={() => setScoops([])}>Temizle</button>}</div>
          <h2>Dondurmanı oluştur</h2>
          <div className="flavor-grid">{gelato.products.map(product => { const selected = scoops.includes(product.name); return <button key={product.id} className={selected ? "selected" : ""} aria-pressed={selected} disabled={!selected && scoops.length >= 3} onClick={() => selectScoop(product.name)}>{product.name}<span>{selected ? "✓" : "+"}</span></button>; })}</div>
          {scoops.length === 3 && <p className="limit-note">Üç lezzet tamamlandı. Yeni bir tat için seçtiklerinden birini çıkar.</p>}
          {scoops.length > 1 && <p className="composer-note">Franco uyumu: <b>{scoops.includes("Antep Fıstığı") && scoops.includes("Kakao") ? "Yoğun ve karakterli" : "Dengeli ve eğlenceli"}</b></p>}
        </div>
      </div>
    </section>}
    {panel === "passport" && <section className="experience-room passport-room" role="dialog" aria-modal="true" aria-label="Franco Passport"><RoomNav title="FRANCO · PASSPORT" close={() => setPanel(null)} /><div className="passport-head"><small>Bu cihazda sana özel</small><h2>Senin Franco’n</h2><p>Beğendiğin tatlar burada kalır. Üyelik yok, form yok.</p></div><div className="passport-list">{favoriteProducts.length ? favoriteProducts.map(item => <button key={item.product.id} onClick={() => { setPanel(null); setScene(item); }}><span>{item.category.name}</span><strong>{item.product.name}</strong><b>{money.format(item.product.price)} →</b></button>) : <p>Henüz bir favorin yok.<br />Ürün sahnesindeki kalbe dokunarak başlayabilirsin.</p>}</div></section>}
    {searching && <section className="search-room" role="dialog" aria-modal="true" aria-label="Menüde ara"><div className="search-room-top"><span>FRANCO / MENÜ ARAMA</span><button onClick={() => { setSearching(false); setQuery(""); }}>Kapat ×</button></div><label htmlFor="menu-search">Canın ne çekiyor?</label><input id="menu-search" autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="Latte, çilek, brownie…" /><div className="search-results">{query && !results.length && <p className="no-result">Bir sonuç bulamadık. Başka bir şey deneyin.</p>}{results.map(item => <button key={`${item.category.id}-${item.product.id}`} onClick={() => { setSearching(false); setScene(item); }}><span>{item.category.name}</span><strong>{item.product.name}</strong><b>{money.format(item.product.price)}</b></button>)}</div></section>}
  </main>;
}

function RoomNav({ title, close }: { title: string; close: () => void }) { return <div className="room-nav"><span>{title}</span><button onClick={close}>Kapat ×</button></div>; }

function ProductScene({ item, pair, favorites, close, select, toggleFavorite }: { item: SceneProduct; pair: SceneProduct; favorites: string[]; close: () => void; select: (item: SceneProduct) => void; toggleFavorite: (id: string) => void }) {
  return <section className="product-scene" role="dialog" aria-modal="true" aria-label={`${item.product.name} ürün detayı`}><button className="scene-close" onClick={close} aria-label="Ürün detayını kapat">Kapat ×</button><div className={`scene-art ${sprites[item.category.id] ? "has-photo" : ""}`} style={artStyle(item.category, item.index)}><span>{!sprites[item.category.id] && item.product.name.slice(0, 2)}</span></div><div className="scene-copy"><small>{item.category.name} · Franco seçkisi</small><h2>{item.product.name}</h2><p>{item.category.eyebrow}. Özenle hazırlanır, en iyi anında servis edilir.</p><div className="taste-notes"><span>Tat profili <b>{item.category.id.includes("kahve") ? "Dengeli" : "İpeksi"}</b></span><span>Yoğunluk <b>{item.category.id === "tatlilar" ? "●●●○" : "●●○○"}</b></span></div><strong className="scene-price">{money.format(item.product.price)}</strong><div className="scene-actions"><button onClick={() => toggleFavorite(item.product.id)}>{favorites.includes(item.product.id) ? "♥ Passport’ta" : "♡ Passport’a ekle"}</button><button onClick={() => navigator.share?.({ title: item.product.name, text: `Franco’da ${item.product.name}`, url: location.href })}>Paylaş ↗</button></div></div><button className="pair-card" onClick={() => select(pair)}><small>Because one treat is never enough</small><span>Bununla iyi gider</span><strong>{pair.product.name}</strong><b>+ {money.format(pair.product.price)}</b></button></section>;
}
