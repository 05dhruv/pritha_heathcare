import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import {
  defaultSlides,
  defaultStats,
  defaultPosts,
  endeavors,
  site,
} from "@/lib/site";
import HeroSlider from "@/components/HeroSlider";
import QuickImpactBar from "@/components/QuickImpactBar";
import MilestonesSection from "@/components/MilestonesSection";
import Photo from "@/components/Photo";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [dbSlides, dbStats, dbPosts] = await Promise.all([
    safe(
      () =>
        prisma.slide.findMany({
          where: { active: true },
          orderBy: { position: "asc" },
        }),
      []
    ),
    safe(
      () =>
        prisma.stat.findMany({
          orderBy: { position: "asc" },
        }),
      []
    ),
    safe(
      () =>
        prisma.post.findMany({
          where: { published: true },
          orderBy: { postedAt: "desc" },
          take: 3,
        }),
      []
    ),
  ]);

  const slides = dbSlides && dbSlides.length > 0 ? dbSlides : defaultSlides;
  const stats = dbStats && dbStats.length > 0 ? dbStats : defaultStats;
  const posts = (dbPosts && dbPosts.length > 0 ? dbPosts : defaultPosts).slice(0, 3);

  return (
    <div className="bg-[#f8fafc] text-slate-800 selection:bg-red-500 selection:text-white">
      {/* 1. Hero Carousel */}
      <HeroSlider slides={slides} />

      {/* 2. Interactive Instant Impact / Quick Donation Bar */}
      <QuickImpactBar />

      {/* 3. Official Trust & Govt. Accreditation Bar */}
      <section className="py-6 sm:py-8 bg-slate-50/90 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div
              className="flex items-center gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 text-lg sm:text-xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                🛡️
              </span>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 truncate">Tax Exemption</p>
                <p className="text-xs sm:text-sm font-bold text-[#122336] truncate">80G &amp; 12A Certified</p>
                <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">50% IT Tax Deduction</p>
              </div>
            </div>

            <div
              className="flex items-center gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition-all group"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 text-lg sm:text-xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
                🏥
              </span>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 truncate">Clinical Partner</p>
                <p className="text-xs sm:text-sm font-bold text-[#122336] truncate">Oracle Eye Hospital</p>
                <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">Moradabad, UP</p>
                <p className="text-[10px] sm:text-[11px] text-blue-600 underline truncate">
                  <Link href="/our-works/oracle-eye-hospital">
                    View Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About & Core Pillars (Modern Bento Grid Layout) */}
      <section id="about-section2" className="py-16 sm:py-20 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <span className="inline-block px-3.5 py-1 rounded-full bg-red-100 text-[#dc2626] text-xs font-bold tracking-widest uppercase mb-3">
              — The Breath of Life —
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#122336]">
              Transforming Lives Across Uttar Pradesh
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-body leading-relaxed">
              Pratha Health Care is a prestigious charitable institution located in Moradabad. 
              We are dedicated to uplifting marginalized communities through accessible specialized medical care, disability empowerment, and inclusive education.
            </p>
          </div>

          {/* 3 Core Healthcare Pillars */}
          <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* Pillar 1: Eye Care */}
            <div
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <div className="h-52 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero_eyecare.jpg"
                    alt="Eye Care Examination"
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    4,200+ Free Surgeries Done
                  </span>
                  <span className="text-2xl">👁️</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#122336] group-hover:text-[#dc2626] transition">
                  Comprehensive Eye Care
                </h3>

                <p className="mt-2 text-sm text-slate-600 font-body leading-relaxed">
                  Aiming to eradicate avoidable blindness by providing free microsurgical cataract interventions, cornea transplants, retinal screenings, and free prescription glasses.
                </p>

                <div className="mt-4 space-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Free Micro-Incision Cataract Surgery
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Intraocular Lens (IOL) Implants
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Village Eye Screening Camps
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/eyecare"
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#dc2626] hover:text-[#b91c1c] transition"
                >
                  <span>Explore Eye Care Mission</span>
                  <span className="text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Pillar 2: Disability Care & Prosthetics */}
            <div
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="h-52 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero_disability.jpg"
                    alt="Prosthetics and Mobility"
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    11,000+ Mobility Aids
                  </span>
                  <span className="text-2xl">🦾</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#122336] group-hover:text-[#dc2626] transition">
                  Artificial Limbs &amp; Rehabilitation
                </h3>

                <p className="mt-2 text-sm text-slate-600 font-body leading-relaxed">
                  Manufacturing custom-fit lightweight prosthetics, calipers, tricycles and assistive mobility aids to help amputees regain movement and earn dignified livelihoods.
                </p>

                <div className="mt-4 space-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span> Custom Modular Prosthetic Fitting
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span> Wheelchairs &amp; Tricycles Distribution
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span> Post-Fitting Physiotherapy Support
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/disability-care"
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#dc2626] hover:text-[#b91c1c] transition"
                >
                  <span>Rehabilitation Center</span>
                  <span className="text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Pillar 3: Rural Outreach Mobile Medical Clinics */}
            <div
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="h-52 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero_rural_clinic.jpg"
                    alt="Rural Mobile Health Clinic"
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    325+ Rural Health Camps
                  </span>
                  <span className="text-2xl">🚑</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#122336] group-hover:text-[#dc2626] transition">
                  Rural Mobile Medical Clinics
                </h3>

                <p className="mt-2 text-sm text-slate-600 font-body leading-relaxed">
                  Custom-equipped mobile health vans taking doctors, diagnostic testing equipment, free medicines, cancer screenings, and dental checkups directly to remote villages.
                </p>

                <div className="mt-4 space-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">✓</span> Doorstep Doctor &amp; Nursing Consultations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">✓</span> Free Diagnostics &amp; Essential Medicines
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">✓</span> Oral Cancer &amp; Chronic Health Screenings
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/outreach-services"
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#dc2626] hover:text-[#b91c1c] transition"
                >
                  <span>Explore Rural Health Van</span>
                  <span className="text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Milestones Achieved (Interactive Charts & Counters) */}
      <MilestonesSection stats={stats} />

      {/* 6. Real Patient Transformation Stories (Human Ground Reality) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <span className="inline-block px-3.5 py-1 rounded-full bg-red-100 text-[#dc2626] text-xs font-bold tracking-widest uppercase mb-3">
              Real Stories of Hope
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#122336] tracking-tight">
              From Helplessness to Independence
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-body">
              Every surgery performed, every prosthetic limb delivered, and every village reached represents an authentic human life forever restored.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Story 1: Eye Care */}
            <div
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                    RP
                  </div>
                  <div>
                    <h4 className="font-bold text-[#122336] text-base leading-tight">
                      Ram Prasad (68 yrs)
                    </h4>
                    <span className="text-xs text-slate-500">Cataract Patient • Sambhal District</span>
                  </div>
                </div>
                <p className="text-sm text-slate-700 italic font-body leading-relaxed">
                  &ldquo;For four years, I was completely dependent on my son to even walk out of the room. After the free cataract surgery at Pratha Health Care, I can clearly see my grandchildren&rsquo;s faces again. It feels like getting a rebirth.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span>Free Surgery &amp; Lens</span>
                <span>Restored 6/9 Vision</span>
              </div>
            </div>

            {/* Story 2: Disability Care */}
            <div
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                    SK
                  </div>
                  <div>
                    <h4 className="font-bold text-[#122336] text-base leading-tight">
                      Sunita Kumari (24 yrs)
                    </h4>
                    <span className="text-xs text-slate-500">Prosthetic Recipient • Moradabad</span>
                  </div>
                </div>
                <p className="text-sm text-slate-700 italic font-body leading-relaxed">
                  &ldquo;Losing my leg in a road accident felt like the end of my life and dreams. The team at Pratha custom-crafted an artificial limb for me without taking a single rupee. Today, I walk to my tailoring shop with pride and earn on my own.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span>Custom Orthotic Aid</span>
                <span>Independent Livelihood</span>
              </div>
            </div>

            {/* Story 3: Rural Mobile Camp */}
            <div
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-[#122336] text-base leading-tight">
                      Mohd. Rafiq (56 yrs)
                    </h4>
                    <span className="text-xs text-slate-500">Mobile Camp Patient • Chandausi</span>
                  </div>
                </div>
                <p className="text-sm text-slate-700 italic font-body leading-relaxed">
                  &ldquo;I had failing eyesight and chronic blood pressure, but travelling 40 km to the district hospital was impossible for me. The Pratha Mobile Medical Van diagnosed my condition in our village square and gave free medicines and glasses at my doorstep.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-purple-700">
                <span>Free Camp Diagnostics</span>
                <span>Ongoing Rural Health Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Endeavors & Key Initiatives */}
      <section id="project-section4" className="py-16 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-[#122336] md:text-4xl">
              OUR ENDEAVORS
            </h2>
            <p className="mt-3 text-base text-slate-600 font-body">
              Pratha Health Care operates specialized healthcare centers and clinical wings to ensure no marginalized individual is left behind.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#dc2626] rounded-full" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {endeavors.map((e, idx) => (
              <Link
                key={e.title}
                href={e.href}
                data-aos="zoom-in"
                data-aos-delay={(idx % 3) * 150}
                className="group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="h-64 w-full overflow-hidden bg-slate-100">
                  <Photo
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#122336]/90 via-[#122336]/30 to-transparent flex items-end p-5">
                  <div>
                    <h3 className="text-white font-display text-xl font-bold">
                      {e.title}
                    </h3>
                    <span className="text-xs text-red-400 font-semibold inline-flex items-center gap-1 mt-1 group-hover:text-red-300 transition">
                      View Project Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Additional Project Card: Rural Outreach */}
            <Link
              href="/our-works"
              data-aos="zoom-in"
              data-aos-delay="300"
              className="group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="h-64 w-full overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero_rural_clinic.jpg"
                  alt="Rural Outreach Program"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#122336]/90 via-[#122336]/30 to-transparent flex items-end p-5">
                <div>
                  <h3 className="text-white font-display text-xl font-bold">
                    Community Works &amp; Health Camps
                  </h3>
                  <span className="text-xs text-red-400 font-semibold inline-flex items-center gap-1 mt-1 group-hover:text-red-300 transition">
                    Explore 325+ Camps &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Activities & News */}
      <section className="bg-slate-50 py-16 border-t border-slate-200 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10" data-aos="fade-up">
            <div>
              <span className="text-xs font-bold text-[#dc2626] uppercase tracking-widest">
                From The Ground
              </span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-[#122336] mt-1">
                Latest Activities &amp; Updates
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-bold text-[#dc2626] hover:text-[#b91c1c] hover:underline inline-flex items-center gap-1"
            >
              <span>View All News &amp; Updates</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-600">No posts yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, idx) => {
                const dateObj = new Date(p.postedAt);
                const day = dateObj.getDate();
                const monthYear = dateObj.toLocaleDateString("en-IN", {
                  month: "short",
                  year: "2-digit",
                });

                return (
                  <article
                    key={p.id}
                    data-aos="fade-up"
                    data-aos-delay={(idx % 3) * 150}
                    className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group"
                  >
                    <div className="absolute top-3 left-3 z-10 rounded-xl bg-[#dc2626] px-3 py-1.5 text-center text-white shadow-md">
                      <h3 className="text-lg font-bold leading-none">{day}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {monthYear}
                      </span>
                    </div>

                    <div className="h-56 w-full overflow-hidden bg-slate-200">
                      <Photo
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display text-lg font-bold leading-snug text-[#122336] line-clamp-2 group-hover:text-[#dc2626] transition">
                          {p.title}
                        </h4>
                        <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 font-body">
                          {p.excerpt}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={`/blog/${p.id}`}
                          className="text-sm font-bold text-[#dc2626] hover:text-[#b91c1c] transition inline-flex items-center gap-1"
                        >
                          <span>Read full article</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* View More Button linking to /blog */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-slate-50 text-[#122336] border border-slate-300 hover:border-[#dc2626] hover:text-[#dc2626] px-7 py-3.5 text-sm sm:text-base font-bold shadow-sm hover:shadow transition-all duration-200"
            >
              <span>View More Activities &amp; News</span>
              <span className="text-lg leading-none">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}