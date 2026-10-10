import PageBanner from "@/components/PageBanner";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";
import { notFound } from "next/navigation";
import { worksData } from "../../../data/works";
import { workItemsData } from "../../../data/workItems";
import { pageGalleries } from "../../../data/pageGalleries";

// Combine both datasets for static generation
export async function generateStaticParams() {
  const oldSlugs = Object.keys(worksData).map((slug) => ({ slug }));
  const newSlugs = Object.keys(workItemsData).map((slug) => ({ slug }));
  return [...oldSlugs, ...newSlugs];
}

export async function generateMetadata({ params }) {
  const isNew = !!workItemsData[params.slug];
  const data = workItemsData[params.slug] || worksData[params.slug];
  if (!data) return { title: "Not Found" };

  const pageTitle = isNew ? data.title : data.title;
  return {
    title: `${pageTitle} | Pritha Health Care`,
    description: data.intro.substring(0, 160) + "...",
  };
}

export default function WorkDetailsPage({ params }) {
  const isNew = !!workItemsData[params.slug];
  const data = workItemsData[params.slug] || worksData[params.slug];
  if (!data) notFound();

  const breadcrumbLabel = isNew ? data.menuLabel : data.title;
  const pageHeading = isNew ? data.title : data.title;

  // Build Sidebar Items dynamically based on current page data
  const sidebarItems = [];
  sidebarItems.push({ id: "overview", label: "Overview", isSubItem: false });

  if (data.offers && data.offers.length > 0) {
    sidebarItems.push({
      id: "what-you-get",
      label: "What You Get",
      isSubItem: false,
    });
  }

  if (
    params.slug === "free-eye-surgery" &&
    data.surgeries &&
    data.surgeries.length > 0
  ) {
    sidebarItems.push({
      id: "surgeries",
      label: "Available Surgeries",
      isSubItem: false,
    });
    data.surgeries.forEach((s) => {
      sidebarItems.push({ id: s.id, label: s.name, isSubItem: true });
    });
  }

  if (data.services && data.services.length > 0) {
    sidebarItems.push({
      id: "services",
      label: "Services at Oracle Eye Hospital",
      isSubItem: false,
    });
  }

  if (data.howItWorks && data.howItWorks.length > 0) {
    sidebarItems.push({
      id: "how-it-works",
      label: "How It Works",
      isSubItem: false,
    });
  }

  if (data.whoCanJoin) {
    sidebarItems.push({
      id: "who-can-benefit",
      label: "Who Can Benefit",
      isSubItem: false,
    });
  }

  if (data.extra && data.extra.length > 0) {
    data.extra.forEach((item, idx) => {
      const extraId = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      sidebarItems.push({
        id: `extra-${extraId}`,
        label: item.title,
        isSubItem: false,
      });
    });
  }

  // Gallery (either custom page gallery or data.gallery)
  const pageGallery = pageGalleries[params.slug];
  if (pageGallery || (data.gallery && data.gallery.length > 0)) {
    sidebarItems.push({
      id: "photos",
      label: pageGallery ? pageGallery.heading : "Gallery",
      isSubItem: false,
    });
  }

  if (data.faqs && data.faqs.length > 0) {
    sidebarItems.push({
      id: "faqs",
      label: "Frequently Asked Questions",
      isSubItem: false,
    });
  }

  return (
    <>
      {/* ── Breadcrumb banner ── */}
      <div className="bg-[#122336] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white tracking-wide">
            {pageHeading}
          </h1>
          <nav className="mt-2 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="mx-2 text-slate-500">/</span>
            <Link href="/our-works" className="hover:text-white transition">
              Our Works
            </Link>
            <span className="mx-2 text-slate-500">/</span>
            <span className="text-white font-medium">{breadcrumbLabel}</span>
          </nav>
        </div>
      </div>

      <main className="bg-white text-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start lg:self-stretch">
            {/* Main Content */}
            <article className="flex-1 min-w-0 lg:max-w-3xl">
              {/* Overview Section */}
              <div id="overview" className="scroll-mt-28">
                {params.slug === "oracle-eye-hospital" ? (
                  <>
                    <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-[#122336] m-0">
                      {pageHeading}
                    </h2>
                    <div>
                      <a
                        href="https://oracleeyehospital.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Oracle Eye Hospital website"
                        className="partner-logo-link"
                      >
                        <img
                          src="/images/oracle-eye-care-logo.png"
                          alt="Oracle Eye Hospital logo"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://oracleeyehospital.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mb-5 hover:underline"
                      >
                        <p className="text-[#c54b8c] hover:text-[#9e3a6f] font-semibold text-sm uppercase tracking-widest transition-colors m-0">
                          {data.tagline}
                        </p>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      {!isNew && (
                        <span className="text-3xl" aria-hidden>
                          {data.icon}
                        </span>
                      )}
                      <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-[#122336]">
                        {pageHeading}
                      </h2>
                    </div>
                    <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-5">
                      {data.tagline}
                    </p>
                  </>
                )}

                {/* Intro paragraphs */}
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 space-y-4">
                  {data.intro.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {isNew
                  ? data.stat && (
                      <div className="flex flex-col items-center justify-center rounded-xl bg-[#dc2626] px-6 py-5 text-center shadow-md min-w-[150px]">
                        <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                          {data.stat.value}
                        </span>
                        <span className="mt-1 text-xs sm:text-sm font-semibold text-red-100 leading-tight">
                          {data.stat.label}
                        </span>
                      </div>
                    )
                  : data.stats &&
                    data.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center rounded-xl bg-[#dc2626] px-6 py-5 text-center shadow-md min-w-[150px]"
                      >
                        <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                          {stat.value}
                        </span>
                        <span className="mt-1 text-xs sm:text-sm font-semibold text-red-100 leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
              </div>

              {/* Surgeries */}
              {params.slug === "free-eye-surgery" && data.surgeries && (
                <div className="mb-12">
                  <h3
                    id="surgeries"
                    className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-4 scroll-mt-28"
                  >
                    Available Surgeries
                  </h3>

                  {data.surgeriesNote && (
                    <p className="text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border-l-4 border-slate-300 mb-8">
                      * {data.surgeriesNote}
                    </p>
                  )}

                  {/* Surgery Detail Sections */}
                  <div className="space-y-10 mt-8">
                    {data.surgeries.map((surg, idx) => (
                      <div
                        key={idx}
                        id={surg.id}
                        className="scroll-mt-28 border-t border-slate-200 pt-8 first:border-0 first:pt-0"
                      >
                        <h4 className="font-display text-xl font-bold text-[#122336] mb-3">
                          {surg.name}
                        </h4>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                          {surg.about}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="font-bold text-[#dc2626] text-sm uppercase tracking-wider mb-3">
                              Common signs
                            </h5>
                            <ul className="space-y-2">
                              {surg.symptoms.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-slate-700"
                                >
                                  <span className="text-slate-400 mt-0.5">
                                    •
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold text-[#dc2626] text-sm uppercase tracking-wider mb-3">
                              How it is treated
                            </h5>
                            <ul className="space-y-2">
                              {surg.treatment.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-slate-700"
                                >
                                  <span className="text-[#dc2626] font-bold mt-0.5">
                                    ›
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-5 mb-4 border border-slate-200">
                          <h5 className="font-bold text-[#122336] text-sm uppercase tracking-wider mb-3">
                            Aftercare tips
                          </h5>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {surg.aftercare.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-slate-700"
                              >
                                <span className="text-green-600 font-bold mt-0.5">
                                  ✓
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <p className="text-xs text-slate-400 italic">
                            * This is general information and not medical
                            advice. Consult a doctor for proper diagnosis.
                          </p>
                          <a
                            href="#overview"
                            className="text-sm font-semibold text-[#dc2626] hover:text-red-700 inline-flex items-center gap-1 transition-colors"
                          >
                            <span aria-hidden>↑</span> Back to top
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {data.services && (
                <div className="mb-8">
                  <h3
                    id="services"
                    className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-4 scroll-mt-28"
                  >
                    Services at Oracle Eye Hospital
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.services.map((srv, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border border-slate-200 rounded-lg p-4 shadow-sm"
                      >
                        <h4 className="font-bold text-[#dc2626] mb-1">
                          {srv.name}
                        </h4>
                        <p className="text-sm text-slate-600">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Content */}
              {data.extra && (
                <div className="mb-8 space-y-8">
                  {data.extra.map((item, idx) => {
                    const extraId = `extra-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                    return (
                      <div
                        key={idx}
                        id={extraId}
                        className="bg-slate-50 p-6 border border-slate-200 rounded-lg border-l-4 border-l-[#dc2626] scroll-mt-28"
                      >
                        <h3 className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-700">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Partner */}
              {data.partner && (
                <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700">
                  <img
                    src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1791185243/IMG_20261005_125549_fulyke.png"
                    alt={data.partner}
                    className="h-10 w-auto object-contain"
                  />
                  <span>
                    <strong className="text-[#122336]">Associated With:</strong>{" "}
                    {data.partner}
                  </span>
                </div>
              )}

              {/* What you get */}
              {data.offers && data.offers.length > 0 && (
                <div className="mb-8">
                  <h3
                    id="what-you-get"
                    className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-4 scroll-mt-28"
                  >
                    What You Get
                  </h3>
                  <ul className="space-y-2">
                    {data.offers.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-slate-700 text-sm sm:text-base"
                      >
                        <span className="mt-0.5 flex-shrink-0 text-[#dc2626] font-bold text-lg leading-none">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How it works */}
              {data.howItWorks && data.howItWorks.length > 0 && (
                <div className="mb-8">
                  <h3
                    id="how-it-works"
                    className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-4 scroll-mt-28"
                  >
                    How It Works
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm sm:text-base">
                    {data.howItWorks.map((step, idx) => {
                      const [heading, ...rest] = step.split(":");
                      return (
                        <li key={idx} className="pl-2">
                          <span className="font-semibold text-[#122336]">
                            {heading}:
                          </span>
                          {rest.length > 0 ? rest.join(":") : ""}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}

              {/* Who can benefit */}
              {data.whoCanJoin && (
                <div className="mb-8">
                  <h3
                    id="who-can-benefit"
                    className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-4 scroll-mt-28"
                  >
                    Who Can Benefit
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base bg-slate-50 p-4 border border-slate-200 rounded-lg border-l-4 border-l-[#dc2626]">
                    {data.whoCanJoin}
                  </p>
                </div>
              )}

              {/* Photo Section / Gallery */}
              {pageGallery ? (
                <PhotoGrid
                  sectionId="photos"
                  photos={pageGallery.photos}
                  heading={pageGallery.heading}
                  subheading={pageGallery.subheading}
                />
              ) : data.gallery && data.gallery.length > 0 ? (
                <div id="photos" className="mb-8 scroll-mt-28">
                  <h3
                    id="gallery"
                    className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-4"
                  >
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {data.gallery.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-200 aspect-video rounded-lg overflow-hidden"
                      >
                        <img src={imgUrl} alt="Gallery" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* FAQs */}
              {data.faqs && data.faqs.length > 0 && (
                <div className="mb-10">
                  <h3
                    id="faqs"
                    className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide mb-4 scroll-mt-28"
                  >
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {data.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group bg-slate-50 border border-slate-200 rounded-lg p-4 cursor-pointer"
                      >
                        <summary className="font-semibold text-[#122336] flex justify-between items-center outline-none">
                          {faq.question}
                          <span className="text-[#dc2626] font-bold group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-slate-600 pl-2 border-l-2 border-[#dc2626]">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/contact-us"
                  className="btn !px-8 !py-3 shadow-md hover:shadow-lg transition"
                >
                  Contact Us to Join
                </Link>
                <Link
                  href="/donate"
                  className="btn-dark !px-8 !py-3 shadow-md hover:shadow-lg transition"
                >
                  Donate to this Cause
                </Link>
              </div>
            </article>

            {/* Sticky Sidebar dynamically driven by page content */}
            <div className="order-first lg:order-last w-full lg:w-80 flex-shrink-0 lg:ml-auto lg:self-start lg:sticky lg:top-28 z-20">
              <aside>
                <div className="rounded-xl border border-slate-200 bg-white shadow-md overflow-hidden">
                  <div className="bg-[#122336] px-5 py-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#dc2626] block mb-1">
                      On this page
                    </span>
                    <h2 className="font-display text-lg font-bold text-white uppercase tracking-wide leading-tight">
                      {breadcrumbLabel}
                    </h2>
                  </div>
                  <ul className="divide-y divide-slate-100 max-h-[60vh] overflow-y-auto">
                    {sidebarItems.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={`#${item.id}`}
                          className={`flex items-start gap-2.5 px-5 py-3 text-sm transition-all duration-200 text-slate-700 hover:bg-slate-50 hover:text-[#dc2626] ${
                            item.isSubItem
                              ? "pl-8 text-xs text-slate-500 border-l-2 border-transparent hover:border-[#dc2626]"
                              : ""
                          }`}
                        >
                          <span className="mt-0.5 flex-shrink-0 font-bold leading-none">
                            {item.isSubItem ? "-" : "›"}
                          </span>
                          <span className="leading-snug">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
                    <Link
                      href="/donate"
                      className="btn w-full !py-2.5 text-sm font-bold text-center shadow hover:shadow-md transition"
                    >
                      Support This Work
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
