import { InquiryForm } from "@/components/sections/InquiryForm";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function InquirePage() {
  return (
    <main id="main-content" className="bg-vaal-ivory pt-[76px] text-vaal-charcoal">
      <section className="section-pad">
        <div className="content-rail grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionLabel>Private Inquiry</SectionLabel>
            <h1 className="text-balance font-display text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.9]">
              Speak with a VAAL property advisor.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-vaal-charcoal/70">
              Request residence details, availability, floor plans, pricing, or a private viewing. A VAAL advisor will
              follow up with the information you need.
            </p>
          </div>
          <div className="bg-white p-6 shadow-image md:p-10">
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
