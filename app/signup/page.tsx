import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 font-bold text-white">S</div>
          <h1 className="mt-5 text-3xl font-bold text-slate-900">Create your workspace</h1>
          <p className="mt-2 text-sm text-slate-500">Set up a resilient operations environment for your team.</p>
        </div>

        <form className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">First name</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="Jane" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Last name</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="Doe" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Work email</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="you@company.com" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Company</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="North Star Manufacturing" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="••••••••" />
          </div>

          <button type="button" className="md:col-span-2 w-full rounded-xl bg-sky-600 px-4 py-3 font-medium text-white hover:bg-sky-500">
            Create account
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-slate-500">
          Already have an account? <Link href="/login" className="font-semibold text-sky-600">Log in</Link>
        </div>
      </div>
    </main>
  );
}
