export type ProductKnowledge = {
  description: string;
  profile: string;
  intensity: 1 | 2 | 3 | 4;
  pairing: string;
};

export const productKnowledge: Record<string, ProductKnowledge> = {
  "Sütlü": { description: "Sade süt karakteri, temiz bitiş ve yumuşak bir gövde.", profile: "Sütlü · yalın", intensity: 1, pairing: "Espresso" },
  "Kakao": { description: "Kakao tonlarının belirgin, kremamsı ve uzun kalan yorumu.", profile: "Kakao · yoğun", intensity: 4, pairing: "Vişne" },
  "Karamel": { description: "Yanık şeker çağrışımıyla yuvarlak ve sıcak bir tatlılık.", profile: "Karamel · kavruk", intensity: 3, pairing: "Americano" },
  "Tahin": { description: "Susamın kavruk, hafif tuzlu ve dolgun aromatik yapısı.", profile: "Susam · kavruk", intensity: 4, pairing: "Türk Kahvesi" },
  "İtalyan Karameli": { description: "Koyu karamel karakteri; daha derin, tok ve uzun bitişli.", profile: "Koyu karamel", intensity: 4, pairing: "Cortado" },
  "Bal Badem": { description: "Balın çiçeksi tatlılığı ile bademin narin kavrukluğu.", profile: "Bal · badem", intensity: 3, pairing: "Filtre Kahve" },
  "Vişne": { description: "Canlı ekşilik, koyu kırmızı meyve ve ferah bir bitiş.", profile: "Ekşi · kırmızı meyve", intensity: 3, pairing: "Belçika Çikolatalı Brownie" },
  "Çilek": { description: "Olgun kırmızı meyve hissi; parlak, tatlı ve ferah.", profile: "Meyvemsi · parlak", intensity: 2, pairing: "White Chocolate Mocha" },
  "Oreo": { description: "Kakaolu bisküvi karakteriyle kremamsı ve dokulu bir lezzet.", profile: "Bisküvi · kakao", intensity: 4, pairing: "Latte" },
  "Kavun": { description: "Olgun sarı meyve aroması ve hafif, serin bir kapanış.", profile: "Sarı meyve · hafif", intensity: 2, pairing: "Sade Soda" },
  "Limon": { description: "Narenciye asiditesiyle keskin, temiz ve ağız tazeleyen yapı.", profile: "Narenciye · canlı", intensity: 3, pairing: "Ice Americano" },
  "Yeşil Elma": { description: "Yeşil meyve ekşiliği, çıtır ferahlık ve kısa bitiş.", profile: "Ekşi · yeşil meyve", intensity: 3, pairing: "Rooibos Peach" },
  "İncir&Ceviz": { description: "Kuru meyve tatlılığı ile cevizin topraksı, tok karakteri.", profile: "Kuru meyve · ceviz", intensity: 4, pairing: "Türk Kahvesi" },
  "Lotus": { description: "Baharatlı bisküvi ve karamel çağrışımlı yoğun bir profil.", profile: "Bisküvi · baharat", intensity: 4, pairing: "Cappuccino" },
  "Böğürtlen": { description: "Koyu orman meyvesi, kontrollü ekşilik ve aromatik bitiş.", profile: "Orman meyvesi", intensity: 3, pairing: "White Chocolate Mocha" },
  "Antep Fıstığı": { description: "Belirgin fıstık aroması; yağlı, zarif ve kalıcı gövde.", profile: "Fıstık · kavruk", intensity: 4, pairing: "Espresso" },
  "Nutella": { description: "Fındık ve kakao kremasının sütlü, ipeksi ve yoğun gelato yorumu.", profile: "Fındık · sütlü kakao", intensity: 4, pairing: "Espresso" },
  "Belçika Çikolatası": { description: "Bitter kuvertür karakteri, belirgin kakao ve uzun, tok bir bitiş.", profile: "Bitter kakao · yoğun", intensity: 4, pairing: "Vişne" },

  "Affagato": { description: "Sıcak espresso ile soğuk gelatonun acı–tatlı ve sıcak–soğuk kontrastı.", profile: "Espresso · kremamsı", intensity: 4, pairing: "Sütlü" },
  "Ice Latte": { description: "Sütle yumuşayan espresso; serin, ipeksi ve dengeli.", profile: "Sütlü · serin", intensity: 2, pairing: "Çilekli Magnolia" },
  "Ice Vanilla Latte": { description: "Soğuk sütlü kahvede vanilyanın yumuşak, tatlı aroması.", profile: "Vanilya · sütlü", intensity: 2, pairing: "Belçika Çikolatalı Brownie" },
  "Ice Caramel Latte": { description: "Espresso, soğuk süt ve karamel ekseninde yuvarlak bir içim.", profile: "Karamel · sütlü", intensity: 3, pairing: "San Sabastian" },
  "Ice Toffee Nut Latte": { description: "Şekerleme ve kuruyemiş çağrışımlarıyla dolgun, serin kahve.", profile: "Toffee · kuruyemiş", intensity: 3, pairing: "Lotus Küre" },
  "Ice Americano": { description: "Espressonun kavruk karakterini koruyan temiz ve ferah içim.", profile: "Kavruk · temiz", intensity: 3, pairing: "Spoonful Cup" },
  "Ice Filtre Kahve": { description: "Filtre kahvenin aromatik yapısını serin ve daha hafif sunan yorum.", profile: "Aromatik · ferah", intensity: 2, pairing: "Nutella Cookies" },
  "Ice Mocha": { description: "Espresso ve çikolatanın serin, tatlı ve belirgin kakao dengesi.", profile: "Kakao · kahve", intensity: 4, pairing: "Çilekli Magnolia" },
  "Ice White Chocolate Mocha": { description: "Beyaz çikolata tatlılığını espressoyla dengeleyen kremamsı içim.", profile: "Beyaz çikolata", intensity: 3, pairing: "Böğürtlen" },
  "Frappe": { description: "Buzla harmanlanan kahvenin yoğun, serin ve köpüklü yorumu.", profile: "Kahve · buzlu", intensity: 3, pairing: "Lotus Küre" },

  "Double Türk Kahvesi": { description: "Türk kahvesinin gövdeli ve uzun bitişli, daha güçlü porsiyonu.", profile: "Yoğun · geleneksel", intensity: 4, pairing: "İncir&Ceviz" },
  "Türk Kahvesi": { description: "İnce öğütümün oluşturduğu yoğun gövde ve kalıcı kavruk bitiş.", profile: "Gövdeli · kavruk", intensity: 4, pairing: "San Sabastian" },
  "Latte": { description: "Espressonun bol sütle yumuşadığı, ipeksi ve sakin içim.", profile: "Sütlü · yumuşak", intensity: 2, pairing: "Nutella Cookies" },
  "Vanilla Latte": { description: "Sütlü espressoya eşlik eden narin vanilya ve tatlı aroma.", profile: "Vanilya · yumuşak", intensity: 2, pairing: "Belçika Çikolatalı Brownie" },
  "Caramel Latte": { description: "Karamelin sıcak tatlılığıyla yuvarlanan sütlü espresso.", profile: "Karamel · sıcak", intensity: 3, pairing: "Çilekli Magnolia" },
  "Toffienut Latte": { description: "Toffee ve kuruyemiş çağrışımlı, tok ve tatlı sütlü kahve.", profile: "Toffee · kavruk", intensity: 3, pairing: "Lotus Küre" },
  "Americano": { description: "Espressoya su eklenerek açılan, temiz ve uzun kahve karakteri.", profile: "Temiz · kavruk", intensity: 3, pairing: "Dondurmalı Brownie" },
  "Filtre Kahve": { description: "Berrak gövde ve daha uzun içimde açılan aromatik kahve profili.", profile: "Aromatik · berrak", intensity: 3, pairing: "Nutella Cookies" },
  "Espresso": { description: "Konsantre gövde, belirgin kavrukluk ve kısa ama kalıcı bitiş.", profile: "Konsantre · yoğun", intensity: 4, pairing: "Tiramisu" },
  "Double Espresso": { description: "Espresso karakterini daha uzun ve güçlü taşıyan çift porsiyon.", profile: "Güçlü · kalıcı", intensity: 4, pairing: "Dubai Cup" },
  "Mocha": { description: "Espresso, süt ve çikolatanın dolgun kakao eksenindeki buluşması.", profile: "Çikolata · espresso", intensity: 4, pairing: "Çilek" },
  "White Chocolate Mocha": { description: "Beyaz çikolatanın kremamsı tatlılığını kahveyle dengeleyen profil.", profile: "Kremamsı · tatlı", intensity: 3, pairing: "Böğürtlen" },
  "Cortado": { description: "Az miktarda sütle keskinliği yuvarlanan, espresso odaklı kısa içim.", profile: "Espresso · dengeli", intensity: 4, pairing: "İtalyan Karameli" },
  "Flat White": { description: "İnce süt dokusu içinde belirgin kalan espresso ve dolgun gövde.", profile: "Kadifemsi · güçlü", intensity: 3, pairing: "Franco Snickers" },
  "Cappuccino": { description: "Espresso, sıcak süt ve köpüğün dengeli, havadar birlikteliği.", profile: "Köpüklü · dengeli", intensity: 3, pairing: "Lotus Küre" },

  "Dondurmalı Brownie": { description: "Sıcak ve yoğun brownie karakterini soğuk gelato ferahlığı dengeler.", profile: "Sıcak–soğuk · kakao", intensity: 4, pairing: "Americano" },
  "Belçika Çikolatalı Brownie": { description: "Belirgin çikolata yoğunluğu, nemli doku ve uzun kakao bitişi.", profile: "Yoğun çikolata", intensity: 4, pairing: "Cortado" },
  "San Sabastian": { description: "Karamelize yüzey ile kremamsı peynir dokusunun tatlı–tuzlu dengesi.", profile: "Kremamsı · karamelize", intensity: 3, pairing: "Türk Kahvesi" },
  "Belçika Çikolatalı Profiretol": { description: "Profiterol dokusunu daha koyu ve baskın çikolata karakteri tamamlar.", profile: "Koyu kakao · krema", intensity: 4, pairing: "Espresso" },
  "Dubai Cup": { description: "Çikolata ve fıstık ekseninde yoğun, kavruk ve dokulu bir kup.", profile: "Çikolata · fıstık", intensity: 4, pairing: "Double Espresso" },
  "Nutella Cookies": { description: "Kalın, yumuşak pişmiş cookie diliminde akışkan fındık-kakao dolgusu ve sütlü çikolata parçaları.", profile: "Fındık-kakao · yumuşak cookie", intensity: 4, pairing: "Filtre Kahve" },
  "Spoonful Cup": { description: "Kaşıkla açılan yumuşak katmanlarıyla kremamsı ve dolgun bir kup.", profile: "Kremamsı · katmanlı", intensity: 3, pairing: "Ice Americano" },
  "Tiramisu": { description: "Kahve, kakao ve kremamsı yapının acı–tatlı dengesine dayanan İtalyan klasiği.", profile: "Kahve · kakao", intensity: 3, pairing: "Espresso" },
  "Franco Snickers": { description: "El yapımı uzun bar formunda, çikolata kaplama ve beyaz çikolata çizgileriyle yoğun bir tatlı.", profile: "Çikolata · yoğun bar", intensity: 4, pairing: "Flat White" },
  "Çilekli Magnolia": { description: "Sütlü krema hissini çileğin parlak meyvemsi karakteri hafifletir.", profile: "Çilek · sütlü", intensity: 2, pairing: "Ice Latte" },
  "Lotus Küre": { description: "Karamelize bisküvi ve baharat çağrışımıyla çıtır, yoğun bir tatlı.", profile: "Bisküvi · karamel", intensity: 4, pairing: "Cappuccino" },

  "Lotus Milkshake": { description: "Karamelize bisküvi karakterinde yoğun ve kremamsı soğuk içim.", profile: "Lotus · kremamsı", intensity: 4, pairing: "Espresso" },
  "Antepfıstıklı Milkshake": { description: "Antep fıstığının kavruk yapısını sütlü gövdeyle taşıyan yoğun shake.", profile: "Fıstık · sütlü", intensity: 4, pairing: "Belçika Çikolatalı Brownie" },
  "Oreo & Çikolata Milkshake": { description: "Kakaolu bisküvi ve çikolatanın dokulu, güçlü ve serin yorumu.", profile: "Bisküvi · kakao", intensity: 4, pairing: "Çilek" },
  "Çilek & Vanilya Milkshake": { description: "Çileğin canlı meyvesiyle vanilyanın yumuşak tatlılığını dengeler.", profile: "Çilek · vanilya", intensity: 3, pairing: "Americano" },
  "Franco Mango": { description: "Tropikal mango aromasıyla parlak, meyvemsi ve serinletici.", profile: "Tropikal · canlı", intensity: 2, pairing: "Antep Fıstığı" },
  "Rooibos Peach": { description: "Rooibosun yumuşak bitkisel yapısı ile şeftalinin meyvemsi ferahlığı.", profile: "Şeftali · bitkisel", intensity: 2, pairing: "Çilekli Magnolia" },
  "Fincan Çay": { description: "Daha uzun molalar için sıcak, sade ve aromatik çay sunumu.", profile: "Sade · sıcak", intensity: 2, pairing: "San Sabastian" },
  "Çay": { description: "Temiz ve sıcak içimiyle tatlı aralarını hafifleten klasik.", profile: "Klasik · hafif", intensity: 2, pairing: "Nutella Cookies" },
  "Sıkma Limon Soda": { description: "Taze narenciye asiditesi ve sodanın canlı mineralli ferahlığı.", profile: "Narenciye · ferah", intensity: 2, pairing: "Lotus Küre" },
  "Churchill": { description: "Limon ve tuz ekseninde keskin, canlı ve ferahlatıcı soda yorumu.", profile: "Tuzlu · narenciye", intensity: 3, pairing: "Kavun" },
  "Su": { description: "Nötr ve temiz içimiyle yoğun tatlar arasında damağı yeniler.", profile: "Sade · nötr", intensity: 1, pairing: "Double Espresso" },
  "Sade Soda": { description: "Canlı kabarcık yapısıyla damağı temizleyen ferah bir eşlikçi.", profile: "Mineralli · ferah", intensity: 1, pairing: "Limon" },
  "Redbull": { description: "Tatlı, gazlı ve belirgin aromatik karaktere sahip enerji içeceği.", profile: "Enerjik · gazlı", intensity: 3, pairing: "Kavun" },
  "Avşar": { description: "Meyvemsi karakteri ve kabarcıklı yapısıyla serin bir maden suyu seçeneği.", profile: "Meyvemsi · mineralli", intensity: 2, pairing: "Limon" },
  "Fanta": { description: "Portakal karakterli, tatlı ve canlı gazlı soğuk içecek.", profile: "Portakal · gazlı", intensity: 2, pairing: "Kakao" },
  "Sprite": { description: "Limon–lime karakteriyle hafif, canlı ve ferah gazlı içecek.", profile: "Limon–lime · ferah", intensity: 2, pairing: "Çilek" },
  "Cola": { description: "Karamel ve baharat çağrışımlı, belirgin gazlı içecek profili.", profile: "Karamel · baharat", intensity: 3, pairing: "Sütlü" }
};

type GelatoFamily = "dairy" | "cocoa" | "caramel" | "nut" | "red-fruit" | "citrus" | "fresh-fruit" | "biscuit";
type GelatoProfile = { family: GelatoFamily; sweet: number; acid: number; rich: number; role: string };

const gelatoProfiles: Record<string, GelatoProfile> = {
  "Sütlü": { family: "dairy", sweet: 2, acid: 0, rich: 2, role: "sade süt gövdesi" },
  "Kakao": { family: "cocoa", sweet: 2, acid: 0, rich: 4, role: "derin kakao omurgası" },
  "Karamel": { family: "caramel", sweet: 4, acid: 0, rich: 3, role: "yuvarlak karamel tatlılığı" },
  "Tahin": { family: "nut", sweet: 1, acid: 0, rich: 4, role: "kavrulmuş susam derinliği" },
  "İtalyan Karameli": { family: "caramel", sweet: 3, acid: 0, rich: 4, role: "koyu karamel bitişi" },
  "Bal Badem": { family: "nut", sweet: 4, acid: 0, rich: 3, role: "bal ve badem yumuşaklığı" },
  "Vişne": { family: "red-fruit", sweet: 2, acid: 4, rich: 1, role: "canlı vişne ekşiliği" },
  "Çilek": { family: "red-fruit", sweet: 3, acid: 2, rich: 1, role: "parlak çilek meyvesi" },
  "Oreo": { family: "biscuit", sweet: 4, acid: 0, rich: 4, role: "kakaolu bisküvi dokusu" },
  "Kavun": { family: "fresh-fruit", sweet: 3, acid: 1, rich: 1, role: "hafif kavun ferahlığı" },
  "Limon": { family: "citrus", sweet: 1, acid: 4, rich: 0, role: "keskin narenciye canlılığı" },
  "Yeşil Elma": { family: "fresh-fruit", sweet: 1, acid: 4, rich: 0, role: "çıtır yeşil elma ekşiliği" },
  "İncir&Ceviz": { family: "nut", sweet: 3, acid: 0, rich: 4, role: "kuru meyve ve ceviz gövdesi" },
  "Lotus": { family: "biscuit", sweet: 4, acid: 0, rich: 4, role: "baharatlı bisküvi yoğunluğu" },
  "Böğürtlen": { family: "red-fruit", sweet: 2, acid: 3, rich: 2, role: "koyu orman meyvesi" },
  "Antep Fıstığı": { family: "nut", sweet: 2, acid: 0, rich: 4, role: "zarif fıstık kavrukluğu" },
  "Nutella": { family: "nut", sweet: 4, acid: 0, rich: 4, role: "fındık ve sütlü kakao kreması" },
  "Belçika Çikolatası": { family: "cocoa", sweet: 2, acid: 0, rich: 4, role: "bitter kuvertür ve derin kakao" }
};

const affinities: Record<string, number> = {
  "cocoa:red-fruit": 4, "cocoa:nut": 4, "cocoa:caramel": 3, "cocoa:dairy": 3, "cocoa:citrus": 2,
  "nut:caramel": 4, "nut:red-fruit": 3, "nut:dairy": 3, "nut:fresh-fruit": 2, "nut:biscuit": 3,
  "dairy:red-fruit": 4, "dairy:citrus": 3, "dairy:fresh-fruit": 3, "dairy:biscuit": 3, "dairy:caramel": 3,
  "caramel:red-fruit": 3, "caramel:fresh-fruit": 2, "caramel:biscuit": 3,
  "red-fruit:biscuit": 3, "red-fruit:citrus": 2, "red-fruit:fresh-fruit": 3,
  "citrus:fresh-fruit": 4, "citrus:biscuit": 1, "fresh-fruit:biscuit": 2
};

const affinity = (a: GelatoFamily, b: GelatoFamily) => {
  if (a === b) return a === "red-fruit" || a === "fresh-fruit" ? 3 : 2;
  return affinities[`${a}:${b}`] ?? affinities[`${b}:${a}`] ?? 1;
};

export function evaluateGelato(flavors: string[]) {
  const profiles = flavors.map(flavor => gelatoProfiles[flavor]).filter(Boolean);
  if (profiles.length < 2) return null;
  if (new Set(flavors).size === 1) return { title: "Tek tat, net karakter", detail: `${profiles[0].role}, ${profiles.length} top boyunca kesintisiz ve belirgin bir profil sunuyor.` };
  let score = 0;
  let pairCount = 0;
  for (let i = 0; i < profiles.length; i++) for (let j = i + 1; j < profiles.length; j++) { score += affinity(profiles[i].family, profiles[j].family); pairCount += 1; }
  score = score * 3 / pairCount;
  const totalSweet = profiles.reduce((sum, profile) => sum + profile.sweet, 0);
  const totalAcid = profiles.reduce((sum, profile) => sum + profile.acid, 0);
  const totalRich = profiles.reduce((sum, profile) => sum + profile.rich, 0);
  const families = new Set(profiles.map(profile => profile.family));
  if (totalSweet >= profiles.length * 3.7 && totalRich >= profiles.length * 3.5) score -= 2;
  if (totalAcid >= 6 && totalRich >= 5) score += 2;
  if (families.size === profiles.length) score += 1;
  const title = score >= 11 ? "Usta işi kontrast" : score >= 8 ? "Katmanlı ve rafine" : score >= 6 ? "Dengeli uyum" : "Cesur bir seçim";
  const bright = profiles.find(profile => profile.acid >= 3);
  const anchor = [...profiles].sort((a, b) => b.rich - a.rich)[0];
  const bridge = profiles.length === 2 ? "İki aroma birbirini net biçimde tamamlıyor." : profiles.length === 3 ? "Üçüncü tat geçişi yumuşatıyor." : "Diğer iki tat geçişi katmanlandırıyor.";
  const detail = bright && anchor !== bright
    ? `${bright.role}, ${anchor.role} karşısında damağı tazeliyor. ${bridge}`
    : totalSweet >= profiles.length * 3.5
      ? `${anchor.role} merkezde. Tatlılık yüksek olduğu için sade kahveyle daha dengeli ilerler.`
      : `${anchor.role} birleşimin omurgası; diğer tatlar aromayı katmanlandırıyor.`;
  return { title, detail };
}

export const journeyChoices: Record<string, string> = {
  "fresh-cold-light": "Limon", "fresh-cold-sweet": "Franco Mango", "fresh-cold-balanced": "Rooibos Peach",
  "happy-cold-light": "Ice Latte", "happy-cold-sweet": "Çilek & Vanilya Milkshake", "happy-cold-balanced": "Ice Vanilla Latte",
  "energy-cold-light": "Ice Americano", "energy-cold-sweet": "Frappe", "energy-cold-balanced": "Ice Filtre Kahve",
  "intense-cold-light": "Ice Americano", "intense-cold-sweet": "Ice Mocha", "intense-cold-balanced": "Affagato",
  "fresh-hot-light": "Filtre Kahve", "fresh-hot-sweet": "Vanilla Latte", "fresh-hot-balanced": "Cappuccino",
  "happy-hot-light": "Latte", "happy-hot-sweet": "White Chocolate Mocha", "happy-hot-balanced": "Flat White",
  "energy-hot-light": "Americano", "energy-hot-sweet": "Caramel Latte", "energy-hot-balanced": "Cortado",
  "intense-hot-light": "Double Espresso", "intense-hot-sweet": "Mocha", "intense-hot-balanced": "Türk Kahvesi"
};

export const dailySelections = {
  morning: [
    { title: "Güne dengeli başla", copy: "İpeksi süt dokusu ve belirgin espressoyla sakin bir başlangıç.", product: "Flat White" },
    { title: "Sabahın temiz fincanı", copy: "Aromatik ve berrak bir başlangıç için filtre kahve.", product: "Filtre Kahve" },
    { title: "Kısa ve güçlü", copy: "Konsantre kahve karakteriyle ritmi hızlandır.", product: "Espresso" }
  ],
  afternoon: [
    { title: "Tatlı bir kontrast", copy: "Kremamsı cheesecake dokusunu Türk kahvesinin kavrukluğu dengeler.", product: "San Sabastian" },
    { title: "Serin bir ara", copy: "Mango ferahlığı ve tropikal aromayla öğleden sonrayı hafiflet.", product: "Franco Mango" },
    { title: "Kahve ve kakao molası", copy: "Mocha’nın kakao gövdesiyle dolgun bir ara.", product: "Ice Mocha" }
  ],
  evening: [
    { title: "Akşamın İtalyan klasiği", copy: "Kahve, kakao ve kremamsı katmanlarla dengeli bir kapanış.", product: "Tiramisu" },
    { title: "Yoğun ama dengeli", copy: "Belçika çikolatasının gövdesini kısa bir espresso tamamlar.", product: "Belçika Çikolatalı Brownie" },
    { title: "Kavruktan tatlıya", copy: "Fıstık ve karamel karakterini Flat White’ın espresso gövdesi dengeler.", product: "Franco Snickers" }
  ]
};
