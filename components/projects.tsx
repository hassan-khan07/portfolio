import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DemoLogin } from "@/components/demo-login";
import { ExternalLink, InternalLink, TagList } from "@/components/ui";
import type { Project } from "@/content/site";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-5 text-sm font-medium">
      {project.live && (
        <ExternalLink href={project.live} iconSize="size-3.5">
          Live site
        </ExternalLink>
      )}
      {project.code && (
        <ExternalLink href={project.code} iconSize="size-3.5">
          Code
        </ExternalLink>
      )}
      {project.caseStudy && (
        <InternalLink href={project.caseStudy} className="text-accent">
          Read the case study
        </InternalLink>
      )}
    </div>
  );
}

function ProjectTitle({
  project,
  size,
}: {
  project: Project;
  size: "lg" | "md";
}) {
  const href = project.live ?? project.code;
  const text =
    size === "lg"
      ? "text-[26px] font-bold tracking-[-0.02em]"
      : "text-xl font-semibold tracking-[-0.01em]";
  const title = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 hover:underline hover:underline-offset-4"
    >
      {project.name}
      <ArrowUpRight
        className={size === "lg" ? "size-[18px]" : "size-4"}
        aria-hidden
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    project.name
  );
  return <h3 className={`font-display leading-tight ${text}`}>{title}</h3>;
}

/** Big card for the main project, with a large screenshot and key numbers. */
export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-line bg-surface">
      <Image
        src={project.image}
        alt={project.imageAlt}
        sizes="(max-width: 1024px) 100vw, 720px"
        placeholder="blur"
        className="aspect-video w-full border-b border-line object-cover"
        style={{ objectPosition: project.imagePosition }}
      />
      <div className="flex flex-col gap-3.5 p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <ProjectTitle project={project} size="lg" />
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-[0.06em] text-accent uppercase">
              Featured
            </span>
          </div>
          <span className="font-mono text-xs text-faint">{project.period}</span>
        </div>
        <p className="text-pretty text-muted">{project.summary}</p>
        {project.stats && (
          <dl className="grid gap-2.5 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse justify-end rounded-xl border border-chip bg-page px-4 py-3.5"
              >
                <dt className="mt-1.5 text-[13px] leading-snug text-muted">
                  {stat.label}
                </dt>
                <dd className="font-display text-3xl leading-none font-bold tracking-[-0.02em] text-accent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
        <TagList tags={project.tags} onCard />
        <TagList tags={project.tags} onCard />
        {project.demo && <DemoLogin demo={project.demo} />}
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

/** Compact row: small screenshot on the left, details on the right (stacked on phones). */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="-mx-5 flex flex-col gap-5 rounded-2xl border border-transparent p-5 transition-colors hover:border-line hover:bg-surface sm:flex-row sm:items-start sm:gap-6">
      <div className="w-full shrink-0 overflow-hidden rounded-[10px] border border-line sm:w-[200px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          sizes="(max-width: 640px) 100vw, 200px"
          placeholder="blur"
          className={`aspect-[16/10] w-full object-cover ${project.imageDark ? "dark:hidden" : ""}`}
          style={{ objectPosition: project.imagePosition }}
        />
        {project.imageDark && (
          <Image
            src={project.imageDark}
            alt={project.imageAlt}
            sizes="(max-width: 640px) 100vw, 200px"
            placeholder="blur"
            className="hidden aspect-[16/10] w-full object-cover dark:block"
            style={{ objectPosition: project.imagePosition }}
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <ProjectTitle project={project} size="md" />
          <span className="font-mono text-xs text-faint">{project.period}</span>
        </div>
        <p className="text-[15px] text-pretty text-muted">{project.summary}</p>
        {project.highlight && (
          <p className="text-sm text-pretty text-ink-2">
            <strong className="font-semibold">{project.highlight.lead}</strong>{" "}
            — {project.highlight.text}
          </p>
        )}
        <TagList tags={project.tags} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
