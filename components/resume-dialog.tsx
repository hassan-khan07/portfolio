"use client";

import { createContext, useCallback, useContext, useRef, type ReactNode } from "react";
import Image from "next/image";
import { Download, ExternalLink, X } from "lucide-react";

import resumePreview from "@/assets/resume-preview.webp";
import { site } from "@/content/site";

type ResumeDialogContext = { open: () => void };

const ResumeContext = createContext<ResumeDialogContext>({ open: () => {} });

export function useResumeDialog() {
  return useContext(ResumeContext);
}

/**
 * Holds the resume preview dialog. Any "View resume" button on any page opens it.
 * Uses the native <dialog> element, so Esc closes it and focus stays inside.
 */
export function ResumeDialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <ResumeContext value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="resume-title"
        onClick={(event) => {
          // A click on the dark backdrop (outside the panel) closes the dialog.
          if (event.target === event.currentTarget) close();
        }}
        className="m-auto w-[min(780px,calc(100%-2rem))] overflow-hidden rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl"
      >
        <div className="flex max-h-[calc(100dvh-3rem)] flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-2.5 pr-2.5 pl-5">
            <h2 id="resume-title" className="font-display text-[17px] font-semibold">
              Resume
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={site.resumePdf}
                download="Hassan-Khan-Resume.pdf"
                className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-accent px-4 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
              >
                <Download className="size-4" aria-hidden />
                Download PDF
              </a>
              <a
                href={site.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-line-strong px-4 text-sm font-semibold transition-colors hover:bg-page"
              >
                <ExternalLink className="size-4" aria-hidden />
                Open in new tab
              </a>
              <button
                type="button"
                onClick={close}
                aria-label="Close resume"
                className="flex size-11 cursor-pointer items-center justify-center rounded-[10px] transition-colors hover:bg-page"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto bg-page p-5">
            <Image
              src={resumePreview}
              alt="Hassan Khan's resume, page 1: summary, technical skills, projects and education"
              sizes="(max-width: 820px) 100vw, 740px"
              className="h-auto w-full rounded-md bg-white shadow-md"
            />
          </div>
        </div>
      </dialog>
    </ResumeContext>
  );
}

export function ViewResumeButton({ className, children }: { className?: string; children: ReactNode }) {
  const { open } = useResumeDialog();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
