import type { Metadata } from "next";
import CoffeeGrid from "@/components/CoffeeGrid";
import ContactCTA from "@/components/ContactCTA";
import coffeesData from "@/data/coffees.json";
import type { Coffee } from "@/types";

const coffees = coffeesData as Coffee[];

export const metadata: Metadata = {
  title: "생두 라인업",
  description: "브릿지빈에서 공급하는 싱글 오리진 생두 라인업입니다.",
};

export default function CoffeesPage() {
  return (
    <>
      <section className="container-content pt-16 md:pt-24 pb-10">
        <p className="label-eyebrow">Green Coffee</p>
        <h1 className="heading-display mt-4">생두 라인업</h1>
        <p className="body-base mt-6 max-w-2xl">
          현재 공급 가능한 생두입니다. 각 항목을 눌러 산지·프로세스·수확연도·권장 로스팅 등
          상세 정보를 확인하실 수 있습니다. 시즌 한정 마이크로 로트는 별도 표기됩니다.
        </p>
      </section>

      <section className="container-content pb-16 md:pb-24">
        <CoffeeGrid coffees={coffees} />
      </section>

      <ContactCTA
        title="원하시는 컵 프로파일이 있나요?"
        desc="로스팅 방향이나 메뉴 스타일을 알려주시면, 가장 잘 맞는 생두 2~3종을 샘플로 보내드립니다."
      />
    </>
  );
}
