import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import { Container } from "@/components/Section";
import { visions } from "@/content/history";
import { glimpses } from "@/content/placeholders";

export const metadata = { title: "Our story" };

export default function OurStory() {
  return (
    <>
      {/* TODO: Core Committee approval of history wording (Policy §9) */}
      <PageHero
        title="Our story"
        intro="How God gathered scattered sheep in Shillong and built Grace Covenant Church. Adapted from “God’s Call: Birth of the Grace Covenant Church” by Rev. Pyndapborlang Dkhar Dann (2018)."
      />
      <Container className="py-16">
        <Timeline />
      </Container>

      <section className="bg-white py-16">
        <Container>
          <h2 className="font-display text-4xl text-pine">Glimpses of the early years</h2>
          <p className="mt-2 text-slate">Photographs from the church’s first home in Laban, early 1990s.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {glimpses.map((g) => (
              <figure key={g.src}>
                <img src={g.src} alt={g.caption} className="aspect-[3/2] w-full rounded-lg object-cover" />
                <figcaption className="mt-2 text-sm text-slate">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section id="visions" className="bg-pine-deep py-20 text-mist">
        <Container>
          <h2 className="font-display text-4xl sm:text-5xl">Seven visions of GCC</h2>
          <p className="mt-3 max-w-prose text-mist/80">What God placed on the heart of this church from the beginning.</p>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg bg-mist/15 sm:grid-cols-2 lg:grid-cols-4">
            {visions.map((v, n) => (
              <li key={v.title} className="bg-pine-deep p-6">
                <span className="font-display text-4xl text-gold">{n + 1}</span>
                <h3 className="mt-2 font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-mist/80">{v.text}</p>
                <p className="mt-3 text-sm text-gold-soft">{v.ref}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-16 text-center">
        <p className="mx-auto max-w-2xl font-display text-3xl italic text-pine">
          “Being confident of this very thing, that He who has begun a good work in you will complete it until the day of Jesus Christ.”
        </p>
        <p className="mt-3 text-slate">Philippians 1:6</p>
      </Container>
    </>
  );
}
