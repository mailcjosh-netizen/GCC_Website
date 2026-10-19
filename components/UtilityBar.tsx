"use client";
import Link from "next/link";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "kha", label: "Khasi" },
  { code: "hi", label: "हिंदी" },
];

export default function UtilityBar() {
  // TODO: wire to i18n routes (/en, /kha, /hi) once translations exist.
  const [lang, setLang] = useState("en");
  return (
    <div className="bg-pine-deep text-mist text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
        <div className="flex items-center gap-1" role="group" aria-label="Language">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              aria-pressed={lang === l.code}
              className={`rounded px-2 py-0.5 ${lang === l.code ? "bg-mist/15 text-gold-soft" : "hover:text-gold-soft"}`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/new-here" className="hover:text-gold-soft">Visit us</Link>
          <a href="#subscribe" className="hover:text-gold-soft">Subscribe</a>
          <Link href="/members" className="hidden sm:inline hover:text-gold-soft">Member login</Link>
        </div>
      </div>
    </div>
  );
}
