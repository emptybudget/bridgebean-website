import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA({
  title = "거래를 검토 중이신가요?",
  desc = "샘플 신청부터 매장 메뉴에 맞는 원두 추천까지, 부담 없이 문의 주세요.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="container-content my-20 md:my-28">
      <div className="rounded-3xl border border-sage-200 bg-sage-50/60 p-10 md:p-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <p className="label-eyebrow">Contact</p>
          <h2 className="heading-section mt-3">{title}</h2>
          <p className="body-base mt-4">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            거래 문의하기
            <ArrowRight size={16} />
          </Link>
          <Link href="/coffees" className="btn-outline">
            원두 라인업 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
