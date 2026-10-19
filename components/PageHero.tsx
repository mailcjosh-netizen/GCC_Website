import Ridges from "./Ridges";

export default function PageHero({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-pine-deep pb-32 pt-16 text-mist">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="font-display text-5xl font-semibold sm:text-6xl">{title}</h1>
        {intro && <p className="mt-4 max-w-prose text-lg text-mist/85">{intro}</p>}
      </div>
      <Ridges className="absolute inset-x-0 bottom-0 h-24 w-full" />
    </section>
  );
}
