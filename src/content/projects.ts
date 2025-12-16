export type ProjectCategory = "ML/AI" | "Web" | "Robotics" | "Other";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  timeline: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  image?: string; // e.g. "/projects/src.jpg"
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "src-stochastic-resonance-clustering",
    title: "Stochastic Resonance Clustering (SRC)",
    category: "ML/AI",
    timeline: "Aug 2025 – Sep 2025",
    stack: ["Python", "PyTorch", "Unsupervised Learning"],
    highlights: [
      "Developed a non-deterministic deep clustering model with learnable stochasticity in an autoencoder latent space.",
      "Reduced suboptimal local minima issues common in deterministic clustering approaches.",
      "Outperformed baseline K-Means and deterministic autoencoder variants on Fashion-MNIST (as reported in your project).",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/akonBRO/Non-Deterministic-Unsupervised-Neural-Network-Model",
      },
    ],
    featured: true,
  },
  {
    slug: "electromber",
    title: "Electromber — Service Platform Prototype",
    category: "Web",
    timeline: "Jun 2025",
    stack: ["React.js", "Tailwind CSS"],
    highlights: [
      "Built a prototype platform connecting customers with verified electricians and plumbers.",
      "Designed the user flow around fast service delivery and transparent pricing (no middlemen).",
    ],
    links: [
      { label: "Live", href: "https://electromber.vercel.app/" },
    ],
    featured: true,
  },
  {
    slug: "clubsync",
    title: "ClubSync — Club Management System (CSE470)",
    category: "Web",
    timeline: "Apr 2025 – May 2025",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Full-stack application for event scheduling, member management, and centralized communication.",
      "Built as a course project with practical operational workflows.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/akonBRO/ClubSync" }],
    featured: true,
  },
  {
    slug: "travel-insurance-claim-prediction",
    title: "Travel Insurance Claim Prediction",
    category: "ML/AI",
    timeline: "May 2025 – Jun 2025",
    stack: ["Python", "Machine Learning", "Feature Engineering"],
    highlights: [
      "Built a predictive model to estimate likelihood of travel insurance claims from demographic and trip data.",
      "Applied preprocessing and feature engineering to improve model quality.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/akonBRO/Travel-Insurance-Claim-Prediction" },
    ],
  },
  {
    slug: "automated-river-cleaning-robot",
    title: "Automated River Cleaning Robot",
    category: "Robotics",
    timeline: "Dec 2024 – Jan 2025",
    stack: ["Arduino", "C++", "Ultrasonic Sensors"],
    highlights: [
      "Built an autonomous robot with obstacle avoidance and waste detection.",
      "Implemented a conveyor mechanism to collect floating debris and stop when bin is full.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/akonBRO/Automated-River-Cleaning-Robot" },
    ],
  },
  {
    slug: "oca-management-system",
    title: "OCA Management System",
    category: "Web",
    timeline: "Dec 2024 – Jan 2025",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    highlights: [
      "Built a system to manage co-curricular event bookings, participation, and budget execution.",
      "Designed workflows for students/clubs/admin operations.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/akonBRO/OCA-Management-System_CSE370" },
      { label: "Live", href: "https://bracu-oca.online/" },
    ],
  },
  {
  slug: "apple-homepage-wordpress",
  title: "Apple Homepage Recreate (WordPress)",
  category: "Web",
  timeline: "Dec 2023",
  stack: ["WordPress", "HTML", "CSS"],
  highlights: [
    "Recreated an Apple-style homepage layout to practice premium UI structure and spacing.",
    "Focused on responsive layout and visual accuracy.",
  ],
  links: [
    { label: "Video", href: "https://drive.google.com/file/d/1tLG4AgYpMydkg_cNPmiCAiuZ4aOoQURN/view" },
  ],
},
{
  slug: "billing-software-python",
  title: "Billing Software (Python)",
  category: "Other",
  timeline: "Jun 2023",
  stack: ["Python"],
  highlights: [
    "Built a small billing workflow application as a Python practice project.",
  ],
  links: [
    { label: "Video", href: "https://drive.google.com/file/d/1oX4dbwf4XchCeU9Jo6XypOy5lAraMB6J/view" },
  ],
},
{
  slug: "modern-city-revolution",
  title: "Modern City Revolution",
  category: "Other",
  timeline: "Jan 2020 – Jan 2021",
  stack: ["Science Club Project"],
  highlights: [
    "Early science-club project; includes demo/proof link.",
  ],
  links: [
    { label: "Drive", href: "https://drive.google.com/file/d/1BNItq3kmIUj-aGEjEhnYBVaFNRUk6ne1/view" },
  ],
},
{
  slug: "bracu-summer22-football-site",
  title: "BRAC University Summer'22 Football Team — Official Website",
  category: "Web",
  timeline: "Aug 2023 – Sep 2024",
  stack: ["WordPress", "Web Development"],
  highlights: [
    "Built/maintained a public website for a university team.",
  ],
  links: [
    { label: "Live", href: "https://live-bracusummer22.pantheonsite.io/" },
  ],
},

];
