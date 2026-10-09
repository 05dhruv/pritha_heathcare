import PageBanner from "@/components/PageBanner";
import GalleryView from "@/components/GalleryView";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { galleryImages } from "@/data/galleryImages";

export const metadata = {
  title: "Image Gallery | Pratha Health Care",
  description:
    "Browse high-resolution photographs documenting Pratha Health Care's free cataract surgeries, rural health camps, and rehabilitation endeavors.",
};

export const dynamic = "force-dynamic";

export default async function ImageGallery() {
  const dbItems = await safe(
    () =>
      prisma.galleryItem.findMany({
        where: { type: "IMAGE" },
        orderBy: { createdAt: "desc" },
      }),
    []
  );

  // Merge DB items with default static images, ensuring no duplicates by URL
  const seenUrls = new Set();
  const mergedItems = [];

  // Add DB items first (so any admin uploaded image is prioritized)
  if (dbItems && dbItems.length > 0) {
    for (const item of dbItems) {
      if (item.url && !seenUrls.has(item.url)) {
        seenUrls.add(item.url);
        mergedItems.push({
          id: item.id,
          url: item.url,
          caption: item.caption || "",
          category: "Live Updates",
        });
      }
    }
  }

  // Add the curated gallery images
  for (const item of galleryImages) {
    if (item.url && !seenUrls.has(item.url)) {
      seenUrls.add(item.url);
      mergedItems.push(item);
    }
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <PageBanner title="Image Gallery" parent="Media" />

      {/* Intro Header Section */}
      <section className="pt-12 pb-4">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-100 text-[#dc2626] text-xs font-bold tracking-widest uppercase mb-3">
            Moments of Care &amp; Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#122336] tracking-tight">
            Restoring Sight, Dignity &amp; Hope
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-body leading-relaxed">
            A visual documentation of our free eye surgery camps, mobile diagnostic clinics,
            prosthetic distribution drives, and community health initiatives across Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* Main Interactive Gallery */}
      <section className="container-x py-10 sm:py-12">
        <GalleryView initialItems={mergedItems} />
      </section>
    </div>
  );
}
