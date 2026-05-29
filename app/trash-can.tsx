type Props = {
  color: string;
  label: string;
  className?: string;
  width?: number;
  height?: number;
  lidOpen?: boolean;
};

export function TrashCan({
  color,
  label,
  className = "",
  width = 56,
  height = 78,
  lidOpen = false,
}: Props) {
  const lidStyle = lidOpen
    ? {
        transform: "translate(-2px, -14px) rotate(-14deg)",
        transformBox: "fill-box" as const,
        transformOrigin: "50% 50%",
      }
    : undefined;
  const ballStyle = lidOpen
    ? {
        transform: "translateY(-6px) scale(1.25)",
        transformBox: "fill-box" as const,
        transformOrigin: "50% 50%",
      }
    : undefined;

  return (
    <div className={`trash-can flex flex-col items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 88"
        width={width}
        height={height}
        className="drop-shadow-[0_8px_14px_rgba(0,0,0,0.08)] overflow-visible"
        role="img"
        aria-label={`${label} collection bin`}
      >
        <g className="trash-body">
          <path
            d="M8 21 H56 L52 82 Q52 86 48 86 H16 Q12 86 12 82 Z"
            fill={color}
          />
          <path
            d="M8 21 H56 L52 82 Q52 86 48 86 H16 Q12 86 12 82 Z"
            fill="black"
            opacity="0.08"
            style={{ mixBlendMode: "multiply" }}
          />
          <line x1="22" y1="32" x2="22" y2="78" stroke="black" strokeOpacity="0.18" strokeWidth="1.2" />
          <line x1="32" y1="32" x2="32" y2="80" stroke="black" strokeOpacity="0.18" strokeWidth="1.2" />
          <line x1="42" y1="32" x2="42" y2="78" stroke="black" strokeOpacity="0.18" strokeWidth="1.2" />
        </g>

        <g className="trash-ball" style={ballStyle}>
          <circle cx="32" cy="20" r="6" fill="#e8e64a" />
          <path
            d="M27 18 Q32 22 37 18"
            stroke="#ffffff"
            strokeWidth="0.9"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M27 22 Q32 18 37 22"
            stroke="#ffffff"
            strokeWidth="0.9"
            fill="none"
            opacity="0.9"
          />
        </g>

        <g className="trash-lid" style={lidStyle}>
          <rect
            x="4"
            y="10"
            width="56"
            height="9"
            rx="3"
            fill={color}
            style={{ filter: "brightness(0.85)" }}
          />
          <rect
            x="26"
            y="4"
            width="12"
            height="6"
            rx="2"
            fill={color}
            style={{ filter: "brightness(0.7)" }}
          />
        </g>
      </svg>
    </div>
  );
}
