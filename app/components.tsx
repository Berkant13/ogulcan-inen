import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="Av. Oğulcan İnen ana sayfa">
        <span>Av. OĞULCAN İNEN</span>
      </Link>

      <nav className="nav" aria-label="Ana menü">
        <Link href="/#hakkimizda">Hakkımda</Link>
        <Link href="/#alanlar">Faaliyet Alanları</Link>
        <Link href="/#ekip">Ekip</Link>
        <Link href="/#iletisim">İletişim</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <strong>Av. OĞULCAN İNEN</strong>
      <span>Yasal Uyarı · Gizlilik Bildirimi · LinkedIn</span>
      <span>© 2026. Tüm hakları saklıdır.</span>
    </footer>
  );
}
