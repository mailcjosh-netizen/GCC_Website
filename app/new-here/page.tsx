import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/Section";
import { site } from "@/content/site";
import { placeholders } from "@/content/placeholders";

export const metadata = { title: "New here?" };

const expect = [
  { q: "What is a service like?", a: "Lively praise and worship, prayer, and a message from the Bible, usually about two hours." },
  { q: "Which language?", a: "Services are mainly in English, with Khasi and Hindi woven in. Everyone is welcome, whatever your tongue." },
  { q: "What should I wear?", a: "Come as you are. You will see everything from casual wear to jainsems and suits." },
  { q: "What about my children?", a: "Sunday school runs during the service, led by trained volunteers." },
];

export default function NewHere() {
  return (
    <>
      <PageHero title="We’re glad you’re here" intro="Whether you are visiting Shillong, looking for a church home, or just curious about Jesus, you are welcome at GCC." />
      <Container className="grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl text-pine">Service times</h2>
          <ul className="mt-6 space-y-3">
            {site.serviceTimes.map((s) => (
              <li key={s.label} className="flex justify-between border-b border-mist-dark pb-3 text-lg">
                <span>{s.label}</span><span className="font-semibold text-pine">{s.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate">{site.address}</p>
          <h2 className="mt-12 font-display text-4xl text-pine">What to expect</h2>
          <dl className="mt-6 space-y-6">
            {expect.map((e) => (
              <div key={e.q}><dt className="font-display text-2xl text-pine">{e.q}</dt><dd className="mt-1 text-slate">{e.a}</dd></div>
            ))}
          </dl>
        </div>
        <div>
          <iframe src={placeholders.mapEmbed} title="Map of Laban, Shillong" loading="lazy" className="aspect-[2/1] w-full rounded-lg border-0" />
          <div className="mt-8 rounded-lg bg-pine p-8 text-mist">
            <h3 className="font-display text-3xl">Can’t make it in person?</h3>
            <p className="mt-2 text-mist/85">Join our Sunday service live on YouTube, or catch up on past sermons.</p>
            <Link href="/sermons#live" className="mt-5 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-pine-deep">Watch online</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
