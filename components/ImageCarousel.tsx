"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * index, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive((curr) => (curr === index ? curr : index));
  }, []);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-cream-200 border border-cream-300/60">
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  const total = images.length;
  const canPrev = active > 0;
  const canNext = active < total - 1;

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-3xl border border-cream-300/60 bg-cream-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-full aspect-square snap-center"
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1} / ${total}`}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Counter chip */}
      <div className="absolute top-4 right-4 rounded-full bg-cream-50/90 backdrop-blur px-3 py-1 text-xs text-ink-soft tabular-nums">
        {active + 1} / {total}
      </div>

      {/* Desktop arrows */}
      <button
        type="button"
        aria-label="이전 사진"
        onClick={() => scrollTo(active - 1)}
        disabled={!canPrev}
        className="hidden md:flex absolute top-1/2 left-3 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-cream-50/90 backdrop-blur text-ink shadow-sm transition opacity-0 group-hover:opacity-100 disabled:opacity-0 hover:bg-cream-50"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        aria-label="다음 사진"
        onClick={() => scrollTo(active + 1)}
        disabled={!canNext}
        className="hidden md:flex absolute top-1/2 right-3 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-cream-50/90 backdrop-blur text-ink shadow-sm transition opacity-0 group-hover:opacity-100 disabled:opacity-0 hover:bg-cream-50"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-cream-50/85 backdrop-blur px-3 py-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1}번 사진으로 이동`}
            onClick={() => scrollTo(i)}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === active ? "w-5 bg-sage-700" : "w-1.5 bg-ink-muted/40 hover:bg-ink-muted/70")
            }
          />
        ))}
      </div>
    </div>
  );
}
