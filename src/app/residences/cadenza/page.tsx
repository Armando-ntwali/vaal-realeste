import { EditorialAmenityCards } from "@/components/sections/EditorialAmenityCards";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { SplitEditorialSection } from "@/components/sections/SplitEditorialSection";
import { VirtualTourPreview } from "@/components/sections/VirtualTourPreview";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cadenzaAmenities } from "@/data/amenities";
import { residences } from "@/data/residences";

const cadenza = residences[0];
const cadenzaReasons = [
  {
    title: "Nakasero address.",
    body: "A diplomatic and civic setting with enduring demand and calm access to the city."
  },
  {
    title: "Lifestyle amenities.",
    body: "Wellness, pool, garden, and social spaces designed as part of the everyday residence experience."
  },
  {
    title: "Investment confidence.",
    body: "A premium address, refined finishes, and private advisory support for long-term buyers."
  },
  {
    title: "Showhouse access.",
    body: "Visit the residence in person and review layouts, finishes, and next steps with a VAAL advisor."
  }
];

export default function CadenzaPage() {
  return (
    <main id="main-content" className="bg-cadenza-cream text-cadenza-charcoal">
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 pb-20 pt-32 text-white xl:px-10">
        <img src={cadenza.heroImage} alt="Cadenza Residence exterior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/28" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.42)_28%,rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.05)_72%,rgba(0,0,0,0.00)_100%)]" />
        <div className="absolute inset-0 bg-cadenza-champagne/10" />
        <div className="content-rail relative z-10">
          <div className="max-w-[780px]" style={{ textShadow: "0 4px 22px rgba(0, 0, 0, 0.22)" }}>
            <img src="/assets/cadenza/logos/cadenza-logo-gold.png" alt="Cadenza Residence" className="mb-9 h-20 w-auto object-contain" />
            <SectionLabel tone="light">Cadenza Residence</SectionLabel>
            <h1 className="max-w-[780px] text-balance font-display text-[clamp(4rem,6vw,6.25rem)] font-semibold leading-[0.9] text-[#F7F3EE]">
              A composed address in the heart of Nakasero.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[rgba(247,243,238,0.88)]">
              Refined residences, warm interiors, and lifestyle amenities in one of Kampala's most prestigious locations.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/inquire">Book a Private Viewing</PremiumButton>
              <PremiumButton href="/#residences" tone="outline">
                Explore Residences
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="content-rail grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <p className="font-display text-5xl font-semibold leading-[1.02]">
            Cadenza brings together refined interiors, everyday comfort, and a secure Nakasero address for buyers who
            want both lifestyle and long-term value.
          </p>
          <div className="grid gap-px bg-cadenza-charcoal/14 sm:grid-cols-2">
            {["Nakasero", "Studios, 1 & 2 Bedrooms", "Showhouse Open Daily", "Private Viewing"].map((item) => (
              <div key={item} className="bg-cadenza-cream p-6 text-[12px] font-semibold uppercase tracking-[0.18em]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <SplitEditorialSection
        theme="cadenza"
        eyebrow="Interiors"
        headline="Quiet luxury, shaped for everyday living."
        body="Soft lighting, warm finishes, open living spaces, and considered details create a residence that feels calm, modern, and ready for daily comfort."
        image="/assets/cadenza/interiors/cadenza-interior-living-room.jpg"
        imageAlt="Cadenza living room"
        primaryHref="/inquire"
        primaryLabel="View Residence Details"
      />
      <SplitEditorialSection
        theme="cadenza"
        reverse
        eyebrow="Architecture"
        headline="A landmark presence in Nakasero."
        body="Cadenza's architectural profile gives the residence a confident presence while maintaining the privacy and refinement expected from a premium city address."
        image="/assets/cadenza/exteriors/cadenza-exterior-main-render.jpg"
        imageAlt="Cadenza exterior render"
        primaryHref="/inquire"
        primaryLabel="Book a Showhouse Visit"
      />
      <section className="section-pad bg-cadenza-cream">
        <div className="content-rail">
          <div className="mb-12 max-w-4xl">
            <SectionLabel tone="gold">Residences</SectionLabel>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Refined layouts for city living and long-term value.
            </h2>
          </div>
          <div className="grid gap-px bg-cadenza-charcoal/14 md:grid-cols-3">
            {cadenza.units.map((unit, index) => (
              <article key={unit.name} className="bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cadenza-stone">
                  0{index + 1}
                </p>
                <h3 className="mt-8 font-display text-4xl font-semibold leading-none">{unit.name}</h3>
                <p className="mt-4 text-base leading-7 text-cadenza-charcoal/66">{unit.description}</p>
                <p className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-cadenza-charcoal tabular-nums">
                  {unit.price}
                </p>
                <div className="mt-8">
                  <PremiumButton href="/inquire" tone="gold">
                    {unit.name === "Studio" ? "Inquire About Availability" : "Book a Visit"}
                  </PremiumButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-cadenza-charcoal text-[#F7F3EE]">
        <div className="content-rail grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionLabel tone="gold">Private Showhouse Viewing</SectionLabel>
            <h2 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Experience Cadenza in person.
            </h2>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#F7F3EE]/72">
              Private viewings are available for buyers who want to explore finishes, layouts, location, and investment
              details with a VAAL property advisor.
            </p>
            <div className="mt-8 grid gap-px bg-white/16 sm:max-w-2xl sm:grid-cols-2">
              <p className="bg-cadenza-charcoal p-5 text-[12px] font-semibold uppercase tracking-[0.18em]">
                Open Daily: 8AM to 5PM
              </p>
              <p className="bg-cadenza-charcoal p-5 text-[12px] font-semibold uppercase tracking-[0.18em]">
                Plot 1 Katonga Road, Nakasero
              </p>
            </div>
          </div>
          <PremiumButton href="/inquire" tone="gold">
            Book a Viewing
          </PremiumButton>
        </div>
      </section>
      <EditorialAmenityCards amenities={cadenzaAmenities} headline="Amenities composed for calm city living." />
      <VirtualTourPreview />
      <section className="section-pad bg-white text-cadenza-charcoal">
        <div className="content-rail">
          <div className="mb-12 max-w-4xl">
            <SectionLabel tone="gold">Why Cadenza</SectionLabel>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              A calm address with practical investment confidence.
            </h2>
          </div>
          <div className="grid gap-px bg-cadenza-charcoal/12 md:grid-cols-2 xl:grid-cols-4">
            {cadenzaReasons.map((item) => (
              <article key={item.title} className="bg-white p-8 transition-colors duration-300 ease-vaal hover:bg-cadenza-cream">
                <h3 className="font-display text-3xl font-semibold leading-none">{item.title}</h3>
                <p className="mt-5 text-pretty text-base leading-7 text-cadenza-charcoal/68">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-cadenza-cream">
        <div className="content-rail grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel tone="gold">Inquiry</SectionLabel>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Request Cadenza details or book a private viewing.
            </h2>
          </div>
          <div className="bg-white p-6 shadow-image md:p-10">
            <InquiryForm context="cadenza" />
          </div>
        </div>
      </section>
      <InquiryCTA />
    </main>
  );
}
