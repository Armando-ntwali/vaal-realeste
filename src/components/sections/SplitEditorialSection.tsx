import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

type SplitEditorialSectionProps = {
  eyebrow: string;
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  theme?: "cadenza" | "bridge" | "dark";
  reverse?: boolean;
  pattern?: string;
};

export function SplitEditorialSection({
  eyebrow,
  headline,
  body,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  theme = "dark",
  reverse = false,
  pattern
}: SplitEditorialSectionProps) {
  const isCadenza = theme === "cadenza";
  const isBridge = theme === "bridge";

  return (
    <section
      className={`section-pad relative overflow-hidden ${
        isCadenza ? "bg-cadenza-cream text-cadenza-charcoal" : isBridge ? "bg-bridge-plum text-white" : "bg-vaal-near text-white"
      }`}
    >
      {pattern ? (
        <img src={pattern} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-[0.13]" />
      ) : null}
      <div
        className={`content-rail relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={reverse ? "lg:col-start-2" : ""}>
          <div className="overflow-hidden shadow-image">
            <img src={image} alt={imageAlt} className="image-outline aspect-[4/3] h-full w-full object-cover" />
          </div>
        </div>
        <div className={reverse ? "lg:col-start-1" : ""}>
          <SectionLabel tone={isCadenza ? "gold" : isBridge ? "bridge" : "light"}>{eyebrow}</SectionLabel>
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">{headline}</h2>
          <div
            className={`my-8 h-px w-24 ${isCadenza ? "bg-cadenza-champagne" : isBridge ? "bg-bridge-yellow-accent" : "bg-white/25"}`}
          />
          <p className={`max-w-xl text-pretty text-lg leading-8 ${isCadenza ? "text-cadenza-charcoal/72" : "text-white/72"}`}>
            {body}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href={primaryHref} tone={isCadenza ? "gold" : isBridge ? "light" : "light"}>
              {primaryLabel}
            </PremiumButton>
            {secondaryHref && secondaryLabel ? (
              <PremiumButton href={secondaryHref} tone={isCadenza ? "dark" : "outline"}>
                {secondaryLabel}
              </PremiumButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
