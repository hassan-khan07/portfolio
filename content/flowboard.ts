// Text for the FlowBoard case study page (/projects/flowboard).
// Edit anything here; the page reads from this file.

import boardImage from "@/assets/projects/flowboard-board.webp";
import membersImage from "@/assets/projects/flowboard-members.webp";
import dashboardImage from "@/assets/projects/flowboard-dashboard.webp";

export const flowboard = {
  title: "FlowBoard",
  lede: "A multi-tenant project management SaaS: workspaces with roles, a real-time Kanban board and Stripe subscriptions — designed, built, tested and deployed by me.",
  meta: [
    { label: "Timeline", value: "Aug – Oct 2026" },
    { label: "Role", value: "Solo project, design to deploy" },
    { label: "Stack", value: "Next.js 16, TypeScript, PostgreSQL, Prisma, NextAuth, Stripe, Socket.IO" },
  ],
  live: "https://flowboard-zeta-dusky.vercel.app",
  code: "https://github.com/hassan-khan07/flowboard",

  hero: {
    image: boardImage,
    alt: "FlowBoard's project board with To Do, In Progress and Done columns; cards show who last updated them",
    caption: "The project board. Drag a card and every teammate's board updates live.",
  },

  goal: "Build a Linear/Trello-style tool that includes the parts tutorials usually skip — multi-tenancy, permissions, billing and real-time sync — and prove they work with automated tests.",

  features: [
    "Teams sign up, create a workspace and invite people by email as an Owner, Admin or Member.",
    "Every project gets a Kanban board — To Do, In Progress, Done. Cards move by drag and drop and sync live for everyone.",
    "Each card shows who last updated it, since any member can move tasks.",
    "The Free plan allows 1 project and 3 members; Pro unlocks unlimited projects and members through Stripe Checkout.",
    "New accounts confirm their email through a verification link.",
  ],

  gallery: [
    { image: membersImage, alt: "Members page listing an Owner and an Admin, with a form to invite someone new", caption: "Members and invites. Roles are checked on the server.", position: "center" },
    { image: dashboardImage, alt: "Workspace home showing the Free plan, project and member counts", caption: "Workspace home, with the Free plan's limits in the sidebar.", position: "left top" },
  ],

  deployment: [
    { part: "Next.js app", host: "Vercel", why: "Pages, API routes and Stripe webhooks" },
    { part: "Socket.IO server", host: "Railway", why: "Holds the WebSocket connections that Vercel's serverless functions can't keep open" },
    { part: "PostgreSQL", host: "Neon", why: "Separate databases for tests and production" },
    { part: "Payments", host: "Stripe", why: "Checkout for upgrades, webhooks to switch a workspace's plan" },
    { part: "Email", host: "Resend", why: "Verification and invite emails sent from my own domain" },
  ],

  decisions: [
    {
      title: "A separate real-time server",
      text: "Vercel runs code as short-lived serverless functions, which can't hold WebSocket connections open. So the Socket.IO server runs on its own on Railway, and the Next.js app stays on Vercel.",
    },
    {
      title: "Roles read from the database, every time",
      text: "Permission checks read the member's role from the database on every API call, not from the login token, so a role change takes effect immediately.",
    },
    {
      title: "Task status checked in the API",
      text: "Status is a plain string in the database, and Zod enforces the allowed values in the API. Adding a new column later needs no database migration.",
    },
    {
      title: "Instant drag, safe rollback",
      text: "A card moves the moment you drop it, the change saves in the background, and the card snaps back if the save fails.",
    },
  ],

  bugs: [
    {
      title: "The invite API accepted the role “OWNER”",
      happened: "the role check only existed in the invite form, so a direct API call could invite someone as an Owner. An integration test caught it.",
      fix: "moved the validation to the server, where nobody can skip it.",
    },
    {
      title: "Dropping a card on an empty column did nothing",
      happened: "only the cards were drop targets, so an empty column had nothing to drop onto.",
      fix: "made every column a drop target too, and used the column's status when a card lands on it.",
    },
    {
      title: "Drag and drop wouldn't start",
      happened: "the browser's text selection grabbed the mouse before dnd-kit could.",
      fix: "turned off text selection and native dragging on cards.",
    },
  ],

  testing: {
    stats: [
      { value: "32", label: "Vitest integration tests, run against a real test database" },
      { value: "11", label: "Playwright end-to-end tests: signup, invites, the board and Stripe checkout" },
      { value: "4", label: "bugs found by these tests, then fixed" },
    ],
    note: "GitHub Actions runs both suites on every push.",
  },

  next: [
    "Let one person belong to several workspaces, with a workspace switcher.",
    "Reorder cards within a column, which needs a position field on tasks.",
    "Switch to database sessions, so changes like email verification show up without logging in again.",
  ],
};
