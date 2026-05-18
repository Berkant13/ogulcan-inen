import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İnen Hukuk ve Danışmanlık",
  description:
    "Şirketler hukuku, uyuşmazlık çözümü, iş hukuku ve regülasyon alanlarında butik hukuk danışmanlığı.",
  openGraph: {
    title: "İnen Hukuk ve Danışmanlık",
    description:
      "Gazete estetiğinde tasarlanmış kurumsal avukatlık sitesi örneği.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
