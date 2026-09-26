// ─────────────────────────────────────────────
//  PORTFOLIO DATA — Alao Olabode Abdul-Majeed
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "ALAO OLABODE ABDUL-MAJEED",
  title: "Cybersecurity Enthusiast | SOC Analyst | Network Security Analyst",
  bio: "I am a Computer Science (Technology) graduate from Babcock University with a passion for cybersecurity and network security. My career focus is in Security Operations Center (SOC) analysis and Network Security, backed by hands-on experience with industry-standard security tools and a solid foundation in web development, data analytics, and data science. I am proficient in Python and comfortable working with the Linux operating system, and I bring a continuous-learning mindset to every challenge I take on.",
  extendedBio: "During my Student Industrial Work Experience Scheme (SIWES), I interned at Unotelos for six months as a Customer Success Engineer, where I performed IP address cleaning and sorting, server installation and configuration, and IoT device installation and configuration. This experience introduced me to the practical applications of IP addressing in network environments, including IPTV systems. I have since furthered my knowledge through Cisco's Networking Academy — completing modules and earning certificates in Fundamentals of Cybersecurity and Networking Basics — and an intensive 11-hour cybersecurity course covering hands-on use of tools such as Nmap, Wireshark, Aircrack-ng, Macchanger, DVWA, Metasploit, Metasploitable 2, Jenkins, Netcraft, DNSmap, and WHOIS. I am also familiar with simple network configurations. Currently, I am focused on my cybersecurity career path through continuous learning and practice on platforms like Cisco NetAcad, TryHackMe, and tools like Metasploitable 2.",
  contact: {
    email: `mailto:${process.env.NEXT_PUBLIC_EMAIL || ""}`,
    linkedin: "https://linkedin.com/in/your-profile",  // replace with your real LinkedIn URL
    github: "https://github.com/Majeed08",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
    instagram: "https://instagram.com/your-profile",    // replace with your real Instagram URL
  },
  cvLink: "Olabode_Alao_CV.pdf",
};

export const skills = [
  {
    category: "Cybersecurity & SOC",
    items: [
      "Security Operations (SOC)",
      "Threat Triage & Analysis",
      "Vulnerability Assessment",
      "Phishing Analysis",
      "Log Analysis & Monitoring",
      "IT Auditing",
      "GRC (Governance, Risk & Compliance)",
    ],
  },
  {
    category: "Security Tools",
    items: [
      "Nmap",
      "Wireshark",
      "Metasploit",
      "Metasploitable 2",
      "Aircrack-ng",
      "Macchanger",
      "DVWA",
      "Netcraft",
      "DNSmap",
      "WHOIS",
      "Jenkins",
    ],
  },
  {
    category: "Networking",
    items: [
      "Computer Networking",
      "Network Configuration",
      "IP Address Management",
      "IPTV Systems",
      "IoT Configuration",
      "Server Installation & Configuration",
      "CCNA Fundamentals",
    ],
  },
  {
    category: "Programming & OS",
    items: ["Python", "JavaScript", "C++", "C", "C#", "PHP", "Linux", "Bash/Shell"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Data & Analytics",
    items: ["Data Analytics", "Data Science", "Pandas", "NumPy", "Data Visualization", "RAPIDS Suite (NVIDIA DLI)"],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "Firebase", "FastAPI"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Cisco NetAcad", "TryHackMe", "Antigravity"],
  },
];

export const experience = [
  {
    role: "Customer Success Engineer (SIWES Intern)",
    company: "Unotelos Limited",
    details: [
      "Completed a six-month Student Industrial Work Experience Scheme (SIWES) internship gaining hands-on industry experience.",
      "Performed IP address cleaning, sorting, and management — gaining exposure to various IP addressing schemes used in network environments, including IPTV.",
      "Carried out server installation and configuration for client deployments.",
      "Installed and configured IoT devices, ensuring seamless integration into existing network infrastructure.",
      "Managed client technical communications, ensuring swift resolution of complex technical issues and high customer satisfaction.",
    ],
  },
];

// ─── Projects organized by category ──────────
export const projectCategories = [
  {
    name: "Threat Analysis & Security Tools",
    projects: [
      {
        title: "Automated Threat Triage Engine",
        description:
          "Developed a comprehensive triage workflow to automate the categorization and assessment of security alerts, reducing manual overhead for SOC teams.",
        tech: ["Python", "Automation", "Security Operations"],
        github: "https://github.com/Majeed08",
        liveUrl: "",
        image: "/images/triage-engine.png",
      },
      {
        title: "Phishing Analyzer",
        description:
          "Built a targeted tool designed to parse and analyze potentially malicious communications, extracting actionable threat intelligence to identify phishing indicators.",
        tech: ["Python", "Threat Intelligence", "Regex"],
        github: "https://github.com/Majeed08/phishanalyzer_backend.git",
        liveUrl: "",
        image: "/images/phishing-analyzer.png",
      },
      {
        title: "Log Hunter",
        description:
          "Engineered a specialized monitoring application for deep log analysis and proactive network threat detection using predefined security rules.",
        tech: ["Python", "Log Analysis", "Network Monitoring"],
        github: "https://github.com/Majeed08/log-hunter.git",
        liveUrl: "",
        image: "/images/log-hunter.png",
      },
    ],
  },
  {
    name: "Systems Programming",
    projects: [
      {
        title: "QPILL Programming Language & IDE",
        description:
          "Designed and developed a custom programming language from scratch. Built the interpreter, code generator, and graphical IDE covering the full compiler lifecycle: lexical, syntax, and semantic analysis, alongside intermediate code optimization.",
        tech: ["Python", "C", "Compiler Design", "Lexical Analysis", "GUI"],
        github: "https://github.com/Majeed08",
        liveUrl: "",
        image: "/images/qpill-ide.png",
      },
    ],
  },
  {
    name: "Data & Analytics",
    projects: [
      {
        title: "Superstore Performance Analysis",
        description:
          "Conducted exploratory data analysis using Python to evaluate regional sales performance, identify highly profitable product categories, and visualize the impact of discount strategies on overall revenue.",
        tech: ["Python", "Pandas", "NumPy", "Data Visualization"],
        github: "#",
        liveUrl: "https://lnkd.in/p/eptuemyE",
        image: "/images/superstore-analysis.jpg",
      },
    ],
  },
  {
    name: "Full-Stack Web Development",
    projects: [
      {
        title: "UNIVEST AI Waitlist Platform",
        description:
          "Developed the backend architecture for the UNIVEST AI startup, integrating an Express server with a MongoDB database to securely capture and manage user waitlist data.",
        tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
        github: "https://github.com/Majeed08/univestai-waitlist.git",
        liveUrl: "",
        image: "/images/univest-ai.png",
      },
      {
        title: "Osma International Schools Portal",
        description:
          "Designed and deployed a dynamic, multi-page web application to serve as the digital storefront for Osma International Schools.",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/Majeed08/osmainternationalschools",
        liveUrl: "https://osmainternationalschools.vercel.app",
        image: "/images/osma-schools.png",
      },
      {
        title: "Market",
        description:
          "A modern marketplace platform built with real-time product listings, user authentication, and a clean responsive interface. Currently under active development.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        github: "https://github.com/Majeed08",
        liveUrl: "",
        image: "/images/market.png",
      },
    ],
  },
];

// Flat array for /projects page
export const allProjects = projectCategories.flatMap((cat) =>
  cat.projects.map((p) => ({ ...p, category: cat.name }))
);

// ─── Education ───────────────────────────────
export const education = [
  {
    institution: "Babcock University",
    degree: "B.Sc. in Computer Science (Technology)",
    details: "Graduated with a 4.28 CGPA. Served as Course Representative.",
  },
];

// ─── Certifications & Credentials ────────────
export const credentials = [
  {
    title: "Graduate Member, Computer Professionals (Registration Council of Nigeria)",
    issuer: "CPN — GMCPN",
    image: "/images/certs/cert-gmcpn.jpeg",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco NetAcad",
    image: "/images/certs/cert-cisco-cybersec.png",
  },
  {
    title: "Networking Basics — Certificate of Completion",
    issuer: "Cisco NetAcad",
    image: "/images/certs/cert-cisco-networking-basics.png",
  },
  {
    title: "Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    image: "/images/certs/cert-nvidia-rag.png",
  },
  {
    title: "Fundamentals of Accelerated Data Science",
    issuer: "NVIDIA",
    image: "/images/certs/cert-nvidia-data-science.png",
  },
  {
    title: "Web Development",
    issuer: "Udemy",
    image: "/images/certs/cert-udemy-webdev.jpg",
  },
  {
    title: "Data Science",
    issuer: "Techcrush",
    image: "/images/certs/cert-techcrush.png",
  },
  {
    title: "Certificate of Membership — BUSEC",
    issuer: "Babcock University Students' Entrepreneurship Club (2025/2026)",
    image: "/images/certs/cert-busec.png",
  },
  {
    title: "Certificate of Participation — Harvard Health Systems Innovation Lab Hackathon (7th Edition)",
    issuer: "Harvard University",
    image: "/images/certs/cert-harvard-hackathon.png",
  },
  {
    title: "Certificate of Participation — Babcock Innovation Challenge (5th Edition)",
    issuer: "Babcock University",
    image: "/images/certs/cert-bic5.jpeg",
  },
  {
    title: "Certificate of Participation — Babcock Innovation Challenge (6th Edition)",
    issuer: "Babcock University",
    image: "/images/certs/cert-bic6.jpg",
  },
  {
    title: "Certificate of Completion — NEW HORIZONS (Multiple Courses)",
    issuer: "New Horizons — Configuring OS Clients, CompTIA A+ Core I & II, Certified Secure Computer User, Windows Server, CCNA, Android Mobile App Dev, Networking+",
    image: "/images/certs/cert-new-horizons.jpeg",
  },
  {
    title: "Certificate of Service — Course Representative (2025/2026)",
    issuer: "Babcock University",
    image: "/images/certs/cert-course-rep.jpeg",
  },
];

// ─── Community Involvement ───────────────────
export const community = [
  "Cowrywise Ambassador — Promoting financial literacy and investment initiatives.",
  "Member, Google Developers Group (GDG) Babcock — Active participant in the campus developer community.",
  "Member, Babcock University Computing Club (BUCC) — Engaged in technical initiatives and peer learning.",
];

// ─── Events & Competitions ───────────────────
export const events = [
  "Babcock Innovation Challenge (BIC 6.0) — Competitor and representative for KWICK.",
  "Babcock Innovations and Ventures (BIV) — Showcased and presented KWICK to tech communities.",
  "Babcock Innovation Challenge (BIC 5.0) — Competitor and representative for UNIVEST AI.",
  "NVIDIA DLI Workshop — Data science training hosted by BUCC.",
  "Babcock Tech Week — Campus-wide technical workshops and networking sessions.",
];

// ─── Social Links (Footer) ──────────────────
export const socialLinks = [
  { label: "GitHub", href: personalInfo.contact.github, icon: "github" },
  { label: "LinkedIn", href: personalInfo.contact.linkedin, icon: "linkedin" },
];

// ─── Flat projects array (Projects component) ─
export const projects = allProjects.map((p) => ({
  title: p.title,
  description: p.description,
  tags: p.tech,
  githubUrl: p.github,
  liveUrl: p.liveUrl && p.liveUrl !== "" && p.liveUrl !== "#" ? p.liveUrl : "",
  featured: [
    "Automated Threat Triage Engine",
    "Phishing Analyzer",
    "Log Hunter",
  ].includes(p.title),
}));

