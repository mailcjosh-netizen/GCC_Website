"use client";
import { useEffect, useRef } from "react";
import { milestones } from "@/content/history";

// The one scroll-triggered moment on the site: milestones settle into place as you read.
export default function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll("li");
    if (!items || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    items.forEach((el) => el.classList.add("opacity-0", "translate-y-6"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.remove("opacity-0", "translate-y-6"); io.unobserve(e.target); }
      }),
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <ol ref={ref} className="relative mx-auto max-w-4xl border-l-2 border-gold pl-8 sm:pl-12">
      {milestones.map((m) => (
        <li key={m.year + m.title} className="relative mb-14 transition-all duration-700">
          <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-mist-light bg-gold sm:-left-[57px]" aria-hidden="true" />
          <p className="font-semibold text-slate">{m.year}</p>
          <h3 className="mt-1 font-display text-3xl text-pine sm:text-4xl">{m.title}</h3>
          <p className="mt-3 max-w-prose text-lg leading-relaxed text-ink/80">{m.body}</p>
          {m.quote && (
            <blockquote className="mt-5 font-display text-2xl italic text-slate">“{m.quote}”</blockquote>
          )}
        </li>
      ))}
    </ol>
  );
}
