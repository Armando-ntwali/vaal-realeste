import { residences } from "@/data/residences";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ResidenceCard } from "@/components/sections/ResidenceCard";

export function ResidenceGateway() {
  return (
    <section id="residences" className="section-pad bg-vaal-black text-white">
      <div className="content-rail">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel tone="light">Residences</SectionLabel>
            <h2 className="max-w-3xl text-balance font-display text-6xl font-semibold leading-[0.95] md:text-7xl">
              Two Addresses. One Standard of Excellence.
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-white/66 lg:justify-self-end">
            Discover VAAL's signature residences in Kampala: one composed around refined Nakasero living, the other
            shaped as a bold architectural statement in Kololo.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {residences.map((residence) => (
            <ResidenceCard key={residence.href} residence={residence} />
          ))}
        </div>
      </div>
    </section>
  );
}
