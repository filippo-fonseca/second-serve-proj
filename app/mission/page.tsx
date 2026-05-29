import { Wordmark } from "../wordmark";
import { SideIconPattern } from "../side-icon-pattern";
import { InstagramLink } from "../instagram-link";
import { WebsiteLink } from "../website-link";
import { CRFlag } from "../cr-flag";

type Section = {
  num: string;
  title: string;
  lead: string;
  body: string[];
};

const SECTIONS: Section[] = [
  {
    num: "01",
    title: "Why this exists",
    lead: "Tennis balls die slowly, and almost entirely out of sight.",
    body: [
      "Roughly 325 million tennis balls are produced every year. Most live a few hours of play and then sit in a landfill for 400+ years. They're rubber, nylon, and felt: recyclable in theory, ignored in practice.",
      "Country clubs, academies, schools, casual courts. The waste is everywhere, and it's polite. Nobody is mad about it. That's exactly why nothing changes.",
    ],
  },
  {
    num: "02",
    title: "We're not naïve",
    lead: "Tennis balls are not the climate crisis.",
    body: [
      "Diverting them will not move a glacier. We know.",
      "But small, well-designed things stack. Each colorful bin is a quiet argument that waste isn't inevitable, and that someone, somewhere, can just decide to do something about it. That's the entire posture. Colorful, stubborn, specific.",
    ],
  },
  {
    num: "03",
    title: "The engineering mindset",
    lead: "See a problem. Sketch a fix. Ship the ugly version.",
    body: [
      "Behind every bin is the same instinct civil engineers train into themselves: notice a problem in the real world, sketch a solution, prototype it badly, refine it, put it out where people can use it. Then look around for the next thing.",
      "That's the secondary mission of this project, honestly. Earthquake-proof homes, bikeable streets, recyclable courts, colorful trash cans — they all come from the same habit. The goal isn't to fix everything. It's to fix the next thing in front of you and keep that habit running.",
    ],
  },
  {
    num: "04",
    title: "What comes next",
    lead: "The bins are the beginning.",
    body: [
      "Pickup partnerships with the first clubs and academies in San José. Sorting by life-stage: still-playable, practice-only, end-of-life. Pilot reuse with dog parks, school PE programs, and a small experiment with shredded-felt court resurfacing.",
      "We're prototyping in public. Come along.",
    ],
  },
];

export default function MissionPage() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center overflow-x-hidden px-5 py-6 sm:px-6 sm:py-9">
      <SideIconPattern />

      <header className="relative z-10 flex w-full max-w-5xl items-center justify-between gap-3">
        <Wordmark size="md" asLink />
        <nav className="flex shrink-0 items-center gap-3 sm:gap-4 text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-muted)]">
          <WebsiteLink className="hidden sm:inline-flex" />
          <span aria-hidden className="hidden sm:inline opacity-40">·</span>
          <InstagramLink iconSize={13} hideHandleOnMobile />
        </nav>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-2xl py-10 sm:py-24 origin-top sm:scale-90">
        <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-ink-muted)]">
          Mission
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-display)] font-bold text-[clamp(3rem,8.5vw,6.5rem)] leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)]">
          Small things,
          <br />
          <span className="italic font-extrabold">stacked carefully</span>
          <span style={{ color: "var(--color-can-yellow)" }}>.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-[var(--color-ink-soft)]">
          The Second Serve Project is a small, deliberate intervention against
          everyday waste. It is also, quietly, a love letter to the engineering
          habit of just doing the next useful thing.
        </p>

        <div className="mt-20 flex flex-col gap-16">
          {SECTIONS.map((s) => (
            <article key={s.num} className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-display)] text-3xl italic text-[var(--color-ink-muted)]">
                  {s.num}
                </span>
                <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[var(--color-ink-muted)]">
                  {s.title}
                </span>
              </div>

              <div className="flex flex-col gap-5">
                <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.2vw,2.25rem)] italic leading-[1.15] tracking-[-0.015em] text-[var(--color-ink)]">
                  {s.lead}
                </p>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-base sm:text-[1.05rem] leading-relaxed text-[var(--color-ink-soft)]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--color-ink-muted)]/20 pt-10">
          <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl italic text-[var(--color-ink)]">
            Tennis balls won&apos;t save the world.
            <br />
            <span className="not-italic font-bold">
              But the habit of trying might
              <span style={{ color: "var(--color-can-yellow)" }}>.</span>
            </span>
          </p>
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

export const metadata = {
  title: "Mission",
  description:
    "Why we're putting colorful bins out for used tennis balls, and the engineering mindset behind it.",
};
