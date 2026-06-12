type AssetPlaceholderProps = {
  label: string;
  tone?: "light" | "dark";
};

export function AssetPlaceholder({ label, tone = "light" }: AssetPlaceholderProps) {
  return (
    <div
      className={`flex aspect-[4/5] min-h-[320px] items-end p-6 ${
        tone === "dark"
          ? "bg-[linear-gradient(135deg,#2c0b1f,#070707)] text-white"
          : "bg-[linear-gradient(135deg,#efe7d8,#c9b99b)] text-vaal-charcoal"
      }`}
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70">Asset pending</p>
        <p className="mt-2 font-display text-3xl leading-none">{label}</p>
      </div>
    </div>
  );
}
