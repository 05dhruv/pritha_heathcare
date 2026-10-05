import PageBanner from "@/components/PageBanner";
import PyramidalModelSection from "@/components/PyramidalModelSection";
import { objectives, site } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "About Us | Pritha Health Care Charitable Trust",
  description:
    "Learn about the founding mission, rural pyramidal healthcare model, and distinguished leadership of Pritha Health Care Charitable Trust.",
};

const teamMembers = [
  {
    name: "Dr. Girjesh Kain",
    role: "Founder & Chief Ophthalmic Surgeon",
    qualification: "MBBS, MS (Ophthalmology) • Fellowship in Cataract Surgery (Aravind Eye Hospital, Coimbatore)",
    badge: "Ophthalmic Surgeon",
    badgeColor: "bg-red-50 text-[#dc2626] border-red-200",
    avatarBg: "bg-red-100 text-[#dc2626]",
    initials: "GK",
    bio: "Dr. Girjesh Kain completed his MBBS & MS in Ophthalmology from Jabalpur (MP) followed by an advanced fellowship in Cataract Surgery at the world-renowned Aravind Eye Hospital, Coimbatore (TN). He has presented 24 research papers in national and international ophthalmology conferences and has devoted the last 7+ years towards community eye care and avoidable blindness eradication.",
    highlights: ["24 National & International Research Papers", "Aravind Eye Hospital Fellowship", "7+ Years in Community Eye Health"],
  },
  {
    name: "Mr. Ramesh Kumar Shukla",
    role: "Director of Optometry & Public Health Specialist",
    qualification: "Master in Optometry (M.Optom) • MPH Scholar (Salus Univ, USA) • Glaucoma Certified (Cardiff Univ, UK)",
    badge: "Optometry & Public Health",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    avatarBg: "bg-blue-100 text-blue-700",
    initials: "RS",
    bio: "Holding a Master in Optometry, Mr. Shukla is currently pursuing his Master in Public Health (MPH) online from Salus University (USA) and holds a specialized certification in Glaucoma from Cardiff University (UK). He has actively worked in community eye care for the last 5 years, pioneering rural vision screenings and refraction protocols.",
    highlights: ["Master in Optometry (M.Optom)", "Glaucoma Certification (Cardiff, UK)", "MPH Scholar (Salus Univ, USA)"],
  },
  {
    name: "Dr. Megha Srivastava",
    role: "Director & Maxillofacial Radiologist",
    qualification: "MDS (Oral & Maxillofacial Radiologist) • MBA (Healthcare Services) • Fellowship in Forensic Odontology (Dharwad)",
    badge: "Maxillofacial Radiologist",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    avatarBg: "bg-purple-100 text-purple-700",
    initials: "MS",
    bio: "Dr. Megha Srivastava holds an MDS in Oral & Maxillofacial Radiology combined with an MBA in Healthcare Services. She completed her specialized Fellowship in Forensic Odontology from Dharwad, Karnataka. She is also a recognized member of the Indian Association of Palliative Care (IAPC), guiding trust clinical operations with compassionate palliative care.",
    highlights: ["MDS Maxillofacial Radiology", "MBA in Healthcare Services", "Indian Association of Palliative Care Member"],
  },
    {
    name: "Dr. Amit Saxena",
    role: "Consultant Physiotherapist & Rehabilitation Specialist",
    qualification: "B.P.T. • M.P.T. (Neurology) • M.I.A.P.",
    badge: "Physiotherapy & Rehabilitation",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    avatarBg: "bg-cyan-100 text-cyan-700",
    initials: "AS",
    bio: "Dr. Amit Saxena is a Consultant Physiotherapist specializing in Brain & Spinal Rehabilitation. With expertise in neurological physiotherapy and rehabilitation, he focuses on helping patients improve mobility, strength, coordination, and functional independence through personalized physiotherapy and rehabilitation programs.",
    highlights: ["B.P.T. (Bachelor of Physiotherapy)", "M.P.T. (Neurology) • M.I.A.P.", "Brain & Spinal Rehabilitation Specialist"],
  },
    {
    name: "Mr. K.P. Yadav",
    role: "Marketing Head & Outreach Specialist",
    qualification: "Marketing & Community Outreach",
    badge: "Marketing & Outreach",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    avatarBg: "bg-orange-100 text-orange-700",
    initials: "KY",
    bio: "Mr. K.P. Yadav leads marketing, community outreach, and promotional initiatives, with a focus on strengthening public engagement and expanding the reach of healthcare and rural outreach programs. He coordinates marketing strategies, awareness campaigns, and field-level outreach activities to ensure effective communication and wider community participation.",
    highlights: ["Marketing Strategy & Management", "Community Engagement & Awareness", "Campaign Planning & Coordination"],
  },
  {
    name: "Mrs. Usha Srivastava",
    role: "Senior Advisor & Renowned Humanitarian",
    qualification: "Retired UK Govt. Health Dept. (39 Years Service) • Florence Nightingale Awardee (2011)",
    badge: "Florence Nightingale Awardee",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-300 font-bold",
    avatarBg: "bg-amber-100 text-amber-800",
    initials: "US",
    bio: "Mrs. Usha Srivastava is a distinguished social worker decorated with the prestigious FLORENCE NIGHTINGALE AWARD, conferred by the President of India in 2011 for her exceptional healthcare dedication. She retired from the UK Government Health Department after 39 glorious years of service and continues to spread light through Bharat Vikas Parishad and Kripal Seva Sansthan.",
    highlights: ["Conferred by the President of India (2011)", "39 Glorious Years in Public Health", "Active in Bharat Vikas Parishad"],
  },
  {
    name: "Mr. Yogesh Kain",
    role: "Health Data Analyst & Statistics Specialist",
    qualification: "BE (Bachelor of Engineering in Computer Science)",
    badge: "Data & Systems Analyst",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    avatarBg: "bg-emerald-100 text-emerald-700",
    initials: "YK",
    bio: "Holding a Bachelor of Engineering in Computer Science, Mr. Yogesh Kain manages health data analytics, epidemiological statistics, and camp operational mapping. With more than 4 years of industry experience, he ensures transparent tracking and digital efficiency across all rural outreach missions.",
    highlights: ["BE Computer Science", "Health Statistics & Data Analytics", "4+ Years Professional Experience"],
  },
  {
    name: "Mr. Mewa Ram Kain",
    role: "Senior Trustee & Community Outreach Advisor",
    qualification: "Social Worker • Retired Branch Manager, State Bank of India (SBI)",
    badge: "Community Elder & Ex-SBI Manager",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    avatarBg: "bg-slate-200 text-slate-800",
    initials: "MK",
    bio: "A respected social worker and retired SBI Bank Manager, Mr. Mewa Ram Kain brings decades of administrative wisdom, financial governance, and community leadership. He actively engages in social welfare gatherings, guiding village elders and families towards financial independence and accessible healthcare.",
    highlights: ["Retired SBI Bank Manager", "Decades of Community Leadership", "Financial & Social Governance"],
  },
  {
    name: "Mrs. Kirti Kamal",
    role: "Technology & Systems Advisor",
    qualification: "BE (Bachelor of Engineering in Computer Science)",
    badge: "Technology Advisor",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    avatarBg: "bg-teal-100 text-teal-700",
    initials: "KK",
    bio: "Mrs. Kirti Kamal holds a Bachelor of Engineering in Computer Science. She contributes her technological insight, software coordination, and digital systems expertise to modernize trust infrastructure, beneficiary management, and outreach telemedicine connectivity.",
    highlights: ["BE Computer Science", "Digital Healthcare Systems", "Technical Operations Advisor"],
  },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" parent="About" />

      {/* 1. Trust Genesis & Founding Philosophy */}
      <section className="container-x py-14 overflow-hidden">
        {/* Main Intro Card */}
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-br from-[#f0f8f4] to-white p-6 sm:p-10 rounded-3xl border border-[#c2e6d6] shadow-sm"
        >
          <img
            src="/images/logo.jpg"
            alt="Pritha Health Care Logo"
            className="w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-2xl shadow-md border-2 border-white flex-shrink-0 bg-white"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 bg-[#dc2626]/10 text-[#dc2626] text-xs font-bold uppercase tracking-wider rounded-full">
                The Breath of Life
              </span>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider rounded-full">
                Charitable Trust Registered 2016
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#122336] tracking-tight">
              Pritha Health Care Charitable Trust
            </h1>
            <div className="mt-4 space-y-3 text-base sm:text-lg leading-relaxed text-slate-700 font-body">
              <p>
                <strong>Pritha Health Care Charitable Trust</strong> was established with the prime motive of providing quality and essential healthcare services to people in need at very low or no cost.
              </p>
              <p>
                This trust was founded by confronting the stark reality of India&rsquo;s healthcare divide: while most healthcare providers concentrate their facilities on urban and semi-urban centers, <strong>more than 60% of our population still resides in rural villages</strong>. Among them, <strong>over 70% lack even basic essential healthcare</strong> due to health illiteracy, severe geographic inaccessibility, and financial unaffordability—leading to tragically elevated preventable mortality rates.
              </p>
            </div>
          </div>
        </div>



        {/* The Pyramidal Healthcare Model (Swipable on Mobile with Embla, 3-column Grid on Desktop) */}
        <PyramidalModelSection />

        {/* 4. Recent Ground Impact & Rural Camps */}
        <div
          data-aos="fade-up"
          className="mt-16 rounded-3xl bg-gradient-to-r from-[#122336] via-[#1a3857] to-[#122336] p-6 sm:p-10 text-white shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full mb-2 border border-red-500/30">
                Field Camp Milestone
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Rural Health Camp Benefitting 167 Underprivileged Patients
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed font-body">
                The Trust organized an impactful rural health camp on <strong>23rd February 2024</strong>, directly benefitting <strong>167 underprivileged villagers</strong> with free specialized diagnostic tests, ophthalmic consultations, and curative medicines. To fulfill our founding charter, several regular camps are scheduled across the remotest underserved villages that remain untouched by both government and private health providers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/donate"
                className="btn !bg-[#dc2626] hover:!bg-[#b91c1c] text-white shadow-md font-bold px-6 py-3 text-sm"
              >
                Sponsor A Health Camp &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* 5. Brief Bio-Data of Members (Leadership & Governance) */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#dc2626]">
              Dedicated Leadership &amp; Governance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#122336] mt-1">
              Brief Bio-Data of Members
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-body">
              Our governing trustees and medical directors bring decades of specialized ophthalmic expertise, healthcare awards, and selfless public service.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
                className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Avatar & Badges */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`h-14 w-14 rounded-2xl ${member.avatarBg} font-display text-xl font-bold flex items-center justify-center shadow-inner flex-shrink-0`}
                    >
                      {member.initials}
                    </div>
                    <span
                      className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full border ${member.badgeColor}`}
                    >
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-display text-xl font-bold text-[#122336] group-hover:text-[#dc2626] transition">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] font-medium text-slate-400 mt-1 pb-3 border-b border-slate-100">
                    {member.qualification}
                  </p>

                  {/* Bio Narrative */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {member.bio}
                  </p>
                </div>

                {/* Key Highlights Pill List */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                  {member.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Guiding Charter Objectives */}
        <div data-aos="fade-up" className="mt-16 rounded-2xl bg-[#f8fafc] border border-slate-200 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-[#122336]">Charter Objectives</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-700 font-body">
            {objectives.map((o) => (
              <li key={o} className="flex items-start gap-2.5">
                <span className="text-[#dc2626] font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Call To Action Strip */}
        <div
          data-aos="zoom-in"
          className="mt-14 rounded-2xl bg-[#122336] p-8 text-center text-white shadow-md"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Join Hands With Pritha Health Care
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Help us expand our pyramidal healthcare network to reach every remote village across Uttar Pradesh.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="btn !px-8 !py-3 text-base shadow-lg">
              Donate to {site.name}
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3 text-base transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

