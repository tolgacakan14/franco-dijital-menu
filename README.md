# Franco Coffee & Gelato — Dijital QR Menü

Mobil öncelikli, hızlı ve kolay güncellenebilir dijital menü. Menü içeriği backend olmadan `data/menu.ts` dosyasından yönetilir.

## Özellikler

- Krem, bordo ve altın Franco görsel dili; üst/alt dama deseni
- Mobil öncelikli responsive arayüz
- Kategori çubuğu, menü arama ve ürün detay paneli
- Klavye ve ekran okuyucu dostu temel erişilebilirlik
- SEO, sitemap, robots.txt ve PWA manifest metaları
- Harici görsel/font bağımlılığı olmadan hızlı ilk yükleme
- Vercel uyumlu Next.js projesi

> Bu repodaki ürünler ve fiyatlar örnek içeriktir. Yayından önce işletmenin güncel menüsüyle doğrulanmalıdır.

## Menüyü güncelleme

Tüm kategoriler ve ürünler `data/menu.ts` içindedir. Yeni ürün eklemek için ilgili kategorinin `products` listesine şu yapıda bir kayıt ekleyin:

```ts
{
  id: "benzersiz-kisa-ad",
  name: "Ürün adı",
  description: "Kısa ürün açıklaması.",
  price: 150,
  badge: "Yeni",              // isteğe bağlı
  tags: ["Vejetaryen"]       // isteğe bağlı
}
```

`id` değerleri benzersiz olmalı, fiyat yalnızca sayı olarak yazılmalıdır. Değişiklikten sonra siteyi yeniden deploy edin.

## Local çalıştırma

Node.js 20.9 veya daha yeni bir sürüm gerekir.

```bash
npm install
npm run dev
```

Ardından `http://localhost:3000` adresini açın. Üretim kontrolü için:

```bash
npm run build
npm start
```

## Vercel'e deploy

1. Projeyi bir GitHub reposuna gönderin.
2. Vercel'de **Add New → Project** ile repoyu içe aktarın.
3. Framework otomatik olarak **Next.js** algılanır; build ayarlarını değiştirmeniz gerekmez.
4. İsteğe bağlı olarak `NEXT_PUBLIC_SITE_URL` environment variable değerini kalıcı menü adresinize (`https://menu.francocoffee.com`) ayarlayın.
5. Deploy edin. GitHub'a sonraki her gönderim otomatik olarak yeni deploy oluşturur.

Vercel CLI ile alternatif:

```bash
npm i -g vercel
vercel
vercel --prod
```

## Kalıcı domain önerisi

En sağlam kurgu işletmenin kontrol ettiği bir alan adıdır: örneğin `menu.francocoffee.com`. DNS'te bu alt alan adını Vercel projesine bağlayın ve **fiziksel QR'ı doğrudan bu kalıcı adrese basın**. İleride Vercel'den başka bir sağlayıcıya geçilirse yalnızca DNS hedefi değişir; masa ve ambalajlardaki QR'lar çalışmaya devam eder.

Domain her yıl yenilenmeli ve kayıt hesabının erişimi işletme adına güvenli biçimde saklanmalıdır. Mümkünse otomatik yenileme ve iki faktörlü kimlik doğrulama açılmalıdır.

## Mevcut QRall QR'ını yeni siteye bağlama

Mevcut fiziksel QR, `qrall.co` adresini içeriyorsa QR görselinin içindeki hedef sonradan değiştirilemez. Şu seçenekler vardır:

1. **QRall panelinde hedef URL / redirect / deep-link düzenleme varsa:** hedefi yeni `menu.francocoffee.com` adresine değiştirin. Önce tek bir telefonla, sonra iOS ve Android'de test edin. QRall üyeliği sona ererse yönlendirmenin devam edip etmediğini sağlayıcıdan yazılı olarak doğrulayın.
2. **QRall destek ekibi yönlendirebiliyorsa:** tenant ve kanal kaydının yeni adrese kalıcı yönlendirilmesini isteyin. Bunun hesap veya paket bağımlılığı olabilir.
3. **Hedef değiştirilemiyorsa:** mevcut fiziksel QR yeni Vercel adresine geçirilemez. Masa sticker'ları/baskılar, doğrudan işletmenin kalıcı domainine giden yeni QR ile değiştirilmelidir.

Yeni QR üretirken Vercel'in `*.vercel.app` adresini değil, işletmeye ait kalıcı domaini kullanın. QR'ı yüksek hata düzeltme seviyesiyle SVG/PDF olarak üretin; baskıdan önce farklı telefonlar, düşük ışık ve 30–50 cm mesafede test edin.

## Uzun vadeli riskler ve bakım

Vercel'in ücretsiz planı pratik bir başlangıçtır ancak “ömürlük ücretsiz/çalışır” garantisi değildir:

- Ücretsiz plan şartları, limitleri veya fiyatlandırması değişebilir.
- Hesap erişimi kaybedilebilir; proje/deploy yanlışlıkla silinebilir veya askıya alınabilir.
- Yoğun trafik, build sayısı, görsel optimizasyonu ve bandwidth limitleri aşılabilir.
- Platforma özgü özellikler kullanıldıkça başka sağlayıcıya geçiş zorlaşabilir (vendor bağımlılığı).
- Custom domain yenilenmezse QR doğru olsa bile site açılamaz.
- Menü/fiyatların güncel tutulması için işletmede net bir sorumlu gerekir.

Bu proje standart Next.js kullandığından Vercel dışında başka Node.js uyumlu sağlayıcılara taşınabilir. Sağlam işletim için GitHub reposunun işletme hesabında tutulması, en az iki yetkilinin erişimi, domain otomatik yenilemesi, 2FA, düzenli yedek ve üç ayda bir QR testi önerilir.

## Yayın öncesi kontrol listesi

- Tüm ürün adları, açıklamalar, fiyatlar ve alerjen notlarını doğrula
- Instagram bağlantısını gerçek hesapla değiştir
- `NEXT_PUBLIC_SITE_URL` değerini gerçek domain yap
- Custom domain ve HTTPS'i doğrula
- iOS Safari ve Android Chrome'da kategori, arama ve detay panelini test et
- Mevcut QRall yönlendirmesini veya yeni QR baskısını test et
- Google Search Console / Analytics gerekiyorsa işletmenin kendi hesabıyla ekle
