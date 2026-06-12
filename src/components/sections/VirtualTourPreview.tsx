import { Compass, Maximize2 } from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function VirtualTourPreview() {
  return (
    <section id="virtual-tour" className="section-pad bg-vaal-near text-white">
      <div className="content-rail grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <SectionLabel tone="light">Digital Sales Suite</SectionLabel>
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
            Step inside before you visit.
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-white/70">
            Explore selected residences through an immersive walkthrough preview. In production, this section can connect
            to Matterport, Pannellum, or captured 360 property assets.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href="/virtual-tour">Launch Demo Tour</PremiumButton>
            <PremiumButton href="/inquire" tone="outline">
              Book a Physical Viewing
            </PremiumButton>
          </div>
          <p className="mt-6 max-w-md text-xs uppercase tracking-[0.16em] text-white/38">
            Interactive walkthrough shown for presentation purposes. Final tours can be replaced with captured VAAL
            property panoramas.
          </p>
        </div>

        <div className="relative min-h-[480px] overflow-hidden bg-bridge-wine shadow-image">
          <img
            src="/assets/cadenza/interiors/cadenza-interior-living-room.jpg"
            alt="Virtual tour preview"
            className="absolute inset-0 h-full w-full object-cover opacity-72"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.10),rgba(3,3,3,0.72))]" />
          <div className="absolute left-6 top-6 flex gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/25 text-white">
              <Compass size={18} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/25 text-white">
              <Maximize2 size={17} strokeWidth={1.6} aria-hidden="true" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/56">Static preview</p>
            <p className="mt-3 max-w-lg font-display text-4xl font-semibold leading-none">
              Cadenza interiors and Bridge amenities can be connected into a guided tour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
