import Link from "next/link";
import { TennisBallIcon } from "./icons";

export function MissionLink() {
  return (
    <Link
      href="/mission"
      className="group inline-flex items-center gap-3.5 rounded-full border border-[var(--color-ink-muted)]/20 bg-[var(--color-cream)]/70 py-2 pr-4 pl-2 backdrop-blur-sm transition-all hover:border-[var(--color-ink)]/40 hover:bg-[var(--color-cream)]"
    >
      <span
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream-deep)] text-[var(--color-ink)] ring-1 ring-[var(--color-ink-muted)]/25"
        aria-hidden
      >
        <TennisBallIcon size={20} strokeWidth={1.6} />
      </span>

      <span className="flex flex-col items-start text-left leading-tight">
        <span className="text-[9px] font-medium tracking-[0.24em] uppercase text-[var(--color-ink-muted)]">
          The project
        </span>
        <span className="text-[13px] font-medium text-[var(--color-ink)]">
          Mission
          <span className="ml-1 font-normal text-[var(--color-ink-muted)]">
            · why it matters
          </span>
        </span>
      </span>

      <span
        aria-hidden
        className="text-[var(--color-ink-muted)] transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
