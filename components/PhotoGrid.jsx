"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/**
 * Reusable PhotoGrid component with:
 * - 4 columns on desktop (lg:grid-cols-4), 2 on tablet (sm:grid-cols-2), 1 on mobile (grid-cols-1)
 * - Equal-height cards with object-cover and fixed 4:3 aspect ratio
 * - Subtle hover zoom on image
 * - Lightbox modal with next/prev arrows, close button, Esc key, backdrop click
 * - Lazy-loading and SEO alt attributes
 */
export default function PhotoGrid({
  photos = [],
  heading = "Photo Gallery",
  subheading = "",
  sectionId = "photo-gallery",
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activePhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? photos.length - 1 : prev - 1
    );
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === photos.length - 1 ? 0 : prev + 1
    );
  }, [photos.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow || "";
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  if (!photos || photos.length === 0) return null;

  return (
    <section id={sectionId} className="mt-12 pt-8 border-t border-slate-200 scroll-mt-28">
      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="h-2 w-2 rounded-full bg-[#dc2626]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#dc2626]">
            Moments on the Ground
          </span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#122336]">
          {heading}
        </h3>
        {subheading && (
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-body max-w-2xl">
            {subheading}
          </p>
        )}
      </div>

      {/* Grid: 4 cols on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {photos.map((item, idx) => (
          <figure
            key={item.src || idx}
            onClick={() => setLightboxIndex(idx)}
            className="group relative flex flex-col cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect"
          >
            {/* Fixed aspect ratio 4:3 container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt || item.caption || heading}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#122336]/80 via-[#122336]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#122336] shadow-md backdrop-blur-sm transition-transform group-hover:scale-105">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
            </div>

            {/* Caption */}
            {item.caption && (
              <figcaption className="flex-1 bg-white px-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-800 border-t border-slate-100 group-hover:text-[#dc2626] transition-colors leading-snug">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption || "Enlarged photo"}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md"
          onClick={handleClose}
        >
          {/* Top Bar: Counter & Actions */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs sm:text-sm font-bold backdrop-blur-md">
                {lightboxIndex + 1} / {photos.length}
              </span>
              <span className="hidden sm:inline-block rounded-full bg-[#dc2626] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {heading}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-[#dc2626] transition-colors"
                title="Close (Esc)"
                aria-label="Close photo preview"
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
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 active:scale-95 transition-all"
            title="Previous (Left Arrow)"
            aria-label="View previous photo"
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
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 hover:scale-110 active:scale-95 transition-all"
            title="Next (Right Arrow)"
            aria-label="View next photo"
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
              src={activePhoto.src}
              alt={activePhoto.alt || activePhoto.caption || "Enlarged photo"}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-all"
            />

            {/* Bottom Caption */}
            {activePhoto.caption && (
              <div className="mt-3.5 max-w-2xl text-center">
                <p className="text-sm sm:text-base font-semibold text-white/95">
                  {activePhoto.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
