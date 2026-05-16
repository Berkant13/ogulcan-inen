import { SiteFooter, SiteHeader } from "../../components";
import { lawyer } from "../../data";

export default function LawyerDetailPage() {
  return (
    <main>
      <SiteHeader />

      <section className="profile-hero">
        <div className="profile-photo" />
        <div className="profile-title">
          <h1>{lawyer.name}</h1>
          <span />
          <p>{lawyer.role}</p>
        </div>
      </section>

      <section className="profile-contact-band">
        <div>
          <strong>E-posta</strong>
          <a href={`mailto:${lawyer.email}`}>{lawyer.email}</a>
        </div>
        <div>
          <strong>Mobil Telefon</strong>
          <a href="tel:+905333762365">{lawyer.mobile}</a>
        </div>
        <div>
          <strong>Ofis Telefon</strong>
          <span>{lawyer.officePhone}</span>
        </div>
        <a className="vcard-button" href={`mailto:${lawyer.email}`}>VCARD OLARAK İNDİRİN</a>
      </section>

      <section className="profile-details">
        <div>
          <h2>Eğitim</h2>
          <p>{lawyer.education}</p>
        </div>
        <div>
          <h2>Dil</h2>
          <p>{lawyer.languages}</p>
        </div>
        <div>
          <h2>Baro</h2>
          <p>{lawyer.bar}</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
