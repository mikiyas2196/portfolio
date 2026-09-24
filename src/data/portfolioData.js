/**
 * Centralized Portfolio Data Configuration
 * Update your personal info, social links, project details, and skills here.
 */

export const personalInfo = {
  name: "MIKIYAS SEBSIBE TAYE",
  shortName: "MIKIYAS SEBSIBE",
  initials: "MS",
  title: "FULL-STACK WEB DEVELOPER",
  tagline: "Building practical web experiences with modern technologies.",
  summary: "Recent Information Technology graduate from Jimma University with hands-on experience building functional full-stack and AI-powered web applications using React, Node.js, Laravel, and Firebase.",
  location: "Addis Ababa, Ethiopia",
  phone: "0947092246",
  email: "mikiiyassebsibe@gmail.com",
  cvPath: "/Mikiyas-Sebsibe-Taye-CV.pdf",
  
  // NOTE: Replace placeholders below with your exact URLs when ready
  socialLinks: {
    github: "https://github.com/mikiyassebsibe", // Replace with your actual GitHub URL
    linkedin: "https://linkedin.com/in/mikiyas-sebsibe", // Replace with your actual LinkedIn URL
    tiktok: "https://www.tiktok.com/@abika2121",
    email: "mailto:mikiiyassebsibe@gmail.com",
    phone: "tel:0947092246"
  }
};

export const aboutData = {
  heading: "About Me",
  subtitle: "01 — ABOUT",
  bio: [
    "I am a recent Information Technology graduate from Jimma University (graduating 2026) with a CGPA of 3.78/4.00. I specialize in full-stack web development with hands-on experience using React, Node.js, Laravel, and Firebase.",
    "My background includes both independent project development and team collaboration on real-world systems — such as a university laboratory reservation system and a client-facing web showcase platform for a local business.",
    "As an ambitious early-career developer, I am committed to continuous learning, practical problem solving, and leveraging modern technologies and AI tools to create functional, high-quality digital solutions."
  ],
  statsCards: [
    {
      label: "Degree",
      value: "BSc in Information Technology",
      subtext: "Jimma University"
    },
    {
      label: "Academic Performance",
      value: "3.78 / 4.00 CGPA",
      subtext: "Graduation: 2026"
    },
    {
      label: "Primary Focus",
      value: "Full-Stack Development",
      subtext: "React, Node.js, Laravel, Firebase"
    },
    {
      label: "Professional Cert",
      value: "CCNA Certified",
      subtext: "Cisco Networking"
    }
  ]
};

export const skillsData = [
  {
    id: "react",
    name: "React",
    category: "Frontend Framework",
    description: "Building responsive, component-driven, interactive web interfaces.",
    iconName: "Code2"
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Environment",
    description: "Developing scalable backend services, REST APIs, and server-side applications.",
    iconName: "Server"
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "Full-Stack Framework",
    description: "Building structured full-stack web applications, database models, and backend systems.",
    iconName: "Layers"
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud Platform",
    description: "Working with cloud-based application data, authentication, and backend services.",
    iconName: "Flame"
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    description: "Version control, code branching, repository management, and collaborative development.",
    iconName: "GitBranch"
  }
];

export const experienceData = [
  {
    id: "ju-ict-intern",
    title: "IT Intern",
    organization: "Jimma University ICT Development Office",
    location: "Jimma, Ethiopia",
    period: "Summer 2025",
    type: "Internship",
    description: "Contributed to both front-end and back-end development of a centralized Lab Reservation System for Jimma University.",
    highlights: [
      "Helped create a university-wide laboratory management solution.",
      "Enabled teachers and department heads to reserve laboratories online.",
      "Helped replace the traditional manual, paper-based reservation process.",
      "Contributed to a more efficient, automated, and time-saving reservation workflow."
    ],
    technologies: ["Laravel", "React", "MySQL", "Git"]
  }
];

export const projectsData = [
  {
    id: "ai-interview-prep",
    title: "AI-Powered Personalized Interview Preparation Platform",
    subtitle: "Interactive AI Coaching & Real-Time Candidate Evaluation",
    category: "Independent AI & Full-Stack Project",
    typeBadge: "AI Web Application",
    featured: true,
    emphasis: "Latest Project",
    image: "/images/projects/ai-interview-prep.svg",
    shortDescription: "An AI-driven interactive web platform designed to provide personalized interview coaching, dynamic question generation, and real-time candidate evaluation.",
    longDescription: "The AI-Powered Personalized Interview Preparation Platform helps job seekers practice technical and behavioral interviews with customized question sets, real-time response analysis, and tailored performance evaluation driven by artificial intelligence.",
    technologies: ["React", "Node.js", "AI / LLM Integration", "Tailwind CSS"],
    keyFeatures: [
      "Personalized interview question generation based on target role & level",
      "Real-time AI response evaluation and performance scoring",
      "Behavioral and technical practice modes with constructive feedback",
      "Interactive responsive user interface for seamless candidate practice sessions"
    ],
    contribution: "Independently architected and developed the full-stack web application, user interface, and AI prompt engineering workflows.",
    demoUrl: "https://frontend-amber-sigma-33.vercel.app",
    githubUrl: null // Configure when available
  },
  {
    id: "kenean-kids",
    title: "Kenean Kids",
    subtitle: "Web-Based Kids Clothing Showcase Platform",
    category: "Independent Full-Stack Project",
    typeBadge: "Independent Project",
    featured: true,
    emphasis: "Strong Visual Focus",
    image: "/images/projects/kenean-kids.svg",
    shortDescription: "An independently designed and developed full-stack advertising/showcase platform for a kids' clothing shop in Addis Ababa.",
    longDescription: "Kenean Kids is a client-facing web application created to showcase children's apparel for a retail shop in Addis Ababa. Designed and built from scratch as an independent project, it provides seamless product discovery and direct communication between customers and the shop owner.",
    technologies: ["React", "Node.js", "Firebase"],
    keyFeatures: [
      "Product filtering by gender, age group, and category",
      "Direct customer-to-owner contact feature for quick inquiries",
      "Responsive user interface optimized for mobile shoppers",
      "Cloud backend integration with Firebase for product state and data management"
    ],
    contribution: "Independently designed and developed the entire application from UI mockups to full-stack deployment.",
    demoUrl: "https://cerulean-begonia-dc991c.netlify.app",
    githubUrl: null // Configure when available
  },
  {
    id: "construction-mgmt",
    title: "Construction Company Management System",
    subtitle: "Multi-Role Enterprise Operations Platform",
    category: "Team Project — Final Year",
    typeBadge: "Final Year Team Project",
    featured: true,
    image: "/images/projects/construction-mgmt.svg",
    shortDescription: "A multi-role web platform developed as a final-year team project for construction company management.",
    longDescription: "This web platform was built to digitize and coordinate operations across construction company sites. It features role-based access control catering to five key organizational roles, streamlining workforce management, material logistics, and site reporting.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    rolesSupported: [
      "Admin",
      "Project Manager",
      "Site Engineer",
      "Store Keeper",
      "Worker"
    ],
    keyFeatures: [
      "Multi-role architecture with fine-grained access control",
      "HR Management module for staff tracking",
      "Material Request Management workflow for site engineers and store keepers",
      "Daily and Weekly Progress Reporting modules"
    ],
    contribution: "Collaborated in a development team to design database schemas, implement role-based backend controllers, and integrate multi-module reporting interfaces.",
    demoUrl: null,
    githubUrl: null
  },
  {
    id: "lab-reservation",
    title: "Centralized Lab Reservation System",
    subtitle: "University Academic Infrastructure Solution",
    category: "University Internship Project",
    typeBadge: "Internship Project",
    featured: true,
    image: "/images/projects/lab-reservation.svg",
    shortDescription: "A centralized laboratory reservation system developed during IT internship at Jimma University ICT Development Office.",
    longDescription: "Developed to solve scheduling conflicts and eliminate paper forms across university computer labs. The system provides an automated reservation workflow for faculty members and department leaders.",
    technologies: ["Laravel", "React", "MySQL", "Git"],
    keyFeatures: [
      "Online laboratory reservation booking system",
      "Dedicated Teacher reservation request workflow",
      "Department Head approval and reservation management interface",
      "Centralized schedule availability tracking to eliminate double-booking",
      "Complete replacement of manual, paper-based reservation forms"
    ],
    contribution: "Worked as part of the ICT Development Office intern team contributing to both frontend UI components and backend reservation API endpoints.",
    demoUrl: null,
    githubUrl: null
  }
];

export const educationData = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Jimma University",
  location: "Jimma, Ethiopia",
  graduationYear: "2026",
  cgpa: "3.78 / 4.00",
  cgpaHighlight: "3.78",
  certification: {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    badgeText: "Professional Networking Certification",
    description: "Core networking concepts, IP connectivity, network security fundamentals, and automation."
  }
};

export const creativeExperienceData = {
  sectionTag: "05 — CREATIVE & TECHNOLOGY",
  title: "Beyond Development",
  role: "Content Creator (Animation)",
  platform: "TikTok (@abika2121)",
  status: "Ongoing",
  audienceMetric: "50,000+ Followers",
  description: "Beyond core software engineering, I create AI-assisted animation content on TikTok, building an audience of over 50,000 followers.",
  highlights: [
    "Self-driven learning and early adoption of emerging AI creation tools",
    "Creative problem solving and storytelling using digital media",
    "Consistent content scheduling and community engagement",
    "Practical understanding of visual communication and user engagement"
  ]
};

export const servicesData = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive, accessible, and interactive web interfaces using React and modern CSS frameworks."
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Developing RESTful APIs, database structures, and backend business logic using Node.js and Laravel."
  },
  {
    number: "03",
    title: "Full-Stack Web Applications",
    description: "Building complete, scalable web applications connecting client-side interfaces with robust server solutions."
  },
  {
    number: "04",
    title: "Firebase-Powered Solutions",
    description: "Integrating real-time data management, user authentication, and cloud services for rapid digital solutions."
  }
];
