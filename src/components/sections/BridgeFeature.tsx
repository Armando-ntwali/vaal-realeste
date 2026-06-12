import { SplitEditorialSection } from "@/components/sections/SplitEditorialSection";

export function BridgeFeature() {
  return (
    <SplitEditorialSection
      theme="bridge"
      reverse
      pattern="/assets/bridge/pattern/bridge-pattern-background.png"
      eyebrow="The Bridge | Kololo"
      headline="A bold residential landmark for modern Kololo living."
      body="The Bridge is designed for residents who want more than an apartment. It is a connected lifestyle address where architecture, amenities, privacy, and city access come together."
      image="/assets/bridge/hero/bridge-hero-building-render.jpg"
      imageAlt="The Bridge Kololo building render"
      primaryHref="/residences/the-bridge"
      primaryLabel="Explore The Bridge"
      secondaryHref="/inquire"
      secondaryLabel="Reserve Interest"
    />
  );
}
