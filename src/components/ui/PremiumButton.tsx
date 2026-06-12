import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PremiumButtonProps = {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark" | "gold" | "bridge" | "outline";
  icon?: boolean;
};

const toneClass = {
  light: "border-white/80 bg-white text-vaal-black hover:bg-vaal-yellow hover:border-vaal-yellow",
  dark: "border-vaal-black bg-vaal-black text-white hover:bg-vaal-charcoal",
  gold: "border-cadenza-champagne bg-cadenza-champagne text-cadenza-charcoal hover:bg-cadenza-bronze",
  bridge: "border-bridge-burgundy bg-bridge-burgundy text-white hover:border-bridge-wine hover:bg-bridge-wine",
  outline: "border-current bg-transparent text-current hover:bg-white hover:text-vaal-black"
};

export function PremiumButton({ href, children, tone = "light", icon = true }: PremiumButtonProps) {
  return (
    <Link
      href={href}
      className={`pressable inline-flex min-h-11 items-center gap-3 rounded-none border px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] ${toneClass[tone]}`}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} /> : null}
    </Link>
  );
}
