import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { Container, SectionHead } from "@/components/Section";
import { site } from "@/content/site";
import { sermons, devotionals, events, testimonies, actionTiles, ministries } from "@/content/home";
import { milestones } from "@/content/history";
import { placeholders } from "@/content/placeholders";

const stats = [
  { n: "1990", l: "Gathered in Shillong" },
  { n: "10+", l: "States reached in India" },
  { n: "5", l: "Ministry gifts we build on" },
  { n: "3", l: "Languages: English, Khasi, Hindi" },
];

export default function Home() {
  const [latest, ...recent] = sermons;
  return (
    <>
      <HeroSlider />

      {/* Welcome */}
      <section className="bg-pine-deep pb-20 text-mist">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">A family church for every tribe and tongue</h2>
            <p className="mt-6 text-lg text-mist/85">
              Grace Covenant Church began in 1990 with a pastor’s prayer that this church would never belong to one community alone.
              Today we worship in English, Khasi and Hindi, a Spirit-filled, Word-based family built on the five-fold ministry.
            </p>
            <p className="mt-4 text-mist/70">{site.vision}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="rounded-full bg-gold px-6 py-3 font-semibold text-pine-deep hover:bg-gold-soft">About GCC</Link>
              <Link href="/new-here" className="rounded-full border border-mist/50 px-6 py-3 hover:bg-mist/10">I’m new here</Link>
            </div>
          </div>
          <div className="relative">
            <img src={placeholders.welcomeVideo} alt="Preaching in GCC’s first home at Laban, early 1990s" className="aspect-video w-full rounded-lg object-cover" />
            <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold text-pine-deep shadow-lg" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
          </div>
        </Container>
        <Container>
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-mist/15 pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-display text-5xl text-gold-soft">{s.n}</dd>
                <dd className="mt-1 text-mist/80">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Sermons */}
      <section className="py-20" id="sermons">
        <Container>
          <SectionHead title="Sunday sermon" intro="Catch up on this week’s message, or watch a recent one." more={{ href: "/sermons", label: "All sermons" }} />
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <img src={latest.image} alt="" className="aspect-video w-full rounded-lg object-cover" />
              <h3 className="mt-4 font-display text-3xl text-pine">{latest.title}</h3>
              <p className="text-slate">{latest.speaker}, {latest.date}</p>
            </article>
            <div className="space-y-8">
              {recent.map((s) => (
                <article key={s.title}>
                  <img src={s.image} alt="" className="aspect-video w-full rounded-lg object-cover" />
                  <h3 className="mt-3 font-display text-2xl text-pine">{s.title}</h3>
                  <p className="text-sm text-slate">{s.speaker}, {s.date}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Devotionals */}
      <section className="bg-white py-16">
        <Container>
          <SectionHead title="Word for today" more={{ href: "/sermons#devotionals", label: "More devotionals" }} />
          <div className="grid gap-6 md:grid-cols-3">
            {devotionals.map((d) => (
              <blockquote key={d.date} className="border-l-4 border-gold bg-mist-light p-6">
                <p className="text-sm text-slate">{d.date}</p>
                <p className="mt-3 font-display text-2xl leading-snug text-pine">“{d.text}”</p>
                <footer className="mt-3 font-semibold text-slate">{d.verse}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="py-20">
        <Container>
          <SectionHead title="Coming up" more={{ href: "/events", label: "Church calendar" }} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <article key={e.title} className="overflow-hidden rounded-lg bg-white">
                <img src={e.image} alt="" className="aspect-[3/2] w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm font-semibold text-slate">{e.date}, {e.time}</p>
                  <h3 className="mt-1 font-display text-2xl text-pine">{e.title}</h3>
                  <Link href="/events" className="mt-4 inline-block border-b-2 border-gold font-semibold text-pine">{e.action}</Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Action tiles */}
      <section className="bg-slate py-20 text-mist">
        <Container>
          <h2 className="mb-10 font-display text-4xl font-semibold sm:text-5xl">How can we help you today?</h2>
          <div className="grid gap-px overflow-hidden rounded-lg bg-mist/20 sm:grid-cols-2 lg:grid-cols-3">
            {actionTiles.map((t) => (
              <Link key={t.title} href={t.href} className="group bg-slate p-8 hover:bg-pine">
                <h3 className="font-display text-3xl">{t.title}</h3>
                <p className="mt-2 text-mist/85">{t.text}</p>
                <span className="mt-5 inline-block border-b-2 border-gold font-semibold text-gold-soft">{t.cta}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonies */}
      <section className="py-20">
        <Container>
          <SectionHead title="What God has done" intro="Stories of healing, faith and new beginnings from our church family." more={{ href: "/contact#testimony", label: "Share your story" }} />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {testimonies.map((t) => (
              <figure key={t.title}>
                <img src={t.image} alt="" className="aspect-square w-full rounded-lg object-cover" />
                <figcaption className="mt-3 font-display text-xl text-pine">{t.title}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Ministries */}
      <section className="bg-white py-20">
        <Container>
          <SectionHead title="A place for everyone" intro="Find your people at GCC, whatever your age or season of life." more={{ href: "/ministries", label: "All ministries" }} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.map((m, n) => (
              <Link
                key={m.id}
                href={`/ministries#${m.id}`}
                className={`group relative overflow-hidden rounded-lg ${n === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <img src={m.image} alt="" className="h-full min-h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/90 to-transparent" />
                <div className="absolute bottom-0 p-5 text-mist">
                  <h3 className="font-display text-3xl">{m.title}</h3>
                  <p className="text-mist/85">{m.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Story teaser */}
      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-5">
          <img src={placeholders.storyTeaser} alt="The early GCC church family" className="aspect-[4/5] w-full rounded-lg object-cover lg:col-span-2" />
          <div className="lg:col-span-3">
            <h2 className="font-display text-4xl font-semibold text-pine sm:text-5xl">Birthed in tears, built by God</h2>
            <p className="mt-4 max-w-prose text-lg text-slate">
              From 300 believers at the YMCA Ferndale Complex, through a season when only a faithful few remained, to a church reaching
              more than ten states. Our story is one of God’s faithfulness.
            </p>
            <ol className="mt-8 space-y-5 border-l-2 border-gold pl-6">
              {milestones.filter((m) => ["19 Aug 1990", "1992", "14 Mar 1993", "Today"].includes(m.year)).map((m) => (
                <li key={m.year}>
                  <p className="font-semibold text-slate">{m.year}</p>
                  <p className="font-display text-2xl text-pine">{m.title}</p>
                </li>
              ))}
            </ol>
            <Link href="/about/our-story" className="mt-8 inline-block rounded-full bg-pine px-6 py-3 font-semibold text-mist hover:bg-pine-soft">Read our story</Link>
          </div>
        </Container>
      </section>

      {/* Newsletter + subscribe */}
      <section id="subscribe" className="bg-pine py-20 text-mist">
        <Container className="grid items-center gap-12 md:grid-cols-3">
          <img src={placeholders.newsletterCover} alt="Newsletter cover image: the hills around Shillong" className="mx-auto aspect-[3/4] w-56 rounded object-cover shadow-2xl md:w-full md:max-w-xs" />
          <div className="md:col-span-2">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">The GCC Newsletter</h2>
            <p className="mt-3 max-w-prose text-mist/85">
              Teaching, testimonies and news from the church family, every quarter. Get each issue and the weekly sermon in your inbox.
            </p>
            {/* TODO: connect to the approved email/newsletter tool */}
            <form className="mt-6 flex max-w-lg flex-col gap-3 sm:flex-row" aria-label="Subscribe to the newsletter">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" type="email" required placeholder="Your email address" className="flex-1 rounded-full px-5 py-3 text-ink" />
              <button type="submit" className="rounded-full bg-gold px-6 py-3 font-semibold text-pine-deep hover:bg-gold-soft">Subscribe</button>
            </form>
            <p className="mt-3 text-sm text-mist/70">
              We use your email only to send church updates, in line with India’s DPDP Act 2023. Unsubscribe any time.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
