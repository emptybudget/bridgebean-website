import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import coffeesData from "@/data/coffees.json";
import contact from "@/data/contact.json";
import type { Coffee } from "@/types";

const coffees = coffeesData as Coffee[];

export function generateStaticParams() {
  return coffees.map((c) => ({ id: c.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const coffee = coffees.find((c) => c.id === params.id);
  if (!coffee) return {};
  return {
    title: coffee.name,
    description: coffee.description,
  };
}

const categoryLabel: Record<Coffee["category"], string> = {
  "single-origin": "Single Origin",
  blend: "Blend",
};

export default function CoffeeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const coffee = coffees.find((c) => c.id === params.id);
  if (!coffee) notFound();

  const specs: { label: string; value?: string }[] = [
    { label: "산지", value: coffee.origin },
    { label: "농장 / 스테이션", value: coffee.farm },
    { label: "고도", value: coffee.altitude },
    { label: "품종", value: coffee.variety },
    { label: "가공 방식", value: coffee.process },
    { label: "로스팅", value: coffee.roast_level },
  ].filter((s) => s.value);

  const mailtoSubject = encodeURIComponent(`[원두 문의] ${coffee.name}`);
  const mailtoBody = encodeURIComponent(
    `안녕하세요, 브릿지빈입니다.\n\n아래 원두에 대해 문의드립니다.\n\n· 원두명: ${coffee.name}\n· 희망 수량(kg):\n· 납품 희망일:\n· 매장명:\n· 연락처:\n\n[추가 문의사항]\n`
  );

  return (
    <>
      <section className="container-content pt-10 md:pt-14">
        <Link
          href="/coffees"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-sage-700"
        >
          <ArrowLeft size={14} /> 원두 라인업으로
        </Link>
      </section>

      <section className="container-content pt-6 md:pt-10 pb-16 md:pb-24 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-cream-200 border border-cream-300/60">
          <Image
            src={coffee.image}
            alt={coffee.name}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
            priority
          />
          <span className="absolute top-4 left-4 tag bg-cream-50/90 backdrop-blur">
            {categoryLabel[coffee.category]}
          </span>
        </div>

        <div>
          <p className="label-eyebrow">{categoryLabel[coffee.category]}</p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-ink mt-3 leading-tight">
            {coffee.name}
          </h1>
          {coffee.name_en && (
            <p className="mt-2 text-sm uppercase tracking-wider text-ink-muted">
              {coffee.name_en}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-1.5">
            {coffee.notes.map((n) => (
              <span key={n} className="tag">{n}</span>
            ))}
          </div>

          <p className="body-base mt-7">{coffee.description}</p>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-cream-300/60 bg-cream-50 p-6">
            {specs.map((s) => (
              <div key={s.label}>
                <p className="text-xs text-ink-muted">{s.label}</p>
                <p className="mt-1 text-sm text-ink">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Brew & best for */}
          {(coffee.recommended_brew || coffee.best_for) && (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {coffee.recommended_brew && (
                <div className="card-surface p-5">
                  <p className="label-eyebrow">추천 추출</p>
                  <p className="mt-2 text-sm text-ink">{coffee.recommended_brew}</p>
                </div>
              )}
              {coffee.best_for && (
                <div className="card-surface p-5">
                  <p className="label-eyebrow">잘 어울리는 메뉴</p>
                  <p className="mt-2 text-sm text-ink">{coffee.best_for}</p>
                </div>
              )}
            </div>
          )}

          {/* Pricing */}
          <div className="mt-8 flex items-end justify-between border-t border-cream-300/60 pt-6">
            <div>
              <p className="text-xs text-ink-muted">도매가 (1kg 기준)</p>
              <p className="font-serif text-3xl text-ink mt-1">
                ₩{coffee.price_per_kg.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-ink-muted">최소 주문량</p>
              <p className="font-serif text-3xl text-ink mt-1">{coffee.min_order_kg}kg</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
              className="btn-primary"
            >
              이 원두 문의하기
              <ArrowRight size={16} />
            </a>
            <a href={`tel:${contact.phone.replace(/-/g, "")}`} className="btn-outline">
              전화 문의
            </a>
          </div>
          <p className="mt-4 text-xs text-ink-muted">{contact.inquiry_lead_time}</p>
        </div>
      </section>
    </>
  );
}
