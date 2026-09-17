"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !password) { setError("Enter your email and password to continue."); return; }
    localStorage.setItem("supplys﻿ync-session", JSON.stringify({ email, signedInAt: new Date().toISOString() }));
    router.push("/overview");
  }

  return <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6"><div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"><div className="mb-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 font-bold text-white">S</div><h1 className="mt-5 text-3xl font-bold text-slate-900">Welcome back</h1><p className="mt-2 text-sm text-slate-500">Log in to your SupplySync workspace.</p></div><form onSubmit={handleSubmit} className="space-y-4"><div><label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">Email</label><input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition focus:border-sky-400" placeholder="you@company.com" /></div><div><label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="password">Password</label><input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none transition focus:border-sky-400" placeholder="••••••••" /></div>{error && <p className="text-sm text-rose-600">{error}</p>}<button type="submit" className="w-full rounded-xl bg-sky-600 px-4 py-3 font-medium text-white hover:bg-sky-500">Sign in</button></form><div className="mt-5 text-center text-sm text-slate-500">No account yet? <Link href="/signup" className="font-semibold text-sky-600">Create one</Link></div></div></main>;
}
