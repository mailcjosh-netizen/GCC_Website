import Link from "next/link";
import { site } from "@/content/site";
import Ridges from "./Ridges";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-pine-deep text-mist">
      <Ridges className="absolute inset-x-0 -top-24 h-24 w-full sm:-top-32 sm:h-32" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">Grace Covenant Church</p>
          <p className="mt-3 max-w-md text-mist/80">
            A multilingual, Spirit-filled, Word-based family church in Shillong, built on the five-fold ministry since 1990.
          </p>
          <p className="mt-4 text-mist/80">{site.address}</p>
        </div>
        <div>
          <p className="mb-3 font-display text-xl text-gold-soft">Explore</p>
          <ul className="space-y-2 text-mist/85">
            <li><Link href="/about/our-story" className="hover:text-gold-soft">Our story</Link></li>
            <li><Link href="/about/beliefs" className="hover:text-gold-soft">What we believe</Link></li>
            <li><Link href="/sermons" className="hover:text-gold-soft">Sermons</Link></li>
            <li><Link href="/newsletter" className="hover:text-gold-soft">Newsletter</Link></li>
            <li><Link href="/give" className="hover:text-gold-soft">Give</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-display text-xl text-gold-soft">Follow</p>
          <ul className="space-y-2 text-mist/85">
            {site.socials.map((s) => (
              <li key={s.label}><a href={s.href} className="hover:text-gold-soft">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-mist/15">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-5 text-sm text-mist/70">
          <p>© {new Date().getFullYear()} Grace Covenant Church, Laban, Shillong 793004</p>
          <p>
            <Link href="/privacy" className="hover:text-gold-soft">Privacy policy</Link>
            <span className="mx-2">/</span>
            Personal data handled under India’s DPDP Act, 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
