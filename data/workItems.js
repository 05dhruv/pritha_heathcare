export const workItemsData = {
    "free-eye-surgery": {
        slug: "free-eye-surgery",
        menuLabel: "Free Eye Surgery",
        title: "4200+ Free Eye Surgery",
        tagline: "Restoring Vision, Changing Lives",
        intro: "Pritha Health Care is committed to eliminating preventable blindness in underserved communities. Through our comprehensive eye care initiatives, we have successfully facilitated thousands of free cataract surgeries for those who cannot afford medical care.\n\nOur dedicated team works tirelessly to ensure that every patient receives the best possible treatment. We handle everything from the initial screening to the post-operative care, ensuring a smooth and safe recovery.",
        stat: { value: "4200+", label: "Free Eye Surgeries" },
        partner: null,
        offers: [
            "Free comprehensive eye screening",
            "Cataract detection",
            "Complete surgical procedure",
            "Post-surgery medication",
            "Follow-up checkups"
        ],
        howItWorks: [
            "Screening: We conduct preliminary eye tests at our camps.",
            "Identification: Patients needing surgery are identified.",
            "Surgery: The procedure is performed by expert surgeons.",
            "Recovery: Patients are monitored post-surgery."
        ],
        whoCanJoin: "Open to all individuals suffering from vision impairment who require financial assistance for treatment.",
        faqs: [
            { question: "Are there any hidden costs?", answer: "No, the entire process from screening to surgery and medication is free." },
            { question: "How long is the recovery?", answer: "Most patients recover within a few weeks with proper care and medication." }
        ],
        surgeries: [{
                id: "surg-cataract",
                name: "Cataract (incl. microincision)",
                description: "Advanced techniques for safe and effective cataract removal.",
                about: "A cataract is a clouding of the normally clear lens of the eye, which can make vision blurry, hazy, or less colorful. We facilitate safe removal of cataracts using advanced microincision techniques, aiming to restore clear vision.",
                symptoms: ["Cloudy or blurry vision", "Fading or yellowing of colors", "Sensitivity to light and glare", "Poor night vision"],
                treatment: ["A comprehensive eye examination to confirm the diagnosis.", "Surgical removal of the clouded lens.", "Replacement with an artificial intraocular lens (IOL)."],
                aftercare: ["Use prescribed eye drops regularly.", "Avoid rubbing or pressing on the eye.", "Wear a protective shield while sleeping if advised.", "Attend follow-up checkups to monitor healing."]
            },
            {
                id: "surg-retina",
                name: "Retina / Vitreoretinal",
                description: "Specialized care for retinal disorders and vision preservation.",
                about: "The retina is the light-sensitive layer of tissue at the back of the inner eye. Vitreoretinal surgeries address conditions affecting the retina and the vitreous fluid, helping to prevent permanent vision loss from diseases like diabetic retinopathy or retinal detachment.",
                symptoms: ["Sudden appearance of floaters or flashes of light", "A shadow or curtain over a portion of your visual field", "Blurred or distorted central vision"],
                treatment: ["Detailed retinal imaging and evaluation.", "Laser therapy or surgical intervention (like vitrectomy) depending on the condition.", "Careful monitoring of the retina post-procedure."],
                aftercare: ["Strictly follow positioning instructions if given by the doctor.", "Avoid strenuous activities and heavy lifting.", "Use all prescribed medications to prevent infection and reduce inflammation."]
            },
            {
                id: "surg-glaucoma",
                name: "Glaucoma",
                description: "Expert management to prevent optic nerve damage.",
                about: "Glaucoma is a group of eye conditions that damage the optic nerve, often due to abnormally high pressure in the eye. While the damage cannot be reversed, treatments and surgeries aim to lower eye pressure and prevent further vision loss.",
                symptoms: ["Often no early symptoms (in open-angle glaucoma)", "Gradual loss of peripheral vision", "Severe eye pain or headache (in acute angle-closure glaucoma)"],
                treatment: ["Routine pressure checks and optic nerve evaluation.", "Prescription eye drops to lower intraocular pressure.", "Laser treatment or filtering surgery if medications are insufficient."],
                aftercare: ["Continue using prescribed eye drops exactly as directed.", "Keep all follow-up appointments to monitor eye pressure.", "Report any sudden changes in vision or severe pain immediately."]
            },
            {
                id: "surg-cornea",
                name: "Cornea",
                description: "Treatment for corneal diseases and vision restoration.",
                about: "The cornea is the eye's clear, protective outer layer. Corneal diseases or injuries can cause scarring or swelling, leading to severe vision impairment. Treatments range from medication to corneal transplantation to restore clarity.",
                symptoms: ["Eye pain, redness, or tearing", "Extreme sensitivity to light", "Blurred or hazy vision", "A feeling that something is in the eye"],
                treatment: ["Diagnosis of the specific corneal condition or infection.", "Medical management using specialized eye drops.", "Surgical procedures, including partial or full corneal transplants if necessary."],
                aftercare: ["Protect the eye from injury by wearing glasses or a shield.", "Avoid swimming or getting water directly in the eye.", "Use steroid or antibiotic drops as prescribed to prevent rejection or infection."]
            },
            {
                id: "surg-pediatric",
                name: "Pediatric eye care",
                description: "Dedicated vision care and treatments for children.",
                about: "Children can experience a range of eye problems, from refractive errors to squints (strabismus) or pediatric cataracts. Early detection and specialized care are crucial to ensure proper visual development and prevent long-term issues like lazy eye (amblyopia).",
                symptoms: ["Frequent eye rubbing or blinking", "Squinting or closing one eye to see", "Wandering eyes or eyes that do not align", "Holding reading materials very close to the face"],
                treatment: ["Child-friendly vision screening and assessment.", "Prescription of glasses or patching therapy.", "Surgical correction for conditions like strabismus or congenital cataracts."],
                aftercare: ["Ensure the child wears prescribed glasses or eye patches.", "Keep the eye clean and administer prescribed drops.", "Attend regular pediatric follow-ups to track visual development."]
            },
            {
                id: "surg-laser",
                name: "Laser eye correction",
                description: "Precision laser procedures for refractive errors.",
                about: "Refractive errors like nearsightedness, farsightedness, and astigmatism can often be corrected with laser procedures. These precision treatments reshape the cornea, reducing or eliminating the need for glasses or contact lenses.",
                symptoms: ["Difficulty seeing objects clearly at a distance or up close", "Eyestrain or headaches after visual tasks", "Dependence on glasses or contact lenses for daily activities"],
                treatment: ["Comprehensive mapping of the cornea to determine suitability.", "Precision laser reshaping of the corneal tissue.", "Immediate post-procedure evaluation."],
                aftercare: ["Rest with eyes closed for a few hours immediately after the procedure.", "Use lubricating and medicated eye drops as prescribed.", "Avoid rubbing the eyes and swimming for a few weeks."]
            }
        ],
        surgeriesNote: "These surgeries are available at Oracle Eye Hospital, Moradabad. The decision on which free surgery a patient receives is made by the consulting doctor after a thorough examination."
    },
    "rural-eye-camps": {
        slug: "rural-eye-camps",
        menuLabel: "Rural Eye Camps",
        title: "325+ Free Camps Conducted In Rural Areas",
        tagline: "Bringing Healthcare to Your Doorstep",
        intro: "Reaching remote and rural areas is a core part of our mission. We organize extensive mobile eye camps in villages where access to medical facilities is severely limited. These camps act as the first line of defense against vision loss.\n\nBy bringing healthcare directly to the people, we eliminate the barriers of travel and cost. Hundreds of camps have been successfully conducted, screening thousands of rural residents and providing them with necessary interventions.",
        stat: { value: "325+", label: "Free Camps Conducted" },
        partner: "Associated With Oracle Eye Hospital, Moradabad, Uttar Pradesh",
        offers: [
            "On-site vision testing",
            "Spectacle distribution",
            "Cataract identification",
            "Basic eye drop medication",
            "Referrals for surgery"
        ],
        howItWorks: [
            "Camp Setup: We organize camps in accessible village locations.",
            "Testing: Local residents undergo vision screening.",
            "Diagnosis: Immediate advice or medication is provided.",
            "Referral: Severe cases are referred for advanced treatment."
        ],
        whoCanJoin: "Residents of the rural areas where the camps are organized.",
        faqs: [
            { question: "How often are camps held?", answer: "Camps are organized regularly based on community needs and resources." },
            { question: "Do I need to register in advance?", answer: "No, walk-in registrations are accepted at the campsite." }
        ],
        extra: [
            { title: "Symptoms Checked at Camps", desc: "Blurry vision, frequent headaches, difficulty seeing at night, and persistent eye redness." },
            { title: "Referral Path", desc: "Patients requiring surgery or advanced care are given a direct referral slip for our partner hospital." },
            { title: "Early Signs of Cataract & Glaucoma", desc: "Screening helps detect early clouding of the lens and abnormal eye pressure before permanent damage occurs." }
        ]
    },
    "dental-camps": {
        slug: "dental-camps",
        menuLabel: "Dental Camps",
        title: "15-20+ Dental Camps Conducted",
        tagline: "Promoting Oral Health and Hygiene",
        intro: "Oral health is often neglected in rural and underprivileged communities. Our free dental camps are designed to provide basic dental care, raise awareness about oral hygiene, and prevent serious dental diseases.\n\nQualified dentists volunteer their time and expertise to examine patients, provide necessary treatments like scaling or extractions, and educate the community on maintaining healthy teeth and gums for a lifetime.",
        stat: { value: "15-20+", label: "Dental Camps Conducted" },
        partner: null,
        offers: [
            "Routine dental check-ups",
            "Tooth extractions",
            "Scaling and cleaning",
            "Oral hygiene kits",
            "Preventive care counseling"
        ],
        howItWorks: [
            "Check-up: Dentists examine the patient's oral health.",
            "Treatment: Basic treatments are provided on-site.",
            "Counseling: Patients learn proper brushing techniques.",
            "Kits: Distribution of toothbrushes and paste when available."
        ],
        whoCanJoin: "Anyone requiring basic dental care and consultation.",
        faqs: [
            { question: "Are major surgeries performed at the camp?", answer: "No, we focus on basic treatments. Major procedures are referred to clinics." },
            { question: "Can children attend?", answer: "Yes, pediatric dental care and education are a major focus of our camps." }
        ]
    },
    "general-health-checkup": {
        slug: "general-health-checkup",
        menuLabel: "Health Check-up Camps",
        title: "16 General Health Check-up plan & Camps Conducted",
        tagline: "Comprehensive Primary Healthcare",
        intro: "Our general health check-up camps provide a holistic approach to community wellness. We aim to detect common health issues early, offering primary care and consultation to those who cannot afford regular doctor visits.\n\nThese camps cover vital parameter checks, general physician consultations, and distribution of essential medicines. We believe that preventive healthcare is the foundation of a strong, healthy community.",
        stat: { value: "16", label: "General Health Camps" },
        partner: null,
        offers: [
            "Blood pressure monitoring",
            "Blood sugar testing",
            "General physician consultation",
            "Free basic medicines",
            "Health and diet counseling"
        ],
        howItWorks: [
            "Vitals: Measurement of BP, pulse, and temperature.",
            "Consultation: Doctors diagnose and prescribe treatments.",
            "Medication: Free medicines are provided from our dispensary.",
            "Guidance: Patients receive lifestyle and diet advice."
        ],
        whoCanJoin: "Open to all individuals seeking general medical advice and primary care.",
        faqs: [
            { question: "Do you provide medicines for chronic diseases?", answer: "We provide basic medicines. Chronic cases are advised to seek long-term care." },
            { question: "Are diagnostic tests free?", answer: "Basic rapid tests available at the camp are completely free." }
        ]
    },
    "oracle-eye-hospital": {
        slug: "oracle-eye-hospital",
        menuLabel: "Oracle Eye Hospital",
        title: "Associated With Oracle Eye Hospital, Moradabad, Uttar Pradesh",
        tagline: "Our Trusted Healthcare Partner  →",
        href: "https://oracleeyehospital.com/",
        intro: "Our impactful healthcare initiatives are made possible through our strong association with Oracle Eye Hospital in Moradabad. Their state-of-the-art facilities and dedicated medical professionals form the backbone of our surgical interventions.\n\nTogether, we ensure that every patient referred from our rural camps receives top-tier medical attention, advanced surgical care, and compassionate post-operative support, entirely free of cost.",
        stat: null,
        partner: "Oracle Eye Hospital, Moradabad, Uttar Pradesh",
        offers: [
            "Advanced surgical facilities",
            "Expert ophthalmologists",
            "Hygienic and safe environment",
            "Comprehensive post-op care",
            "Patient counseling"
        ],
        howItWorks: [
            "Partnership: We collaborate to provide free surgeries.",
            "Referral: Patients from our camps are sent to the hospital.",
            "Treatment: Hospital staff performs the necessary procedures.",
            "Recovery: Patients recover under professional supervision."
        ],
        whoCanJoin: "Patients referred through Pritha Health Care's screening camps.",
        faqs: [
            { question: "Where is the hospital located?", answer: "Oracle Eye Hospital is located in Moradabad, Uttar Pradesh." },
            { question: "Do I have to pay anything at the hospital?", answer: "No, patients referred by our NGO receive treatment completely free." }
        ],
        services: [
            { name: "Cataract Service", desc: "Comprehensive assessment and surgical removal of cataracts." },
            { name: "Eye Screening Camps", desc: "Advanced treatments for corneal disorders and vision correction." },
            { name: "Computer Vision Syndrome", desc: "Care for digital eye strain and prolonged screen exposure." },
            { name: "Dry Eyes Clinic", desc: "Specialized diagnosis and management of tear film dysfunction." },
            { name: "Contact Lens Service", desc: "Expert fitting and guidance for various types of contact lenses." },
            { name: "Myopia Clinic", desc: "Dedicated progression control and management for short-sightedness." },
            { name: "Pediatric Eye Service", desc: "Specialized child-friendly vision care and squints management." },
            { name: "Vitreoretinal Service", desc: "Advanced medical and surgical care for complex retinal conditions." },
            { name: "Glaucoma Service", desc: "Early detection and long-term management of eye pressure issues." }
        ],
        gallery: [
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476871/WhatsApp_Image_2026-10-08_at_9.49.04_PM_1.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.04_PM_2.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.05_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.06_PM_1.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.06_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.07_PM_1.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476873/WhatsApp_Image_2026-10-08_at_9.49.07_PM_2.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/f_auto,q_auto/WhatsApp_Image_2026-10-08_at_9.49.24_PM_1.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476873/WhatsApp_Image_2026-10-08_at_9.49.07_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476869/WhatsApp_Image_2026-10-08_at_9.49.02_PM_1.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476869/WhatsApp_Image_2026-10-08_at_9.49.01_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476869/WhatsApp_Image_2026-10-08_at_9.49.02_PM_2.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476870/WhatsApp_Image_2026-10-08_at_9.49.02_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476871/WhatsApp_Image_2026-10-08_at_9.49.03_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.04_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476861/WhatsApp_Image_2026-10-08_at_9.48.35_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476862/WhatsApp_Image_2026-10-08_at_9.48.46_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476865/WhatsApp_Image_2026-10-08_at_9.48.55_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476866/WhatsApp_Image_2026-10-08_at_9.48.56_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476866/WhatsApp_Image_2026-10-08_at_9.48.58_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476866/WhatsApp_Image_2026-10-08_at_9.48.57_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476867/WhatsApp_Image_2026-10-08_at_9.49.00_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476868/WhatsApp_Image_2026-10-08_at_9.49.01_PM_1.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476839/WhatsApp_Image_2026-10-08_at_9.49.23_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476843/WhatsApp_Image_2026-10-08_at_9.48.17_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476843/WhatsApp_Image_2026-10-08_at_9.49.22_PM_2.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476848/WhatsApp_Image_2026-10-08_at_9.48.23_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476853/WhatsApp_Image_2026-10-08_at_9.48.29_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476860/WhatsApp_Image_2026-10-08_at_9.48.34_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476861/WhatsApp_Image_2026-10-08_at_9.48.37_PM.jpg",
            "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476861/WhatsApp_Image_2026-10-08_at_9.48.31_PM.jpg",
            "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193653/a8e57699-e68f-4772-8e0a-ea0bcb324213_xt4c0x.jpg",
            "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193652/16567d17-c657-460d-9dae-98d91660fb1a_pwogx4.jpg",
            "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/8cf74d59-9437-4cb4-8518-10fe14e60eca_tt75yb.jpg",
            "https://res.cloudinary.com/dv9tivfvq/image/upload/v1791193651/6af6a1d9-299e-42db-a62f-07b087fcaf95_tk0wa9.jpg"
        ]
    },
    "cancer-screening-camps": {
        slug: "cancer-screening-camps",
        menuLabel: "Cancer Screening",
        title: "47+ Oracle Camps Cancer Screening Conducted",
        tagline: "Early Detection Saves Lives",
        intro: "Cancer is a growing concern, and early detection is crucial for successful treatment. We organize specialized cancer screening camps to identify potential risks and early signs of various cancers, particularly in high-risk populations.\n\nThese camps provide non-invasive screenings, expert consultations, and guidance on the next steps for those who need further medical evaluation, empowering communities to take charge of their health.",
        stat: { value: "47+", label: "Cancer Screening Camps" },
        partner: null,
        offers: [
            "Visual and physical examinations",
            "Risk assessment counseling",
            "Awareness materials",
            "Referrals for biopsies or advanced tests",
            "Expert medical consultation"
        ],
        howItWorks: [
            "Registration: Identifying high-risk individuals.",
            "Screening: Doctors perform basic non-invasive checks.",
            "Counseling: Discussing symptoms and lifestyle risks.",
            "Referral: Guiding suspected cases to specialized oncology centers."
        ],
        whoCanJoin: "Individuals exhibiting symptoms or those in high-risk categories.",
        faqs: [
            { question: "Is the screening painful?", answer: "No, the initial screenings at our camps are generally visual and non-invasive." },
            { question: "What happens if a risk is detected?", answer: "We guide and refer the patient to appropriate government or partner hospitals for further tests." }
        ]
    },
    "tobacco-awareness": {
        slug: "tobacco-awareness",
        menuLabel: "Tobacco Awareness",
        title: "62+ Tobacco & Awareness Campaigns Conducted",
        tagline: "Say No to Tobacco for a Healthier Tomorrow",
        intro: "Tobacco consumption is a leading cause of severe health issues, including oral cancer. Our awareness campaigns focus on educating the masses about the life-threatening dangers of tobacco use in all its forms.\n\nThrough interactive sessions, visual aids, and community outreach, we strive to break the cycle of addiction, offering support and guidance to those who wish to quit and lead a healthier lifestyle.",
        stat: { value: "62+", label: "Awareness Campaigns" },
        partner: null,
        offers: [
            "Educational seminars",
            "De-addiction counseling",
            "Informative pamphlets and posters",
            "Community support groups",
            "Health risk demonstrations"
        ],
        howItWorks: [
            "Outreach: We visit schools, villages, and community centers.",
            "Education: Presenting the harmful effects of tobacco.",
            "Counseling: Providing one-on-one advice to users.",
            "Support: Connecting individuals with de-addiction resources."
        ],
        whoCanJoin: "Everyone, particularly youth and current tobacco users.",
        faqs: [
            { question: "Do you provide nicotine replacement therapy?", answer: "We primarily focus on counseling and education. Medical therapies are referred to doctors." },
            { question: "Can you conduct a session at our school?", answer: "Yes, we frequently partner with educational institutions for awareness drives." }
        ]
    },
    "health-talks-webinars": {
        slug: "health-talks-webinars",
        menuLabel: "Health Talks & Webinars",
        title: "Health Talk & webinar & Social & Digital Plateform Prevention & Awareness Campaigns",
        tagline: "Empowering Through Knowledge",
        intro: "In the digital age, spreading awareness goes beyond physical camps. We leverage social media, digital platforms, and online webinars to reach a wider audience with vital health information and preventive measures.\n\nOur health talks feature medical experts discussing various topics, from hygiene and nutrition to disease prevention, ensuring that life-saving knowledge is accessible to everyone, everywhere.",
        stat: null,
        partner: null,
        offers: [
            "Live webinars with doctors",
            "Q&A sessions",
            "Informative social media content",
            "Digital health guides",
            "Community health discussions"
        ],
        howItWorks: [
            "Scheduling: We announce upcoming webinars online.",
            "Broadcasting: Experts deliver talks via digital platforms.",
            "Interaction: Viewers ask questions in real-time.",
            "Distribution: Recordings and guides are shared on social media."
        ],
        whoCanJoin: "Anyone with internet access interested in health and wellness.",
        faqs: [
            { question: "Are the webinars free to attend?", answer: "Yes, all our digital health talks and webinars are completely free." },
            { question: "Where can I find past webinar recordings?", answer: "Recordings are usually posted on our official social media channels and website." }
        ],
        extra: [
            { title: "Screen Fatigue & Dry Eyes", desc: "Learn practical tips and the 20-20-20 rule to protect your eyes during long working hours." },
            { title: "Children's Vision", desc: "Understand the importance of early eye check-ups and identifying signs of myopia in kids." },
            { title: "Nutrition for Eye Health", desc: "Discover which foods and vitamins naturally support long-term vision preservation." }
        ]
    }
};