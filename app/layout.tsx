import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Av. Oğulcan İnen",
  description:
    "Av. Oğulcan İnen tarafından sunulan hukuk danışmanlığı ve avukatlık hizmetleri.",
  openGraph: {
    title: "Av. Oğulcan İnen",
    description:
      "Gazete estetiğinde tasarlanmış şahsi avukatlık sitesi.",
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
