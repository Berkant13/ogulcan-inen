import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { lawyer } from "../data";

export default function TeamPage() {
  return (
    <main>
      <SiteHeader />

      <section className="team-page">
        <h1>Ekibimiz</h1>

        <div className="lawyer-grid">
          <Link className="lawyer-card" href="/ekibimiz/ogulcan-inen">
            <div className="lawyer-photo" />
            <div className="lawyer-card-body">
              <h2>{lawyer.cardName}</h2>
              <p>{lawyer.role}</p>
              <span>✉</span>
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
