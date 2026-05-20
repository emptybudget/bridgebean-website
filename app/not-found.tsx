import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-content py-24 md:py-36 text-center">
      <p className="label-eyebrow">404</p>
      <h1 className="heading-display mt-4">
        찾으시는 페이지가 없습니다
      </h1>
      <p className="body-base mt-6 max-w-md mx-auto">
        주소를 다시 확인해 주시거나 아래 버튼으로 메인으로 돌아가 주세요.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          <ArrowLeft size={16} />
          홈으로
        </Link>
        <Link href="/coffees" className="btn-outline">
          생두 라인업 보기
        </Link>
      </div>
    </section>
  );
}
