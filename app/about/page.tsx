import type { Metadata } from "next";
import Image from "next/image";
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

      {company.partner_farm && (
        <section className="container-content py-16 md:py-24">
          <p className="label-eyebrow">Partner Farm</p>
          <h2 className="heading-section mt-3">
            우리의 파트너 농장, {company.partner_farm.name}
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            {company.partner_farm.location}
          </p>

          <div className="mt-10 rounded-3xl border border-sage-200 bg-sage-50/60 p-8 md:p-12">
            <p className="font-serif text-xl md:text-2xl text-sage-800 leading-snug">
              “{company.partner_farm.slogan_en}”
            </p>
            <p className="mt-3 text-sm md:text-base text-ink-soft">
              {company.partner_farm.slogan_meaning}
            </p>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_1fr] items-start">
            <div className="body-base space-y-5">
              {company.partner_farm.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {company.partner_farm.images.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {company.partner_farm.images.slice(0, 6).map((src, i) => (
                  <div
                    key={src}
                    className={
                      "relative aspect-square overflow-hidden rounded-2xl bg-cream-200 border border-cream-300/60 " +
                      (i === 0 ? "col-span-2 aspect-[4/3]" : "")
                    }
                  >
                    <Image
                      src={src}
                      alt={`${company.partner_farm!.name} ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 300px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-cream-300 bg-cream-100/60 p-8 text-center text-sm text-ink-muted">
                농장 사진 준비 중입니다.
              </div>
            )}
          </div>
        </section>
      )}

      <section className="container-content py-16">
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
