import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</div>;
}

export function SectionHead({ title, intro, more }: { title: string; intro?: string; more?: { href: string; label: string } }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-4xl font-semibold text-pine sm:text-5xl">{title}</h2>
        {intro && <p className="mt-3 max-w-prose text-lg text-slate">{intro}</p>}
      </div>
      {more && (
        <Link href={more.href} className="border-b-2 border-gold pb-0.5 font-semibold text-pine hover:text-slate">
          {more.label}
        </Link>
      )}
    </div>
  );
}
