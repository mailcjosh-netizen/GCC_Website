"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "@/content/home";
import Ridges from "./Ridges";

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate overflow-hidden bg-pine-deep text-mist"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
        setTouchX(null);
      }}
    >
      {slides.map((s, n) => (
        <img
          key={s.title}
          src={s.image}
          alt=""
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 ${n === i ? "opacity-60" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pine-deep/40 via-pine-deep/30 to-pine-deep/90" />

      <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 pb-48 pt-20">
        <p className="mb-4 font-display text-xl italic text-gold-soft">Grace Covenant Church, Shillong</p>
        <h1 key={slides[i].title} className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] sm:text-7xl" aria-live="polite">
          {slides[i].title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mist/90">{slides[i].text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={slides[i].cta.href} className="rounded-full bg-gold px-6 py-3 font-semibold text-pine-deep hover:bg-gold-soft">
            {slides[i].cta.label}
          </Link>
          <Link href="/sermons#live" className="rounded-full border border-mist/60 px-6 py-3 hover:bg-mist/10">
            Watch online
          </Link>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <button onClick={() => go(i - 1)} aria-label="Previous slide" className="rounded-full border border-mist/40 px-3 py-1 hover:bg-mist/10">‹</button>
          {slides.map((s, n) => (
            <button
              key={s.title}
              onClick={() => go(n)}
              aria-label={`Show slide ${n + 1}: ${s.title}`}
              aria-current={n === i}
              className={`h-1.5 rounded-full transition-all ${n === i ? "w-10 bg-gold" : "w-5 bg-mist/40"}`}
            />
          ))}
          <button onClick={() => go(i + 1)} aria-label="Next slide" className="rounded-full border border-mist/40 px-3 py-1 hover:bg-mist/10">›</button>
        </div>
      </div>
      <Ridges className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full sm:h-56" />
    </section>
  );
}
