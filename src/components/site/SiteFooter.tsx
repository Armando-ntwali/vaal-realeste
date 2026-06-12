import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/navigation";

const footerLinks = [
  { label: "About", href: "/" },
  { label: "Developments", href: "/#residences" },
  { label: "Cadenza Residence", href: "/residences/cadenza" },
  { label: "The Bridge", href: "/residences/the-bridge" },
  { label: "Contact", href: "/inquire" },
  { label: "Privacy Policy", href: "/privacy" }
];

export function SiteFooter() {
  return (
    <footer className="bg-vaal-black px-6 py-16 text-white xl:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/assets/brand/vaal-logo.svg"
            alt="VAAL Real Estate"
            width={126}
            height={36}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-8 max-w-sm text-pretty text-base leading-7 text-white/68">
            VAAL Real Estate. Signature residences and investment properties in Kampala.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Contact</p>
          <div className="mt-6 space-y-3 text-sm text-white/76">
            <a className="block hover:text-white" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
              {contact.phone}
            </a>
            <a className="block hover:text-white" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <p className="text-white/46">Instagram, LinkedIn, YouTube</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Routes</p>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/70">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} VAAL Real Estate</p>
        <p>Private digital sales suite</p>
      </div>
    </footer>
  );
}
