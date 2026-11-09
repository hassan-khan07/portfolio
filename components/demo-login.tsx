import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import type { DemoAccount } from "@/content/site";

const tones = {
  light: {
    box: "border-line bg-page",
    label: "text-faint",
    value: "text-ink",
    muted: "text-muted",
    button: "bg-ink text-page",
  },
  dark: {
    box: "border-white/15 bg-white/5",
    label: "text-contact-muted",
    value: "text-white",
    muted: "text-contact-muted",
    button: "bg-white text-[#15171c]",
  },
};

/** Lets a long email wrap neatly after "+" and before "@" instead of mid-word. */
function breakable(value: string) {
  return value.split(/(?<=\+)|(?=@)/).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <wbr />}
      {part}
    </Fragment>
  ));
}

/** "Try the live demo" box: shared demo login with copy buttons and a link to the app. */
export function DemoLogin({
  demo,
  tone = "light",
}: {
  demo: DemoAccount;
  tone?: keyof typeof tones;
}) {
  const t = tones[tone];
  const rows = [
    { label: "Email", value: demo.email, sr: "demo email" },
    { label: "Password", value: demo.password, sr: "demo password" },
  ];

  return (
    <div className={`flex flex-col gap-3 rounded-xl border p-4 ${t.box}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p className="text-[15px] font-semibold">Try the live demo</p>
        <p
          className={`font-mono text-[11px] tracking-[0.06em] uppercase ${t.label}`}
        >
          Shared {demo.role} account
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            {/* Label above the value on phones, beside it on wider screens. */}
            <p className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-3">
              <span
                className={`block text-[13px] sm:w-[72px] sm:shrink-0 ${t.label}`}
              >
                {row.label}
              </span>
              <span
                className={`block min-w-0 font-mono text-[13px] [overflow-wrap:anywhere] ${t.value}`}
              >
                {breakable(row.value)}
              </span>
            </p>
            <CopyButton
              value={row.value}
              srLabel={row.sr}
              tone={tone}
              size="sm"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <p
          className={`min-w-0 flex-[1_1_240px] text-[13px] text-pretty ${t.muted}`}
        >
          {demo.tip}
        </p>
        <a
          href={demo.loginUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-[10px] px-3.5 text-[13px] font-semibold transition-opacity hover:opacity-90 ${t.button}`}
        >
          Open FlowBoard
          <ArrowUpRight className="size-3.5" aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
