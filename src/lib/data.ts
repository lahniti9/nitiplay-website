export const company = {
  name: "NitiPlay LLC",
  tagline: "Premium Mobile Games & Apps",
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
  image: "/images/founder-profile.jpg",
  bio: "Ismail Lahniti is a 23-year-old mobile app developer from Morocco and the founder of NitiPlay LLC. He has built and shipped a growing catalog on the App Store — puzzle games like Arrow Maze Rush, Arrow Way Out, and Pawdoku, plus utilities like RBX Counters.",
  highlights: [
    "4 apps live on the Apple App Store",
    "Cross-platform Flutter development for iOS & Android",
    "Puzzle games and gaming utility apps",
    "Based in Morocco, building for a global audience",
  ],
};

export type AppPlatform = "ios" | "android";
export type AppStatus = "published" | "coming-soon";
export type AppCategory = "Game" | "Utility";

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: AppCategory;
  platforms: AppPlatform[];
  status: AppStatus;
  rating: number;
  ratingCount?: number;
  highlight?: string;
  featured: boolean;
  accent: string;
  icon: string;
  banner: string;
  cover: string;
  screenshot?: string;
  releasedAt?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const apps: App[] = [
  {
    id: "arrow-maze-rush",
    name: "Arrow Maze Rush",
    tagline: "Slide arrows to beat the maze",
    description:
      "An addictive maze adventure where every tap counts. Slide arrows, clear the path, and race the clock through hand-tuned levels — from gentle warm-ups to brain-melting puzzles with buttery 60 FPS animations.",
    category: "Game",
    platforms: ["ios", "android"],
    status: "published",
    rating: 5.0,
    ratingCount: 3,
    highlight: "Puzzle · Timed mazes",
    featured: true,
    accent: "#6366f1",
    icon: "/apps/icons/arrow-maze-rush.png",
    banner: "/apps/banners/arrow-maze-rush.png",
    cover: "/apps/covers/arrow-maze-rush.png",
    screenshot: "/apps/screenshots/arrow-maze-rush.png",
    releasedAt: "2026-07-15",
    appStoreUrl: "https://apps.apple.com/us/app/arrow-maze-rush/id6785996466",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.arrowmazerush.arrow_maze_rush",
  },
  {
    id: "pawdoku",
    name: "Pawdoku",
    tagline: "Cute territory brain game",
    description:
      "A cozy cat-themed logic puzzle — place one cat per colored region, row, and column without letting them touch. 100+ offline levels with hints, undo, and a charming pastel board. No ads, no account required.",
    category: "Game",
    platforms: ["ios"],
    status: "published",
    rating: 0,
    ratingCount: 0,
    highlight: "100+ levels · Offline",
    featured: false,
    accent: "#a855f7",
    icon: "/apps/icons/pawdoku.png",
    banner: "/apps/banners/pawdoku.png",
    cover: "/apps/covers/pawdoku.png",
    screenshot: "/apps/screenshots/pawdoku.png",
    releasedAt: "2026-08-06",
    appStoreUrl:
      "https://apps.apple.com/us/app/pawdoku-cat-logic-puzzle/id6794455883",
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
    rating: 4.5,
    ratingCount: 6,
    highlight: "600 puzzles · No timers",
    featured: false,
    accent: "#0ea5e9",
    icon: "/apps/icons/arrow-way-out.png",
    banner: "/apps/banners/arrow-way-out.png",
    cover: "/apps/covers/arrow-way-out.png",
    screenshot: "/apps/screenshots/arrow-way-out.png",
    releasedAt: "2026-05-21",
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
    rating: 2.7,
    ratingCount: 7,
    highlight: "Productivity · Calculator",
    featured: false,
    accent: "#f97316",
    icon: "/apps/icons/rbx-counters.png",
    banner: "/apps/banners/rbx-counters.png",
    cover: "/apps/covers/rbx-counters.png",
    screenshot: "/apps/screenshots/rbx-counters.png",
    releasedAt: "2026-04-30",
    appStoreUrl:
      "https://apps.apple.com/us/app/rbx-counters-robox-calculator/id6764420686",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rbxcalculator.rbx_calculator",
  },
];

const publishedApps = apps.filter((app) => app.status === "published");
const ratedApps = publishedApps.filter((app) => (app.ratingCount ?? 0) > 0);
const totalReviews = ratedApps.reduce(
  (sum, app) => sum + (app.ratingCount ?? 0),
  0
);
const weightedRating =
  totalReviews === 0
    ? 0
    : ratedApps.reduce(
        (sum, app) => sum + app.rating * (app.ratingCount ?? 0),
        0
      ) / totalReviews;

export const stats = [
  { label: "Live on App Store", value: publishedApps.length, suffix: "" },
  { label: "Projects in Portfolio", value: apps.length, suffix: "" },
  {
    label: "Average Store Rating",
    value: Math.round(weightedRating * 10) / 10,
    suffix: "★",
    decimals: 1,
  },
  { label: "App Store Reviews", value: totalReviews, suffix: "+" },
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
      "Pawdoku is a cozy, clever cat puzzle — easy to pick up and surprisingly satisfying to finish.",
    author: "App Store Review",
    role: "Pawdoku Player",
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
      "NitiPlay has four apps live on the App Store: Arrow Maze Rush, Pawdoku, Arrow Way Out, and RBX Counters. Several titles are also on Google Play. All are built by founder Ismail Lahniti.",
  },
  {
    question: "Where can I download the apps?",
    answer:
      "Every live app is on the Apple App Store under developer ISMAIL LAHNITI. Arrow Maze Rush, Arrow Way Out, and RBX Counters are also on Google Play. Visit Our Apps for direct download links.",
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

export function isNewRelease(app: App, withinDays = 45): boolean {
  if (!app.releasedAt) return false;
  const released = new Date(`${app.releasedAt}T00:00:00Z`).getTime();
  return Date.now() - released < withinDays * 24 * 60 * 60 * 1000;
}

export function filterAppsByCategory(
  list: App[],
  filter: string
): App[] {
  if (filter === "All") return list;
  if (filter === "Games") return list.filter((app) => app.category === "Game");
  if (filter === "Utilities")
    return list.filter((app) => app.category === "Utility");
  return list;
}
