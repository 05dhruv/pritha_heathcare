// Central place to edit organisation details, navigation and static page content.

export const site = {
    name: "Pritha Health Care",
    short: "PHC",
    motto: "The Breath of Life",
    tagline: "The Breath of Life - Restoring vision. Rebuilding lives. Providing Quality Healthcare.",
    description: "A charitable healthcare trust dedicated to restoring vision, providing free eye surgeries, disability rehabilitation, and quality medical care to underserved communities.",
    email: "prithahealthcare@gmail.com",
    phone: "+91 80060 70200",
    phone2: "+91 79003 51111",
    whatsapp: "+91 79003 51111",
    whatsappDisplay: "+91 79003 51111 (Whatsapp)",
    address: "Moradabad, Uttar Pradesh, India",
    logo: "/images/logo.jpg",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pritha-heathcare.vercel.app",
    social: [
        { name: "Facebook", href: "https://www.facebook.com/prithahealthcare" },
        { name: "X", href: "https://x.com/PrithaHealth" },
        { name: "Instagram", href: "https://www.instagram.com/prithahealthcare/" },
        { name: "YouTube", href: "https://www.youtube.com/@PrithaHealthcare" },
        { name: "Pinterest", href: "https://in.pinterest.com/prithahealthcare" },
    ],
};

export const defaultSlides = [
    {
        id: 1,
        badge: "Restoring Gift of Vision",
        title: "Committed to Eradicate Avoidable Blindness & Provide Free Eye Surgeries",
        subtitle: "Over 4,200+ free cataract surgeries and rural screening camps restoring sight to elderly and underprivileged communities.",
        image: "/images/hero_eyecare.jpg",
        link: "/eyecare",
        cta: "Explore Eye Care",
    },
    {
        id: 2,
        badge: "Empowering Lives with Mobility",
        title: "Free Custom Prosthetics, Callipers & Complete Disability Rehabilitation",
        subtitle: "Enabling amputees and differently-abled individuals to walk again with dignity, self-reliance, and livelihood support.",
        image: "/images/hero_disability.jpg",
        link: "/disability-care",
        cta: "Disability Services",
    },
    {
        id: 3,
        badge: "Last-Mile Rural Healthcare",
        title: "Mobile Healthcare Vans Delivering Free Clinical Care to Remote Villages",
        subtitle: "Bringing diagnostic screenings, doctor consultations, and free medicines directly to underserved rural communities.",
        image: "/images/hero_rural_clinic.jpg",
        link: "/outreach-services",
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
            { label: "Oral Cancer Screening", href: "/our-works/cancer-screening-camps"},
            { label: "Dental Camps", href: "/our-works/dental-camps" },
            { label: "Health Checkup and Health Talk Webinar", href: "/our-works/general-health-checkup"},
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
        image: "",
        body: [
            "Our base hospital provides free and subsidised cataract surgery, glaucoma care, retina screening and paediatric eye care to patients who have no other access to eye health facilities.",
            "Village-level awareness and screening camps bring patients to the hospital, where surgery, medicines, spectacles and follow-up are provided.",
        ],
        points: ["Free cataract surgeries", "Eye bank and corneal transplant support", "Spectacles and follow-up care", "School eye screening"],
    },
    "disability-care": {
        title: "Disability Care",
        lead: "Free prosthetic and orthotic services, including assistive devices, for amputees and the disabled.",
        image: "",
        body: [
            "Our artificial limbs manufacturing and rehabilitation centre fits customised prosthetics, callipers and mobility aids so that people can return to work and family life with dignity.",
        ],
        points: ["Artificial limbs and callipers", "Wheelchairs and tricycles", "Corrective surgery support", "Rehabilitation counselling"],
    },
    "our-works": {
        title: "Our Works",
        lead: "Discover our key initiatives, healthcare programs, and community welfare projects restoring sight and empowering lives.",
        image: "",
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