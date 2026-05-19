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
        <h1 className="heading-display mt-4 max-w-3xl">
          산지와 카페를 잇는 다리,<br />브릿지빈입니다.
        </h1>
        <p className="body-base mt-8 max-w-2xl">{company.description}</p>
      </section>

      <section className="bg-cream-100/60 border-y border-cream-300/60">
        <div className="container-content py-16 md:py-24 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="label-eyebrow">Philosophy</p>
            <h2 className="heading-section mt-3">로스터의 철학</h2>
          </div>
          <div className="space-y-5">
            {company.philosophy.split("\n\n").map((para, i) => (
              <p key={i} className="body-base">{para}</p>
            ))}
          </div>
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
        <div className="card-surface p-8 md:p-10 grid md:grid-cols-3 gap-6">
          <div>
            <p className="label-eyebrow">Founded</p>
            <p className="mt-2 font-serif text-2xl text-ink">{company.founded_year}</p>
          </div>
          <div>
            <p className="label-eyebrow">Representative</p>
            <p className="mt-2 font-serif text-2xl text-ink">{company.representative}</p>
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
