# hassankhan07.dev — Hassan Khan's portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

- Two-column home page: profile and "At a glance" on the left (stays in place on desktop), projects on the right
- Featured FlowBoard card plus a full case study page at `/projects/flowboard`
- Floating dock with hover labels: top, projects, resume, GitHub, LinkedIn, email, dark mode
- Dark mode that follows the visitor's device and remembers their choice (no flash on load)
- Resume preview dialog with Download PDF / Open in new tab
- "Copy email" button
- Link preview image (Open Graph), favicon, sitemap, robots.txt and structured data for Google
- Vercel Analytics (only active once deployed on Vercel)

Every page is static, so it loads fast and costs nothing to host on Vercel's free plan.

## Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before pushing, check that everything builds:

```bash
npm run lint
npm run build
```

## Where to edit things

| What | File |
| --- | --- |
| Name, tagline, email, links, "At a glance", about, projects, skills, education, contact text | `content/site.ts` |
| FlowBoard case study text | `content/flowboard.ts` |
| Colors (light and dark) | `app/globals.css` (top of the file) |
| Page title and description for Google | `app/layout.tsx` (`metadata`) |
| Link preview image | `app/opengraph-image.tsx` |
| Project screenshots and your photo | `assets/` |

**Adding a project:** add a screenshot to `assets/projects/`, import it at the top of `content/site.ts`, then add an entry to the `projects` list. The page picks it up automatically.

**Updating your resume:** replace `public/Hassan-Khan-Resume.pdf` (keep the same name), and replace `assets/resume-preview.webp` with an image of page 1 (about 1240 px wide). The preview image is what the dialog shows; the PDF is what people download.

## Deploy on Vercel

1. Create a new GitHub repository (for example `portfolio`) and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Portfolio v2"
   git branch -M main
   git remote add origin https://github.com/hassan-khan07/portfolio.git
   git push -u origin main
   ```
2. On vercel.com, choose **Add New → Project**, import the repository, and click **Deploy**. No environment variables are needed.
3. In the Vercel project, open **Analytics** and enable it if you want visit counts.

## Connect hassankhan07.dev

1. In the Vercel project, go to **Settings → Domains** and add `hassankhan07.dev`. Also add `www.hassankhan07.dev` and set it to redirect to `hassankhan07.dev`.
2. Vercel then shows the DNS records it needs: usually an **A record** for `@` and a **CNAME** for `www`. Copy the exact values Vercel shows you.
3. In Spaceship, open your domain's DNS records and add those two records.
4. **Do not delete the records Resend added** (the `resend._domainkey` TXT record, the records on the `send` subdomain and the `_dmarc` record). FlowBoard's verification and invite emails depend on them. Also don't switch your nameservers to Vercel; keeping DNS at Spaceship keeps those email records safe.
5. Wait for Vercel to show the domain as valid (usually minutes, sometimes a few hours). HTTPS is set up automatically, which `.dev` domains require.

## After it's live

- Put `hassankhan07.dev` in your resume header, LinkedIn "Website" field and GitHub profile.
- Optional: move FlowBoard to `flowboard.hassankhan07.dev` (add it as a domain in the FlowBoard Vercel project, then update `APP_URL`, `NEXT_PUBLIC_APP_URL`, Railway's `ALLOWED_ORIGINS` and the Stripe webhook URL).

## Notes

- Fonts (Inter, Inter Tight, JetBrains Mono, all under the SIL Open Font License) are bundled in `assets/fonts/` and loaded with `next/font/local`, so the build never depends on Google Fonts.
- The theme is stored in `localStorage` under the key `theme`, and a tiny script in `app/layout.tsx` applies it before the page paints.
