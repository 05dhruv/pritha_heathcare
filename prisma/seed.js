const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.stat.deleteMany();
  await prisma.stat.createMany({
    data: [
      { label: "Cataract Operations", value: 172755, position: 1 },
      { label: "Assistive Devices and Mobility Aids", value: 89906, position: 2 },
    ],
  });

  await prisma.slide.deleteMany();
  await prisma.slide.createMany({
    data: [
      {
        title: "Pritha Health Care is committed to help and rehabilitate the Specially Abled Children.",
        image: "/admin/slider/Kalyanam_Karoti_Special_School.webp",
        link: "/sambal-special-school",
        position: 1,
      },
      {
        title: "Pritha Health Care is committed to help and rehabilitate the differently-abled",
        image: "/admin/slider/Disability Care.webp",
        link: "/disability-care",
        position: 3,
      },
      {
        title: "Pritha Health Care Committed to Eradicate the Avoidable Blindness",
        image: "/admin/slider/Eye Care.webp",
        link: "/eyecare",
        position: 4,
      },
    ],
  });

  await prisma.post.deleteMany();
  await prisma.post.createMany({
    data: [
      {
        title: "22nd Free Eye Camp Successfully Concludes by Pritha Health Care, Moradabad, Courtesy of Shri Krishnalal Sharma Charitable Trust, Moradabad",
        excerpt: "Pritha Health Care Moradabad organised the ending ceremony of the 22nd Free Eye Camp on Punytithi of the late Shri Mayank Sharma.",
        content:
          "Pritha Health Care Moradabad organised the ending ceremony of the 22nd Free Eye Camp on Punytithi of the late Shri Mayank Sharma.\n\nHundreds of patients were examined and operated upon free of cost.",
        image: "/admin/blog/31-10-2023/Kachaura Camp.jpg",
        postedAt: new Date("2023-10-31"),
      },
      {
        title: "Embassy of Japan in India provided Eye Medical Equipment",
        excerpt: "Modern eye machines and equipment have been provided by the Embassy of Japan under the Project for the Provision of Eye Medical Equipment",
        content:
          "Modern eye machines and equipment have been provided by the Embassy of Japan under the Project for the Provision of Eye Medical Equipment to Pritha Health Care Moradabad.",
        image: "/admin/blog/23-08-2022/Kalyanam_Karoti_The_handover_ceremony.webp",
        postedAt: new Date("2022-08-23"),
      },
    ],
  });

  if ((await prisma.notification.count()) === 0) {
    await prisma.notification.create({ data: { title: "Welcome: add public notices from the admin panel", link: "" } });
  }

  const galleryData = [
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476871/WhatsApp_Image_2026-10-08_at_9.49.04_PM_1.jpg", caption: "Pratha Health Care Medical Outreach & Eye Examination Camp" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.04_PM_2.jpg", caption: "Patient Registration and Vision Screening Session" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.05_PM.jpg", caption: "Specialist Eye Diagnosis & Slit-lamp Examination" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.06_PM_1.jpg", caption: "Rural Community Health Check-up Camp" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.06_PM.jpg", caption: "Senior Citizen Vision Assessment & Care" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.07_PM_1.jpg", caption: "Medical Camp Team & Field Staff in Action" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476873/WhatsApp_Image_2026-10-08_at_9.49.07_PM_2.jpg", caption: "Comprehensive Eye Health Screening & Consultation" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/f_auto,q_auto/WhatsApp_Image_2026-10-08_at_9.49.24_PM_1.jpg", caption: "Diagnostic Screening & Community Health Awareness" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476873/WhatsApp_Image_2026-10-08_at_9.49.07_PM.jpg", caption: "Patient Welfare & Pre-operative Consultation" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476869/WhatsApp_Image_2026-10-08_at_9.49.02_PM_1.jpg", caption: "Free Cataract Surgery Selection & Medical Check" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476869/WhatsApp_Image_2026-10-08_at_9.49.01_PM.jpg", caption: "Healthcare Screening Volunteers Assisting Patients" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476869/WhatsApp_Image_2026-10-08_at_9.49.02_PM_2.jpg", caption: "Community Beneficiary Assessment and Checkup" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476870/WhatsApp_Image_2026-10-08_at_9.49.02_PM.jpg", caption: "Specialist Doctor Consultations at Village Camp" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476871/WhatsApp_Image_2026-10-08_at_9.49.03_PM.jpg", caption: "Free Distribution of Eyeglasses & Protective Frames" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476872/WhatsApp_Image_2026-10-08_at_9.49.04_PM.jpg", caption: "Field Ophthalmology Team Examining Villagers" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476861/WhatsApp_Image_2026-10-08_at_9.48.35_PM.jpg", caption: "Oral & General Health Screening Initiative" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476862/WhatsApp_Image_2026-10-08_at_9.48.46_PM.jpg", caption: "Preventive Healthcare & Awareness Drive" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476865/WhatsApp_Image_2026-10-08_at_9.48.55_PM.jpg", caption: "Clinical Diagnosis and Patient Guidance" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476866/WhatsApp_Image_2026-10-08_at_9.48.56_PM.jpg", caption: "Rural Outreach Medical Support Team" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476866/WhatsApp_Image_2026-10-08_at_9.48.58_PM.jpg", caption: "Doctor Advising Underprivileged Patients" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476866/WhatsApp_Image_2026-10-08_at_9.48.57_PM.jpg", caption: "Vision Acuity Testing in Rural UP" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476867/WhatsApp_Image_2026-10-08_at_9.49.00_PM.jpg", caption: "Patient Counseling and Post-Operative Guidance" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476868/WhatsApp_Image_2026-10-08_at_9.49.01_PM_1.jpg", caption: "Mobile Medical Unit & Village Diagnostic Camp" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476839/WhatsApp_Image_2026-10-08_at_9.49.23_PM.jpg", caption: "Cataract Screening and Refractive Correction" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476843/WhatsApp_Image_2026-10-08_at_9.48.17_PM.jpg", caption: "Community Gathering for Health Awareness Program" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476843/WhatsApp_Image_2026-10-08_at_9.49.22_PM_2.jpg", caption: "Elderly Patient Vision Restoration Care" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476848/WhatsApp_Image_2026-10-08_at_9.48.23_PM.jpg", caption: "Medical Mission Field Operations" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476853/WhatsApp_Image_2026-10-08_at_9.48.29_PM.jpg", caption: "Doctor Examination & Patient Consultation" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476860/WhatsApp_Image_2026-10-08_at_9.48.34_PM.jpg", caption: "Healthcare Volunteers & Screening Station" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476861/WhatsApp_Image_2026-10-08_at_9.48.37_PM.jpg", caption: "Dedicated Medical Staff Providing Compassionate Care" },
    { type: "IMAGE", url: "https://res.cloudinary.com/ccfnrpqo/image/upload/v1791476861/WhatsApp_Image_2026-10-08_at_9.48.31_PM.jpg", caption: "Restoring the Gift of Vision to Underserved Communities" },
  ];

  for (const item of galleryData) {
    const exists = await prisma.galleryItem.findFirst({ where: { url: item.url } });
    if (!exists) {
      await prisma.galleryItem.create({ data: item });
    }
  }

  console.log("Seed complete");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
