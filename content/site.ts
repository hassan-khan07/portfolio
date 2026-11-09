// Everything you see on the home page lives in this file.
// Edit the text here, save, and the site updates — no need to touch the components.

import type { StaticImageData } from "next/image";

import flowboardBoard from "@/assets/projects/flowboard-board.webp";
import mysteryMessage from "@/assets/projects/mystery-message.webp";
import chatLight from "@/assets/projects/chat-light.webp";
import chatDark from "@/assets/projects/chat-dark.webp";

export const site = {
  name: "Hassan Khan",
  role: "Full-Stack Developer",
  tagline:
    "I build complete web products — auth, payments, real-time features — and the tests that prove they work.",
  description:
    "Full-stack developer building with Next.js, TypeScript and PostgreSQL. Projects, resume and contact.",
  url: "https://hassankhan07.dev",
  email: "hk3755264@gmail.com",
  availability: "Available now · open to full-time roles",
  resumePdf: "/Hassan-Khan-Resume.pdf",
  github: "https://github.com/hassan-khan07",
  linkedin: "https://linkedin.com/in/hassan-khan-b561b8342",
};

export const glance: { label: string; value: string }[] = [
  { label: "Based in", value: "Rawalpindi, Pakistan" },
  { label: "Time zone", value: "PKT · UTC+5" },
  { label: "Open to", value: "Junior full-stack, Next.js and MERN roles" },
  { label: "Work setup", value: "Remote, hybrid or on-site" },
  { label: "Languages", value: "English, Urdu" },
];

export const about: string[] = [
  "I'm a full-stack developer from Rawalpindi with a BS in Computer Science (2025). I like the parts of a product that are easy to get wrong: who is allowed to do what, how a Stripe payment flows back into the app, and how two people see the same board update at the same moment.",
  "My latest project, FlowBoard, is a multi-tenant SaaS with role-based access, Stripe subscriptions and a real-time Kanban board, covered by 43 automated tests that run on every push.",
  "I'm looking for my first full-time role, on a team that ships often and cares about getting the details right.",
];

export type DemoAccount = {
  role: string;
  email: string;
  password: string;
  loginUrl: string;
  tip: string;
};

// Shared demo login shown on the FlowBoard card and case study (demo-only account).
export const flowboardDemo: DemoAccount = {
  role: "Admin",
  email: "delivered+flowboard-demo@resend.dev",
  password: "12345678",
  loginUrl: "https://flowboard-zeta-dusky.vercel.app/login",
  tip: "Tip: open it in two browser windows and drag a card — the other window updates live.",
};

export type Project = {
  name: string;
  period: string;
  summary: string;
  /** Optional bold lead-in plus sentence, shown under the summary. */
  highlight?: { lead: string; text: string };
  /** Big numbers, shown only on the featured card. */
  stats?: { value: string; label: string }[];
  tags: string[];
  image: StaticImageData;
  /** Optional screenshot shown instead of `image` when the site is in dark mode. */
  imageDark?: StaticImageData;
  imageAlt: string;
  /** Which part of the screenshot to keep when it is cropped. */
  imagePosition?: string;
  live?: string;
  code?: string;
  caseStudy?: string;
  /** Shared demo login, shown as a "Try the live demo" box. */
  demo?: DemoAccount;
};

export const featuredProject: Project = {
  name: "FlowBoard",
  period: "Aug – Oct 2026",
  summary:
    "SaaS project management for teams. Workspaces with Owner, Admin and Member roles enforced on the server, a real-time Kanban board with dnd-kit and Socket.IO, and Stripe subscriptions with Free and Pro plans.",
  stats: [
    { value: "43", label: "automated tests run on every push" },
    {
      value: "4",
      label: "bugs found by those tests, including a privilege-escalation gap",
    },
    { value: "3", label: "roles checked on every API route" },
  ],
  tags: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "NextAuth",
    "Stripe",
    "Socket.IO",
    "Vitest",
    "Playwright",
  ],
  image: flowboardBoard,
  imageAlt: "FlowBoard Kanban board with To Do, In Progress and Done columns",
  imagePosition: "left top",
  live: "https://flowboard-zeta-dusky.vercel.app",
  code: "https://github.com/hassan-khan07/flowboard",
  caseStudy: "/projects/flowboard",
  demo: flowboardDemo,
};

export const projects: Project[] = [
  {
    name: "Mystery Message",
    period: "Sep 2025 – Jan 2026",
    summary:
      "Anonymous feedback platform. Anyone with your public link can send you a message, and Google Gemini suggests what to ask, streamed with the Vercel AI SDK.",
    highlight: {
      lead: "Rate limited on the Edge",
      text: "Upstash Redis allows 1 request per 15 minutes, and fails open if Redis is down.",
    },
    tags: [
      "Next.js 15",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Upstash Redis",
      "Gemini",
    ],
    image: mysteryMessage,
    imageAlt:
      "Mystery Message home page: “Dive into the World of Anonymous Feedback” with a sample anonymous message",
    live: "https://mystery-message-orpin.vercel.app",
    code: "https://github.com/hassan-khan07/MysteryMessage",
  },
  {
    name: "Real-Time Group Chat",
    period: "Aug – Sep 2025",
    summary:
      "Group chat with admin and member roles, live online presence over Socket.IO with no polling, and image sharing through Cloudinary.",
    tags: ["React", "Zustand", "Node.js", "Express", "Socket.IO", "MongoDB"],
    image: chatLight,
    imageDark: chatDark,
    imageAlt: "Chatty, a real-time group chat app, showing a conversation",
    imagePosition: "center top",
    code: "https://github.com/hassan-khan07/Chat-App",
    live: "https://chat-app-64km.onrender.com",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Next.js API routes",
      "NextAuth",
      "JWT",
      "Zod",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose", "Upstash Redis"],
  },
  {
    group: "Payments and real-time",
    items: ["Stripe Checkout and webhooks", "Socket.IO", "dnd-kit"],
  },
  {
    group: "AI and services",
    items: [
      "Google Gemini",
      "Vercel AI SDK",
      "Resend",
      "Nodemailer",
      "Cloudinary",
    ],
  },
  {
    group: "Testing and DevOps",
    items: [
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "Vercel",
      "Railway",
      "Neon",
      "Git",
    ],
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "Institute of Space Technology (KICSIT), Rawalpindi",
  years: "2021 — 2025",
};

export const contact = {
  heading: "Hiring for a junior full-stack or Next.js role?",
  text: "I'm available immediately — remote, hybrid, or on-site in Islamabad and Rawalpindi.",
};
