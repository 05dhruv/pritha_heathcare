"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route navigation
  useEffect(() => {
    setOpen(false);
    setSub(null);
  }, [pathname]);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
      scrolled ? "shadow-md border-b border-slate-200/80" : "shadow-sm border-b border-slate-100"
    }`}>
      {/* Top Notification / Emergency Bar */}
      <div className="bg-[#122336] text-[11px] sm:text-xs text-white border-b border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between py-1.5 sm:py-2">
          {/* Contact phone links */}
          <div className="flex items-center gap-2.5 sm:gap-4 overflow-x-auto scrollbar-none whitespace-nowrap">
            <a
              href={`tel:${(site.phone || "").replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#dc2626] transition font-medium"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#dc2626] flex-shrink-0" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>{site.phone}</span>
            </a>

            <span className="text-white/30 hidden sm:inline">|</span>

            <a
              href={`mailto:${site.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#dc2626] transition text-white/90"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#dc2626] flex-shrink-0" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>{site.email}</span>
            </a>
          </div>

          {/* Right badge: 80G Tax Exemption & Govt Registration */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-semibold text-emerald-300 border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>80G Tax Exempted</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] text-white/70">
              Regd. Charitable Trust
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between py-2 sm:py-2.5">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-3 flex-shrink min-w-0 mr-1 sm:mr-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpg"
            alt="Pritha Health Care Logo"
            className="h-8 sm:h-11 md:h-14 w-auto object-contain rounded-lg shadow-sm border border-slate-200/80 transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
          />
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-display font-bold text-xs sm:text-base md:text-xl lg:text-2xl text-[#122336] tracking-tight leading-none group-hover:text-[#dc2626] transition-colors truncate">
              PRITHA HEALTH CARE
            </span>
            <span className="text-[8px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#dc2626] mt-0.5 truncate hidden sm:block">
              The Breath of Life
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex ml-auto" aria-label="Main Navigation">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:text-[#dc2626] hover:bg-slate-50 transition flex items-center gap-1 text-[15px]"
                  aria-haspopup="true"
                >
                  {item.label}{" "}
                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#dc2626] transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full min-w-56 rounded-xl border border-slate-200 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
                  {item.children.map((c) => (
                    <Link 
                      key={c.href} 
                      href={c.href} 
                      className={`block px-4 py-2 text-sm transition ${
                        c.isHighlight 
                          ? 'mt-1 border-t border-slate-100 bg-slate-50 font-semibold text-[#122336] hover:bg-[#f0f8f4] hover:text-[#dc2626]' 
                          : 'hover:bg-[#f0f8f4] hover:text-[#dc2626] text-slate-700'
                      }`}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 font-medium text-slate-700 hover:text-[#dc2626] hover:bg-slate-50 transition text-[15px]"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/csr-funding"
            className="btn ml-3 !px-4 !py-2 text-xs font-bold shadow-md hover:shadow-lg transition-transform"
          >
            CSR Funding
          </Link>
          <Link
            href="/donate"
            className="btn ml-2 !px-4 !py-2 text-xs font-bold shadow-md hover:shadow-lg transition-transform"
          >
            Donate Now
          </Link>
        </nav>

        {/* Mobile Action Buttons + Hamburger */}
        <div className="flex items-center gap-1 sm:gap-2 lg:hidden flex-shrink-0">
          <Link
            href="/csr-funding"
            className="btn !px-2 sm:!px-3 !py-1 sm:!py-1.5 text-[10px] sm:text-xs font-bold shadow-sm whitespace-nowrap active:scale-95"
          >
            <span>CSR Funding</span>
          </Link>
          <Link
            href="/donate"
            className="btn !px-2 sm:!px-3 !py-1 sm:!py-1.5 text-[10px] sm:text-xs font-bold shadow-sm whitespace-nowrap active:scale-95"
          >
            <span>Donate</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="rounded-lg border border-slate-200 p-1.5 sm:p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none active:scale-95"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer with Backdrop */}
      {open && (
        <div className="fixed inset-0 top-[90px] sm:top-[96px] z-50 lg:hidden flex flex-col bg-black/50 backdrop-blur-sm animate-fade-in">
          <nav
            className="bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-96px)] overflow-y-auto animate-slide-down"
            aria-label="Mobile Navigation"
          >
            <div className="p-4 sm:p-6 space-y-1">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-slate-100 last:border-0 pb-1">
                  {item.children ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between py-2.5 font-bold text-slate-800 hover:text-[#dc2626] transition text-base"
                        onClick={() => setSub(sub === item.label ? null : item.label)}
                        aria-expanded={sub === item.label}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                            sub === item.label ? "rotate-180 text-[#dc2626]" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {sub === item.label && (
                        <div className="pb-2 pl-3 space-y-1 border-l-2 border-[#dc2626]/40 ml-1.5 animate-slide-down">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className={`block py-2 text-sm font-medium transition ${
                                c.isHighlight 
                                  ? 'mt-1 border-t border-slate-100 font-semibold text-slate-800 hover:text-[#dc2626]' 
                                  : 'text-slate-600 hover:text-[#dc2626]'
                              }`}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 font-bold text-slate-800 hover:text-[#dc2626] transition text-base"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Action Box inside Mobile Menu */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/csr-funding"
                  onClick={() => setOpen(false)}
                  className="btn !w-full !py-2.5 text-center text-xs font-bold shadow-sm active:scale-95"
                >
                  CSR Funding
                </Link>
                <Link
                  href="/donate"
                  onClick={() => setOpen(false)}
                  className="btn !w-full !py-2.5 text-center text-xs font-bold shadow-sm active:scale-95"
                >
                  Donate Now
                </Link>
              </div>

              {/* Quick Helpline Support */}
              <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-sm flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Patient Helpline
                  </span>
                  <a
                    href={`tel:${(site.phone || "").replace(/\s/g, "")}`}
                    className="font-bold text-[#122336] hover:text-[#dc2626] transition"
                  >
                    {site.phone}
                  </a>
                </div>
                <a
                  href={`https://wa.me/${(site.phone2 || "917900351111").replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 font-bold text-[11px] flex items-center gap-1 shadow-sm transition"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
          {/* Click backdrop to close */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
