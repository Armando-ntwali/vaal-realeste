import { EditorialAmenityCards } from "@/components/sections/EditorialAmenityCards";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { SplitEditorialSection } from "@/components/sections/SplitEditorialSection";
import { VirtualTourPreview } from "@/components/sections/VirtualTourPreview";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { bridgeAmenities } from "@/data/amenities";
import { residences } from "@/data/residences";

const bridge = residences[1];
const bridgePricing = [
  { label: "Studio", price: "from $86,000" },
  { label: "1 Bedroom", price: "from $254,000" },
  { label: "2 Bedroom", price: "from $125,000" }
];

export default function BridgePage() {
  return (
    <main id="main-content" className="bg-bridge-plum text-white">
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 pb-20 pt-32 xl:px-10">
        <img src={bridge.heroImage} alt="The Bridge Kololo" className="absolute inset-0 h-full w-full object-cover" />
        <img
          src="/assets/bridge/pattern/bridge-pattern-background.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-black/24" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,8,20,0.66)_0%,rgba(24,8,20,0.50)_30%,rgba(24,8,20,0.25)_58%,rgba(24,8,20,0.08)_80%,rgba(24,8,20,0.00)_100%)]" />
        <div className="content-rail relative z-10">
          <div className="max-w-[780px]" style={{ textShadow: "0 4px 22px rgba(0, 0, 0, 0.22)" }}>
            <img src="/assets/bridge/logos/bridge-logo-mark-white.svg" alt="The Bridge Kololo" className="mb-9 h-20 w-auto object-contain" />
            <SectionLabel tone="bridge">The Bridge Kololo</SectionLabel>
            <h1 className="max-w-[780px] text-balance font-display text-[clamp(4rem,6vw,6.25rem)] font-semibold leading-[0.9] text-[#F7F3EE]">
              A bold residential landmark in the heart of Kololo.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[rgba(247,243,238,0.88)]">
              A private world of architecture, amenities, and connected city living.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/inquire" tone="bridge">
                Reserve Interest
              </PremiumButton>
              <PremiumButton href="#residence" tone="outline">
                Explore The Residence
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>
      <SplitEditorialSection
        theme="bridge"
        pattern="/assets/bridge/pattern/bridge-pattern-background.png"
        eyebrow="Build Resilient Wealth"
        headline="Escape within the city."
        body="The Bridge Kololo is more than a residence; it is a statement. Two towers, a signature sky bridge, and a curated amenity world create a seamless flow of community, privacy, and elevated city life."
        image="/assets/bridge/exteriors/bridge-lifestyle-exterior.jpg"
        imageAlt="The Bridge lifestyle exterior"
        primaryHref="/inquire"
        primaryLabel="View The Bridge"
      />
      <section id="residence" className="section-pad bg-bridge-dark text-white">
        <div className="content-rail grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel tone="bridge">Residences</SectionLabel>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Find the residence that fits your life.
            </h2>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-white/68">
              Studio, one-bedroom, and two-bedroom residences are framed as clear next steps for buyers comparing city
              lifestyle, privacy, and long-stay value.
            </p>
          </div>
          <img
            src="/assets/bridge/units/bridge-unit-studio-main.jpg"
            alt="The Bridge studio residence"
            className="image-outline aspect-[4/3] w-full object-cover shadow-image"
          />
        </div>
        <div className="content-rail mt-14 grid gap-px bg-white/14 md:grid-cols-3">
          {bridge.units.map((unit, index) => (
            <article key={unit.name} className="bg-bridge-dark p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">0{index + 1}</p>
              <h3 className="mt-8 font-display text-4xl font-semibold leading-none">{unit.name}</h3>
              <p className="mt-4 text-base leading-7 text-white/66">{unit.description}</p>
              <div className="mt-8">
                <PremiumButton href="/inquire" tone="outline">
                  Ask About Availability
                </PremiumButton>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad bg-white text-bridge-dark">
        <div className="content-rail">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <SectionLabel>Availability</SectionLabel>
              <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
                Price signals for early conversations.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-bridge-dark/64 lg:justify-self-end">
              Source-based demo copy for presentation. Exact pricing, availability, and unit mix should be confirmed by
              a VAAL advisor before publication.
            </p>
          </div>
          <div className="grid gap-px bg-bridge-dark/14 md:grid-cols-3">
            {bridgePricing.map((item) => (
              <article key={item.label} className="bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bridge-burgundy">{item.label}</p>
                <p className="mt-5 font-display text-5xl font-semibold leading-none tabular-nums">{item.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EditorialAmenityCards
        amenities={bridgeAmenities}
        headline="Your private universe of amenities."
        body="Every need, every desire, carefully considered for a life that feels private, connected, and complete."
        tone="dark"
      />
      <VirtualTourPreview />
      <section className="section-pad bg-bridge-plum text-white">
        <div className="content-rail grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel tone="bridge">Kololo Location</SectionLabel>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Connected to Kololo. Removed from the ordinary.
            </h2>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-white/70">
              Positioned in one of Kampala's most established addresses, The Bridge gives residents access to the city
              while preserving the privacy of a curated residential world.
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden bg-bridge-wine p-8 shadow-image">
            <img
              src="/assets/bridge/pattern/bridge-pattern-background.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
            />
            <div className="relative grid h-full min-h-[356px] content-between border border-white/14 p-6">
              <p className="max-w-xs text-[12px] font-semibold uppercase tracking-[0.2em] text-white/54">
                Location intelligence placeholder
              </p>
              <div className="grid gap-3 text-sm uppercase tracking-[0.16em] text-white/74">
                <span>Kololo</span>
                <span>City access</span>
                <span>Private residential world</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white text-bridge-dark">
        <div className="content-rail grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Private Inquiry</SectionLabel>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Inquire About The Bridge Kololo
            </h2>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-bridge-dark/66">
              Request availability, floor plans, pricing, or a private viewing with a VAAL advisor.
            </p>
          </div>
          <div className="bg-white p-6 shadow-image md:p-10">
            <InquiryForm context="bridge" />
          </div>
        </div>
      </section>
    </main>
  );
}
