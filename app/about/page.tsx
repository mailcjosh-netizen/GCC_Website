import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/Section";
import { site, coreValues, fiveFold } from "@/content/site";

export const metadata = { title: "About GCC" };

export default function About() {
  return (
    <>
      <PageHero
        title="About Grace Covenant Church"
        intro="A multilingual, New Testament-based, non-denominational, Full Gospel Charismatic church in Shillong, committed to the active ministry of apostles, prophets, evangelists, pastors and teachers."
      />
      <Container className="grid gap-12 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl text-pine">Our vision</h2>
          <p className="mt-3 text-lg text-slate">{site.vision}</p>
        </div>
        <div>
          <h2 className="font-display text-4xl text-pine">Our mission</h2>
          <p className="mt-3 text-lg text-slate">{site.mission}</p>
        </div>
      </Container>

      <section id="five-fold" className="bg-white py-16">
        <Container>
          <h2 className="font-display text-4xl text-pine sm:text-5xl">Built on the five-fold ministry</h2>
          <p className="mt-3 max-w-prose text-lg text-slate">
            “And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints.” Ephesians 4:11–12
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-mist-dark sm:grid-cols-2 lg:grid-cols-5">
            {fiveFold.map((f) => (
              <div key={f.office} className="bg-white p-6">
                <h3 className="font-display text-2xl text-pine">{f.office}</h3>
                <p className="mt-2 text-slate">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="values" className="py-16">
        <Container>
          <h2 className="font-display text-4xl text-pine sm:text-5xl">What we value</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {coreValues.map((v) => (
              <div key={v.name} className="border-t-2 border-gold pt-4">
                <dt className="font-display text-2xl text-pine">{v.name}</dt>
                <dd className="mt-1 text-slate">{v.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/about/our-story" className="rounded-full bg-pine px-6 py-3 font-semibold text-mist hover:bg-pine-soft">Read our story</Link>
            <Link href="/about/beliefs" className="rounded-full border-2 border-pine px-6 py-3 font-semibold text-pine hover:bg-white">What we believe</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
