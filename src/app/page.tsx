import { BridgeFeature } from "@/components/sections/BridgeFeature";
import { CadenzaFeature } from "@/components/sections/CadenzaFeature";
import { EditorialAmenityCards } from "@/components/sections/EditorialAmenityCards";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { InvestmentConfidence } from "@/components/sections/InvestmentConfidence";
import { ResidenceGateway } from "@/components/sections/ResidenceGateway";
import { VirtualTourPreview } from "@/components/sections/VirtualTourPreview";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroVideo />
      <section className="section-pad bg-vaal-ivory text-vaal-charcoal">
        <div className="content-rail text-center">
          <div className="mx-auto max-w-5xl">
            <div className="flex justify-center">
              <SectionLabel>Private Digital Sales Suite</SectionLabel>
            </div>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              A private gateway to elevated living and secure real-estate investment.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-vaal-charcoal/70">
              VAAL brings together architecture, lifestyle, location, and investment confidence for buyers who expect
              more than a place to live.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-px bg-vaal-charcoal/14 text-left sm:grid-cols-2 lg:grid-cols-4">
            {["5,000+ Clients", "Delivered Projects", "International Presence", "Prime Kampala Addresses"].map((point) => (
              <div key={point} className="bg-vaal-ivory p-6">
                <p className="font-display text-3xl font-semibold leading-none">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ResidenceGateway />
      <CadenzaFeature />
      <BridgeFeature />
      <EditorialAmenityCards />
      <VirtualTourPreview />
      <InvestmentConfidence />
      <InquiryCTA />
    </main>
  );
}
