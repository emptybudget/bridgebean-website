"use client";

import { useMemo, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import type { Coffee, CoffeeCategory } from "@/types";

type Filter = "all" | CoffeeCategory;

const tabs: { value: Filter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "single-origin", label: "싱글 오리진" },
  { value: "blend", label: "블렌드" },
];

export default function CoffeeGrid({ coffees }: { coffees: Coffee[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return coffees;
    return coffees.filter((c) => c.category === filter);
  }, [filter, coffees]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {tabs.map((t) => {
          const active = filter === t.value;
          return (
            <button
              key={t.value}
              onClick={() => setFilter(t.value)}
              className={
                "rounded-full px-4 py-2 text-sm transition border " +
                (active
                  ? "bg-sage-600 border-sage-600 text-cream-50"
                  : "bg-transparent border-sage-200 text-ink-soft hover:border-sage-400")
              }
            >
              {t.label}
            </button>
          );
        })}
        <span className="ml-auto text-xs text-ink-muted">
          총 {filtered.length}종
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
