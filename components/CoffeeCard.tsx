import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Coffee } from "@/types";

const categoryLabel: Record<Coffee["category"], string> = {
  africa: "아프리카",
  americas: "중남미",
  asia: "아시아·태평양",
};

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  return (
    <Link
      href={`/coffees/${coffee.id}`}
      className="group card-surface overflow-hidden transition hover:-translate-y-0.5 hover:border-sage-200"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <Image
          src={coffee.image}
          alt={coffee.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 380px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 tag bg-cream-50/90 backdrop-blur">
          {categoryLabel[coffee.category]}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="heading-card">{coffee.name}</h3>
            {coffee.name_en && (
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                {coffee.name_en}
              </p>
            )}
          </div>
          <ArrowUpRight
            size={20}
            className="mt-1 text-sage-500 transition group-hover:text-sage-700"
          />
        </div>

        <p className="mt-4 text-sm text-ink-soft">{coffee.origin}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {coffee.notes.slice(0, 4).map((note) => (
            <span key={note} className="tag">
              {note}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-cream-200 pt-4 text-sm">
          <span className="text-ink-muted">{coffee.roast_level} · {coffee.process}</span>
          <span className="font-medium text-ink">
            ₩{coffee.price_per_kg.toLocaleString()}
            <span className="text-xs text-ink-muted"> /kg</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
