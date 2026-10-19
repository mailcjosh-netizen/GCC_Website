"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, type NavGroup, type NavItem } from "@/content/site";

function isGroup(n: NavItem | NavGroup): n is NavGroup {
  return "columns" in n;
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Grace Covenant Church, home">
      {/* Placeholder mark: replace with the official GCC logo */}
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="#173A2E" />
        <path d="M6 28 L14 19 L19 24 L26 14 L34 28 Z" fill="#6B8BA4" />
        <rect x="19" y="7" width="2" height="12" fill="#C8A24A" />
        <rect x="15.5" y="10" width="9" height="2" fill="#C8A24A" />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-xl font-semibold text-pine">Grace Covenant Church</span>
        <span className="block text-xs text-slate">Laban, Shillong</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(null); setDrawer(false); }
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, []);

  return (
    <header ref={ref} className="sticky top-0 z-40 border-b border-mist-dark bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) =>
              isGroup(n) ? (
                <li key={n.label} className="relative" onMouseEnter={() => setOpen(n.label)} onMouseLeave={() => setOpen(null)}>
                  <button
                    className="flex items-center gap-1 rounded px-3 py-2 text-ink hover:text-pine"
                    aria-expanded={open === n.label}
                    onClick={() => setOpen(open === n.label ? null : n.label)}
                  >
                    {n.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" /></svg>
                  </button>
                  {open === n.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="flex gap-10 rounded-lg border border-mist-dark bg-white p-6 shadow-xl">
                        {n.columns.map((c) => (
                          <div key={c.heading} className="min-w-44">
                            <p className="mb-3 font-display text-lg text-slate">{c.heading}</p>
                            <ul className="space-y-2">
                              {c.items.map((i) => (
                                <li key={i.href}>
                                  <Link href={i.href} onClick={() => setOpen(null)} className="text-ink hover:text-pine hover:underline underline-offset-4">
                                    {i.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className={n.label === "Give" ? "ml-2 rounded-full bg-pine px-4 py-2 text-mist hover:bg-pine-soft" : "rounded px-3 py-2 text-ink hover:text-pine"}
                  >
                    {n.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <button className="rounded p-2 lg:hidden" aria-label="Open menu" aria-expanded={drawer} onClick={() => setDrawer(true)}>
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="#173A2E" strokeWidth="2" /></svg>
        </button>
      </div>

      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-pine-deep/60" onClick={() => setDrawer(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-white p-6">
            <div className="mb-6 flex justify-end">
              <button aria-label="Close menu" onClick={() => setDrawer(false)} className="rounded p-2 text-2xl leading-none">×</button>
            </div>
            <ul className="space-y-1">
              {nav.map((n) =>
                isGroup(n) ? (
                  <li key={n.label}>
                    <button
                      className="flex w-full justify-between py-2 text-left text-lg"
                      aria-expanded={mobileGroup === n.label}
                      onClick={() => setMobileGroup(mobileGroup === n.label ? null : n.label)}
                    >
                      {n.label}<span aria-hidden="true">{mobileGroup === n.label ? "−" : "+"}</span>
                    </button>
                    {mobileGroup === n.label && (
                      <ul className="mb-2 space-y-2 border-l-2 border-gold pl-4">
                        {n.columns.flatMap((c) => c.items).map((i) => (
                          <li key={i.href}><Link href={i.href} onClick={() => setDrawer(false)} className="text-slate">{i.label}</Link></li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={n.label}><Link href={n.href} onClick={() => setDrawer(false)} className="block py-2 text-lg">{n.label}</Link></li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
