import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import coffeesData from "@/data/coffees.json";
import contact from "@/data/contact.json";
import type { Coffee } from "@/types";
import ImageCarousel from "@/components/ImageCarousel";

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
  washed: "워시드",
  natural: "내추럴",
  experimental: "실험적 가공",
  rare: "희귀 품종",
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
    { label: "농장 / 협동조합", value: coffee.farm },
    { label: "고도", value: coffee.altitude },
    { label: "품종", value: coffee.variety },
    { label: "등급", value: coffee.grade },
    { label: "수확 연도", value: coffee.harvest_year },
    { label: "가공 방식", value: coffee.process },
    { label: "권장 로스팅", value: coffee.roast_level },
  ].filter((s) => s.value);

  const mailtoSubject = encodeURIComponent(`[생두 문의] ${coffee.name}`);
  const mailtoBody = encodeURIComponent(
    `안녕하세요, 브릿지빈입니다.\n\n아래 생두에 대해 문의드립니다.\n\n· 생두명: ${coffee.name}\n· 희망 수량(kg):\n· 입고 희망일:\n· 업체명/매장명:\n· 운영 형태(로스터리·카페·교육원·홈로스터 등):\n· 연락처:\n\n[추가 문의사항]\n`
  );

  return (
    <>
      <section className="container-content pt-10 md:pt-14">
        <Link
          href="/coffees"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-sage-700"
        >
          <ArrowLeft size={14} /> 생두 라인업으로
        </Link>
      </section>

      <section className="container-content pt-6 md:pt-10 pb-16 md:pb-24 grid gap-10 lg:grid-cols-2">
        <div className="relative">
          <ImageCarousel
            images={[coffee.image, ...(coffee.gallery ?? [])]}
            alt={coffee.name}
          />
          <span className="absolute top-4 left-4 z-10 tag bg-cream-50/90 backdrop-blur">
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

          {coffee.notes.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5">
                {coffee.notes.map((n) => (
                  <span key={n} className="tag">{n}</span>
                ))}
              </div>
              {coffee.notes_source && (
                <p className="mt-2 text-xs text-ink-muted">출처: {coffee.notes_source}</p>
              )}
            </div>
          )}

          <div className="body-base mt-7 space-y-4">
            {coffee.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-cream-300/60 bg-cream-50 p-6">
            {specs.map((s) => (
              <div key={s.label}>
                <p className="text-xs text-ink-muted">{s.label}</p>
                <p className="mt-1 text-sm text-ink">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Price tiers */}
          {coffee.price_tiers && coffee.price_tiers.length > 0 ? (
            <div className="mt-8 border-t border-cream-300/60 pt-6">
              <div className="flex items-baseline justify-between mb-3">
                <p className="label-eyebrow">수량별 단가</p>
                {coffee.min_order_kg && (
                  <p className="text-xs text-ink-muted">
                    최소 주문 {coffee.min_order_kg}kg부터
                  </p>
                )}
              </div>
              <div className="overflow-hidden rounded-2xl border border-cream-300/60">
                <table className="w-full text-sm">
                  <thead className="bg-cream-100 text-ink-muted">
                    <tr>
                      <th className="text-left py-2.5 px-4 font-normal">수량</th>
                      <th className="text-right py-2.5 px-4 font-normal">단가 (1kg)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-200">
                    {coffee.price_tiers.map((tier) => (
                      <tr key={tier.kg} className="bg-cream-50">
                        <td className="py-3 px-4 text-ink">{tier.kg}kg 이상</td>
                        <td className="py-3 px-4 text-right text-ink tabular-nums">
                          {tier.sold_out ? (
                            <span className="text-ink-muted">품절</span>
                          ) : tier.price ? (
                            <span className="font-medium">
                              ₩{tier.price.toLocaleString()}
                            </span>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {coffee.delivery_note && (
                <p className="mt-3 text-xs text-ink-muted">배송: {coffee.delivery_note}</p>
              )}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl bg-sage-50 border border-sage-200 p-5 text-sm text-sage-800">
              가격·재고는 스마트스토어 상품 페이지 또는 이메일로 문의해 주세요.
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {coffee.product_url && (
              <a
                href={coffee.product_url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <ShoppingBag size={16} />
                스마트스토어에서 구매
              </a>
            )}
            <a
              href={`mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
              className={coffee.product_url ? "btn-outline" : "btn-primary"}
            >
              이 생두 문의하기
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
