import { TrashCan } from "./trash-can";
import { IconOrnament } from "./icons";
import { Wordmark } from "./wordmark";
import { SideIconPattern } from "./side-icon-pattern";
import { FounderPreview } from "./founder-preview";
import { MissionLink } from "./mission-link";
import { InstagramLink } from "./instagram-link";
import { WebsiteLink } from "./website-link";
import { CRFlag } from "./cr-flag";

const CANS = [
  { color: "var(--color-can-red)", label: "Red", drift: "drift-1" },
  { color: "var(--color-can-yellow)", label: "Yellow", drift: "drift-2" },
  { color: "var(--color-can-blue)", label: "Blue", drift: "drift-3" },
  { color: "var(--color-can-green)", label: "Green", drift: "drift-4" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-between gap-10 overflow-x-hidden px-5 py-6 sm:gap-0 sm:px-6 sm:py-9 sm:h-dvh sm:overflow-hidden">
      <SideIconPattern />

      <header className="relative z-10 flex w-full max-w-5xl items-center justify-between gap-3">
        <Wordmark size="md" asLink />
        <nav className="flex shrink-0 items-center gap-3 sm:gap-4 text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-muted)]">
          <WebsiteLink className="hidden sm:inline-flex" />
          <span aria-hidden className="hidden sm:inline opacity-40">·</span>
          <InstagramLink iconSize={13} hideHandleOnMobile />
        </nav>
      </header>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 sm:gap-7 text-center origin-center sm:scale-90">
        <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-ink-muted)]">
          A small project against everyday waste:
        </p>

        <h1 className="font-[family-name:var(--font-display)] font-bold text-[clamp(2.5rem,9.5vw,7.5rem)] leading-[0.95] sm:leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)] max-w-4xl px-2">
          Tennis balls don&apos;t have to die
          <br className="hidden sm:inline" />
          <span className="italic font-extrabold"> in the landfill.</span>
        </h1>

        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)]">
          Every month, country clubs and academies throw out thousands of
          perfectly bouncy balls. And giving them a second life.
        </p>

        <div
          className="flex items-end justify-center gap-3 sm:gap-9 pt-1"
          aria-label="Four collection bins"
        >
          {CANS.map((c) => (
            <TrashCan
              key={c.label}
              color={c.color}
              label={c.label}
              className={c.drift}
              width={44}
              height={62}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 pt-1">
          <IconOrnament />
          <p className="text-sm tracking-[0.18em] uppercase text-[var(--color-ink-muted)]">
            More to come, soon.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <MissionLink />
          <FounderPreview />
        </div>
      </section>

      <footer className="relative z-10 flex w-full max-w-5xl items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-muted)]">
        <span className="flex items-center gap-2">
          <CRFlag height={13} />
          <span className="ml-1">Hecho en Costa Rica · Pura Vida</span>
        </span>
        <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
