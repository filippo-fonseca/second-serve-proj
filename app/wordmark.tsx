import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  className?: string;
  periodColor?: string;
};

const SIZES: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-[1rem] sm:text-[1.25rem] md:text-[1.5rem]",
  md: "text-[1.1rem] sm:text-[1.5rem] md:text-[2rem]",
  lg: "text-[1.5rem] sm:text-[2.25rem] md:text-[3rem]",
};

export function Wordmark({
  size = "md",
  asLink = false,
  className = "",
  periodColor = "var(--color-can-yellow)",
}: Props) {
  const content = (
    <span
      className={`font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] leading-none ${SIZES[size]} ${className}`}
    >
      The Second Serve Project
      <span style={{ color: periodColor }}>.</span>
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-block transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }
  return content;
}
