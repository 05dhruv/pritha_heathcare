import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section className="container-x grid gap-12 py-14 lg:grid-cols-3 overflow-hidden">
        <div className="lg:col-span-2" data-aos="fade-right">
          <h2 className="mb-6 font-display text-2xl font-bold">Send us a message</h2>
          <ContactForm />
        </div>
        <aside className="h-fit rounded-2xl border border-[#c2e6d6] bg-[#f0f8f4]/60 p-6 shadow-sm" data-aos="fade-left">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#c2e6d6]">
            <img src="/images/logo.jpg" alt="Logo" className="w-12 h-12 rounded object-contain shadow-sm border border-white" />
            <div>
              <h2 className="font-display text-lg font-bold text-[#122336] leading-tight">{site.name}</h2>
              <span className="text-[11px] font-bold text-[#dc2626] uppercase tracking-wider">The Breath of Life</span>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{site.address}</p>
          <div className="mt-4 space-y-2 text-sm">
            <p><a className="text-[#dc2626] hover:underline font-medium flex items-center gap-2" href={`mailto:${site.email}`}>✉️ {site.email}</a></p>
            <p><a className="text-[#dc2626] hover:underline font-medium flex items-center gap-2" href={`tel:${site.phone.replace(/\s/g, "")}`}>📞 {site.phone}</a></p>
            <p><a className="text-[#dc2626] hover:underline font-medium flex items-center gap-2" href={`https://wa.me/${(site.phone2 || "919012403111").replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">💬 {site.whatsappDisplay || "+91 90124 03111 (Whatsapp)"}</a></p>
          </div>
        </aside>
      </section>
    </>
  );
}
