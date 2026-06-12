import { Building2, Handshake, Landmark, MapPinned, ShieldCheck, UserRoundCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const confidenceItems = [
  { title: "Prime Locations.", body: "Nakasero and Kololo addresses selected for lifestyle access and long-term demand.", icon: MapPinned },
  { title: "Transparent Process.", body: "Clear inquiry, viewing, unit discussion, and advisor follow-up from first contact.", icon: ShieldCheck },
  { title: "Property Advisory.", body: "A private sales conversation for pricing, layouts, floor plans, and next steps.", icon: UserRoundCheck },
  { title: "Investment Partnership.", body: "Guidance for buyers weighing lifestyle value, rental demand, and portfolio fit.", icon: Handshake },
  { title: "Lifestyle-Led Value.", body: "Amenities, architecture, and location work together beyond square footage alone.", icon: Building2 },
  { title: "Private Viewing Support.", body: "A viewing flow built for serious clients, not generic lead capture.", icon: Landmark }
];

export function InvestmentConfidence() {
  return (
    <section id="investment" className="section-pad bg-white text-vaal-charcoal">
      <div className="content-rail">
        <div className="mb-12 max-w-4xl">
          <SectionLabel>Investment</SectionLabel>
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
            Confidence for buyers who expect the details to hold.
          </h2>
        </div>
        <div className="grid gap-px bg-vaal-charcoal/12 md:grid-cols-2 xl:grid-cols-3">
          {confidenceItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="bg-white p-8 transition-colors duration-300 ease-vaal hover:bg-vaal-ivory">
                <Icon size={24} strokeWidth={1.45} className="text-vaal-charcoal" aria-hidden="true" />
                <h3 className="mt-9 font-display text-3xl font-semibold leading-none">{item.title}</h3>
                <p className="mt-4 text-pretty text-base leading-7 text-vaal-charcoal/68">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
