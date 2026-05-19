import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "공급 서비스",
  description: "브릿지빈 B2B 원두 공급 프로세스와 정책 안내입니다.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-content pt-16 md:pt-24 pb-12">
        <p className="label-eyebrow">B2B Services</p>
        <h1 className="heading-display mt-4">공급 서비스</h1>
        <p className="body-base mt-7 max-w-2xl">{services.intro}</p>
      </section>

      {/* Process */}
      <section className="bg-cream-100/60 border-y border-cream-300/60">
        <div className="container-content py-16 md:py-24">
          <p className="label-eyebrow">Process</p>
          <h2 className="heading-section mt-3 mb-10">공급 프로세스</h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.process.map((step) => (
              <div key={step.step} className="card-surface p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sage-600 text-cream-50 font-serif text-sm">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg text-ink">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="container-content py-16 md:py-24">
        <p className="label-eyebrow">Policies</p>
        <h2 className="heading-section mt-3 mb-10">납품·주문 정책</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <PolicyCard policy={services.delivery} />
          <PolicyCard policy={services.min_order} />
          <PolicyCard policy={services.pricing_note} />
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-cream-100/60 border-y border-cream-300/60">
        <div className="container-content py-16 md:py-24">
          <p className="label-eyebrow">Beyond Beans</p>
          <h2 className="heading-section mt-3 mb-10">추가 지원 서비스</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.additional_services.map((svc) => (
              <div key={svc.title} className="card-surface p-7">
                <h3 className="heading-card">{svc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function PolicyCard({
  policy,
}: {
  policy: { title: string; desc: string; freshness_policy?: string };
}) {
  return (
    <div className="card-surface p-7 h-full">
      <h3 className="heading-card">{policy.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{policy.desc}</p>
      {policy.freshness_policy && (
        <p className="mt-4 pt-4 border-t border-cream-200 text-xs text-ink-muted leading-relaxed">
          {policy.freshness_policy}
        </p>
      )}
    </div>
  );
}
