"use client";

import { useEffect, useRef, useState } from "react";
import { inquiryOptions } from "@/data/inquiryOptions";
import { contact } from "@/data/navigation";

export function InquiryForm({ context = "general" }: { context?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [metadata, setMetadata] = useState({
    source_page: "",
    landing_page: "vaal-premium-sales-suite",
    campaign_source: "",
    created_at: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMetadata({
      source_page: window.location.pathname,
      landing_page: document.referrer || window.location.href,
      campaign_source: params.get("utm_source") || params.get("campaign_source") || "",
      created_at: new Date().toISOString()
    });
  }, []);

  const sendInquiryToWhatsapp = () => {
    setStatus("idle");

    if (!formRef.current?.reportValidity()) {
      return;
    }

    try {
      const formData = new FormData(formRef.current);
      const details = [
        `Name: ${formData.get("name") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        `Phone: ${formData.get("phone") || ""}`,
        `Residence: ${formData.get("residence_of_interest") || context}`,
        `Apartment size: ${formData.get("preferred_apartment_size") || ""}`,
        `Source: ${formData.get("how_did_you_hear_about_us") || ""}`,
        `Message: ${formData.get("message") || ""}`,
        `Page: ${metadata.source_page}`
      ].filter((line) => !line.endsWith(": "));

      const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(`VAAL inquiry\n${details.join("\n")}`)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      formRef.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      name="vaal-inquiry"
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        sendInquiryToWhatsapp();
      }}
    >
      <input type="hidden" name="source_page" value={metadata.source_page} />
      <input type="hidden" name="residence_interest" value={context} />
      <input type="hidden" name="landing_page" value={metadata.landing_page} />
      <input type="hidden" name="campaign_source" value={metadata.campaign_source} />
      <input type="hidden" name="created_at" value={metadata.created_at} />
      <input type="hidden" name="utm_medium" />
      <input type="hidden" name="utm_campaign" />
      <input type="hidden" name="utm_content" />
      <input type="hidden" name="residence_context" value={context} />
      {/* TODO: Add Neon-backed lead storage: create leads table, store source metadata, add server route/server action, connect to CRM later. */}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" spellCheck={false} required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Select label="Residence of Interest" name="residence_of_interest" options={inquiryOptions.residences} />
        <Select label="Preferred Apartment Size" name="preferred_apartment_size" options={inquiryOptions.sizes} />
        <Select label="How Did You Hear About Us?" name="how_did_you_hear_about_us" options={inquiryOptions.sources} />
      </div>
      <label className="grid gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-current/56">Message</span>
        <textarea
          name="message"
          rows={5}
          className="resize-none border border-current/16 bg-white/8 px-4 py-3 text-base outline-none transition-colors duration-200 ease-vaal placeholder:text-current/34 focus:border-current/50"
          placeholder="Tell us what you would like to see, compare, or discuss."
          autoComplete="off"
        />
      </label>
      <button
        type="button"
        onClick={sendInquiryToWhatsapp}
        className="pressable mt-2 min-h-12 border border-vaal-black bg-vaal-black px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-vaal-charcoal"
      >
        Submit Inquiry
      </button>
      {status === "success" ? (
        <p
          aria-live="polite"
          className="border border-cadenza-champagne/50 bg-cadenza-cream px-5 py-4 text-sm leading-6 text-cadenza-charcoal"
        >
          Thank you. WhatsApp is opening so a VAAL advisor can continue with you directly.
        </p>
      ) : null}
      {status === "error" ? (
        <p aria-live="assertive" className="border border-bridge-burgundy/40 bg-bridge-burgundy/10 px-5 py-4 text-sm leading-6">
          Your inquiry could not be prepared. Please contact VAAL directly on WhatsApp.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete = "off",
  spellCheck
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  spellCheck?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-current/56">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        className="h-12 border border-current/16 bg-white/8 px-4 text-base outline-none transition-colors duration-200 ease-vaal placeholder:text-current/34 focus:border-current/50"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-current/56">{label}</span>
      <select
        name={name}
        className="h-12 border border-current/16 bg-white/8 px-4 text-base outline-none transition-colors duration-200 ease-vaal focus:border-current/50"
        autoComplete="off"
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
