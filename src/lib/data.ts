export const company = {
  name: "NitiPlay LLC",
  tagline: "Premium Mobile Games & Gaming Utilities",
  description:
    "NitiPlay LLC publishes high-quality iOS and Android games and gaming utility apps — built by Ismail Lahniti and shipped on the App Store & Google Play.",
  email: "lhnitismail@gmail.com",
  location: "Morocco",
  founded: "2024",
  appStoreDeveloperUrl:
    "https://apps.apple.com/us/developer/ismail-lahniti/id1842431155",
};

export const founder = {
  name: "Ismail Lahniti",
  role: "Founder & Lead Developer",
  age: 23,
  bio: "Ismail Lahniti is a 23-year-old mobile app developer from Morocco and the founder of NitiPlay LLC. He has built and shipped multiple apps on the App Store — including puzzle hits like Arrow Maze Rush and Arrow Way Out, plus utilities like RBX Counters.",
  highlights: [
    "3+ apps live on the Apple App Store",
    "Cross-platform Flutter development for iOS & Android",
    "Puzzle games and gaming utility apps",
    "Based in Morocco, building for a global audience",
  ],
};

export const stats = [
  { label: "Live on App Store", value: 3, suffix: "" },
  { label: "Projects in Portfolio", value: 4, suffix: "" },
  { label: "Average Store Rating", value: 4.1, suffix: "★", decimals: 1 },
  { label: "App Store Reviews", value: 8, suffix: "+" },
];

export const services = [
  {
    id: "game-publishing",
    title: "Game Publishing",
    description:
      "End-to-end publishing for premium mobile games — from soft launch strategy to global scale on iOS and Android.",
    icon: "Gamepad2",
    features: [
      "Store optimization & ASO",
      "Launch strategy & analytics",
      "Live ops & monetization",
      "Cross-platform deployment",
    ],
  },
  {
    id: "utility-apps",
    title: "Utility Apps",
    description:
      "Purpose-built tools for gamers, makers, and everyday users — calculators, trackers, and productivity apps that people rely on.",
    icon: "Wrench",
    features: [
      "Companion & tracker apps",
      "Calculator & converter tools",
      "Community features",
      "Widget & extension support",
    ],
  },
  {
    id: "design-dev",
    title: "Design & Development",
    description:
      "Apple-level UI/UX paired with rock-solid engineering. Pixel-perfect interfaces, smooth animations, and native performance.",
    icon: "Sparkles",
    features: [
      "UI/UX design systems",
      "Flutter cross-platform dev",
      "Animation & micro-interactions",
      "Accessibility-first builds",
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships",
    description:
      "Collaborate with NitiPlay to co-develop, port, or publish your mobile game or utility with a team that ships.",
    icon: "Handshake",
    features: [
      "Co-development",
      "Porting & optimization",
      "Revenue share models",
      "Technical consulting",
    ],
  },
];

export type AppPlatform = "ios" | "android";
export type AppStatus = "published" | "coming-soon";

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Game" | "Utility";
  platforms: AppPlatform[];
  status: AppStatus;
  rating: number;
  ratingCount?: number;
  highlight?: string;
  featured: boolean;
  accent: string;
  icon: string;
  banner: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const apps: App[] = [
  {
    id: "arrow-maze-rush",
    name: "Arrow Maze Rush",
    tagline: "Slide arrows to beat the maze",
    description:
      "An addictive maze adventure where every tap counts. Slide arrows, clear the path, and race the clock through 100 hand-tuned levels — from gentle warm-ups to brain-melting puzzles with buttery 60 FPS animations.",
    category: "Game",
    platforms: ["ios", "android"],
    status: "published",
    rating: 5.0,
    ratingCount: 3,
    highlight: "100 levels · Puzzle",
    featured: true,
    accent: "#6366f1",
    icon: "/apps/icons/arrow-maze-rush.png",
    banner: "/apps/banners/arrow-maze-rush.png",
    appStoreUrl: "https://apps.apple.com/us/app/arrow-maze-rush/id6785996466",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.arrowmazerush.arrow_maze_rush",
  },
  {
    id: "arrow-way-out",
    name: "Arrow Way Out",
    tagline: "Slide arrows. Find the way out",
    description:
      "A calm, clever puzzle game about sliding arrows off the board one move at a time. Work through 600 puzzles across six countries and four difficulty tiers — no timers, just pure logic.",
    category: "Game",
    platforms: ["ios", "android"],
    status: "published",
    rating: 4.7,
    ratingCount: 3,
    highlight: "600 puzzles · Puzzle",
    featured: true,
    accent: "#0ea5e9",
    icon: "/apps/icons/arrow-way-out.png",
    banner: "/apps/banners/arrow-way-out.png",
    appStoreUrl: "https://apps.apple.com/us/app/arrow-way-out/id6770267257",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ismaillahniti.arrow_way_out",
  },
  {
    id: "rbx-counters",
    name: "RBX Counters",
    tagline: "Quick Robux-style estimates",
    description:
      "A focused calculator with USD ↔ RBX converters, illustrative tier models, and on-device history. Plan amounts with simple tools — unofficial and not affiliated with Roblox Corporation.",
    category: "Utility",
    platforms: ["ios", "android"],
    status: "published",
    rating: 2.5,
    ratingCount: 2,
    highlight: "Productivity · Calculator",
    featured: false,
    accent: "#f97316",
    icon: "/apps/icons/rbx-counters.png",
    banner: "/apps/banners/rbx-counters.png",
    appStoreUrl:
      "https://apps.apple.com/us/app/rbx-counters-robox-calculator/id6764420686",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rbxcalculator.rbx_calculator",
  },
  {
    id: "pawdoku",
    name: "Pawdoku",
    tagline: "Cute territory brain game",
    description:
      "A polished cat-themed logic puzzle — place one cat per colored region, row, and column without letting them touch. 100 offline levels from 5×5 to 9×9 with haptics, tutorials, and a charming cream-canvas UI.",
    category: "Game",
    platforms: ["ios", "android"],
    status: "coming-soon",
    rating: 0,
    highlight: "100 levels · In development",
    featured: false,
    accent: "#a855f7",
    icon: "/apps/icons/pawdoku.png",
    banner: "/apps/banners/pawdoku.png",
  },
];

export const testimonials = [
  {
    id: "1",
    quote:
      "Arrow Maze Rush is one of those 'just one more level' puzzle games. The slide mechanics feel incredibly satisfying.",
    author: "App Store Review",
    role: "Arrow Maze Rush Player",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "RBX Counters makes it easy to plan and compare Robux-style amounts with a clean, focused interface.",
    author: "App Store Review",
    role: "RBX Counters User",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Arrow Way Out is the kind of puzzle that's easy to start and hard to put down. Clean design and smooth animations.",
    author: "App Store Review",
    role: "Arrow Way Out Player",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What apps has NitiPlay published?",
    answer:
      "NitiPlay has published Arrow Maze Rush, Arrow Way Out, and RBX Counters on the App Store — with Pawdoku currently in development. All apps are built by founder Ismail Lahniti.",
  },
  {
    question: "Where can I download the apps?",
    answer:
      "All live apps are on the Apple App Store under developer ISMAIL LAHNITI. Most are also on Google Play. Visit our Our Apps page for direct download links.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "We build with Flutter for iOS and Android, publishing on the Apple App Store and Google Play Store.",
  },
  {
    question: "Who founded NitiPlay LLC?",
    answer:
      "NitiPlay LLC was founded by Ismail Lahniti, a 23-year-old mobile app developer from Morocco who has shipped multiple apps on the App Store.",
  },
  {
    question: "Do you accept partnership inquiries?",
    answer:
      "Yes. Reach out via our Contact page if you'd like to collaborate on publishing, co-development, or porting a mobile app.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/our-apps", label: "Our Apps" },
  { href: "/contact", label: "Contact" },
];

export const portfolioCategories = ["All", "Games", "Utilities"] as const;
