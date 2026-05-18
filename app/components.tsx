import Link from "next/link";
import { practiceAreaPages } from "./data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="İNEN Hukuk ve Danışmanlık ana sayfa">
        <span>İNEN</span>
        <small>Hukuk ve Danışmanlık</small>
      </Link>

      <nav className="nav" aria-label="Ana menü">
        <Link href="/#hakkimizda">Hakkımızda</Link>
        <Link href="/ekibimiz">Ekibimiz</Link>
        <div className="nav-item has-submenu">
          <Link href="/#alanlar">Faaliyet Alanlarımız</Link>
          <div className="submenu">
            {practiceAreaPages.map((area) => (
              <Link href={`/faaliyet-alanlari/${area.slug}`} key={area.slug}>{area.title}</Link>
            ))}
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
      <strong>İNEN Hukuk ve Danışmanlık</strong>
      <span>Yasal Uyarı · Gizlilik Bildirimi · LinkedIn</span>
      <span>© 2026. Tüm hakları saklıdır.</span>
    </footer>
  );
}
