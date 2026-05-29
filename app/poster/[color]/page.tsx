import { notFound } from "next/navigation";
import { TrashCan } from "../../trash-can";
import { TennisBallIcon } from "../../icons";
import { Wordmark } from "../../wordmark";
import { INSTAGRAM_HANDLE } from "../../instagram-link";
import { WEBSITE_LABEL } from "../../website-link";
import { CRFlag } from "../../cr-flag";

const COLORS = {
  red:    { name: "Red",    nombre: "rojo",     hex: "#d94d3a", code: "R", textOnBand: "cream" },
  yellow: { name: "Yellow", nombre: "amarillo", hex: "#e8c61b", code: "Y", textOnBand: "ink"   },
  blue:   { name: "Blue",   nombre: "azul",     hex: "#2f6f9f", code: "B", textOnBand: "cream" },
  green:  { name: "Green",  nombre: "verde",    hex: "#5a8f3f", code: "G", textOnBand: "cream" },
} as const;

type ColorKey = keyof typeof COLORS;

export function generateStaticParams() {
  return (Object.keys(COLORS) as ColorKey[]).map((color) => ({ color }));
}

export default async function Poster({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const { color } = await params;
  const cfg = COLORS[color as ColorKey];
  if (!cfg) notFound();

  const onBand =
    cfg.textOnBand === "ink" ? "var(--color-ink)" : "#fbf7ec";

  return (
    <main lang="es" className="flex min-h-dvh w-full items-center justify-center bg-[var(--color-cream-deep)] p-4 sm:p-8 print:bg-white print:p-0">
      <article
        className="poster relative flex aspect-[11/8.5] w-full max-w-[1200px] flex-col overflow-hidden bg-[#fbf7ec] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.22)] print:shadow-none"
      >
        {/* TOP BAND */}
        <div
          className="flex h-[15%] items-center justify-between px-10"
          style={{ background: cfg.hex, color: onBand }}
        >
          <Wordmark size="lg" periodColor="currentColor" />
          <span className="flex items-center gap-3 text-[15px] sm:text-[17px] font-semibold tracking-[0.2em] uppercase">
            <TennisBallIcon size={22} strokeWidth={1.8} />
            <span>Nº /{cfg.code} · 001</span>
          </span>
        </div>

        {/* DOTTED RULE */}
        <div
          aria-hidden
          className="h-[2px] w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(26,26,26,0.35) 0.7px, transparent 0.9px)",
            backgroundSize: "6px 2px",
          }}
        />

        {/* BODY */}
        <div className="relative flex flex-1 items-center gap-8 px-12 pt-16 pb-10">
          {/* Decorative tennis ball icons in corners */}
          <span
            aria-hidden
            className="absolute left-12 bottom-10 text-[var(--color-ink-muted)]/40"
          >
            <TennisBallIcon size={28} />
          </span>

          {/* LEFT */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-[16px] sm:text-[18px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink)]">
              Un proyecto contra el desperdicio cotidiano:
            </p>

            <h1 className="font-[family-name:var(--font-display)] font-bold text-[clamp(2.75rem,6.6vw,5.75rem)] leading-[0.9] tracking-[-0.035em] text-[var(--color-ink)]">
              Pelotas
              <br />
              de tenis{" "}
              <span
                className="inline-block px-1"
                style={{
                  backgroundImage: `linear-gradient(transparent 18%, ${cfg.hex} 18%, ${cfg.hex} 88%, transparent 88%)`,
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                usadas
              </span>
              <br />
              <span className="italic font-extrabold">
                van aquí<span style={{ color: cfg.hex }}>.</span>
              </span>
            </h1>

            <div className="mt-2 max-w-lg text-[20px] sm:text-[23px] leading-snug">
              <p className="text-[var(--color-ink-soft)]">
                Las salvamos del basurero. Las reciclamos. Las
                convertimos en arte.
              </p>
            </div>
          </div>

          {/* RIGHT - giant open bin */}
          <div className="relative flex shrink-0 flex-col items-center pr-4">
            <TrashCan
              color={cfg.hex}
              label={cfg.name}
              width={190}
              height={265}
              lidOpen
            />
            <p
              className="mt-4 font-[family-name:var(--font-display)] text-[1.65rem] font-bold italic"
              style={{ color: cfg.hex }}
            >
              El {cfg.nombre}.
            </p>
          </div>
        </div>

        {/* DOTTED RULE */}
        <div
          aria-hidden
          className="h-[2px] w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(26,26,26,0.35) 0.7px, transparent 0.9px)",
            backgroundSize: "6px 2px",
          }}
        />

        {/* BOTTOM BAND */}
        <div
          className="flex h-[12%] items-center justify-between px-10"
          style={{ background: cfg.hex, color: onBand }}
        >
          <span className="flex items-center gap-3 text-[15px] sm:text-[17px] font-semibold tracking-[0.18em] uppercase">
            <CRFlag height={20} />
            <span>Hecho en Costa Rica · Pura Vida</span>
          </span>
          <span className="text-[15px] sm:text-[17px] font-semibold tracking-[0.18em] uppercase">
            www.{WEBSITE_LABEL} · @{INSTAGRAM_HANDLE}
          </span>
        </div>
      </article>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const { color } = await params;
  const cfg = COLORS[color as ColorKey];
  return {
    title: cfg ? `Afiche · ${cfg.nombre}` : "Afiche",
    robots: { index: false, follow: false },
  };
}
