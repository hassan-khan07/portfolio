import Image from "next/image";
import { FileText, Mail } from "lucide-react";

import { ViewResumeButton } from "@/components/resume-dialog";
import { ExternalLink, SectionLabel } from "@/components/ui";
import { glance, site } from "@/content/site";
import portrait from "@/assets/hassan-portrait.webp";

/** Left column on desktop (stays in place while the right side scrolls); top of the page on phones. */
export function SiteHeader() {
  return (
    <header className="flex flex-col gap-7 pt-14 sm:pt-20 lg:sticky lg:top-0 lg:max-h-dvh lg:w-[340px] lg:shrink-0 lg:overflow-y-auto lg:pt-24 lg:pb-24">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Photo next to the name on phones and tablets; on desktop the big portrait is in the About section. */}
          <div className="size-[76px] shrink-0 overflow-hidden rounded-[18px] border border-line bg-photo sm:size-24 lg:hidden">
            <Image src={portrait} alt={site.name} sizes="96px" className="size-full object-cover object-top" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-[42px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[52px]">{site.name}</h1>
            <p className="font-display text-xl font-medium tracking-[-0.01em] sm:text-[21px]">{site.role}</p>
          </div>
        </div>
        <p className="max-w-[340px] text-pretty text-muted">{site.tagline}</p>
      </div>

      <p className="flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-pill">
        <span aria-hidden className="size-2 rounded-full bg-dot" />
        {site.availability}
      </p>

      <div className="flex flex-wrap gap-3">
        <ViewResumeButton className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-[10px] bg-accent px-[18px] text-[15px] font-semibold text-on-accent transition-opacity hover:opacity-90">
          <FileText className="size-4" aria-hidden />
          View resume
        </ViewResumeButton>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-line-strong bg-surface px-[18px] text-[15px] font-semibold transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" aria-hidden />
          Email me
        </a>
      </div>

      <section aria-labelledby="glance-title" className="flex flex-col gap-2.5">
        <SectionLabel id="glance-title">At a glance</SectionLabel>
        <dl className="border-t border-line">
          {glance.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-line py-[11px]">
              <dt className="shrink-0 text-[13px] text-faint">{row.label}</dt>
              <dd className="text-right text-sm font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="flex flex-wrap gap-x-[22px] text-sm font-medium">
        <ExternalLink href={site.github}>GitHub</ExternalLink>
        <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink>
      </div>
    </header>
  );
}
