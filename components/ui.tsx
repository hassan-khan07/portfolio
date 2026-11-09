import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/** Small uppercase label used as each section's heading. */
export function SectionLabel({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="font-mono text-xs font-medium tracking-[0.08em] text-faint uppercase">
      {children}
    </h2>
  );
}

/** Link to another site, opened in a new tab, with a small arrow. */
export function ExternalLink({
  href,
  children,
  className = "",
  iconSize = "size-3.5",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  iconSize?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-1.5 underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <ArrowUpRight className={iconSize} aria-hidden />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/** Link to a page on this site, with a right arrow. */
export function InternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`inline-flex min-h-11 items-center gap-1.5 underline-offset-4 hover:underline ${className}`}>
      {children}
      <ArrowRight className="size-3.5" aria-hidden />
    </Link>
  );
}

export function TagList({ tags, onCard = false }: { tags: string[]; onCard?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium text-accent ${onCard ? "bg-chip-card" : "bg-chip"}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
