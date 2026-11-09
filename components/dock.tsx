"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, CodeXml, FileText, FolderOpen, House, Mail, Moon, Sun } from "lucide-react";

import { site } from "@/content/site";
import { useResumeDialog } from "@/components/resume-dialog";

const base =
  "group relative flex size-11 cursor-pointer items-center justify-center rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const item = `${base} text-dock-icon hover:bg-ink/[0.07]`;
const activeItem = `${base} bg-dock-active text-accent`;

/** Small label that appears above a dock button on hover or keyboard focus. */
function Tip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 translate-y-1 rounded-lg bg-tip px-2.5 py-1.5 text-xs leading-none font-medium whitespace-nowrap text-tip-ink opacity-0 shadow-lg transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 ${className}`}
    >
      {children}
    </span>
  );
}

function Divider() {
  return <span aria-hidden className="mx-1 h-6 w-px bg-line" />;
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage can be blocked (private mode); the switch still works for this visit.
  }
}

type Section = "home" | "projects" | null;

export function Dock() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const { open: openResume } = useResumeDialog();
  const [section, setSection] = useState<Section>("home");

  // Highlight Home or Projects depending on which part of the page is in the middle of the screen.
  useEffect(() => {
    if (!onHome) return;
    const targets: [string, Section][] = [
      ["about", "home"],
      ["projects", "projects"],
      ["skills", null],
      ["education", null],
      ["contact", null],
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const match = targets.find(([id]) => id === entry.target.id);
          if (match) setSection(match[1]);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const [id] of targets) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [onHome]);

  const current: Section = onHome ? section : pathname.startsWith("/projects") ? "projects" : null;

  return (
    <nav
      aria-label="Quick links"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 print:hidden"
    >
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-2xl border border-line bg-dock p-1.5 shadow-[0_10px_30px_var(--dock-shadow)] backdrop-blur-md">
        <Link
          href="/#top"
          aria-label={onHome ? "Back to top" : "Home"}
          aria-current={current === "home" ? "true" : undefined}
          className={current === "home" ? activeItem : item}
        >
          <House className="size-[19px]" aria-hidden />
          <Tip>{onHome ? "Back to top" : "Home"}</Tip>
        </Link>
        <Link
          href="/#projects"
          aria-label={onHome ? "Jump to projects" : "All projects"}
          aria-current={current === "projects" ? "true" : undefined}
          className={current === "projects" ? activeItem : item}
        >
          <FolderOpen className="size-[19px]" aria-hidden />
          <Tip>{onHome ? "Jump to projects" : "All projects"}</Tip>
        </Link>
        <button type="button" onClick={openResume} aria-label="View resume" className={item}>
          <FileText className="size-[19px]" aria-hidden />
          <Tip>View resume</Tip>
        </button>

        <Divider />

        <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className={item}>
          <CodeXml className="size-[19px]" aria-hidden />
          <Tip>GitHub profile</Tip>
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" className={item}>
          <BriefcaseBusiness className="size-[19px]" aria-hidden />
          <Tip>LinkedIn profile</Tip>
        </a>
        <a href={`mailto:${site.email}`} aria-label="Email me" className={item}>
          <Mail className="size-[19px]" aria-hidden />
          <Tip>Email me</Tip>
        </a>

        <Divider />

        <button type="button" onClick={toggleTheme} aria-label="Toggle dark mode" className={item}>
          <Moon className="size-[19px] dark:hidden" aria-hidden />
          <Sun className="hidden size-[19px] dark:block" aria-hidden />
          <Tip className="dark:hidden">Switch to dark mode</Tip>
          <Tip className="hidden dark:block">Switch to light mode</Tip>
        </button>
      </div>
    </nav>
  );
}
