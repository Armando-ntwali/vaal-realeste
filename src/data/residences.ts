export type Residence = {
  name: string;
  shortName: string;
  location: string;
  href: string;
  palette: "cadenza" | "bridge";
  previewImage: string;
  heroImage: string;
  logo?: string;
  description: string;
  cta: string;
  units: Array<{ name: string; description: string; price?: string }>;
};

export const residences: Residence[] = [
  {
    name: "Cadenza Residence",
    shortName: "Cadenza",
    location: "Nakasero",
    href: "/residences/cadenza",
    palette: "cadenza",
    previewImage: "/assets/homepage/home-cadenza-preview-4k.jpg",
    heroImage: "/assets/cadenza/hero/cadenza-hero-exterior-night.jpg",
    logo: "/assets/cadenza/logos/cadenza-logo-gold.png",
    description:
      "A refined residential address designed for calm city living, private comfort, and investment confidence in one of Kampala's most prestigious locations.",
    cta: "Enter Cadenza",
    units: [
      { name: "Studio", description: "A composed city base.", price: "Starting from $105,000" },
      { name: "1 Bedroom", description: "Private daily comfort.", price: "Starting from $144,000" },
      { name: "2 Bedroom", description: "More room for long-term living.", price: "Starting from $267,000" }
    ]
  },
  {
    name: "The Bridge Kololo",
    shortName: "The Bridge",
    location: "Kololo",
    href: "/residences/the-bridge",
    palette: "bridge",
    previewImage: "/assets/homepage/home-bridge-preview.jpg",
    heroImage: "/assets/bridge/hero/bridge-hero-building-render.jpg",
    logo: "/assets/bridge/logos/bridge-logo-mark-white.svg",
    description:
      "A bold urban residence created for residents who want privacy, convenience, community, and a lifestyle connected to the heart of the city.",
    cta: "Enter The Bridge",
    units: [
      { name: "Studio", description: "Compact elegance for modern city living." },
      { name: "1 Bedroom", description: "Private, calm, and efficient everyday comfort." },
      { name: "2 Bedroom", description: "More room for family, sharing, or long-stay living." }
    ]
  }
];
