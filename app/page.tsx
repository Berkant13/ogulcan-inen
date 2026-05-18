import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";
import { lawyer, practiceAreaPages } from "./data";

const articles = [
  {
    date: "07 Mart 2026",
    title: "Şirket birleşmelerinde dikkat edilmesi gereken beş hukuki ayrıntı",
  },
  {
    date: "21 Şubat 2026",
    title: "Kira uyuşmazlıklarında arabuluculuk sürecine pratik bakış",
  },
  {
    date: "02 Şubat 2026",
    title: "Aile şirketlerinde pay devri ve yönetim kontrolü nasıl korunur?",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <article className="lead-story">
          <h1>Hukukta detay, ayrıntıda adalet.</h1>
          <p className="byline">— Av. Oğulcan İnen, Kurucu ve Yönetici Ortak</p>
          <p>
            Büromuz Aile ve Boşanma Hukuku, Birleşme ve Devralmalar, Ceza Hukuku,
            Enerji Hukuku, Fikri ve Sınai Mülkiyet Hukuku, İcra ve İflas Hukuku,
            İdare ve Vergi Hukuku, İnşaat ve İmar Hukuku, İnşaat ve Gayrimenkul
            Hukuku, İş ve Sosyal Güvenlik Hukuku, Kişisel Verilerin Korunması
            Hukuku, Kira Hukuku, Miras Hukuku, Rekabet Hukuku, Sağlık ve İlaç
            Hukuku, Sözleşmeler Hukuku, Şirketler ve Ticaret Hukuku, Spor Hukuku,
            Sigorta Hukuku, Tüketici Hukuku, Taşımacılık ve Lojistik Hukuku ile
            Yabancılar ve Vatandaşlık Hukuku olmak üzere dava, tahkim ve idari
            uyuşmazlıklara kadar geniş bir yelpazede hukuki çözümler sunmaktadır.
            Bunun yanı sıra dava takibi, tahkim arabuluculuk ve diğer alternatif
            uyuşmazlık çözüm yollarında etkin temsil hizmeti sunmaktadır.
          </p>

          <Link className="text-link" href="/#hakkimizda">Devamını okuyunuz +</Link>
        </article>

        <div className="monogram-card" aria-label="İNEN Hukuk ve Danışmanlık monogramı">
          <Image
            src="/logo_inen.jpeg"
            alt="İNEN Hukuk ve Danışmanlık amblemi"
            width={720}
            height={480}
            priority
          />
          <small>Şeffaflık — Söz — Sonuçlanan hukuk.</small>
        </div>

        <aside className="issue-list" aria-label="Bu sayıdaki yayınlar">
          <p className="section-label">Bu Sayıda</p>
          {articles.map((article) => (
            <Link href="#makaleler" key={article.title}>
              <span>{article.date}</span>
              {article.title}
            </Link>
          ))}
        </aside>
      </section>

      <section className="intro-section" id="yayinlar">
        <div>
          <p className="eyebrow">Güncel Yayınlar</p>
          <h2>Hukuki gelişmeleri sade ve uygulanabilir notlarla takip edin.</h2>
        </div>
        <p>
          Yayınlar başlığı altında büromuzun makaleleri listelenir. İçerikler
          müvekkillerin hızlı karar almasına yardımcı olacak kısa, net ve pratik
          formatta hazırlanır.
        </p>
      </section>

      <section className="publications">
        <div className="publication-column" id="makaleler">
          <div className="section-title">
            <span />
            <h2>Makaleler</h2>
          </div>
          <div className="publication-list">
            {articles.map((article) => (
              <article key={article.title}>
                <time>{article.date}</time>
                <h3>{article.title}</h3>
                <a href="#iletisim">Devamını oku</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="hakkimizda">
        <div className="section-title">
          <span />
          <h2>Hakkımızda</h2>
        </div>
        <div className="about-copy">
          <p>
            Hukuk büromuz, müvekkillerine tam hizmet anlayışıyla hukuki
            danışmanlık ve avukatlık hizmeti sunan kurumsal bir yapıdır.
            Kuruluşundan bu yana edinilen mesleki tecrübe ve sektörel bilgi
            birikimiyle büromuz, müvekkillerin ihtiyaçlarına etkin ve
            sürdürülebilir çözümler üretmeyi temel ilke olarak benimsemiştir.
          </p>
          <p>
            Çalışma yaklaşımımız, müvekkillerin yalnızca mevcut hukuki
            ihtiyaçlarının karşılanmasıyla sınırlı kalmayıp; ticari faaliyetleri,
            operasyonel süreçleri ve stratejik hedeflerini bütüncül bir bakış
            açısıyla değerlendirmeyi esas almaktadır. Bu doğrultuda, hukuki
            risklerin önceden tespiti ve önlenmesi, süreçlerin öngörülebilir ve
            etkin bir şekilde yönetilmesi ile müvekkillerin hukuki güvenliğinin
            sağlanması amaçlanmaktadır. Ayrıca, her bir işlem özelinde geliştirilen
            stratejik yaklaşımla müvekkillerin kısa ve uzun vadeli menfaatlerinin
            korunması gözetilmektedir.
          </p>
          <p>
            Mesleki etik ilkelere bağlılık, şeffaflık ve müvekkil memnuniyeti
            büromuzun temel değerlerini oluşturmaktadır. Hızlı geri dönüş, etkin
            iletişim ve çözüm odaklı hizmet anlayışı benimsenmektedir. Güncel
            mevzuat, yargı içtihatları ve küresel gelişmeler yakından takip
            edilmekte; gelişen teknoloji ve değişen iş modellerine uyum sağlanarak
            yenilikçi ve proaktif hukuki çözümler üretilmektedir. Bu doğrultuda
            büromuz; her bir müvekkile özgü, hızlı, etkin ve güvenilir hukuki
            hizmet sunmaya devam etmektedir.
          </p>
        </div>
      </section>

      <section className="practice" id="alanlar">
        <div className="practice-head">
          <div className="section-title">
            <span />
            <h2>Faaliyet Alanlarımız</h2>
          </div>
          <p>
            İhtiyacınız olan alana hızlıca ulaşın. Kartları yana kaydırarak tüm
            uzmanlık başlıklarını inceleyebilir, detay sayfasına geçebilirsiniz.
          </p>
        </div>
        <div className="practice-slider" aria-label="Faaliyet alanları listesi">
          {practiceAreaPages.map((area) => (
            <Link className="practice-card" href={`/faaliyet-alanlari/${area.slug}`} key={area.slug}>
              <span>{area.title}</span>
              <small>Detayı incele</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="team" id="ekip">
        <div className="section-title">
          <span />
          <h2>Ekibimiz</h2>
        </div>
        <div className="team-grid">
          <Link className="team-card" href="/ekibimiz/ogulcan-inen">
            <div className="portrait-card" />
            <h3>{lawyer.cardName}</h3>
            <p>{lawyer.role}</p>
            <span>✉</span>
          </Link>
        </div>
      </section>

      <section className="news" id="haberler">
        <div className="section-title">
          <span />
          <h2>Haberler</h2>
        </div>
        <p>
          Müvekkil işlemleri, mevzuat gelişmeleri ve büro haberleri bu alanda
          düzenli olarak paylaşılır.
        </p>
      </section>

      <section className="contact" id="iletisim">
        <form className="contact-form">
          <h2>İletişim</h2>
          <label htmlFor="name">Ad Soyad</label>
          <input id="name" type="text" />

          <label htmlFor="email">E-Posta</label>
          <input id="email" type="email" />

          <label htmlFor="message">Mesaj</label>
          <textarea id="message" rows={5} />

          <fieldset className="consent">
            <legend>Gönderilen verilerin saklanması için onay *</legend>
            <label>
              <input type="checkbox" />
              <span>Verilerimin saklanmasına ve işlenmesine izin veriyorum</span>
            </label>
          </fieldset>

          <button type="submit">Gönder</button>
        </form>

        <div className="contact-info" aria-label="Konum ve iletişim bilgileri">
          <div className="map-card">
            <iframe
              title="İNEN Hukuk ve Danışmanlık konumu"
              src="https://maps.google.com/maps?f=q&source=s_q&hl=tr&q=Madalyon%20Hukuk%20ve%20Dan%C4%B1%C5%9Fmanl%C4%B1k&sll=39.9150189,32.7692046&z=18&iwloc=A&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <address>
            <strong>İNEN Hukuk ve Danışmanlık</strong>
            <span>Adres: Mustafa Kemal Mahallesi 2136. Sokak No:5/10 Çankaya/Ankara</span>
            <span>Telefon: +90 533 376 2365</span>
            <span>E-mail: ogulcaninen@gmail.com</span>
          </address>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
