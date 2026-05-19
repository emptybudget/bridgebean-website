import Link from "next/link";
import { Instagram, Mail, ShoppingBag } from "lucide-react";
import company from "@/data/company.json";
import contact from "@/data/contact.json";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-cream-300/60 bg-cream-100">
      <div className="container-content py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={56} />
            <span className="text-sm text-ink-muted">{company.name_kr}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {company.slogan}
          </p>
        </div>

        <div>
          <h4 className="label-eyebrow mb-4">사이트 메뉴</h4>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li><Link href="/about" className="hover:text-sage-700">회사 소개</Link></li>
            <li><Link href="/coffees" className="hover:text-sage-700">생두 라인업</Link></li>
            <li><Link href="/services" className="hover:text-sage-700">공급 서비스</Link></li>
            <li><Link href="/contact" className="hover:text-sage-700">거래 문의</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow mb-4">연락처</h4>
          <ul className="space-y-3 text-sm text-ink-soft">
            {contact.email && (
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-sage-600" />
                <a href={`mailto:${contact.email}`} className="hover:text-sage-700">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.instagram && (
              <li className="flex items-center gap-2">
                <Instagram size={14} className="text-sage-600" />
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sage-700"
                >
                  {contact.instagram_handle || "Instagram"}
                </a>
              </li>
            )}
            {contact.smartstore_url && (
              <li className="flex items-center gap-2">
                <ShoppingBag size={14} className="text-sage-600" />
                <a
                  href={contact.smartstore_url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sage-700"
                >
                  스마트스토어
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-300/60">
        <div className="container-content py-5 text-xs text-ink-muted flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>{company.tagline_en}</span>
        </div>
      </div>
    </footer>
  );
}
