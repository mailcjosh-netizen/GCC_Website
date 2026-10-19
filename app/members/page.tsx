import PageHero from "@/components/PageHero";

export const metadata = { title: "Member portal" };

export default function Members() {
  return (
    <>
      <PageHero title="Member portal" intro="Full sermon downloads, cell-group materials, the member directory and early newsletter access, for registered GCC members." />
      <div className="mx-auto max-w-md px-4 py-16">
        {/* UI shell only. Accounts are approved against the membership roll (Policy §7.2). */}
        <form className="space-y-5 rounded-lg bg-white p-8">
          <div>
            <label htmlFor="login" className="block font-semibold">Email or phone</label>
            <input id="login" className="mt-1 w-full rounded border border-mist-dark px-4 py-2" />
          </div>
          <div>
            <label htmlFor="pw" className="block font-semibold">Password</label>
            <input id="pw" type="password" className="mt-1 w-full rounded border border-mist-dark px-4 py-2" />
          </div>
          <button type="button" className="w-full rounded-full bg-pine px-6 py-3 font-semibold text-mist">Log in</button>
          <p className="text-center text-sm text-slate">Not registered? Request access and the church office will confirm your membership.</p>
        </form>
      </div>
    </>
  );
}
