import type { Metadata } from "next";
import { Phone, Mail, Instagram, MessageCircle, MapPin, Clock, ShoppingBag } from "lucide-react";
import contact from "@/data/contact.json";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "거래 문의",
  description: `${company.name} B2B 원두 공급 문의 및 연락처`,
};

export default function ContactPage() {
  const mailtoSubject = encodeURIComponent("[생두 거래 문의]");
  const mailtoBody = encodeURIComponent(
    "안녕하세요, 브릿지빈입니다.\n\n아래 정보 남겨주시면 빠르게 회신드리겠습니다.\n\n· 매장명 / 회사명:\n· 담당자명·연락처:\n· 위치(지역):\n· 운영 형태(로스터리·카페·커피 교육원·홈로스터 등):\n· 월 예상 사용량(kg):\n· 관심 생두 또는 컵 프로파일:\n\n[추가 문의]\n"
  );

  return (
    <>
      <section className="container-content pt-16 md:pt-24 pb-10">
        <p className="label-eyebrow">Contact</p>
        <h1 className="heading-display mt-4">거래 문의</h1>
        <p className="body-base mt-7 max-w-2xl">
          신규 거래·샘플 신청·메뉴 상담 모두 아래 채널로 편하게 연락 주세요. {contact.inquiry_lead_time}
        </p>
      </section>

      {/* Quick channels */}
      <section className="container-content pb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ChannelCard
          icon={<Phone size={18} />}
          label="전화"
          value={contact.phone}
          href={`tel:${contact.phone.replace(/-/g, "")}`}
          note="평일 업무 시간 내 통화 가능"
        />
        <ChannelCard
          icon={<Mail size={18} />}
          label="이메일"
          value={contact.email}
          href={`mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
          note="가장 빠르게 회신드리는 채널입니다"
        />
        {contact.smartstore_url ? (
          <ChannelCard
            icon={<ShoppingBag size={18} />}
            label="스마트스토어"
            value="상품 보기·구매"
            href={contact.smartstore_url}
            external
            note="개별 상품 구매는 스마트스토어에서"
          />
        ) : null}
        {contact.instagram ? (
          <ChannelCard
            icon={<Instagram size={18} />}
            label="인스타그램 DM"
            value={contact.instagram_handle || "Instagram"}
            href={contact.instagram}
            external
            note="신규 라인업·시즌 공지 확인"
          />
        ) : null}
        {contact.kakao_channel ? (
          <ChannelCard
            icon={<MessageCircle size={18} />}
            label="카카오톡 채널"
            value="브릿지빈 채널 바로가기"
            href={contact.kakao_channel}
            external
            note="간편한 메시지 문의"
          />
        ) : null}
      </section>

      {/* Inquiry form (mailto) */}
      <section className="container-content pb-16 md:pb-20">
        <div className="card-surface p-8 md:p-10">
          <p className="label-eyebrow">Inquiry Form</p>
          <h2 className="heading-section mt-3">거래 문의 양식</h2>
          <p className="body-base mt-4">
            아래 버튼을 누르시면 미리 작성된 이메일 양식이 자동으로 열립니다.
            매장 정보와 필요한 내용을 채워서 보내주시면, 영업일 1일 이내에 답신드립니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
              className="btn-primary"
            >
              <Mail size={16} />
              이메일로 문의하기
            </a>
            <a
              href={`tel:${contact.phone.replace(/-/g, "")}`}
              className="btn-outline"
            >
              <Phone size={16} />
              전화로 문의하기
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-cream-300/60 grid gap-5 sm:grid-cols-2">
            <InfoRow
              icon={<Clock size={16} />}
              label="운영 시간"
              value={contact.business_hours}
            />
            {contact.address && (
              <InfoRow
                icon={<MapPin size={16} />}
                label="주소"
                value={contact.address}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ChannelCard({
  icon,
  label,
  value,
  href,
  external,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  note?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="card-surface p-6 transition hover:border-sage-300 hover:-translate-y-0.5 block"
    >
      <div className="flex items-center gap-3 text-sage-700">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sage-100">
          {icon}
        </span>
        <span className="label-eyebrow">{label}</span>
      </div>
      <p className="mt-4 font-serif text-lg text-ink">{value}</p>
      {note && <p className="mt-2 text-xs text-ink-muted">{note}</p>}
    </a>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-sage-600">{icon}</span>
      <div>
        <p className="text-xs text-ink-muted">{label}</p>
        <p className="mt-1 text-sm text-ink">{value}</p>
      </div>
    </div>
  );
}
