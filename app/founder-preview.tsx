import Image from "next/image";
import Link from "next/link";

export function FounderPreview() {
  return (
    <Link
      href="/founder"
      className="group inline-flex items-center gap-3.5 rounded-full border border-[var(--color-ink-muted)]/20 bg-[var(--color-cream)]/70 py-2 pr-4 pl-2 backdrop-blur-sm transition-all hover:border-[var(--color-ink)]/40 hover:bg-[var(--color-cream)]"
    >
      <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-[var(--color-ink-muted)]/25">
        <Image
          src="/gianluca.jpg"
          alt=""
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </span>

      <span className="flex flex-col items-start text-left leading-tight">
        <span className="text-[9px] font-medium tracking-[0.24em] uppercase text-[var(--color-ink-muted)]">
          By the founder
        </span>
        <span className="text-[13px] font-medium text-[var(--color-ink)]">
          Gianluca Fonseca
          <span className="ml-1 font-normal text-[var(--color-ink-muted)]">
            · 17, Civil Engineer
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
