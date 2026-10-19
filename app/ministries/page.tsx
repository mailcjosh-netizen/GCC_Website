import PageHero from "@/components/PageHero";
import { Container } from "@/components/Section";
import { ministries } from "@/content/home";

export const metadata = { title: "Ministries" };

export default function Ministries() {
  return (
    <>
      <PageHero title="Ministries" intro="There is a place for you to grow, belong and serve." />
      <Container className="space-y-16 py-16">
        {ministries.map((m, n) => (
          <section key={m.id} id={m.id} className={`grid scroll-mt-28 items-center gap-8 md:grid-cols-2 ${n % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={m.image} alt="" className="w-full rounded-lg" />
            <div>
              <h2 className="font-display text-4xl text-pine">{m.title}</h2>
              <p className="mt-3 text-lg text-slate">{m.text}</p>
              <p className="mt-3 text-slate">Meeting times, leaders and how to join will be added here.</p>
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
