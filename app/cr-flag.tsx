type Props = {
  height?: number;
  className?: string;
};

export function CRFlag({ height = 13, className = "" }: Props) {
  const unit = height / 6;
  const width = height * (5 / 3);
  return (
    <span
      role="img"
      aria-label="Bandera de Costa Rica"
      className={`inline-flex flex-col overflow-hidden rounded-[1px] ring-1 ring-black/10 ${className}`}
      style={{ height, width }}
    >
      <span style={{ height: unit, background: "#0033a0" }} />
      <span style={{ height: unit, background: "#ffffff" }} />
      <span style={{ height: unit * 2, background: "#ce1126" }} />
      <span style={{ height: unit, background: "#ffffff" }} />
      <span style={{ height: unit, background: "#0033a0" }} />
    </span>
  );
}
