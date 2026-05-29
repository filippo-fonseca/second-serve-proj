type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function TennisBallIcon({
  size = 22,
  className = "",
  strokeWidth = 1.4,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.2 C 8 7.5, 16 7.5, 20.5 9.2" />
      <path d="M3.5 14.8 C 8 16.5, 16 16.5, 20.5 14.8" />
    </svg>
  );
}

export function RacketIcon({
  size = 22,
  className = "",
  strokeWidth = 1.4,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <ellipse cx="12" cy="9" rx="6" ry="6.8" />
      <line x1="9.2" y1="3" x2="9.2" y2="15" />
      <line x1="12" y1="2.2" x2="12" y2="15.8" />
      <line x1="14.8" y1="3" x2="14.8" y2="15" />
      <line x1="6.6" y1="6.2" x2="17.4" y2="6.2" />
      <line x1="6.1" y1="9" x2="17.9" y2="9" />
      <line x1="6.6" y1="11.8" x2="17.4" y2="11.8" />
      <line
        x1="12"
        y1="15.8"
        x2="12"
        y2="22"
        strokeWidth={strokeWidth + 0.8}
      />
    </svg>
  );
}

export function CourtIcon({
  size = 22,
  className = "",
  strokeWidth = 1.4,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 28 24"
      width={size * 1.16}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="5" width="22" height="14" rx="0.5" />
      <line x1="3" y1="7.5" x2="25" y2="7.5" />
      <line x1="3" y1="16.5" x2="25" y2="16.5" />
      <line x1="8" y1="7.5" x2="8" y2="16.5" />
      <line x1="20" y1="7.5" x2="20" y2="16.5" />
      <line x1="8" y1="12" x2="20" y2="12" />
      <line
        x1="14"
        y1="4"
        x2="14"
        y2="20"
        strokeDasharray="1.5 1.5"
        opacity="0.7"
      />
    </svg>
  );
}

export function IconOrnament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-4 text-[var(--color-ink-muted)] ${className}`}
      aria-hidden
    >
      <span className="h-px w-10 bg-current opacity-40" />
      <TennisBallIcon />
      <RacketIcon />
      <CourtIcon />
      <span className="h-px w-10 bg-current opacity-40" />
    </div>
  );
}
