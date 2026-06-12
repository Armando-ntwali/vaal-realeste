import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Residence } from "@/data/residences";

export function ResidenceCard({ residence }: { residence: Residence }) {
  const isBridge = residence.palette === "bridge";

  return (
    <Link
      href={residence.href}
      className="group relative min-h-[580px] overflow-hidden bg-vaal-black text-white shadow-image lg:min-h-[680px]"
    >
      <img
        src={residence.previewImage}
        alt={`${residence.name} preview`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-vaal group-hover:scale-[1.04]"
      />
      <div
        className={`absolute inset-0 ${
          isBridge
            ? "bg-[linear-gradient(180deg,rgba(61,11,39,0.18),rgba(5,5,5,0.82))]"
            : "bg-[linear-gradient(180deg,rgba(31,35,34,0.08),rgba(3,3,3,0.80))]"
        }`}
      />
      <div className="absolute inset-x-0 bottom-0 p-7 transition-transform duration-500 ease-vaal group-hover:-translate-y-2 md:p-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/64">{residence.location}</p>
        <h3 className="mt-3 font-display text-5xl font-semibold leading-none md:text-6xl">{residence.name}</h3>
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/74">{residence.description}</p>
        <span className="mt-8 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em]">
          {residence.cta}
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/35 transition-colors group-hover:border-vaal-yellow group-hover:text-vaal-yellow">
            <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
          </span>
        </span>
      </div>
    </Link>
  );
}
