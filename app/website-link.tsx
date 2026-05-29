export const WEBSITE_URL = "https://secondserve.today";
export const WEBSITE_LABEL = "secondserve.today";

export function WebsiteLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={WEBSITE_URL}
      className={`inline-flex items-center transition-colors hover:text-[var(--color-ink)] ${className}`}
    >
      {WEBSITE_LABEL}
    </a>
  );
}
