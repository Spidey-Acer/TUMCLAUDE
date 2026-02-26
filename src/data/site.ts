import type {
  NavLink,
  Feature,
  ClubEvent,
  Member,
  Project,
  FooterSection,
  FooterContact,
  SocialLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Members", href: "#members" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
];

export const heroContent = {
  subtitle: "Welcome to",
  title: "CLAUDE'S CLUB",
  description:
    "Where innovation meets collaboration. A community of tech enthusiasts, developers, and problem-solvers shaping the future at Technical University of Mombasa.",
  primaryCta: { label: "Get Started", href: "#join" },
  secondaryCta: { label: "Explore Projects", href: "#projects" },
} as const;

export const aboutContent = {
  title: "About CLAUDE'S CLUB",
  paragraphs: [
    "CLAUDE'S CLUB is a vibrant community dedicated to fostering innovation and technical excellence at TUM. We bring together students passionate about coding, technology, and problem-solving.",
    "Our mission is to provide a collaborative platform where members can learn, grow, and contribute to meaningful projects that make a real impact.",
  ],
} as const;

export const aboutFeatures: Feature[] = [
  {
    icon: "\u{1F4BB}",
    title: "Technical Excellence",
    description: "Master cutting-edge technologies and best practices",
  },
  {
    icon: "\u{1F91D}",
    title: "Collaboration",
    description: "Work together on real-world projects and challenges",
  },
  {
    icon: "\u{1F680}",
    title: "Innovation",
    description: "Create solutions that solve real problems",
  },
];

export const events: ClubEvent[] = [
  {
    date: "March 15, 2024",
    title: "Web Development Workshop",
    description:
      "Learn modern web development techniques with React and Node.js. Perfect for beginners and intermediate developers.",
  },
  {
    date: "March 22, 2024",
    title: "Monthly Tech Talk: AI & Machine Learning",
    description:
      "Industry experts discuss the latest trends in AI and ML. Q&A session included.",
  },
  {
    date: "April 5, 2024",
    title: "24-Hour Hackathon",
    description:
      "Showcase your skills in our annual hackathon. Build innovative solutions and compete for prizes!",
  },
];

export const members: Member[] = [
  {
    name: "John Kipchoge",
    role: "Club President",
    avatar: "\u{1F468}\u200D\u{1F4BC}",
    bio: "Passionate about full-stack development and building amazing teams.",
    socials: [
      { platform: "\u{1D54F}", label: "Twitter", href: "#" },
      { platform: "in", label: "LinkedIn", href: "#" },
      { platform: "gh", label: "GitHub", href: "#" },
    ],
  },
  {
    name: "Sarah Mwangi",
    role: "Vice President",
    avatar: "\u{1F469}\u200D\u{1F4BB}",
    bio: "Backend specialist with a love for cloud architecture and DevOps.",
    socials: [
      { platform: "\u{1D54F}", label: "Twitter", href: "#" },
      { platform: "in", label: "LinkedIn", href: "#" },
      { platform: "gh", label: "GitHub", href: "#" },
    ],
  },
  {
    name: "Alex Otieno",
    role: "Tech Lead",
    avatar: "\u{1F468}\u200D\u{1F393}",
    bio: "Open source enthusiast and advocate for clean code practices.",
    socials: [
      { platform: "\u{1D54F}", label: "Twitter", href: "#" },
      { platform: "in", label: "LinkedIn", href: "#" },
      { platform: "gh", label: "GitHub", href: "#" },
    ],
  },
  {
    name: "Grace Kariuki",
    role: "Design Lead",
    avatar: "\u{1F469}\u200D\u{1F3A8}",
    bio: "UI/UX designer passionate about creating beautiful digital experiences.",
    socials: [
      { platform: "\u{1D54F}", label: "Twitter", href: "#" },
      { platform: "in", label: "LinkedIn", href: "#" },
      { platform: "gh", label: "GitHub", href: "#" },
    ],
  },
];

export const projects: Project[] = [
  {
    icon: "\u{1F4F1}",
    tag: "Mobile App",
    title: "Campus Connect",
    description:
      "A native mobile app for students to discover campus events, connect with peers, and access resources.",
    href: "#",
  },
  {
    icon: "\u{1F916}",
    tag: "AI/ML",
    title: "Smart Study Assistant",
    description:
      "An AI-powered tool that helps students with personalized study recommendations and learning paths.",
    href: "#",
  },
  {
    icon: "\u{1F310}",
    tag: "Web Platform",
    title: "TUM Job Board",
    description:
      "A web platform connecting TUM students with internships and job opportunities from top companies.",
    href: "#",
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "#about" },
      { label: "Members", href: "#members" },
      { label: "Events", href: "#events" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Code of Conduct", href: "#" },
    ],
  },
];

export const footerContact: FooterContact = {
  email: "info@claudesclub.tum.ac.ke",
  phone: "+254 41 2492222",
  location: "TUM, Mombasa",
};

export const footerSocials: SocialLink[] = [
  { platform: "gh", label: "GitHub", href: "#" },
  { platform: "\u{1D54F}", label: "Twitter", href: "#" },
  { platform: "in", label: "LinkedIn", href: "#" },
  { platform: "f", label: "Facebook", href: "#" },
];
