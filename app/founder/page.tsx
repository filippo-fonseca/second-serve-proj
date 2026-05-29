import Image from "next/image";
import { TennisBallIcon, RacketIcon, CourtIcon } from "../icons";
import { Wordmark } from "../wordmark";
import { SideIconPattern } from "../side-icon-pattern";
import { InstagramLink } from "../instagram-link";
import { WebsiteLink } from "../website-link";
import { CRFlag } from "../cr-flag";

export const metadata = {
  title: "Gianluca Fonseca · Founder",
  description:
    "Founder & civil engineer. 17, Costa Rica. From earthquake-proof housing to bike infrastructure to colorful trash cans for tennis balls.",
};

export default function FounderPage() {
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

      <section className="relative z-10 flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 md:flex-row md:gap-16 py-10 origin-center sm:scale-90">
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-full bg-[var(--color-cream-deep)]"
          />
          <div className="relative aspect-square w-[220px] sm:w-[300px] md:w-[340px] overflow-hidden rounded-full shadow-[0_18px_40px_-12px_rgba(0,0,0,0.18)]">
            <Image
              src="/gianluca.jpg"
              alt="Portrait of Gianluca Fonseca"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-ink-muted)]">
            Founder & Civil Engineer
          </p>

          <h1 className="mt-4 font-[family-name:var(--font-display)] font-bold text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.035em] text-[var(--color-ink)]">
            Gianluca
            <br />
            <span className="italic font-extrabold">Fonseca</span>
            <span style={{ color: "var(--color-can-yellow)" }}>.</span>
          </h1>

          <p className="mt-7 text-lg sm:text-[1.2rem] leading-relaxed text-[var(--color-ink-soft)]">
            At 17 years old and in 11th grade, Gianluca is an eco-focused Costa
            Rican civil engineer reshaping how we think about sustainable
            cities through rigorous technical work and lifestyle advocacy.
          </p>

          <p className="mt-5 text-lg sm:text-[1.2rem] leading-relaxed text-[var(--color-ink-soft)]">
            From earthquake-proof housing solutions to bike infrastructure
            advocacy, his work proves that cities don&apos;t have to choose
            between efficiency and sustainability.
          </p>

          <div className="mt-9 flex items-center gap-5 text-[var(--color-ink-muted)]">
            <TennisBallIcon size={20} />
            <RacketIcon size={20} />
            <CourtIcon size={20} />
            <span className="h-px w-12 bg-current opacity-40" />
            <span className="text-[11px] tracking-[0.18em] uppercase">
              The Second Serve, his latest
            </span>
          </div>
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
