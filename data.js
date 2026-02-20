// ============================================
// PORTFOLIO DATA FILE
// Edit this file to add, delete, or update any section
// ============================================

const portfolioData = {
  // ============================================
  // PROFILE / PERSONAL INFO
  // ============================================
  profile: {
    name: "Md. Sabbir Akon",
    handle: "sabbir.akon",
    role: "Junior Developer",
    focus: "ML/AI + Full-Stack",
    university: "BRAC University",
    location: "Dhaka, Bangladesh",
    email: "sabbirakonuumb@gmail.com",
    phone: "+880 1648-397428",
    avatar: "public/me.jpg",        // Place your photo as me.jpg in public folder
    resume: "public/resume.pdf",    // Place your resume as resume.pdf in public folder
    github: "https://github.com/akonBRO",
    linkedin: "https://linkedin.com/in/akon-sabbir",
    status: "Open to opportunities"
  },

  // ============================================
  // HERO SECTION - TERMINAL COMMANDS
  // Edit these to customize your terminal display
  // ============================================
  terminal: {
    commands: [
      { cmd: "whoami", output: "md-sabbir-akon" },
      { cmd: "cat profile.json", type: "json", data: {
        role: "Junior Developer",
        focus: "ML/AI + Full-Stack",
        university: "BRAC University",
        status: "actively building",
        location: "Dhaka 🇧🇩"
      }},
      { cmd: "git log --oneline", type: "git", commits: [
        { hash: "3cffa0", message: "built SRC clustering model" },
        { hash: "38bdf8", message: "launched electromber platform" },
        { hash: "fbbf24", message: "won RS62 football tournament" }
      ]}
    ]
  },

  // ============================================
  // TYPING ANIMATION ROLES
  // ============================================
  roles: [
    "CSE Undergraduate @ BRAC University",
    "Junior Developer @ ZENTORRA",
    "ML / AI Enthusiast",
    "Full-Stack Developer",
    "Robotics Builder"
  ],

  // ============================================
  // HERO STATS
  // ============================================
  heroStats: [
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Categories" },
    { value: "3.53", label: "CGPA" }
  ],

  // ============================================
  // FLOATING BADGES (Hero section)
  // ============================================
  floatingBadges: [
    { text: "Open to work", color: "accent2", position: "b2" },
    { text: "Dhaka, Bangladesh", color: "amber", position: "b3" }
  ],

  // ============================================
  // ABOUT SECTION
  // ============================================
  about: {
    title: "Building with purpose,",
    titleHighlight: "learning with intent",
    paragraphs: [
      "I'm <strong>Md. Sabbir Akon</strong>, a Computer Science & Engineering undergraduate at <strong>BRAC University</strong>, graduating in 2026. I work at the intersection of <strong>machine learning</strong> and <strong>full-stack development</strong>, building systems that are both technically sound and practically useful.",
      "Currently a Junior Developer at <strong>ZENTORRA</strong>, I've also interned remotely with a US-based team and contributed to open-source and personal research projects in ML/AI and robotics.",
      "Beyond coding, I lead in student clubs, play competitive football, and care deeply about <strong>community-driven tech</strong>."
    ],
    meta: [
      { key: "Email", value: "sabbirakonuumb@gmail.com", type: "email", link: "mailto:sabbirakonuumb@gmail.com" },
      { key: "Phone", value: "+880 1648-397428", type: "phone" },
      { key: "Location", value: "Dhaka, Bangladesh", type: "text" },
      { key: "GitHub", value: "@akonBRO", type: "link", link: "https://github.com/akonBRO" },
      { key: "LinkedIn", value: "akon-sabbir", type: "link", link: "https://linkedin.com/in/akon-sabbir" },
      { key: "Status", value: "Open to opportunities", type: "status", highlight: true }
    ]
  },

  // ============================================
  // SKILLS SECTION
  // ============================================
  skills: [
    {
      category: "Frontend",
      icon: "globe",
      tags: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      category: "Backend & DB",
      icon: "server",
      tags: ["Node.js", "Express", "PHP", "Python", "MongoDB", "MySQL", "REST API", "WordPress"]
    },
    {
      category: "ML / AI",
      icon: "brain",
      accent: "accent2",
      tags: ["PyTorch", "scikit-learn", "Python", "Feature Engineering", "Deep Learning", "Data Cleaning", "Clustering"]
    },
    {
      category: "Tools & Other",
      icon: "code",
      accent: "amber",
      tags: ["Git", "GitHub", "Arduino", "C/C++", "Vercel", "Linux", "Ultrasonic Sensors"]
    }
  ],

  // ============================================
  // FEATURED PROJECTS (shown on homepage)
  // ============================================
  featuredProjects: [
    {
      title: "Stochastic Resonance Clustering",
      category: "ml",
      categoryLabel: "ML / AI",
      description: "Non-deterministic deep clustering model with learnable stochasticity in autoencoder latent space. Outperformed K-Means on Fashion-MNIST.",
      stack: ["Python", "PyTorch", "Unsupervised Learning"],
      links: [
        { label: "GitHub", href: "https://github.com/akonBRO/Non-Deterministic-Unsupervised-Neural-Network-Model", type: "github" }
      ]
    },
    {
      title: "Electromber — Service Platform",
      category: "web",
      categoryLabel: "Web",
      description: "Prototype platform connecting customers with verified electricians and plumbers, focusing on fast service delivery and transparent pricing.",
      stack: ["React.js", "Tailwind CSS"],
      links: [
        { label: "Live Demo", href: "https://electromber.vercel.app/", type: "live" }
      ]
    },
    {
      title: "ClubSync — Club Management System",
      category: "web",
      categoryLabel: "Web",
      description: "Full-stack MERN application for event scheduling, member management, and centralized club communication built as a CSE470 course project.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      links: [
        { label: "GitHub", href: "https://github.com/akonBRO/ClubSync", type: "github" }
      ]
    }
  ],

  // ============================================
  // ALL PROJECTS (shown on projects page)
  // ============================================
  projects: [
    {
      title: "Stochastic Resonance Clustering (SRC)",
      timeline: "Aug 2025 – Sep 2025",
      category: "ml",
      categoryLabel: "ML / AI",
      bullets: [
        "Non-deterministic deep clustering model with learnable stochasticity in an autoencoder latent space.",
        "Reduced suboptimal local minima common in deterministic clustering.",
        "Outperformed baseline K-Means and deterministic AE variants on Fashion-MNIST."
      ],
      stack: ["Python", "PyTorch", "Unsupervised Learning"],
      links: [
        { label: "GitHub", href: "https://github.com/akonBRO/Non-Deterministic-Unsupervised-Neural-Network-Model", type: "github" }
      ]
    },
    {
      title: "Travel Insurance Claim Prediction",
      timeline: "May 2025 – Jun 2025",
      category: "ml",
      categoryLabel: "ML / AI",
      bullets: [
        "Predictive model to estimate likelihood of travel insurance claims from demographic and trip data.",
        "Applied preprocessing and feature engineering to improve model performance."
      ],
      stack: ["Python", "scikit-learn", "Feature Engineering"],
      links: [
        { label: "GitHub", href: "https://github.com/akonBRO/Travel-Insurance-Claim-Prediction", type: "github" }
      ]
    },
    {
      title: "Electromber — Service Platform Prototype",
      timeline: "Jun 2025",
      category: "web",
      categoryLabel: "Web",
      bullets: [
        "Prototype platform connecting customers with verified electricians and plumbers.",
        "Designed user flow around fast service delivery and transparent pricing."
      ],
      stack: ["React.js", "Tailwind CSS"],
      links: [
        { label: "Live", href: "https://electromber.vercel.app/", type: "live" }
      ]
    },
    {
      title: "ClubSync — Club Management System",
      timeline: "Apr 2025 – May 2025",
      category: "web",
      categoryLabel: "Web",
      bullets: [
        "Full-stack MERN app for event scheduling, member management, and centralized communication.",
        "Built as CSE470 course project with real-world workflows."
      ],
      stack: ["MongoDB", "Express", "React", "Node.js"],
      links: [
        { label: "GitHub", href: "https://github.com/akonBRO/ClubSync", type: "github" }
      ]
    },
    {
      title: "OCA Management System",
      timeline: "Dec 2024 – Jan 2025",
      category: "web",
      categoryLabel: "Web",
      bullets: [
        "System to manage co-curricular event bookings, participation, and budget execution.",
        "Designed for students, clubs, and admin with live deployment."
      ],
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      links: [
        { label: "GitHub", href: "https://github.com/akonBRO/OCA-Management-System_CSE370", type: "github" },
        { label: "Live", href: "https://bracu-oca.online/", type: "live" }
      ]
    },
    {
      title: "BRACU Summer'22 Football Team Website",
      timeline: "Aug 2023 – Sep 2024",
      category: "web",
      categoryLabel: "Web",
      bullets: [
        "Built and maintained a public website for a BRAC University football team.",
        "Managed content updates, responsive design, and team information structure."
      ],
      stack: ["WordPress", "Web Development"],
      links: [
        { label: "Live", href: "https://live-bracusummer22.pantheonsite.io/", type: "live" }
      ]
    },
    {
      title: "Apple Homepage Recreate (WordPress)",
      timeline: "Dec 2023",
      category: "web",
      categoryLabel: "Web",
      bullets: [
        "Recreated an Apple-style homepage layout for premium UI practice.",
        "Focused on responsive layout, visual accuracy, and clean spacing."
      ],
      stack: ["WordPress", "HTML", "CSS"],
      links: [
        { label: "Video", href: "https://drive.google.com/file/d/1tLG4AgYpMydkg_cNPmiCAiuZ4aOoQURN/view", type: "live" }
      ]
    },
    {
      title: "Automated River Cleaning Robot",
      timeline: "Dec 2024 – Jan 2025",
      category: "robotics",
      categoryLabel: "Robotics",
      bullets: [
        "Autonomous robot with obstacle avoidance and waste detection using ultrasonic sensors.",
        "Conveyor mechanism collects floating debris and stops when bin is full."
      ],
      stack: ["Arduino", "C++", "Ultrasonic Sensors"],
      links: [
        { label: "GitHub", href: "https://github.com/akonBRO/Automated-River-Cleaning-Robot", type: "github" }
      ]
    },
    {
      title: "Billing Software (Python)",
      timeline: "Jun 2023",
      category: "other",
      categoryLabel: "Other",
      bullets: [
        "Small billing workflow application built as a Python practice project."
      ],
      stack: ["Python"],
      links: [
        { label: "Video", href: "https://drive.google.com/file/d/1oX4dbwf4XchCeU9Jo6XypOy5lAraMB6J/view", type: "live" }
      ]
    },
    {
      title: "Modern City Revolution",
      timeline: "Jan 2020 – Jan 2021",
      category: "other",
      categoryLabel: "Other",
      bullets: [
        "Science-club project exploring smart city and sustainable urban design concepts.",
        "Contributed to winning the 7th DCSC National Science Expo and 42nd National Science Week recognition."
      ],
      stack: ["Science Club Project"],
      links: [
        { label: "Drive", href: "https://drive.google.com/file/d/1BNItq3kmIUj-aGEjEhnYBVaFNRUk6ne1/view", type: "live" }
      ]
    }
  ],

  // ============================================
  // EXPERIENCE
  // ============================================
  experience: [
    {
      period: "May 2025 – December 2025",
      role: "Junior Developer (Part-time, Remote)",
      org: "AlgoVerse Ltd.",
      bullets: [
        "Collaborate with a remote team to build and maintain software solutions.",
        "Contribute across the development lifecycle and iterative delivery."
      ]
    },
    {
      period: "May 2025 – December 2025",
      role: "Backend Developer (Part-time, Remote)",
      org: "ZENTORRA",
      bullets: [
        "Collaborate with a remote team to build and maintain software solutions.",
        "Contribute across the development lifecycle and iterative delivery."
      ]
    },
    {
      period: "Nov 2023 – Mar 2024",
      role: "Web Developer Intern (Remote)",
      org: "GAOTek Inc. — United States",
      bullets: [
        "Worked on WordPress management and web tasks in a global remote team.",
        "Supported delivery through technical coordination and execution."
      ]
    }
  ],

  // ============================================
  // EDUCATION
  // ============================================
  education: [
    {
      year: "May 2022 – 2026",
      degree: "B.Sc. in Computer Science & Engineering",
      school: "BRAC University, Dhaka, Bangladesh",
      note: "CGPA: 3.53 / 4.00"
    },
    {
      year: "Jul 2019 – Mar 2022",
      degree: "HSC — Science",
      school: "Udayan Higher Secondary School, Dhaka",
      note: "GPA: 5.00 / 5.00"
    },
    {
      year: "Jan 2017 – May 2019",
      degree: "SSC — Science",
      school: "Willes Little Flower School & College, Dhaka",
      note: "GPA: 5.00 / 5.00"
    }
  ],

  // ============================================
  // LEADERSHIP
  // ============================================
  leadership: [
    {
      org: "BRAC University Computer Club (BUCC)",
      roles: [
        { title: "Asst. Director, Event Management Dept.", period: "Dec 2024 – Present" },
        { title: "Senior Executive", period: "Sep 2024 – Dec 2024" }
      ],
      bullets: [
        "Led event operations and strategic planning for major tech events.",
        "Promoted based on leadership, communication, and consistent contribution."
      ]
    },
    {
      org: "BRAC University Leadership Development Forum (BULDF)",
      roles: [
        { title: "Executive, Admin & External Affairs", period: "Dec 2024 – Present" }
      ],
      bullets: [
        "Managed external affairs, sponsorship coordination, and partnership support."
      ]
    },
    {
      org: "BASIS Student's Forum",
      roles: [
        { title: "Executive (Part-time)", period: "Jan 2025 – Present" }
      ],
      bullets: [
        "Contributed to student tech community initiatives and engagement."
      ]
    },
    {
      org: "Udayan Science Club",
      roles: [
        { title: "Joint Secretary", period: "2020 – 2022" }
      ],
      bullets: [
        "Organized science-related activities and coordinated team operations."
      ]
    }
  ],

  // ============================================
  // ACHIEVEMENTS
  // ============================================
  achievements: [
    {
      category: "tech",
      title: "BRAC IC6 — 3rd Place",
      issuer: "University Innovation Hub Program (UIHP)",
      date: "Jul 2025"
    },
    {
      category: "tech",
      title: "42nd National Science & Tech Week — 6th",
      issuer: "Dhaka District Science and Technology Committee",
      date: "Jan 2021"
    },
    {
      category: "tech",
      title: "7th DCSC National Science Expo — Champion",
      issuer: "AIUB / Dhaka College",
      date: "Feb 2020"
    },
    {
      category: "sports",
      title: "RS 62 Football — Champion + Player of the Match",
      issuer: "BRAC University (+ Best GK)",
      date: "Mar 2023"
    },
    {
      category: "sports",
      title: "Battle of Fall'23 — Champion",
      issuer: "FCBU, BRAC University",
      date: "Nov 2023"
    },
    {
      category: "sports",
      title: "Udayan Inter-Class Football — Champion",
      issuer: "Udayan Higher Secondary School",
      date: "Jan 2021"
    }
  ],

  // ============================================
  // CERTIFICATIONS
  // ============================================
  certifications: [
    {
      issuer: "DataCamp",
      title: "Supervised Learning with scikit-learn",
      date: "Dec 2025",
      link: {
        label: "Verify",
        href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a719e14eed4523bdbb170bce01931946e19f32ac"
      }
    },
    {
      issuer: "DataCamp",
      title: "Feature Engineering for Machine Learning in Python",
      date: "Nov 2025",
      link: {
        label: "Verify",
        href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/395fadf7bdfee1b2a071fef1c89a4d07e8888b60"
      }
    },
    {
      issuer: "NASA",
      title: "Galactic Local Volunteer",
      date: "Oct 2024",
      link: {
        label: "View",
        href: "https://www.linkedin.com/in/akon-sabbir/details/certifications/"
      }
    },
    {
      issuer: "DataCamp",
      title: "Cleaning Data in Python",
      date: "Oct 2025",
      link: {
        label: "Verify",
        href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f0faa3fe33c9457860e0606d402e7f007f312891"
      }
    },
    {
      issuer: "DataCamp",
      title: "Data Literacy",
      date: "Nov 2025",
      link: {
        label: "Verify",
        href: "https://www.datacamp.com/skill-verification/DL0038996584560"
      }
    },
    {
      issuer: "Coursera",
      title: "Develop a Company Website with Wix",
      date: "Oct 2022",
      link: {
        label: "Verify",
        href: "https://coursera.org/verify/AU27LNDN467Y"
      }
    }
  ],

  // ============================================
  // VOLUNTEERING
  // ============================================
  volunteering: [
    {
      org: "NASA International Space Apps Challenge",
      role: "Volunteer",
      period: "Oct 2024 · 1 month",
      icon: "users"
    },
    {
      org: "BRAC University Computer Club (BUCC)",
      role: "Volunteer",
      period: "Oct 2024 – Nov 2024 · 2 months",
      icon: "monitor"
    },
    {
      org: "16th Convocation — BRAC University",
      role: "Volunteer",
      period: "Feb 2025 · 1 month",
      icon: "home"
    },
    {
      org: "Govt. Science College Science Club",
      role: "Campus Ambassador",
      period: "Community outreach & coordination",
      icon: "graduation"
    }
  ]
};

// Make available globally
window.portfolioData = portfolioData;
