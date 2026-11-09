import Image from "next/image";
import Link from "next/link";

import { CopyEmailButton } from "@/components/copy-email-button";
import { FeaturedProject, ProjectRow } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/ui";
import portrait from "@/assets/hassan-portrait.webp";
import { about, contact, education, featuredProject, projects, site, skills } from "@/content/site";

// Structured data so search engines understand who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Rawalpindi", addressCountry: "PK" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Institute of Space Technology (KICSIT)" },
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Socket.IO"],
};

/** Turns the first "FlowBoard" in a paragraph into a link to its case study. */
function withFlowBoardLink(text: string) {
  const index = text.indexOf("FlowBoard");
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <Link href="/projects/flowboard" className="font-semibold text-accent underline-offset-4 hover:underline">
        FlowBoard
      </Link>
      {text.slice(index + "FlowBoard".length)}
    </>
  );
}

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-14">
      <div className="lg:flex lg:items-start lg:gap-20 xl:gap-24">
        <SiteHeader />

        <main id="content" className="flex min-w-0 flex-col gap-20 pt-16 pb-32 lg:flex-1 lg:gap-22 lg:pt-24">
          <section id="about" aria-labelledby="about-title" className="flex flex-col gap-5">
            <SectionLabel id="about-title">About</SectionLabel>
            <div className="flex items-start gap-7">
              {/* Large portrait beside the text on desktop. On smaller screens the photo sits next to the name instead. */}
              <div className="hidden w-[200px] shrink-0 overflow-hidden rounded-[20px] border border-line bg-photo lg:block xl:w-[220px]">
                <Image
                  src={portrait}
                  alt={site.name}
                  sizes="220px"
                  preload
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-3.5 text-[17px] text-ink-2">
                {about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-pretty">
                    {withFlowBoardLink(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" aria-labelledby="projects-title" className="flex flex-col gap-3">
            <div className="mb-2">
              <SectionLabel id="projects-title">Projects</SectionLabel>
            </div>
            <FeaturedProject project={featuredProject} />
            <div className="mt-3 flex flex-col gap-1">
              {projects.map((project) => (
                <ProjectRow key={project.name} project={project} />
              ))}
            </div>
          </section>

          <section id="skills" aria-labelledby="skills-title" className="flex flex-col gap-5">
            <SectionLabel id="skills-title">Skills</SectionLabel>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.group} className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold">{group.group}</h3>
                  <p className="text-[15px] leading-[1.7] text-muted">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="education" aria-labelledby="education-title" className="flex flex-col gap-4">
            <SectionLabel id="education-title">Education</SectionLabel>
            <div className="flex flex-wrap gap-x-6 gap-y-1.5 border-y border-line py-5">
              <span className="w-[120px] shrink-0 pt-0.5 font-mono text-xs text-faint">{education.years}</span>
              <div className="min-w-0 flex-[1_1_280px]">
                <p className="font-semibold">{education.degree}</p>
                <p className="text-[15px] text-muted">{education.school}</p>
              </div>
            </div>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-title"
            className="flex flex-col gap-4 rounded-[20px] border border-contact-line bg-contact p-7 text-contact-ink sm:-mx-5 sm:p-10"
          >
            <h2 id="contact-title" className="font-display text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-balance sm:text-[32px]">
              {contact.heading}
            </h2>
            <p className="max-w-[520px] text-contact-muted">{contact.text}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-[20px] font-semibold break-all text-white underline underline-offset-[6px] sm:text-[22px]"
              >
                {site.email}
              </a>
              <CopyEmailButton email={site.email} />
            </div>
          </section>

          <footer className="text-[13px] text-faint">
            Designed and built by {site.name} with Next.js, Tailwind CSS and TypeScript. Deployed on Vercel.
          </footer>
        </main>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}
