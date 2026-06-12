import { MessageCircle } from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contact } from "@/data/navigation";

export function InquiryCTA() {
  return (
    <section className="section-pad bg-vaal-charcoal text-white">
      <div className="content-rail grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionLabel tone="light">Private Viewing</SectionLabel>
          <h2 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
            Speak with a VAAL property advisor.
          </h2>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/70">
            Request residence details, availability, floor plans, pricing, or a private viewing. A VAAL advisor will
            follow up with the information you need.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <PremiumButton href="/inquire">Submit Inquiry</PremiumButton>
          <a
            href={contact.whatsapp}
            className="pressable inline-flex min-h-11 items-center justify-center gap-3 border border-white/30 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:border-white hover:bg-white hover:text-vaal-black"
          >
            <MessageCircle size={16} strokeWidth={1.7} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
