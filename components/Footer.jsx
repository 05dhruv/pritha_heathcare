"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not subscribe");
      setStatus({ state: "success", msg: "Thank you for subscribing to our updates!" });
      setEmail("");
      setTimeout(() => setStatus({ state: "idle", msg: "" }), 4000);
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
      setTimeout(() => setStatus({ state: "idle", msg: "" }), 4000);
    }
  }

  return (
    <footer className="bg-[#0b1624] text-slate-300 border-t border-slate-800/80 overflow-hidden font-body">
      {/* Main Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Organization Mission & Trust Credentials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.jpg"
                  alt={site.name}
                  className="h-12 w-auto object-contain rounded-lg border border-slate-700 shadow"
                />
                <div>
                  <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight block">
                    PRITHA HEALTH CARE
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#dc2626]">
                    The Breath of Life
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                Pritha Health Care is a charitable institution located in Moradabad, Uttar Pradesh. We are devoted to eradicating avoidable blindness, providing free prosthetics to amputees, and taking mobile healthcare clinics directly to remote villages.
              </p>

              {/* Trust & Tax Badges */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                  <span className="text-emerald-400">✓</span> 80G Tax Exempt
                </span>

              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs sm:text-sm text-slate-300">
                  Associated With Oracle Eye Hospital, Moradabad, Uttar Pradesh
                </span>
                <a
                  href="https://oracleeyehospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all hover:scale-105 hover:opacity-80"
                >
                  <img
                    src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1791185243/IMG_20261005_125549_fulyke.png"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>
              <div className="mt-1.5">
                <a
                  href="https://oracleeyehospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#c54b8c] hover:underline transition-all"
                >
                  Our Trusted Healthcare Partner
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Healthcare Initiatives (3 cols) */}
          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-display font-bold text-white text-base sm:text-lg tracking-wide uppercase">
              Healthcare Services
            </h5>
            <div className="h-0.5 w-10 bg-[#dc2626] mt-2 mb-4" />

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/our-works/free-eye-surgery"
                  className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group"
                >
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Cataract Surgery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-works/rural-eye-camps"
                  className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group"
                >
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Rural Eye Camps</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-works/dental-camps"
                  className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group"
                >
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Dental Camps</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-works/tobacco-awareness"
                  className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group"
                >
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Tabacco Suggestion Awareness Program</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/our-works/cancer-screening-camps"
                  className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group"
                >
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Orale Cancer Patient Realization</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/our-works/health-talks-webinars"
                  className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group"
                >
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Health Talks &amp; Webinars</span>
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-slate-700/50">
                <Link
                  href="/our-works/oracle-eye-hospital"
                  className="text-amber-400 hover:text-amber-300 hover:translate-x-1 transition inline-flex items-center gap-2 group font-medium"
                >
                  <span className="text-amber-500 font-bold group-hover:text-amber-400">&rsaquo;</span>
                  <span>Oracle Eye Hospital</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & Transparency (2 cols) */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h5 className="font-display font-bold text-white text-base sm:text-lg tracking-wide uppercase">
              Organization
            </h5>
            <div className="h-0.5 w-10 bg-[#dc2626] mt-2 mb-4" />

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group">
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>About Our Mission</span>
                </Link>
              </li>
              <li>
                <Link href="/honors-and-awards" className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group">
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Honors &amp; Awards</span>
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group">
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Impact Reports</span>
                </Link>
              </li>
              <li>
                <Link href="/notifications" className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group">
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Public Notices</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group">
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Latest News &amp; Updates</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-2 group">
                  <span className="text-red-500 font-bold group-hover:text-red-400">&rsaquo;</span>
                  <span>Contact Headquarters</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="400">
            <h5 className="font-display font-bold text-white text-base sm:text-lg tracking-wide uppercase">
              Get In Touch
            </h5>
            <div className="h-0.5 w-10 bg-[#dc2626] mt-2 mb-4" />

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <span className="text-red-500 text-base mt-0.5">📍</span>
                <div>
                  <p className="text-slate-200 font-semibold">Head Office:</p>
                  <p className="text-slate-400 text-xs">Moradabad, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-red-500 text-base mt-0.5">✉️</span>
                <div>
                  <p className="text-slate-200 font-semibold">Official Email:</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-slate-400 hover:text-white transition text-xs break-all"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-red-500 text-base mt-0.5">📞</span>
                <div>
                  <p className="text-slate-200 font-semibold">Support Desk:</p>
                  <p className="text-slate-400 text-xs">{site.phone} / {site.phone2}</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <p className="text-xs font-semibold text-white mb-2">
                Subscribe for Camp Schedules &amp; Impact
              </p>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dc2626]"
                />
                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white px-3.5 py-2 text-xs font-bold transition flex-shrink-0 disabled:opacity-50"
                >
                  {status.state === "loading" ? "..." : "Join"}
                </button>
              </form>
              {status.msg && (
                <p className={`mt-2 text-xs font-medium ${status.state === "success" ? "text-emerald-400" : "text-red-400"}`}>
                  {status.msg}
                </p>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2.5">
              {site.social
                ?.filter((s) => s.name.toLowerCase() !== "linkedin")
                .map((s) => {
                  let icon = null;
                  if (s.name.toLowerCase() === "facebook") {
                    icon = (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    );
                  } else if (s.name.toLowerCase() === "x" || s.name.toLowerCase() === "twitter") {
                    icon = (
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    );
                  } else if (s.name.toLowerCase() === "instagram") {
                    icon = (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    );
                  } else if (s.name.toLowerCase() === "youtube") {
                    icon = (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    );
                  } else if (s.name.toLowerCase() === "pinterest") {
                    icon = (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.368-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    );
                  }

                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 hover:bg-[#dc2626] text-slate-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-transparent hover:scale-105 shadow-sm"
                    >
                      {icon}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pb-16 sm:pb-0">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
            <Link href="/refund-policy" className="hover:text-white transition">Donation Refund Policy</Link>
            <Link href="/csr-funding" className="hover:text-white transition">CSR Funding</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Quick Action Bar (Only visible on mobile screens < 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#122336]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl sm:hidden">
        {/* Call Helpline */}
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold transition"
        >
          <svg className="w-3.5 h-3.5 fill-current text-[#dc2626]" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span>Call Us</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${(site.phone2 || "919012403111").replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold shadow-md transition"
        >
          <span>WhatsApp</span>
        </a>

        {/* Direct Donate */}
        <Link
          href="/donate"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white text-xs font-bold shadow-md shadow-red-900/40 transition"
        >
          <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span>Donate</span>
        </Link>
      </div>

      {/* Floating Desktop WhatsApp & Back To Top */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-center gap-2.5">
        <a
          href={`https://wa.me/${(site.phone2 || "919012403111").replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white"
        >
          <span className="text-xl">💬</span>
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          title="Back to Top"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#122336]/80 hover:bg-[#dc2626] text-white shadow-lg backdrop-blur hover:scale-110 active:scale-95 transition-all duration-200 border border-white/20"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
