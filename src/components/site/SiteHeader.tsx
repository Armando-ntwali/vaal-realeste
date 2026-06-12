"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, navItems } from "@/data/navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[height,background-color,border-color] duration-300 ease-vaal ${
        scrolled
          ? "h-[68px] border-white/10 bg-vaal-black/95"
          : "h-[76px] border-white/14 bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-full w-full max-w-[1500px] grid-cols-[180px_1fr_auto] items-center gap-8 px-6 text-white xl:px-10">
        <Link href="/" className="pressable flex h-11 items-center" aria-label="VAAL home">
          <Image
            src="/assets/brand/vaal-logo.svg"
            alt="VAAL Real Estate"
            width={116}
            height={34}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-7 text-[12px] font-medium uppercase tracking-[0.18em] text-white/82 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pressable relative py-4 hover:text-white after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-vaal-yellow after:transition-transform after:duration-200 after:ease-vaal hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 justify-self-end lg:flex">
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="text-sm font-medium text-white/86">
            {contact.phone}
          </a>
          <a
            href={contact.whatsapp}
            className="pressable grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white hover:border-vaal-yellow hover:text-vaal-yellow"
            aria-label="Chat with VAAL on WhatsApp"
          >
            <MessageCircle size={17} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>

        <Link
          href="/inquire"
          className="pressable col-start-3 grid h-10 w-10 place-items-center justify-self-end rounded-full border border-white/25 text-white lg:hidden"
          aria-label="Inquire"
        >
          <MessageCircle size={17} strokeWidth={1.7} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
