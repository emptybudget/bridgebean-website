import Link from "next/link";
import { ArrowRight } from "lucide-react";
import company from "@/data/company.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 -z-10 h-[420px] w-[420px] rounded-full bg-sage-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-40 -left-32 -z-10 h-[320px] w-[320px] rounded-full bg-sage-200/40 blur-3xl"
      />

      <div className="container-content pt-20 md:pt-28 pb-20 md:pb-32">
        <div className="max-w-3xl">
          <p className="label-eyebrow">{company.tagline_en}</p>
          <h1 className="heading-display mt-5">
            {company.slogan}
          </h1>
          <p className="body-base mt-7 max-w-2xl">
            {company.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/coffees" className="btn-primary">
              원두 라인업 보기
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline">
              거래 문의하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
