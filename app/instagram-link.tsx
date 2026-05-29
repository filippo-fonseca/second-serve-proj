export const INSTAGRAM_HANDLE = "secondserve_cr";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

function IGIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramLink({
  className = "",
  iconSize = 13,
  hideHandleOnMobile = false,
}: {
  className?: string;
  iconSize?: number;
  hideHandleOnMobile?: boolean;
}) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Instagram @${INSTAGRAM_HANDLE}`}
      className={`group inline-flex items-center gap-1.5 p-1 -m-1 transition-colors hover:text-[var(--color-ink)] ${className}`}
    >
      <IGIcon size={iconSize} />
      <span className={hideHandleOnMobile ? "hidden sm:inline" : ""}>
        @{INSTAGRAM_HANDLE}
      </span>
    </a>
  );
}

export function InstagramText({ className = "" }: { className?: string }) {
  return (
    <span className={className}>@{INSTAGRAM_HANDLE}</span>
  );
}
