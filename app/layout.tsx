import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://menu.francocoffee.com"),
  title: "Franco Coffee & Gelato | Menü",
  description: "Franco Coffee & Gelato'nun kahve, gelato, tatlı ve lezzetlerini keşfedin.",
  applicationName: "Franco Menü",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Franco Coffee & Gelato",
    description: "Kahve, gelato ve güzel anlar. Güncel menümüzü keşfedin.",
    type: "website",
    locale: "tr_TR"
  },
  twitter: { card: "summary", title: "Franco Coffee & Gelato | Menü" },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#49171B",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" as="image" href="/menu-hot-coffee-sprite-v2.jpg" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  );
}
