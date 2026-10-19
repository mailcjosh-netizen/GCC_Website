import PageHero from "@/components/PageHero";

export const metadata = { title: "Prayer request" };

export default function Prayer() {
  return (
    <>
      <PageHero title="How can we pray for you?" intro="Share your request. A member of our pastoral team will pray, and follow up if you would like." />
      <div className="mx-auto max-w-2xl px-4 py-16">
        {/* TODO: connect to a secure backend. Only authorised pastoral staff may read submissions (Policy §10). */}
        <form className="space-y-5 rounded-lg bg-white p-8">
          <div>
            <label htmlFor="name" className="block font-semibold">Name <span className="font-normal text-slate">(optional)</span></label>
            <input id="name" className="mt-1 w-full rounded border border-mist-dark px-4 py-2" />
          </div>
          <div>
            <label htmlFor="contact" className="block font-semibold">Phone or email <span className="font-normal text-slate">(if you want a follow-up)</span></label>
            <input id="contact" className="mt-1 w-full rounded border border-mist-dark px-4 py-2" />
          </div>
          <div>
            <label htmlFor="request" className="block font-semibold">Your prayer request</label>
            <textarea id="request" required rows={6} className="mt-1 w-full rounded border border-mist-dark px-4 py-2" />
          </div>
          <label className="flex gap-3 text-sm text-slate">
            <input type="checkbox" required className="mt-1" />
            I understand my request will be read only by GCC’s pastoral team and handled under India’s Digital Personal Data Protection Act, 2023.
          </label>
          <button type="submit" className="rounded-full bg-pine px-6 py-3 font-semibold text-mist hover:bg-pine-soft">Send prayer request</button>
        </form>
      </div>
    </>
  );
}
