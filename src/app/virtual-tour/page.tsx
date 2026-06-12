"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Space = {
  title: string;
  image: string;
  description: string;
  hotspots: Array<{ label: string; target: number; x: number; y: number }>;
};

const tours: Record<string, { label: string; shortLabel: string; spaces: Space[] }> = {
  cadenza: {
    label: "Cadenza Residence",
    shortLabel: "Cadenza",
    spaces: [
      {
        title: "Arrival",
        image: "/assets/cadenza/hero/cadenza-hero-exterior-night.jpg",
        description: "Begin at the residence exterior and arrival point.",
        hotspots: [
          { label: "Enter Living Room", target: 1, x: 30, y: 58 },
          { label: "View Exterior", target: 2, x: 70, y: 40 }
        ]
      },
      {
        title: "Living Room",
        image: "/assets/cadenza/interiors/cadenza-interior-living-room.jpg",
        description: "Step into warm interiors shaped around everyday comfort.",
        hotspots: [
          { label: "Return to Arrival", target: 0, x: 18, y: 66 },
          { label: "Explore Amenities", target: 3, x: 72, y: 54 }
        ]
      },
      {
        title: "Exterior",
        image: "/assets/cadenza/exteriors/cadenza-exterior-main-render.jpg",
        description: "View the architectural presence of Cadenza in Nakasero.",
        hotspots: [
          { label: "Enter Living Room", target: 1, x: 42, y: 64 },
          { label: "Explore Amenities", target: 3, x: 78, y: 36 }
        ]
      },
      {
        title: "Amenities",
        image: "/assets/cadenza/amenities/cadenza-amenity-pool.jpg",
        description: "Explore selected lifestyle and wellness spaces.",
        hotspots: [
          { label: "Return to Arrival", target: 0, x: 22, y: 44 },
          { label: "View Exterior", target: 2, x: 70, y: 58 }
        ]
      }
    ]
  },
  bridge: {
    label: "The Bridge Kololo",
    shortLabel: "The Bridge",
    spaces: [
      {
        title: "Arrival",
        image: "/assets/bridge/hero/bridge-hero-building-render.jpg",
        description: "Approach The Bridge as a bold Kololo landmark.",
        hotspots: [
          { label: "Lifestyle Exterior", target: 1, x: 30, y: 56 },
          { label: "Studio Residence", target: 2, x: 68, y: 42 }
        ]
      },
      {
        title: "Lifestyle Exterior",
        image: "/assets/bridge/exteriors/bridge-lifestyle-exterior.jpg",
        description: "Move through the residence's exterior lifestyle setting.",
        hotspots: [
          { label: "Studio Residence", target: 2, x: 54, y: 62 },
          { label: "Private Lounge", target: 3, x: 78, y: 36 }
        ]
      },
      {
        title: "Studio Residence",
        image: "/assets/bridge/units/bridge-unit-studio-main.jpg",
        description: "Preview compact elegance for connected city living.",
        hotspots: [
          { label: "Lifestyle Exterior", target: 1, x: 24, y: 54 },
          { label: "Private Lounge", target: 3, x: 70, y: 58 }
        ]
      },
      {
        title: "Private Lounge",
        image: "/assets/bridge/amenities/bridge-amenity-lounge.jpg",
        description: "Enter a social lounge setting for hosting and retreat.",
        hotspots: [
          { label: "Return to Arrival", target: 0, x: 22, y: 44 },
          { label: "Studio Residence", target: 2, x: 72, y: 52 }
        ]
      }
    ]
  }
};

export default function VirtualTourPage() {
  const [residenceKey, setResidenceKey] = useState<"cadenza" | "bridge">("cadenza");
  const [spaceIndex, setSpaceIndex] = useState(0);
  const activeTour = tours[residenceKey];
  const activeSpace = activeTour.spaces[spaceIndex];
  const progressLabel = useMemo(() => `${spaceIndex + 1} / ${activeTour.spaces.length}`, [activeTour.spaces.length, spaceIndex]);

  function chooseResidence(nextKey: "cadenza" | "bridge") {
    setResidenceKey(nextKey);
    setSpaceIndex(0);
  }

  function goTo(delta: number) {
    setSpaceIndex((current) => (current + delta + activeTour.spaces.length) % activeTour.spaces.length);
  }

  return (
    <main id="main-content" className="bg-vaal-black pt-[76px] text-white">
      <section className="section-pad bg-[radial-gradient(circle_at_70%_8%,rgba(118,21,75,0.22),transparent_34%),linear-gradient(180deg,#050505,#0A0A0A)]">
        <div className="content-rail">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <SectionLabel tone="light">Demo Virtual Walkthrough</SectionLabel>
              <h1 className="text-balance font-display text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.9]">
                Move through selected VAAL spaces before you visit.
              </h1>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-pretty text-lg leading-8 text-white/68">
                Tap a marker or choose a space to move through the demo. This is a guided presentation layer, not a
                captured 360 tour yet.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href="/inquire">Book a Physical Viewing</PremiumButton>
                <PremiumButton href="/inquire" tone="outline">
                  Request Captured Tour
                </PremiumButton>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="grid gap-5 xl:content-start">
              <div className="grid gap-2">
                {(Object.keys(tours) as Array<"cadenza" | "bridge">).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => chooseResidence(key)}
                    aria-pressed={residenceKey === key}
                    className={`pressable min-h-12 border px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.16em] ${
                      residenceKey === key
                        ? "border-white bg-white text-vaal-black"
                        : "border-white/18 bg-white/5 text-white/70 hover:border-white/48 hover:text-white"
                    }`}
                  >
                    {tours[key].label}
                  </button>
                ))}
              </div>

              <div className="border border-white/12 bg-white/[0.04] p-4">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">Spaces</p>
                <div className="grid gap-2">
                  {activeTour.spaces.map((space, index) => (
                    <button
                      key={space.title}
                      type="button"
                      onClick={() => setSpaceIndex(index)}
                      aria-pressed={spaceIndex === index}
                      className={`pressable flex min-h-11 items-center justify-between gap-4 px-3 py-2 text-left text-sm ${
                        spaceIndex === index ? "bg-bridge-burgundy text-white" : "bg-transparent text-white/64 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      <span>{space.title}</span>
                      <span className="text-[11px] tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <section className="overflow-hidden bg-bridge-black shadow-image">
              <div className="relative aspect-[16/10] min-h-[420px]">
                <img src={activeSpace.image} alt={`${activeTour.label} ${activeSpace.title}`} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.06),rgba(5,5,5,0.72))]" />
                {activeSpace.hotspots.map((hotspot) => (
                  <button
                    key={hotspot.label}
                    type="button"
                    onClick={() => setSpaceIndex(hotspot.target)}
                    className="tour-hotspot pressable absolute grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white text-vaal-black shadow-image"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    aria-label={`Move to ${hotspot.label}`}
                  >
                    <MapPin size={17} strokeWidth={1.8} aria-hidden="true" />
                  </button>
                ))}

                <div className="absolute inset-x-0 bottom-0 grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/46">
                      {activeTour.shortLabel} | {progressLabel}
                    </p>
                    <h2 className="mt-3 font-display text-5xl font-semibold leading-none">{activeSpace.title}</h2>
                    <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/72">{activeSpace.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => goTo(-1)}
                      className="pressable inline-flex min-h-11 items-center gap-2 border border-white/28 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white hover:border-white hover:bg-white hover:text-vaal-black"
                    >
                      <ChevronLeft size={16} aria-hidden="true" />
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(1)}
                      className="pressable inline-flex min-h-11 items-center gap-2 border border-white/28 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white hover:border-white hover:bg-white hover:text-vaal-black"
                    >
                      Next
                      <ChevronRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <p className="mt-6 max-w-3xl text-xs uppercase tracking-[0.16em] text-white/38">
            Real captured Matterport or Pannellum walkthroughs can replace this interactive demo later.
          </p>
        </div>
      </section>
    </main>
  );
}
