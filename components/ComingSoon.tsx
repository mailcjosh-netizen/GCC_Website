import Link from "next/link";
import PageHero from "./PageHero";

export default function ComingSoon({ title, intro, note }: { title: string; intro: string; note: string }) {
  return (
    <>
      <PageHero title={title} intro={intro} />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-lg border-2 border-dashed border-slate-soft bg-white p-8">
          <p className="font-display text-2xl text-pine">This page is being built</p>
          <p className="mt-2 text-slate">{note}</p>
          <Link href="/" className="mt-6 inline-block border-b-2 border-gold font-semibold text-pine">Back to home</Link>
        </div>
      </div>
    </>
  );
}
