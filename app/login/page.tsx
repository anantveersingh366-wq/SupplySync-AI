import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 font-bold text-white">S</div>
          <h1 className="mt-5 text-3xl font-bold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Log in to your SupplySync workspace.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none ring-0 transition focus:border-sky-400" placeholder="you@company.com" />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition focus:border-sky-400" placeholder="••••••••" />
          </div>

          <button type="button" className="w-full rounded-xl bg-sky-600 px-4 py-3 font-medium text-white hover:bg-sky-500">
            Sign in
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-slate-500">
          No account yet? <Link href="/signup" className="font-semibold text-sky-600">Create one</Link>
        </div>
      </div>
    </main>
  );
}
