import PageHero from "@/components/PageHero";
import { beliefGroups } from "@/content/beliefs";

export const metadata = { title: "What we believe" };

export default function Beliefs() {
  return (
    <>
      <PageHero title="What we believe" intro="A summary of the Confession of Faith of Grace Covenant Church. Open each section to read more." />
      <div className="mx-auto max-w-3xl px-4 py-16">
        {beliefGroups.map((g, n) => (
          <details key={g.theme} className="group border-b border-mist-dark py-2" open={n === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-3xl text-pine">
              {g.theme}
              <span className="text-gold transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <ul className="mb-6 space-y-4 pl-1">
              {g.items.map((i) => (
                <li key={i} className="border-l-2 border-gold pl-4 text-lg leading-relaxed text-ink/85">{i}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </>
  );
}
