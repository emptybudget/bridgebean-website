import Link from "next/link";
import { ArrowRight } from "lucide-react";
import company from "@/data/company.json";
import Logo from "./Logo";

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

      <div className="container-content pt-16 md:pt-24 pb-20 md:pb-28 flex flex-col items-center text-center">
        {/* 1. Logo — first, big */}
        <div
          className="hero-logo-reveal"
          style={{ animationDelay: "0.05s" }}
        >
          <Logo
            size={240}
            className="md:h-[300px] md:w-[300px] lg:h-[340px] lg:w-[340px]"
          />
        </div>

        {/* 2. English tagline */}
        <p
          className="label-eyebrow mt-6 hero-reveal"
          style={{ animationDelay: "0.7s" }}
        >
          {company.tagline_en}
        </p>

        {/* 3. Slogan */}
        <h1
          className="heading-display mt-5 max-w-3xl whitespace-pre-line hero-reveal"
          style={{ animationDelay: "1.0s" }}
        >
          {company.slogan}
        </h1>

        {/* 4. Description */}
        <div
          className="body-base mt-7 max-w-2xl space-y-4 hero-reveal"
          style={{ animationDelay: "1.4s" }}
        >
          {company.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* 5. CTAs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-3 hero-reveal"
          style={{ animationDelay: "1.8s" }}
        >
          <Link href="/coffees" className="btn-primary">
            생두 라인업 보기
            <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-outline">
            거래 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
