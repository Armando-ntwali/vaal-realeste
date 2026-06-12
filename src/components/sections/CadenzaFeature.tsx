import { SplitEditorialSection } from "@/components/sections/SplitEditorialSection";

export function CadenzaFeature() {
  return (
    <SplitEditorialSection
      theme="cadenza"
      eyebrow="Cadenza Residence | Nakasero"
      headline="A composed residence in Kampala's diplomatic heart."
      body="Cadenza Residence brings together elegant interiors, considered amenities, and a secure Nakasero location surrounded by some of Kampala's most important civic and diplomatic addresses."
      image="/assets/cadenza/interiors/cadenza-interior-living-room.jpg"
      imageAlt="Cadenza Residence living room"
      primaryHref="/residences/cadenza"
      primaryLabel="View Cadenza"
      secondaryHref="/virtual-tour"
      secondaryLabel="Take the Virtual Tour"
    />
  );
}
