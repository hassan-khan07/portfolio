import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="content" className="mx-auto flex min-h-[70dvh] max-w-[560px] flex-col justify-center gap-4 px-5 py-24">
      <p className="font-mono text-xs font-medium tracking-[0.08em] text-faint uppercase">404</p>
      <h1 className="font-display text-4xl font-bold tracking-[-0.03em]">This page doesn&apos;t exist</h1>
      <p className="text-muted">The link may be old or mistyped.</p>
      <Link
        href="/"
        className="inline-flex h-11 w-fit items-center gap-2 rounded-[10px] bg-accent px-[18px] text-[15px] font-semibold text-on-accent transition-opacity hover:opacity-90"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to the homepage
      </Link>
    </main>
  );
}
