import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import CoffeeGrid from "@/components/CoffeeGrid";
import ContactCTA from "@/components/ContactCTA";
import coffeesData from "@/data/coffees.json";
import contact from "@/data/contact.json";
import type { Coffee } from "@/types";

const coffees = coffeesData as Coffee[];

export const metadata: Metadata = {
  title: "생두 라인업",
  description: "브릿지빈에서 공급하는 생두 라인업입니다.",
};

export default function CoffeesPage() {
  return (
    <>
      <section className="container-content pt-16 md:pt-24 pb-10">
        <p className="label-eyebrow">Green Coffee</p>
        <h1 className="heading-display mt-4">생두 라인업</h1>
        <p className="body-base mt-6 max-w-2xl">
          현재 공급 가능한 생두입니다. 산지·가공·컵 노트 정보는 아래에서 확인하시고,
          가격·재고·구매는 스마트스토어 상품 페이지를 이용해 주세요.
        </p>

        {contact.smartstore_url && (
          <a
            href={contact.smartstore_url}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm text-sage-700 hover:text-sage-800 font-medium"
          >
            스마트스토어 전체 상품 보기
            <ExternalLink size={14} />
          </a>
        )}
      </section>

      <section className="container-content pb-16 md:pb-24">
        <CoffeeGrid coffees={coffees} />
      </section>

      <ContactCTA
        title="대량 거래·납품 문의는 따로 받습니다"
        desc="정기 거래나 일반 상품에 없는 수량·포장이 필요하시면 이메일 또는 인스타그램으로 연락주세요."
      />
    </>
  );
}
