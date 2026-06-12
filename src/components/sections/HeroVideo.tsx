"use client";

import { useEffect, useRef } from "react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const playback = videoRef.current?.play();
    playback?.catch(() => {
      // Keep the poster visible when a browser declines autoplay.
    });
  }, []);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-vaal-black text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/homepage/home-hero-skyview-poster.jpg"
      >
        {/* TODO: Create optimized 1920x1080 MP4, 1920x1080 WebM, and optional 2560x1440 MP4 web versions of the 4K 59.94fps skyview master. */}
        <source src="/assets/homepage/home-hero-skyview.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_28%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(90deg,rgba(3,3,3,0.86),rgba(3,3,3,0.46)_44%,rgba(3,3,3,0.62))]" />
      <div className="relative z-10 flex min-h-[760px] items-end px-6 pb-20 pt-32 xl:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-4xl">
            <SectionLabel tone="light">VAAL Real Estate</SectionLabel>
            <h1 className="text-balance font-display text-[clamp(4.4rem,8vw,7.1rem)] font-semibold leading-[0.86] tracking-normal">
              Kampala, Seen From a Higher Standard.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/78 md:text-xl">
              Explore VAAL's signature residences through cinematic storytelling, refined interiors, immersive
              walkthroughs, and private viewing experiences.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="#residences">Explore Residences</PremiumButton>
              <PremiumButton href="/inquire" tone="outline">
                Book a Private Viewing
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
