"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const pillars = [
  {
    title: "Comprehensive Eye Care",
    badge: "4,200+ Free Surgeries Done",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    dotColor: "bg-emerald-500",
    icon: "👁️",
    image: "/images/hero_eyecare.jpg",
    desc: "Aiming to eradicate avoidable blindness by providing free microsurgical cataract interventions, cornea transplants, retinal screenings, and free prescription glasses.",
    points: [
      "Free Micro-Incision Cataract Surgery",
      "Intraocular Lens (IOL) Implants",
      "Village Eye Screening Camps",
    ],
    checkColor: "text-emerald-600",
    link: "/eyecare",
    linkText: "Explore Eye Care Mission",
  },
  {
    title: "Artificial Limbs & Rehabilitation",
    badge: "11,000+ Mobility Aids",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/60",
    dotColor: "bg-blue-500",
    icon: "🦾",
    image: "/images/hero_disability.jpg",
    desc: "Manufacturing custom-fit lightweight prosthetics, calipers, tricycles and assistive mobility aids to help amputees regain movement and earn dignified livelihoods.",
    points: [
      "Custom Modular Prosthetic Fitting",
      "Wheelchairs & Tricycles Distribution",
      "Post-Fitting Physiotherapy Support",
    ],
    checkColor: "text-blue-600",
    link: "/artificial-limbs-rehabilitation",
    linkText: "Rehabilitation Center",
  },
  {
    title: "Rural Mobile Medical Clinics",
    badge: "325+ Rural Health Camps",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200/60",
    dotColor: "bg-purple-500",
    icon: "🚑",
    image: "/images/hero_rural_clinic.jpg",
    desc: "Custom-equipped mobile health vans taking doctors, diagnostic testing equipment, free medicines, cancer screenings, and dental checkups directly to remote villages.",
    points: [
      "Doorstep Doctor & Nursing Consultations",
      "Free Diagnostics & Essential Medicines",
      "Oral Cancer & Chronic Health Screenings",
    ],
    checkColor: "text-purple-600",
    link: "/rural-mobile-medical-clinics",
    linkText: "Explore Rural Health Van",
  },
  {
    title: "Tobacco Suggestion Programs",
    badge: "62+ Cessation Programs",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200/60",
    dotColor: "bg-amber-500",
    icon: "🚭",
    image: "/images/tobacco_awareness.jpg",
    desc: "Dedicated de-addiction counseling, community awareness drives, and personalized cessation guidance to liberate rural youth and families from the hazards of tobacco.",
    points: [
      "Habit Cessation & Counseling Sessions",
      "Youth & Village Awareness Drives",
      "Preventive Education & Health Talks",
    ],
    checkColor: "text-amber-600",
    link: "/tobacco-suggestion-programs",
    linkText: "Explore Tobacco Programs",
  },
  {
    title: "Oral Cancer Surgery",
    badge: "47+ Cancer Screening Camps",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200/60",
    dotColor: "bg-rose-500",
    icon: "🔬",
    image: "/images/oral_cancer_screening.jpg",
    desc: "Specialized diagnostic camps focusing on early detection of premalignant lesions and oral cancer in high-risk rural areas to save lives through timely clinical intervention.",
    points: [
      "Non-Invasive Oral Examination",
      "Early Lesion Detection & Biopsy Guidance",
      "Oncological Referral & Care Navigation",
    ],
    checkColor: "text-rose-600",
    link: "/oral-cancer-surgery",
    linkText: "Explore Cancer Surgery & Care",
  },
];

export default function CorePillarsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [paused, setPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (!emblaApi || paused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [emblaApi, paused]);

  return (
    <div
      className="relative mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Embla Viewport */}
      <div className="overflow-hidden py-2" ref={emblaRef}>
        <div className="flex -ml-4 sm:-ml-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex-[0_0_100%] min-w-0 pl-4 sm:pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                <div>
                  {/* Card Image */}
                  <div className="h-52 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 mb-5 bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${pillar.badgeBg}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${pillar.dotColor}`} />
                      {pillar.badge}
                    </span>
                    <span className="text-2xl">{pillar.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#122336] group-hover:text-[#dc2626] transition">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-600 font-body leading-relaxed">
                    {pillar.desc}
                  </p>

                  {/* Checklist */}
                  <div className="mt-4 space-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
                    {pillar.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2">
                        <span className={`${pillar.checkColor} font-bold`}>✓</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#dc2626] hover:text-[#b91c1c] transition"
                  >
                    <span>{pillar.linkText}</span>
                    <span className="text-lg leading-none">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls: Arrows & Dots */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Swiper Status / Pause Indicator */}
        <div className="text-xs font-semibold text-slate-500 flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${paused ? "bg-amber-400 animate-pulse" : "bg-emerald-500"}`} />
          <span>{paused ? "Paused on hover" : "Auto-swiping enabled"}</span>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-[#dc2626]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            className="h-10 w-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#dc2626] shadow-sm flex items-center justify-center transition"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="h-10 w-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#dc2626] shadow-sm flex items-center justify-center transition"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
