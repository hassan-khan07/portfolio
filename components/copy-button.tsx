"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

type Status = "idle" | "copied" | "failed";

const tones = {
  // On light cards
  light: "border-line-strong bg-surface text-ink hover:bg-page",
  // On the dark contact / "Try it yourself" blocks
  dark: "border-white/15 bg-white/5 text-white hover:bg-white/10",
};

/**
 * Copies `value` to the clipboard and shows "Copied!" for two seconds.
 * `srLabel` tells screen-reader users what is being copied (e.g. "demo password").
 */
export function CopyButton({
  value,
  label = "Copy",
  srLabel,
  tone = "light",
  size = "md",
}: {
  value: string;
  label?: string;
  srLabel?: string;
  tone?: keyof typeof tones;
  size?: "sm" | "md";
}) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  const sizing = size === "sm" ? "h-9 px-3 text-[13px]" : "h-11 px-4 text-sm";

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-[10px] border font-semibold transition-colors ${sizing} ${tones[tone]}`}
    >
      {status === "copied" ? (
        <Check
          className={`size-4 ${tone === "dark" ? "text-emerald-300" : "text-dot"}`}
          aria-hidden
        />
      ) : (
        <Copy className="size-4" aria-hidden />
      )}
      <span aria-live="polite">
        {status === "copied"
          ? "Copied!"
          : status === "failed"
            ? "Select it instead"
            : label}
      </span>
      {srLabel && status === "idle" && (
        <span className="sr-only"> {srLabel}</span>
      )}
    </button>
  );
}
