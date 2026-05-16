import Link from "next/link";
import { practiceAreaPages } from "./data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="edition-bar">
        <span>Cilt XII · Sayı 04 · Ankara</span>
        <span>Perşembe, 7 Mart 2026</span>
        <span>TR · EN</span>
      </div>

      <Link className="logo" href="/" aria-label="İnen & Durmuş ana sayfa">
        <span>İnen &amp; Durmuş</span>
        <small>Hukuk Bürosu · 2026&apos;dan beri</small>
      </Link>

      <nav className="nav" aria-label="Ana menü">
        <Link href="/">Manşet</Link>
        <Link href="/#hakkimizda">Hakkımızda</Link>
        <Link href="/ekibimiz">Ekibimiz</Link>
        <div className="nav-item has-submenu">
          <Link href="/#alanlar">Faaliyet Alanlarımız</Link>
          <div className="submenu">
            {practiceAreaPages.slice(0, 8).map((area) => (
              <Link href={`/faaliyet-alanlari/${area.slug}`} key={area.slug}>{area.title}</Link>
            ))}
          </div>
        </div>
        <div className="nav-item has-submenu">
          <Link href="/#yayinlar">Yayınlar</Link>
          <div className="submenu compact">
            <Link href="/#makaleler">Makaleler</Link>
            <Link href="/#duyurular">Duyurular</Link>
          </div>
        </div>
        <Link href="/#iletisim">İletişim</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <strong>İnen &amp; Durmuş Hukuk Bürosu</strong>
      <span>Yasal Uyarı · Gizlilik Bildirimi · LinkedIn</span>
      <span>© 2026. Tüm hakları saklıdır.</span>
    </footer>
  );
}
