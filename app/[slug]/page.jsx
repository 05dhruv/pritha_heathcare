import { notFound } from "next/navigation";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { services } from "@/lib/site";

import { pageGalleries } from "@/data/pageGalleries";
import PhotoGrid from "@/components/PhotoGrid";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}
export const dynamicParams = true;

export function generateMetadata({ params }) {
  const s = services[params.slug];
  return s ? { title: s.title, description: s.lead } : {};
}

export default function ServicePage({ params }) {
  const s = services[params.slug];
  if (!s) notFound();

  const pageGallery = pageGalleries[params.slug];

  return (
    <>
      <PageBanner title={s.title} parent="Our Services" />
      <section className="container-x grid gap-10 py-14 lg:grid-cols-3 overflow-hidden">
        <div className="lg:col-span-2" data-aos="fade-right">
          <Photo src={s.image} alt={s.title} className="h-72 w-full rounded-lg md:h-96" />
          <p className="mt-8 font-display text-xl font-bold leading-relaxed text-[#122336]">{s.lead}</p>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
            {s.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-[#c2e6d6] bg-[#f0f8f4]/60 p-6 shadow-sm" data-aos="fade-left">
          <span className="inline-block px-2.5 py-0.5 bg-[#dc2626]/10 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider rounded mb-2">
            Key Highlights
          </span>
          <h2 className="font-display text-lg font-bold text-[#122336]">What we provide</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            {s.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <Link href="/donate" className="btn mt-6 w-full">Support this work</Link>
        </aside>
      </section>

      {pageGallery && (
        <section className="container-x pb-16">
          <PhotoGrid
            photos={pageGallery.photos}
            heading={pageGallery.heading}
            subheading={pageGallery.subheading}
          />
        </section>
      )}
    </>
  );
}
