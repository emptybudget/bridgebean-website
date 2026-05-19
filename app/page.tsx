import Link from "next/link";
import { ArrowRight, Leaf, Flame, Handshake, Sprout, Coffee as CoffeeIcon, Heart, Package, type LucideIcon } from "lucide-react";
import Hero from "@/components/Hero";
import CoffeeCard from "@/components/CoffeeCard";
import ContactCTA from "@/components/ContactCTA";
import company from "@/data/company.json";
import coffeesData from "@/data/coffees.json";
import type { Coffee } from "@/types";

const coffees = coffeesData as Coffee[];

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Flame,
  Handshake,
  Sprout,
  Coffee: CoffeeIcon,
  Heart,
  Package,
};

export default function HomePage() {
  const featured = coffees.filter((c) => c.featured).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Strengths */}
      <section className="container-content py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 mb-12">
          <div>
            <p className="label-eyebrow">Why {company.name}</p>
            <h2 className="heading-section mt-3">
              산지의 시간을<br />매장 한 잔으로 잇습니다.
            </h2>
          </div>
          <p className="body-base self-end">
            대형 로스터리부터 홈로스터·커피 교육원까지, 정직한 산지 정보와 일관된 품질의 생두를
            기반으로 오래 함께할 수 있는 파트너가 되고자 합니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {company.strengths.map((s) => {
            const Icon = iconMap[s.icon] ?? Leaf;
            return (
              <div key={s.title} className="card-surface p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Icon size={20} />
                </div>
                <h3 className="heading-card mt-5">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured coffees */}
      <section className="bg-cream-100/60 border-y border-cream-300/60">
        <div className="container-content py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="label-eyebrow">Featured Beans</p>
              <h2 className="heading-section mt-3">이번 시즌 추천 생두</h2>
            </div>
            <Link
              href="/coffees"
              className="inline-flex items-center gap-2 text-sm text-sage-700 hover:text-sage-800"
            >
              전체 라인업 보기 <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
