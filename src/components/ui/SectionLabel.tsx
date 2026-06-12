type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "dark" | "light" | "gold" | "bridge";
};

const toneClass = {
  dark: "text-vaal-charcoal before:bg-vaal-yellow",
  light: "text-white before:bg-vaal-yellow",
  gold: "text-current before:bg-cadenza-champagne",
  bridge: "text-white before:bg-bridge-yellow-accent"
};

export function SectionLabel({ children, tone = "dark" }: SectionLabelProps) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] ${toneClass[tone]} before:h-px before:w-9`}
    >
      {children}
    </p>
  );
}
