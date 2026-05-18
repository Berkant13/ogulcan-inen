import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components";
import { practiceAreaPages } from "../../data";

export function generateStaticParams() {
  return practiceAreaPages.map((area) => ({ slug: area.slug }));
}

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }) {
  const { slug } = await params;
  const area = practiceAreaPages.find((item) => item.slug === slug);

  return {
    title: area ? `${area.detailTitle ?? area.title} | İNEN Hukuk ve Danışmanlık` : "Faaliyet Alanı",
  };
}

export default async function PracticeAreaPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const area = practiceAreaPages.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />

      <section className="practice-detail-hero">
        <span>Faaliyet Alanlarımız</span>
        <h1>{area.detailTitle ?? area.title}</h1>
      </section>

      <section className="practice-detail-layout">
        <aside>
          <h2>Faaliyet Alanları</h2>
          {practiceAreaPages.map((item) => (
            <Link
              className={item.slug === area.slug ? "active" : undefined}
              href={`/faaliyet-alanlari/${item.slug}`}
              key={item.slug}
            >
              {item.title}
            </Link>
          ))}
        </aside>

        <article className="practice-detail-copy">
          {area.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
