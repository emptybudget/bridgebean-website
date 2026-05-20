import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "회사 소개",
  description: company.description,
};

export default function AboutPage() {
  return (
    <>
      <section className="container-content pt-16 md:pt-24 pb-12">
        <p className="label-eyebrow">About</p>
        <h1 className="heading-display mt-4 max-w-3xl whitespace-pre-line">
          {company.slogan}
        </h1>
        <div className="body-base mt-8 max-w-2xl space-y-5">
          {company.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="bg-cream-100/60 border-y border-cream-300/60">
        <div className="container-content py-16 md:py-24 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="label-eyebrow">Philosophy</p>
            <h2 className="heading-section mt-3">Bridgebean의 철학</h2>
          </div>
          <ol className="space-y-5">
            {company.philosophy.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-serif text-sage-500 text-xl md:text-2xl shrink-0 leading-none pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="body-base">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-content py-16 md:py-24">
        <p className="label-eyebrow">Values</p>
        <h2 className="heading-section mt-3 mb-10">우리가 일하는 방식</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {company.values.map((v, i) => (
            <div key={v.title} className="card-surface p-7">
              <span className="font-serif text-sage-500 text-3xl">
                0{i + 1}
              </span>
              <h3 className="heading-card mt-4">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content pb-16">
        <div className="card-surface p-8 md:p-10 grid md:grid-cols-2 gap-6">
          <div>
            <p className="label-eyebrow">Founded</p>
            <p className="mt-2 font-serif text-2xl text-ink">{company.founded_year}</p>
          </div>
          <div>
            <p className="label-eyebrow">Tagline</p>
            <p className="mt-2 font-serif text-2xl text-sage-700">{company.tagline_en}</p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
