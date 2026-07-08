import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Francis Aliser - Full Stack Developer",
  author: "Francis Aliser",
  description:
    "Software Engineer based in Cebu, Philippines. I specialize in building and deploying web applications and systems — turning complex problems into clean, practical solutions.",
  lang: "en",
  siteLogo: "/francis-grad-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },            // <— added
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/francisaliser/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/francis-aliser/" },
    { text: "GitHub", href: "https://github.com/Sceyo" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Francis Aliser",
    specialty: "Full Stack Developer",
    summary:
      "Software Engineer based in Cebu, Philippines. I specialize in building and deploying web applications and systems — turning complex problems into clean, practical solutions.",
    email: "francisaliserit@gmail.com",
  },
  experience: [
    {
      company: "Lexmark Cebu",
      position: "IT Operations Intern",
      startDate: "Sep 2025",
      endDate: "Feb 2026",
      summary: [
        "Gained hands-on experience in enterprise IT operations, automation, and networking within a production environment",
        "Developed an automated attendance reporting system using Microsoft Power Automate, reducing manual reporting effort and improving data accuracy",
        "Configured and troubleshot Cisco devices (2970, 3745, 3750G, 4510R-E), including VLAN setup, OS recovery, and secure erasure",
        "Supported CMDB validation and network deployment, including access point installation and layout planning",
      ],
    },
  ],
  skillsAndCertifications: {
    skillCategories: {
      languages: ["JavaScript", "Python", "Java", "Typescript", "C"],
      frontend: ["React.js", "Vue.js", "Next.js"],
      backend: ["Django", "REST API Development", "Express.js"],
      databases: ["MongoDB", "MySQL", "Firebase", "DynamoDB"],
      tools: ["Git", "GitHub", "Postman", "VS Code", "Microsoft Power Automate"],
      other: ["Networking Fundamentals", "IT Operations", "System Troubleshooting"],
    },
    certifications: [
      {
        name: "Google IT Automation with Python",
        issuer: "Coursera / Google",
        date: "May 2026",
      },
      {
        name: "AI Apprentice to AI Architect",
        issuer: "Xerox Philippines",
        date: "Jan 2026",
      },
      {
        name: "Prompt Engineering with Generative AI Tools",
        issuer: "Lexmark Cebu",
        date: "Nov 2025",
      },
      {
        name: "AI and ML for Decision-makers and Leaders",
        issuer: "Xerox Philippines",
        date: "Sep 2025",
      },
      {
        name: "Getting Started with Prompt Engineering",
        issuer: "Xerox Philippines",
        date: "Nov 2025",
      },
      {
        name: "AWS Educate Introduction to Cloud 101",
        issuer: "Amazon Web Services (AWS)",
        date: "Jul 2025",
      },
    ],
  },
  projects: [
    {
      name: "PANN Backoffice",
      summary: "A Administration dashboard for managing the users, customers, stocks, products, categories, and sales",
      linkPreview: "admin.ramyeoncorner.com",
      linkSource: "https://github.com/PANNRamyeon/Ramyeon-Backoffice",
      image: "/Backoffice.png",
    },
    {
      name: "PANN Ramyeon POS",
      summary: "A point-of-sale system for managing sales transactions and inventory.",
      linkPreview: "/",
      linkSource: "https://github.com/PANNRamyeon/Ramyeon-POS",
      image: "/PANN.png",
    },
    {
      name: "PANN Ramyeon Corner",
      summary: "A customer facing website that handles online orders for Ramyeon Food Corner.",
      linkPreview: "/",
      linkSource: "ramyeoncorner.com",
      image: "/Ramyeon.png",
    },
    {
      name: "PAD-Q",
      summary: "An Queuing system for paddle sports such as Pickleball, Badminton, and Table Tennis. It allows users to join a queue for a specific sport and can check when it's their turn to play.",
      linkPreview: "/",
      linkSource: "https://github.com/Sceyo/PadQ",
      image: "/PADQ.png",
    }
  ],
  about: {
    description: `
      Hi, I’m Francis Aliser, a passionate Full Stack Developer based in Cebu, Philippines. 
      I specialize in turning complex problems into clean, practical web solutions. 
      With a strong background in both front‑end and back‑end technologies, 
      I thrive on building scalable applications that truly serve users’ needs.
    `,
    image: "/francis-grad-big.jpg",                        // <— update to your actual image
  },
};