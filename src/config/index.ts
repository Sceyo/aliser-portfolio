import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Francis Aliser | Full-Stack Developer & Software Engineer",
  author: "Francis Aliser",
  description:
    "Cebu-based full-stack developer and software engineer building dependable web systems for retail operations, automation, and real-time experiences.",
  lang: "en",
  siteLogo: "/francis-grad-small.png",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/francisaliser/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/francis-aliser/" },
    { text: "GitHub", href: "https://github.com/Sceyo" },
  ],
  socialImage: "/og.png",
  canonicalURL: "https://aliser-portfolio.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Francis Aliser",
    specialty: "Full-Stack Developer & Software Engineer",
    headline: "I build dependable systems for real-world operations.",
    summary:
      "I turn complex workflows into practical web products—from retail management and payment integrations to automation and real-time queue systems.",
    email: "francisaliserit@gmail.com",
    location: "Cebu, Philippines",
    availability: "Available for opportunities",
    resume: "/francis-aliser-resume.pdf",
  },
  experience: [
    {
      company: "Lexmark Research and Development Corporation",
      position: "IT Operations Student Intern",
      startDate: "Sep 2025",
      endDate: "Feb 2026",
      summary: [
        "Built an automated attendance-reporting workflow with Microsoft Power Automate, reducing manual reporting effort and improving data accuracy.",
        "Configured and troubleshot Cisco devices, including VLAN setup, operating-system recovery, and secure erasure.",
        "Supported CMDB validation and network deployment, including access-point installation and layout planning.",
        "Gained hands-on experience in enterprise IT operations, automation, and networking within a production environment.",
      ],
    },
  ],
  projects: [
    {
      name: "PANN Backoffice",
      projectType: "Client capstone · Retail operations",
      summary:
        "A centralized administration platform for staff accounts, inventory, suppliers, promotions, customers, sales analytics, notifications, and operational logs.",
      role: "Full-Stack Developer",
      status: "Deployment candidate · Development paused by client",
      contribution:
        "Developed notifications and operational alerts, user and staff-account management, inventory and sales-monitoring reports, and their supporting Vue interfaces and Django API functionality.",
      results: [
        "Passed all 130 documented black-box test cases with a 100% test-case acceptability rate.",
        "The combined Backoffice and POS system received a 4.96/5 “Very Acceptable” user-acceptance score after improvements.",
        "Helped migrate the shared data layer from MongoDB Atlas to access-pattern-driven AWS DynamoDB models and services.",
      ],
      technologies: [
        "Vue 3",
        "Django REST Framework",
        "AWS DynamoDB",
        "PynamoDB",
        "JWT",
        "Chart.js",
      ],
      gallery: [
        {
          src: "/project-images/Backoffice/Report.jpg",
          alt: "PANN Backoffice sales-by-category reporting dashboard",
          caption: "Sales reporting and category analysis",
        },
        {
          src: "/project-images/Backoffice/Notification.jpg",
          alt: "PANN Backoffice operational notifications dashboard",
          caption: "Operational notifications and priority filters",
        },
        {
          src: "/project-images/Backoffice/Products.jpg",
          alt: "PANN Backoffice product-management interface",
          caption: "Product and inventory management",
        },
        {
          src: "/project-images/Backoffice/Suppliers.jpg",
          alt: "PANN Backoffice supplier-management interface",
          caption: "Supplier records and management workflows",
        },
      ],
      linkPreview: "https://admin.ramyeoncorner.com/login",
      linkSource: "https://github.com/PANNRamyeon/Ramyeon-Backoffice",
      image: "/project-images/Backoffice/Report.jpg",
    },
    {
      name: "PANN Ramyeon POS",
      projectType: "Client capstone · Point of sale",
      summary:
        "A locally packaged restaurant POS designed to connect cashier workflows with sales, inventory, promotions, reporting, online orders, and digital payments.",
      role: "Full-Stack Developer",
      status: "Working prototype · Migration paused by client",
      contribution:
        "Implemented discounts and promotions, sales reports, real-time sales summaries and analytics, and the PayMongo payment integration across the Vue frontend and Django backend.",
      results: [
        "Achieved a documented 97.3% acceptability result across 51 black-box test cases.",
        "Issues involving online-order statuses, missing information, and error handling were identified and addressed during evaluation.",
      ],
      technologies: [
        "Vue 3",
        "Django",
        "MongoDB",
        "AWS DynamoDB",
        "PayMongo API",
        "Chart.js",
      ],
      gallery: [
        {
          src: "/project-images/POS/Menu.jpg",
          alt: "PANN POS product menu and active order interface",
          caption: "Product browsing and active-order workflow",
        },
        {
          src: "/project-images/POS/checkout.jpg",
          alt: "PANN POS checkout with discounts and promotion summary",
          caption: "Checkout, discounts, and applied promotions",
        },
        {
          src: "/project-images/POS/order_complete.jpg",
          alt: "PANN POS completed-order confirmation",
          caption: "Completed transaction flow",
        },
        {
          src: "/project-images/POS/shift.jpg",
          alt: "PANN POS cashier shift-management screen",
          caption: "Cashier shift management",
        },
      ],
      linkPreview:
        "https://drive.google.com/file/d/1bcqhgo44QaWIVQhePaE-cseFhSUGZvxC/view?usp=sharing",
      linkSource: "https://github.com/PANNRamyeon/Ramyeon-POS",
      image: "/project-images/POS/Menu.jpg",
    },
    {
      name: "Ramyeon Corner",
      projectType: "Client capstone · Online ordering",
      summary:
        "A mobile-friendly customer ordering experience for browsing products and promotions, placing pickup or delivery orders, and managing loyalty activity.",
      role: "Shared Backend & Integrations Contributor",
      status: "Deployed and evaluated · Development paused",
      contribution:
        "Contributed to promotions, payment integration, reporting, and shared data workflows used across the customer website, backend, POS, and Backoffice modules.",
      results: [
        "Passed all 74 documented black-box test cases.",
        "User-acceptance testing with 132 customers produced a 4.25/5 “Very Acceptable” average score.",
      ],
      technologies: [
        "Vue.js",
        "Django REST Framework",
        "AWS DynamoDB",
        "PayMongo API",
        "Netlify",
        "Render",
      ],
      gallery: [
        {
          src: "/project-images/Customer/homepage.jpg",
          alt: "Ramyeon Corner customer ordering homepage",
          caption: "Delivery and pickup ordering entry point",
        },
        {
          src: "/project-images/Customer/Login.jpg",
          alt: "Ramyeon Corner customer account sign-in interface",
          caption: "Customer authentication",
        },
        {
          src: "/project-images/Customer/aboutus.jpg",
          alt: "Ramyeon Corner About Us page",
          caption: "Restaurant information and brand story",
        },
      ],
      linkPreview: "https://ramyeoncorner.com/",
      image: "/project-images/Customer/homepage.jpg",
    },
    {
      name: "PAD-Q",
      projectType: "Real-time web application · Sports",
      summary:
        "A real-time queue manager for singles and doubles play, with multiple matchmaking modes designed to reduce repeated matchups and uneven wait times.",
      role: "Developer",
      status: "Live prototype on Vercel",
      contribution:
        "Built as a responsive host-and-spectator experience with room sharing, multi-court management, live scoring, player rotation, match history, analytics, and session recovery.",
      results: [
        "Matchmaking engines are supported by 146 passing automated tests, including simulations with up to 50 players.",
        "Supports default rotation, tournament, play-all, and skill-based matchmaking modes.",
      ],
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Firebase",
        "Vitest",
        "Vercel",
      ],
      gallery: [
        {
          src: "/project-images/Padq/homepage.jpg",
          alt: "PAD-Q singles, doubles, and spectator home screen",
          caption: "Host and spectator entry experience",
        },
        {
          src: "/project-images/Padq/doublesqueue.jpg",
          alt: "PAD-Q doubles queue and matchmaking interface",
          caption: "Doubles queue and matchmaking modes",
        },
        {
          src: "/project-images/Padq/3courts.jpg",
          alt: "PAD-Q three-court match-management view",
          caption: "Simultaneous multi-court management",
        },
        {
          src: "/project-images/Padq/scoreboard.jpg",
          alt: "PAD-Q live match scoreboard",
          caption: "Live scoring and winner selection",
        },
        {
          src: "/project-images/Padq/Skilled.jpg",
          alt: "PAD-Q skill-based matchmaking view",
          caption: "Skill-based queue configuration",
        },
      ],
      linkPreview: "https://pad-q.vercel.app/",
      linkSource: "https://github.com/Sceyo/PadQ",
      image: "/project-images/Padq/homepage.jpg",
    },
  ],
  skillsAndCertifications: {
    skillCategories: {
      languages: ["JavaScript", "TypeScript", "Python", "Java"],
      frontend: ["React.js", "Vue.js", "Next.js"],
      backend: ["Django", "REST API Development", "Express.js"],
      databases: ["AWS DynamoDB", "MongoDB", "Firebase", "MySQL"],
      tools: ["Git", "GitHub", "Postman", "Microsoft Power Automate", "Codex"],
      other: [
        "Networking Fundamentals",
        "IT Operations",
        "System Troubleshooting",
      ],
    },
    certifications: [
      {
        name: "Google IT Automation with Python",
        issuer: "Coursera / Google",
        date: "May 2026",
        featured: true,
      },
      {
        name: "AI Apprentice to AI Architect",
        issuer: "Xerox Philippines",
        date: "Jan 2026",
        featured: true,
        description:
          "100+ hour learning journey covering NLP fundamentals, neural-network frameworks, MLOps pipelines, and AI ethics and governance.",
      },
      {
        name: "AWS Educate Introduction to Cloud 101",
        issuer: "Amazon Web Services",
        date: "Jul 2025",
        featured: true,
      },
    ],
    additionalCoursework: [
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
    ],
  },
  about: {
    description:
      "I’m Francis Aliser, a Cebu-based full-stack developer and software engineer with a BS in Information Technology from the University of San Carlos. I enjoy building practical systems that connect clean interfaces with reliable backend services. My experience spans retail platforms, workflow automation, real-time applications, cloud databases, and enterprise IT operations.",
    image: "/francis-grad-big.jpg",
  },
};
