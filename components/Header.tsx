"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import company from "@/data/company.json";
import contact from "@/data/contact.json";
import Logo from "./Logo";

const nav = [
  { href: "/about", label: "회사 소개" },
  { href: "/coffees", label: "생두" },
  { href: "/contact", label: "거래 문의" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-300/50 bg-cream-50/80 backdrop-blur">
      <div className="container-content flex h-16 md:h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label={`${company.name} 홈으로`}
        >
          <Logo size={48} className="md:h-[56px] md:w-[56px]" />
          <span className="hidden sm:inline text-sm text-ink-muted">
            {company.name_kr}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft hover:text-sage-700 transition"
            >
              {item.label}
            </Link>
          ))}
          {contact.smartstore_url && (
            <a
              href={contact.smartstore_url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !py-2 !px-5 text-sm"
            >
              <ShoppingBag size={14} />
              스마트스토어
            </a>
          )}
        </nav>

        <button
          aria-label="메뉴 열기"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream-300/60 bg-cream-50">
          <nav className="container-content flex flex-col py-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink-soft border-b border-cream-200 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            {contact.smartstore_url && (
              <a
                href={contact.smartstore_url}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="py-3 text-base text-sage-700 font-medium inline-flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                스마트스토어에서 구매
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
