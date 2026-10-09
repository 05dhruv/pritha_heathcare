"use client";

import { useState, useEffect, useCallback } from "react";
import Photo from "@/components/Photo";

export default function GalleryView({ initialItems = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(
      new Set(
        initialItems
          .map((item) => item.category)
          .filter(Boolean)
      )
    ),
  ];

  // Filter items based on active category
  const filteredItems =
    activeCategory === "All"
      ? initialItems
      : initialItems.filter((item) => item.category === activeCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [filteredItems.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  return (
    <div>
      {/* Category Filter Pills & Stats Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? initialItems.length
                : initialItems.filter((i) => i.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#122336] text-white shadow-md shadow-[#122336]/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    isActive
                      ? "bg-[#dc2626] text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-xs sm:text-sm font-medium text-slate-500">
          Showing <span className="font-bold text-[#122336]">{filteredItems.length}</span> photographs
        </div>
      </div>

      {/* Masonry-Style Multi-Column Photo Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center text-slate-500 py-16 text-lg font-medium">
          No photographs found in this category.
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
          {filteredItems.map((g, idx) => (
            <figure
              key={g.id || g.url || idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 60}
            >
              <div className="relative overflow-hidden bg-slate-100">
                <Photo
                  src={g.url}
                  alt={g.caption || "Pratha Health Care Gallery Photograph"}
                  className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay with Icon & Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122336]/80 via-[#122336]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#122336] shadow-sm backdrop-blur-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </span>
                  </div>
                  {g.category && (
                    <div>
                      <span className="inline-block rounded-md bg-[#dc2626] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">
                        {g.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Caption Footer */}
              {g.caption && (
                <figcaption className="bg-white px-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-800 border-t border-slate-100 group-hover:text-[#dc2626] transition-colors leading-snug">
                  {g.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* Interactive Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={handleClose}
        >
          {/* Top Bar: Counter & Close Button */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs sm:text-sm font-bold backdrop-blur-md">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              {activeItem.category && (
                <span className="hidden sm:inline-block rounded-full bg-[#dc2626] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {activeItem.category}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={activeItem.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                title="Open full resolution in new tab"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <button
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-[#dc2626] transition-colors"
                title="Close (Esc)"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 active:scale-95 transition-all"
            title="Previous (Left Arrow)"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 active:scale-95 transition-all"
            title="Next (Right Arrow)"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-h-[82vh] max-w-[92vw] sm:max-w-[85vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeItem.url}
              alt={activeItem.caption || "Enlarged Gallery Photo"}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-all"
            />

            {/* Bottom Caption */}
            {activeItem.caption && (
              <div className="mt-3.5 max-w-2xl text-center">
                <p className="text-sm sm:text-base font-semibold text-white/95">
                  {activeItem.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
