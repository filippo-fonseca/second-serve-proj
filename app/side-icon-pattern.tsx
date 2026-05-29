import { TennisBallIcon, RacketIcon, CourtIcon } from "./icons";

type Spot = {
  side: "left" | "right";
  top: string;
  offset: string;
  rotate: number;
  size: number;
  icon: "ball" | "racket" | "court";
};

const SPOTS: Spot[] = [
  // LEFT column
  { side: "left",  top: "6%",  offset: "3%",  rotate: -14, size: 30, icon: "ball"   },
  { side: "left",  top: "20%", offset: "7%",  rotate: 16,  size: 26, icon: "racket" },
  { side: "left",  top: "36%", offset: "2%",  rotate: -6,  size: 34, icon: "court"  },
  { side: "left",  top: "52%", offset: "8%",  rotate: 22,  size: 22, icon: "ball"   },
  { side: "left",  top: "68%", offset: "3%",  rotate: -10, size: 30, icon: "racket" },
  { side: "left",  top: "84%", offset: "6%",  rotate: 8,   size: 26, icon: "court"  },
  // RIGHT column
  { side: "right", top: "9%",  offset: "5%",  rotate: 12,  size: 28, icon: "court"  },
  { side: "right", top: "24%", offset: "2%",  rotate: -22, size: 24, icon: "ball"   },
  { side: "right", top: "40%", offset: "7%",  rotate: 6,   size: 32, icon: "racket" },
  { side: "right", top: "56%", offset: "3%",  rotate: -16, size: 28, icon: "ball"   },
  { side: "right", top: "72%", offset: "6%",  rotate: 10,  size: 30, icon: "racket" },
  { side: "right", top: "88%", offset: "4%",  rotate: -8,  size: 24, icon: "court"  },
];

function pickIcon(kind: Spot["icon"], size: number) {
  const stroke = 1.9;
  if (kind === "ball")   return <TennisBallIcon size={size} strokeWidth={stroke} />;
  if (kind === "racket") return <RacketIcon size={size} strokeWidth={stroke} />;
  return <CourtIcon size={size} strokeWidth={stroke} />;
}

export function SideIconPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 hidden text-[var(--color-ink)] md:block"
    >
      {SPOTS.map((s, i) => {
        const sideStyle =
          s.side === "left"
            ? { left: s.offset, top: s.top }
            : { right: s.offset, top: s.top };
        return (
          <span
            key={i}
            className="absolute opacity-[0.11]"
            style={{
              ...sideStyle,
              transform: `rotate(${s.rotate}deg)`,
            }}
          >
            {pickIcon(s.icon, s.size)}
          </span>
        );
      })}
    </div>
  );
}
