import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { DemoLogin } from "@/components/demo-login";
import { ExternalLink } from "@/components/ui";
import { flowboardDemo } from "@/content/site";
import { flowboard as cs } from "@/content/flowboard";

export const metadata: Metadata = {
  title: "FlowBoard case study",
  description:
    "How I built FlowBoard: a multi-tenant SaaS with role-based access, a real-time Kanban board, Stripe subscriptions and 43 automated tests.",
  alternates: { canonical: "/projects/flowboard" },
  openGraph: {
    title: "FlowBoard case study — Hassan Khan",
    description: "A multi-tenant SaaS with roles, a real-time Kanban board, Stripe subscriptions and 43 automated tests.",
    url: "/projects/flowboard",
    type: "article",
  },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-[26px] leading-tight font-semibold tracking-[-0.02em] sm:text-[28px]">{children}</h2>;
}

const card = "rounded-[14px] border border-line bg-surface";

export default function FlowBoardCaseStudy() {
  return (
    <div className="mx-auto flex max-w-[820px] flex-col gap-14 px-5 pt-10 pb-36 sm:px-10 sm:pt-16 lg:pt-22">
      <Link
        href="/#projects"
        className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-pill underline-offset-4 hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to portfolio
      </Link>

      <header className="flex flex-col gap-[18px]">
        <p className="font-mono text-xs font-medium tracking-[0.08em] text-faint uppercase">Case study</p>
        <h1 className="font-display text-[44px] leading-none font-bold tracking-[-0.035em] sm:text-[64px]">{cs.title}</h1>
        <p className="max-w-[680px] text-xl leading-normal text-pretty text-muted">{cs.lede}</p>
        <dl className="mt-2 grid gap-x-6 gap-y-4 border-y border-line py-5 sm:grid-cols-2 md:grid-cols-4">
          {cs.meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <dt className="font-mono text-[11.5px] tracking-[0.06em] text-faint uppercase">{m.label}</dt>
              <dd className="text-[15px] font-medium">{m.value}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-1">
            <dt className="font-mono text-[11.5px] tracking-[0.06em] text-faint uppercase">Links</dt>
            <dd className="flex flex-wrap gap-x-4 text-[15px] font-medium text-accent">
              <ExternalLink href={cs.live} className="min-h-0" iconSize="size-3">
                Live demo
              </ExternalLink>
              <ExternalLink href={cs.code} className="min-h-0" iconSize="size-3">
                Code
              </ExternalLink>
            </dd>
          </div>
        </dl>
      </header>

      <main id="content" className="flex flex-col gap-14 text-[17px] leading-relaxed">
        <figure className="flex flex-col gap-2.5">
          <Image
            src={cs.hero.image}
            alt={cs.hero.alt}
            sizes="(max-width: 860px) 100vw, 740px"
            placeholder="blur"
            preload
            className="h-auto w-full rounded-[14px] border border-line"
          />
          <figcaption className="text-sm text-faint">{cs.hero.caption}</figcaption>
        </figure>

        <section className="flex flex-col gap-3.5">
          <H2>The goal</H2>
          <p className="text-pretty text-ink-2">{cs.goal}</p>
        </section>

        <section className="flex flex-col gap-3.5">
          <H2>What it does</H2>
          <ul className="flex list-disc flex-col gap-2 pl-[22px] text-ink-2 marker:text-faint">
            {cs.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          {cs.gallery.map((g) => (
            <figure key={g.caption} className="flex flex-col gap-2">
              <Image
                src={g.image}
                alt={g.alt}
                sizes="(max-width: 640px) 100vw, 360px"
                placeholder="blur"
                className="aspect-[16/10] w-full rounded-xl border border-line object-cover"
                style={{ objectPosition: g.position }}
              />
              <figcaption className="text-sm text-faint">{g.caption}</figcaption>
            </figure>
          ))}
        </div>

        <section className="flex flex-col gap-3.5">
          <H2>How it&apos;s deployed</H2>
          <div className="border-t border-line">
            {cs.deployment.map((d) => (
              <div key={d.part} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-3.5">
                <p className="w-[170px] shrink-0 text-[15px] font-semibold">{d.part}</p>
                <p className="w-[90px] shrink-0 pt-0.5 font-mono text-[13px] text-faint">{d.host}</p>
                <p className="min-w-0 flex-[1_1_260px] text-[15px] text-muted">{d.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <H2>Key decisions</H2>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {cs.decisions.map((d) => (
              <div key={d.title} className={`${card} flex flex-col gap-2 px-[22px] py-5`}>
                <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                <p className="text-[15px] text-pretty text-muted">{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <H2>Bugs worth telling</H2>
          <div className="flex flex-col gap-3.5">
            {cs.bugs.map((b) => (
              <article key={b.title} className={`${card} flex flex-col gap-2 px-[22px] py-5`}>
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="text-[15px] text-pretty text-muted">
                  <strong className="font-semibold text-ink-2">What happened:</strong> {b.happened}
                </p>
                <p className="text-[15px] text-pretty text-muted">
                  <strong className="font-semibold text-ink-2">Fix:</strong> {b.fix}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <H2>Testing</H2>
          <dl className="grid gap-3 sm:grid-cols-3">
            {cs.testing.stats.map((s) => (
              <div key={s.label} className={`${card} flex flex-col-reverse justify-end px-5 py-[18px]`}>
                <dt className="mt-2 text-sm leading-snug text-muted">{s.label}</dt>
                <dd className="font-display text-4xl leading-none font-bold tracking-[-0.02em] text-accent">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-ink-2">{cs.testing.note}</p>
        </section>

        <section className="flex flex-col gap-3.5">
          <H2>What I&apos;d do next</H2>
          <ul className="flex list-disc flex-col gap-2 pl-[22px] text-ink-2 marker:text-faint">
            {cs.next.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 rounded-[20px] border border-contact-line bg-contact p-8 text-contact-ink">
          <h2 className="font-display text-[26px] leading-tight font-semibold tracking-[-0.02em]">Try it yourself</h2>
          <DemoLogin demo={flowboardDemo} tone="dark" />
          <div className="flex flex-wrap gap-3">
            <a
              href={cs.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-white/20 px-[18px] text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Code on GitHub
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <Link
              href="/#projects"
              className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-white/20 px-[18px] text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}