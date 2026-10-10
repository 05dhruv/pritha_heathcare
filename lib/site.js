// Central place to edit organisation details, navigation and static page content.

export const site = {
    name: "Pritha Health Care",
    short: "PHC",
    motto: "The Breath of Life",
    tagline: "The Breath of Life - Restoring vision. Rebuilding lives. Providing Quality Healthcare.",
    description: "A charitable healthcare trust dedicated to restoring vision, providing free eye surgeries, disability rehabilitation, and quality medical care to underserved communities.",
    email: "prithahealthcare@gmail.com",
    phone: "+91 79003 51111",
    phone2: "+91 9012403111",
    whatsapp: "+91 90124 03111",
    whatsappDisplay: "+91 90124 03111 (Whatsapp)",
    address: "Moradabad, Uttar Pradesh, India",
    logo: "/images/logo.jpg",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pritha-heathcare.vercel.app",
    social: [
        { name: "Facebook", href: "https://www.facebook.com/oracleeyehospital/" },
        { name: "Instagram", href: "https://www.instagram.com/oracleeyehospital/" },
        { name: "YouTube", href: "https://www.youtube.com/channel/UCzrx964MMTzlFkUdm3rlcwg" },
    ],
};

export const defaultSlides = [{
        id: 1,
        badge: "Restoring Gift of Vision",
        title: "Committed to Eradicate Avoidable Blindness & Provide Free Eye Surgeries",
        subtitle: "Over 4,200+ free cataract surgeries and rural screening camps restoring sight to elderly and underprivileged communities.",
        image: "/images/hero_eyecare.jpg",
        link: "/our-works/free-eye-surgery",
        cta: "Explore Eye Care",
    },
    {
        id: 2,
        badge: "Promoting a Healthy Lifestyle",
        title: "Comprehensive Tobacco Awareness & De-addiction Campaigns",
        subtitle: "Educating communities on the severe health risks of tobacco usage and providing support to overcome addiction.",
        image: "/images/hero_tobacco_awareness.jpg",
        link: "/our-works/tobacco-awareness",
        cta: "Learn More",
    },
    {
        id: 3,
        badge: "Empowering Lives with Mobility",
        title: "Free Custom Prosthetics, Callipers & Complete Disability Rehabilitation",
        subtitle: "Enabling amputees and differently-abled individuals to walk again with dignity, self-reliance, and livelihood support.",
        image: "/images/hero_disability.jpg",
        link: "/disability-care",
        cta: "Disability Services",
    },
    {
        id: 4,
        badge: "Early Detection Saves Lives",
        title: "Free Cancer Screening Camps for Early Diagnosis & Care",
        subtitle: "Conducting wide-reaching cancer screening programs to identify risks early and refer patients for timely, life-saving treatments.",
        image: "/images/hero_cancer_screening.jpg",
        link: "/our-works/cancer-screening-camps",
        cta: "View Our Work",
    },
    {
        id: 5,
        badge: "Last-Mile Rural Healthcare",
        title: "Mobile Healthcare Vans Delivering Free Clinical Care to Remote Villages",
        subtitle: "Bringing diagnostic screenings, doctor consultations, and free medicines directly to underserved rural communities.",
        image: "/images/hero_rural_clinic.jpg",
        link: "/our-works/rural-eye-camps",
        cta: "Rural Outreach",
    },
];

export const defaultStats = [
    { id: 1, label: "Cataract Operation", value: 212200, position: 1 },
    { id: 2, label: "Assistive Devices and Mobility Aids", value: 110200, position: 2 },
];

import { blogs } from "@/data/blogs";

export const defaultPosts = blogs;

export const nav = [
    { label: "Home", href: "/" },
    {
        label: "About",
        href: "/about",
        children: [
            { label: "About Us", href: "/about" },
            { label: "Impact Report", href: "/impact" },
            { label: "Honors and Awards", href: "/honors-and-awards" },
            { label: "Notifications", href: "/notifications" },
        ],
    },
    {
        label: "Our Works",
        href: "/our-works",
        children: [
            { label: "Eye Surgery", href: "/our-works/free-eye-surgery" },
            { label: "Rural Eye Camps", href: "/our-works/rural-eye-camps" },
            { label: "Tobacco Suggestion Programs", href: "/our-works/tobacco-awareness" },
            { label: "Oral Cancer Screening", href: "/our-works/cancer-screening-camps" },
            { label: "Dental Camps", href: "/our-works/dental-camps" },
            { label: "Health Checkup and Health Talk Webinar", href: "/our-works/general-health-checkup" },
            { label: "Oracle Eye Hospital", href: "/our-works/oracle-eye-hospital", isHighlight: true },
        ],
    },
    {
        label: "Media",
        href: "#",
        children: [
            { label: "Image Gallery", href: "/image-gallery" },
            { label: "Video Gallery", href: "/video-gallery" },
            { label: "News", href: "/blog" },
        ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
];

// Service / programme pages, rendered by app/[slug]/page.jsx

export const services = {
    eyecare: {
        title: "Eye Care",
        lead: "Aiming to eradicate curable blindness by restoring the gift of vision to communities in need.",
        image: "/images/hero_eyecare.jpg",
        body: [
            "Our base hospital provides free and subsidised cataract surgery, glaucoma care, retina screening and paediatric eye care to patients who have no other access to eye health facilities.",
            "Village-level awareness and screening camps bring patients to the hospital, where surgery, medicines, spectacles and follow-up are provided.",
        ],
        points: ["Free cataract surgeries", "Cataract screening camps", "Eye bank and corneal transplant support", "Spectacles and follow-up care", "School eye screening"],
    },
    "disability-care": {
        title: "Disability Care",
        lead: "Free prosthetic and orthotic services, including assistive devices, for amputees and the disabled.",
        image: "/images/hero_disability.jpg",
        body: [
            "Our artificial limbs manufacturing and rehabilitation centre fits customised prosthetics, callipers and mobility aids so that people can return to work and family life with dignity.",
            "We provide end-to-end rehabilitation, physical therapy training, and psychological counseling to ensure every beneficiary regains self-reliance and vocational capability.",
        ],
        points: ["Artificial limbs and callipers", "Wheelchairs and tricycles", "Corrective surgery support", "Rehabilitation counselling", "Post-fitting gait training"],
    },
    "artificial-limbs-rehabilitation": {
        title: "Artificial Limbs & Rehabilitation",
        lead: "Manufacturing custom-fit lightweight prosthetics, calipers, tricycles and assistive mobility aids to help amputees regain movement and earn dignified livelihoods.",
        image: "/images/hero_disability.jpg",
        body: [
            "Pritha Health Care operates dedicated prosthetic workshops and clinical rehabilitation initiatives designed to restore unconditional mobility to amputees and individuals with severe motor disabilities.",
            "Each beneficiary undergoes precise biometric assessment, casting, and bespoke fabrication of modular limb prosthetics, calipers, and orthotic braces completely free of cost.",
            "Beyond physical equipment, our rehabilitation department provides gait training, occupational counseling, physiotherapy support, and free distribution of tricycles and wheelchairs to empower self-sufficiency.",
        ],
        points: [
            "Custom modular prosthetic fitting",
            "Lightweight calipers & orthotic braces",
            "Wheelchairs & hand-driven tricycles",
            "Post-fitting physiotherapy & gait training",
            "Vocational & social rehabilitation counseling",
        ],
    },
    "rural-mobile-medical-clinics": {
        title: "Rural Mobile Medical Clinics",
        lead: "Custom-equipped mobile health vans taking doctors, diagnostic testing equipment, free medicines, cancer screenings, and dental checkups directly to remote villages.",
        image: "/images/hero_rural_clinic.jpg",
        body: [
            "Marginalized and rural populations often lack geographic proximity and economic means to access primary and specialized health centers. Our Rural Mobile Medical Clinics bridge this critical gap by traveling directly to remote hamlets across Uttar Pradesh.",
            "Equipped with portable diagnostic tools, sterilization kits, essential medicines, and a team of compassionate medical professionals, these mobile clinics provide comprehensive doorstep medical consultations.",
            "Patients receive on-spot vitals checks, blood sugar screening, dental evaluations, pre-malignant lesion checks, and direct hospital referrals for complex surgical interventions.",
        ],
        points: [
            "Doorstep doctor & nursing consultations",
            "Free on-site diagnostics & vital screening",
            "Essential medicine dispensing at zero cost",
            "Oral cancer & chronic condition screenings",
            "Emergency referral & secondary care transport navigation",
        ],
    },
    "outreach-services": {
        title: "Rural Mobile Medical Clinics",
        lead: "Custom-equipped mobile health vans taking doctors, diagnostic testing equipment, free medicines, cancer screenings, and dental checkups directly to remote villages.",
        image: "/images/hero_rural_clinic.jpg",
        body: [
            "Marginalized and rural populations often lack geographic proximity and economic means to access primary and specialized health centers. Our Rural Mobile Medical Clinics bridge this critical gap by traveling directly to remote hamlets across Uttar Pradesh.",
            "Equipped with portable diagnostic tools, sterilization kits, essential medicines, and a team of compassionate medical professionals, these mobile clinics provide comprehensive doorstep medical consultations.",
            "Patients receive on-spot vitals checks, blood sugar screening, dental evaluations, pre-malignant lesion checks, and direct hospital referrals for complex surgical interventions.",
        ],
        points: [
            "Doorstep doctor & nursing consultations",
            "Free on-site diagnostics & vital screening",
            "Essential medicine dispensing at zero cost",
            "Oral cancer & chronic condition screenings",
            "Emergency referral & secondary care transport navigation",
        ],
    },
    "tobacco-suggestion-programs": {
        title: "Tobacco Suggestion Programs",
        lead: "Dedicated de-addiction counseling, community awareness drives, and personalized cessation guidance to liberate rural youth and families from the hazards of tobacco.",
        image: "/images/tobacco_awareness.jpg",
        body: [
            "Tobacco usage remains the foremost preventable cause of oral submucous fibrosis (OSMF), precancerous lesions, and systemic malignancies in rural India. Our Tobacco Suggestion & De-addiction Programs focus on aggressive grassroots prevention.",
            "Through interactive audio-visual sessions, medical counseling, street awareness campaigns, and village chaupal meetings, our teams help chronic users understand nicotine dependency and break free from habit addiction.",
            "We provide continuous follow-up, dietary lifestyle recommendations, psychological motivation, and family counseling to prevent relapses and foster tobacco-free community environments.",
        ],
        points: [
            "One-on-one habit cessation & psychological counseling",
            "Youth, school & village de-addiction drives",
            "Screening for oral premalignant lesions & OSMF",
            "Preventive education, audio-visual exhibits & pamphlets",
            "Family support groups & relapse prevention monitoring",
        ],
    },
    "oral-cancer-surgery": {
        title: "Oral Cancer Surgery & Rehabilitation",
        lead: "Specialized diagnostic detection, surgical facilitation, oncological referrals, and comprehensive rehabilitation for patients suffering from oral malignancies.",
        image: "/images/oral_cancer_screening.jpg",
        body: [
            "Oral cancer is one of the most prevalent and devastating malignancies affecting underprivileged communities with high tobacco consumption. Timely surgical intervention is the single most critical factor in patient survival.",
            "Pritha Health Care collaborates with specialized oncological surgical centers and medical teams to screen, identify, and guide patients through essential oral cancer surgeries, excisions, and reconstructive procedures.",
            "Following surgical intervention, our patient welfare program provides post-operative care navigation, nutritional counseling, speech and swallowing rehabilitation, and prosthodontic support to ensure patients regain dignity and normal quality of life.",
        ],
        points: [
            "Comprehensive oral lesion & oncological screening",
            "Biopsy coordination & rapid diagnostic triage",
            "Surgical intervention facilitation & hospital navigation",
            "Post-operative wound care & nutritional rehabilitation",
            "Speech, swallowing therapy & psychological reintegration",
        ],
    },
    "oral-cancer-screening": {
        title: "Oral Cancer Screening & Surgery",
        lead: "Specialized diagnostic camps focusing on early detection of premalignant lesions and oral cancer in high-risk rural areas to save lives through timely clinical intervention.",
        image: "/images/oral_cancer_screening.jpg",
        body: [
            "Oral cancer is one of the most prevalent and devastating malignancies affecting underprivileged communities with high tobacco consumption. Timely surgical intervention is the single most critical factor in patient survival.",
            "Pritha Health Care collaborates with specialized oncological surgical centers and medical teams to screen, identify, and guide patients through essential oral cancer surgeries, excisions, and reconstructive procedures.",
            "Following surgical intervention, our patient welfare program provides post-operative care navigation, nutritional counseling, speech and swallowing rehabilitation, and prosthodontic support to ensure patients regain dignity and normal quality of life.",
        ],
        points: [
            "Comprehensive oral lesion & oncological screening",
            "Biopsy coordination & rapid diagnostic triage",
            "Surgical intervention facilitation & hospital navigation",
            "Post-operative wound care & nutritional rehabilitation",
            "Speech, swallowing therapy & psychological reintegration",
        ],
    },
    "our-works": {
        title: "Our Works",
        lead: "Discover our key initiatives, healthcare programs, and community welfare projects restoring sight and empowering lives.",
        image: "/images/hero_eyecare.jpg",
        body: [
            "Pratha Healthcare conducts various community-driven health programs, free eye surgery camps, prosthetics distribution, and special rehabilitation endeavors across northern India.",
            "Through dedicated healthcare professionals and volunteers, our projects aim to transform lives by delivering accessible and high-quality medical assistance to underprivileged communities.",
        ],
        points: [
            "4200+ Free Eye Surgery",
            "325+ Free Camps Conducted In Rural Areas",
            "15-20+ Dental Camps Conducted",
            "47+ Oracle Camps Cancer Screening Conducted",
            "62+ Tobacco & Awareness Campaigns Conducted",
            "16 General Health Check-up plan & Camps Conducted",
            "Health Talk & webinar & Social & Digital Plateform Prevention & Awareness Campaigns",
            "Associated With Oracle Eye Hospital, Moradabad, Uttar Pradesh",
        ],
    },
};

export const programmes = [
    { title: "Eye Care", text: "Aiming to eradicate curable blindness and providing the best eye care by restoring the gift of vision to communities in need.", href: "/eyecare" },
    { title: "Rehabilitation of the Disabled", text: "Free prosthetic and orthotic services, including assistive devices, for amputees and the disabled.", href: "/disability-care" },
    { title: "Outreach for Rural Health", text: "A mobile healthcare system delivering care to marginalised communities in remote villages.", href: "/outreach-services" },
];

export const endeavors = [
    { title: "Eye Care", href: "/eyecare", image: "/assets/img/projects/Eye_Care.webp" },
    { title: "Disability Care", href: "/disability-care", image: "/assets/img/projects/Rehabilitation_Center.webp" },
    { title: "Oral Cancer Screening", href: "/our-works/cancer-screening-camps", image: "/images/oral_cancer_screening.jpg" },
    { title: "Community Health Camps", href: "/our-works", image: "/images/hero_rural_clinic.jpg" },
];

export const objectives = [
    "Explore easily adoptable methods to reduce the causes of blindness and extend service and security to vulnerable and marginalised communities.",
    "Awaken social consciousness to provide social and psychological assistance to the needy, and rehabilitation and treatment for destitute people in every segment of disability.",
    "Operate community health camps, diagnostic screenings, and mobile clinical wellness units for underserved rural populations.",
    "Operate hospitals and clinical facilities that provide eye care, dental health care, and disability rehabilitation to the poor.",
    "Enable differently-abled and older people to strengthen the social, economic and political life of their communities.",
];

export const blessings = [
    { name: "Kanchi Kamakoti Pithadhishvar Jagadguru Swami Jayendra Saraswati Ji Maharaj", image: "/assets/img/Blessings/1.webp" },
    { name: "Swami Shri Akhandanand Saraswati Ji Maharaj", image: "/assets/img/Blessings/2.webp" },
    { name: "Sant Shri Morari Bapu Ji", image: "/assets/img/Blessings/3.webp" },
    { name: "Swami Shri Gurusharananad Ji Maharaj", image: "/assets/img/Blessings/4.webp" },
    { name: "Shri Nritya Gopaldas Ji Maharaj", image: "/assets/img/Blessings/5.webp" },
    { name: "Shri Pundrik Goswami Ji Maharaj", image: "/assets/img/Blessings/6.webp" },
    { name: "Shri Satyanarayan Reddy, Governor, Uttar Pradesh", image: "/assets/img/Blessings/7.webp" },
    { name: "Shri Surajbhan, Governor, Uttar Pradesh", image: "/assets/img/Blessings/8.webp" },
    { name: "Shri Motilal Vora, Governor, Uttar Pradesh", image: "/assets/img/Blessings/9.webp" },
    { name: "General VK Singh, Minister of State for External Affairs", image: "/assets/img/Blessings/10.webp" },
    { name: "Shri Ravikant, Vice Chairman of Tata Motors", image: "/assets/img/Blessings/11.webp" },
    { name: "WVK Krishna Shankar Director, BHEL", image: "/assets/img/Blessings/12.webp" },
    { name: "Prof. Durg Singh Chauhan, Vice Chancellor, GLA University", image: "/assets/img/Blessings/13.webp" },
    { name: "Shri Raj Babbar, Actor & Politician", image: "/assets/img/Blessings/14.webp" },
];

export const awards = [];