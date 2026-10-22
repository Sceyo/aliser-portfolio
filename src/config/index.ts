import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Francis Aliser | Full-Stack Developer & Software Engineer",
  author: "Francis Aliser",
  description:
    "Cebu-based full-stack developer and software engineer building dependable web systems for retail operations, automation, and real-time experiences.",
  lang: "en",
  siteLogo: "/Formal Photo.jpg",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "How I Work", href: "#how-i-work" },
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
        "Developed a Microsoft Power Automate attendance workflow for a 10-person team that calculated daily clock-out reminders and delivered Friday work-hour summaries, reducing manual tracking from 5–15 minutes per day to 1–2 minutes.",
        "Replaced a fully manual tracking process while keeping the implementation and company data confidential.",
        "Configured and troubleshot Cisco devices, including VLAN setup, operating-system recovery, and secure erasure.",
        "Supported CMDB validation and network deployment, including access-point installation and layout planning.",
        "Gained hands-on experience in enterprise IT operations, automation, and networking within a production environment.",
      ],
    },
  ],
  projects: [
    {
      name: "PANN Backoffice",
      featured: true,
      projectType: "Client capstone · Retail operations",
      summary:
        "A centralized administration platform for staff accounts, inventory, suppliers, promotions, customers, sales analytics, notifications, and operational logs.",
      role: "Full-Stack Developer",
      status: "Deployment candidate · Development paused by client",
      contribution:
        "Developed notifications and operational alerts, user and staff-account management, inventory and sales-monitoring reports, and their supporting Vue interfaces and Django API functionality.",
      results: [
        "Across all three PANN applications, the system completed 255 documented black-box tests.",
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
      featured: true,
      projectType: "Client capstone · Point of sale",
      summary:
        "An offline-capable restaurant POS designed to keep cashier operations running locally and synchronize sales, inventory, and shift records with the cloud when connectivity returns.",
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
      featured: true,
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
      featured: true,
      projectType: "Independent product · Sports technology",
      summary:
        "A real-time queue and matchmaking system for singles and doubles play that automates multi-court rotations, live spectator tracking, and score recording with zero app installation.",
      role: "Founder & Full-Stack Developer",
      status: "Production Candidate (v1.0.0-rc.6) · Live on Vercel",
      contribution:
        "Founded, architected, and built PAD-Q end-to-end: designed state-machine matchmaking engines, real-time Firestore synchronization, App Check security, responsive host/spectator interfaces, and a 209-test automated verification suite.",
      results: [
        "Passed strict 209-test automated quality gate: 173 Vitest unit/simulation tests, 20 Firestore emulator security tests, and 16 Playwright browser stress scenarios.",
        "Verified under multi-court concurrency gates: sustained 30 players, 3 concurrent courts, and 30 simultaneous Live Watch spectators on a $0/month free-tier infrastructure budget.",
        "Implemented deterministic doubles rotation (INIT → WINNERS → LOSERS) minimizing partner repeats and preventing player queue starvation.",
        "Hardened production data flow with revision-checked Firestore transactions, failed-save rollbacks, and Firebase App Check with reCAPTCHA Enterprise enforcement.",
      ],
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript 5",
        "Cloud Firestore",
        "Firebase App Check",
        "Tailwind CSS 4",
        "Vitest",
        "Playwright",
        "Vercel",
      ],
      gallery: [
        {
          src: "/project-images/Padq/homepage.jpg",
          alt: "PAD-Q host and spectator session entry portal",
          caption: "Session setup and entry portal",
        },
        {
          src: "/project-images/Padq/3courts.jpg",
          alt: "PAD-Q three-court simultaneous match management view",
          caption: "Simultaneous 3-court management & queue",
        },
        {
          src: "/project-images/Padq/scoreboard.jpg",
          alt: "PAD-Q live scoreboard with configurable target scores",
          caption: "Point-by-point live match scoreboard",
        },
        {
          src: "/project-images/Padq/live.jpg",
          alt: "PAD-Q live spectator watch view with court status and next-up queue",
          caption: "Real-time spectator watch experience",
        },
        {
          src: "/project-images/Padq/Skilled.jpg",
          alt: "PAD-Q multi-court matchmaking and partner pair staging",
          caption: "Fair rotation & partner pair controls",
        },
      ],
      linkPreview: "https://pad-q.vercel.app/",
      linkSource: "https://github.com/Sceyo/PadQ",
      caseStudyUrl: "/case-studies/pad-q",
      image: "/project-images/Padq/homepage.jpg",
    },
    {
      name: "OpenDota Multi-Role Match Tracker & Alert Bot",
      featured: true,
      projectType: "Independent product · Automation / Data tooling",
      summary:
        "An automated Python/Playwright/Streamlit bot that monitors pro Dota 2 players on OpenDota, detects new matches, and sends real-time Discord alerts with match screenshots.",
      role: "Founder & Developer",
      status: "Weekend project · Working prototype",
      contribution:
        "Designed and implemented an automated match-tracking pipeline with headless browser scraping, fault-tolerant polling, and Discord webhook notifications.",
      results: [
        "Built headless browser automation with Playwright to scrape match history without violating target-site robots.txt.",
        "Designed a 3-strike circuit breaker and atomic file writes to make polling resilient to transient failures.",
        "Documented the system with a full architecture spec and 6 Architecture Decision Records (ADRs), including a pivot from Dotabuff to OpenDota after auditing scraping constraints.",
      ],
      technologies: [
        "Python",
        "Playwright",
        "Streamlit",
        "Discord API",
        "JSON",
      ],
      gallery: [
        {
          src: "/project-images/DotaAlertBot/match-tracker.png",
          alt: "OpenDota Multi-Role Match Tracker player monitoring dashboard",
          caption: "Live player match monitoring and multi-role tracking interface",
        },
        {
          src: "/project-images/DotaAlertBot/meta-report.png",
          alt: "OpenDota Daily Meta Report hero leaderboard view",
          caption: "Top 10 hero meta leaderboard and category configuration",
        },
      ],
      linkSource: "https://github.com/Sceyo/DotaAlertBot",
      image: "/project-images/DotaAlertBot/match-tracker.png",
    },
    {
      name: "Watch Cebu",
      featured: true,
      projectType: "Civic Tech · Distributed Systems · Web Mapping",
      summary:
        "A real-time civic situational awareness and multi-hazard monitoring dashboard for Metro Cebu that synthesizes municipal power outages, seismic events, severe tropical storms, atmospheric air quality, and hourly weather forecasts.",
      role: "Creator & Full-Stack Systems Engineer",
      status: "Production Live · Open source",
      contribution:
        "Architected and engineered an offline-first dark control-room dashboard combining Leaflet geospatial mapping, resilient municipal data extraction, serverless edge caching, a 3-tier PWA service worker, and strict WCAG 2.2 AA accessibility.",
      results: [
        "324 passing automated tests across the test suite with 100% test coverage on scrapers, coordinate math, and boundary resolution.",
        "Engineered an offline-first 3-tier Service Worker architecture featuring a bounded 200-tile LRU basemap cache, network-first API caching, and tap-to-call civic emergency hotlines.",
        "Integrated DOST-PAGASA severe weather engine tracking Tropical Cyclone Wind Signals (TCWS #1–5), color-coded heavy rainfall warnings, and an interactive 72-hour forecast track cone.",
        "Scaled VECO power tracking to 100% geocoding resolution across the entire 674 km² franchise territory (8 LGUs and 80 Cebu City barangays) via an enriched 367-feature boundary dataset.",
        "Built a 3-tier hybrid camera search (0ms active pins, offline 444-LGU centroid dictionary, and geo-fenced Nominatim fallback) with automatic fly-to navigation.",
        "Integrated a resolution-independent Cebu Island silhouette and civic radar visual identity across the header, PWA manifest, and Open Graph social cards.",
      ],
      technologies: [
        "TypeScript",
        "Vite",
        "Leaflet.js",
        "PWA / Service Worker",
        "Node.js",
        "Vercel Edge Functions",
        "GitHub Actions",
        "Vitest",
        "Cheerio",
        "Open-Meteo API",
      ],
      gallery: [
        {
          src: "/project-images/WatchCebu/dashboard-map.png",
          alt: "Watch Cebu control room map overview and incident pins",
          caption: "Control room map overview, power outage pins, and real-time status chips",
        },
        {
          src: "/project-images/WatchCebu/incident-popup.png",
          alt: "Watch Cebu verified power outage details popup",
          caption: "VECO outage modal with street-level parsing and provenance indicator",
        },
        {
          src: "/project-images/WatchCebu/forecast-drawer.png",
          alt: "Watch Cebu 24-hour weather forecast drawer",
          caption: "Top slide-down 24-hour forecast drawer with hourly rain % and wind metrics",
        },
        {
          src: "/project-images/WatchCebu/mobile-responsive.png",
          alt: "Watch Cebu mobile-first responsive layout",
          caption: "Mobile-first clamped viewport with WCAG 2.2 AA touch targets",
        },
      ],
      linkPreview: "https://watch-cebu.vercel.app/",
      linkSource: "https://github.com/Sceyo/Watch-Cebu",
      caseStudyUrl: "/case-studies/watch-cebu",
      image: "/project-images/WatchCebu/dashboard-map.png",
    },
  ],
  skillsAndCertifications: {
    skillCategories: {
      languages: ["JavaScript", "TypeScript", "Python", "Java"],
      frontend: ["React.js", "Vue.js", "Next.js", "Leaflet"],
      backend: ["Django", "REST API Development", "Node.js", "Express.js"],
      databases: ["AWS DynamoDB", "MongoDB", "Firebase", "MySQL"],
      tools: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Microsoft Power Automate",
        "Vitest",
      ],
      aiTools: ["Codex", "Claude Code"],
      other: [
        "Networking Fundamentals",
        "IT Operations",
        "System Troubleshooting",
      ],
    },
    certifications: [
      {
        name: "Google AI Professional Certificate",
        issuer: "Coursera / Google",
        date: "Sep 2026",
        featured: true,
        credentialUrl:
          "https://coursera.org/verify/professional-cert/1H2EBK7OQ53X",
        description:
          "Covers 8 courses spanning AI for brainstorming, research, writing, content creation, data analysis, app building, and deployment.",
      },
      {
        name: "Google IT Automation with Python",
        issuer: "Coursera / Google",
        date: "May 2026",
        featured: true,
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/professional-cert/N06MD3P0PJEK",
      },
      {
        name: "AI Apprentice to AI Architect",
        issuer: "Lexmark Cebu",
        date: "Jan 2026",
        featured: true,
        description:
          "Internal 100+ hour learning journey covering NLP fundamentals, neural-network frameworks, MLOps pipelines, and AI ethics and governance.",
      },
      {
        name: "AWS Educate Introduction to Cloud 101",
        issuer: "Amazon Web Services",
        date: "Jul 2025",
        featured: true,
        credentialUrl:
          "https://www.credly.com/badges/72e4ea74-96be-41bc-a98b-7c9264af67ff/linked_in_profile",
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
      "I’m Francis Aliser, a Cebu-based full-stack developer and software engineer who graduated with a BS in Information Technology from the University of San Carlos on July 3, 2026. I was an Academic & Financial Scholar under the Redemptorist Educational Assistance Program from 2020 to 2026. I enjoy building practical systems that connect clean interfaces with reliable backend services. My experience spans retail platforms, workflow automation, real-time applications, cloud databases, and enterprise IT operations.",
    image: "/Formal Photo Big.jpg",
  },
};
