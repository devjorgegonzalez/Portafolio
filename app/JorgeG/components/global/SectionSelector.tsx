"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export default function SectionSelector({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections?.[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => {
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <nav className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto flex gap-3 items-center py-4 px-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            className={
              "px-4 py-2 rounded-md text-sm font-medium transition-colors " +
              (active === s.id
                ? "bg-zinc-900 text-white"
                : "text-zinc-800 bg-transparent hover:bg-zinc-100")
            }
          >
            {s.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
