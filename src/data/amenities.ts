export type Amenity = {
  title: string;
  description: string;
  image?: string;
};

export const sharedAmenities: Amenity[] = [
  {
    title: "Iconic Design.",
    description:
      "Architecture, materials, and details come together to create residences with presence, beauty, and long-term value.",
    image: "/assets/shared/amenities/amenity-iconic-design.jpg"
  },
  {
    title: "Life Enriching Service & Amenities.",
    description:
      "A residents' lounge layer designed for arrival, conversation, quiet work, and hospitality-led everyday living.",
    image: "/assets/shared/amenities/amenity-service-lifestyle.jpg"
  },
  {
    title: "Wellness.",
    description:
      "Fitness, pool, garden, and recovery spaces create a daily rhythm centered on health, movement, and restoration.",
    image: "/assets/shared/amenities/amenity-wellness.jpg"
  },
  {
    title: "Culture & Neighborhood.",
    description:
      "VAAL residences are positioned near the city's key social, business, diplomatic, and lifestyle destinations.",
    image: "/assets/shared/amenities/amenity-culture-neighborhood.jpg"
  }
];

export const cadenzaAmenities: Amenity[] = [
  {
    title: "Wellness / Gym.",
    description: "Training spaces designed for a daily rhythm of movement.",
    image: "/assets/cadenza/amenities/cadenza-amenity-gym.jpg"
  },
  {
    title: "Pool.",
    description: "A calm outdoor pause above the pace of the city.",
    image: "/assets/cadenza/amenities/cadenza-amenity-pool.jpg"
  },
  {
    title: "Garden Living.",
    description: "Soft landscape moments for family, recovery, and quiet time.",
    image: "/assets/cadenza/amenities/cadenza-amenity-garden.jpg"
  },
  {
    title: "Social Living.",
    description: "Shared spaces that keep hospitality close to home.",
    image: "/assets/cadenza/amenities/cadenza-amenity-social-living.jpg"
  }
];

export const bridgeAmenities: Amenity[] = [
  {
    title: "Wellness.",
    description: "A private health and restoration layer for everyday life.",
    image: "/assets/bridge/amenities/bridge-amenity-wellness.jpg"
  },
  {
    title: "Private Cinema.",
    description: "A dedicated entertainment setting within the residence world.",
    image: "/assets/bridge/amenities/bridge-amenity-cinema.jpg"
  },
  {
    title: "Studio Residence.",
    description: "Compact elegance for connected Kololo living.",
    image: "/assets/bridge/units/bridge-unit-studio-main.jpg"
  },
  {
    title: "Private Lounge.",
    description: "A composed social setting for quiet conversations, hosting, and everyday retreat above Kololo.",
    image: "/assets/bridge/amenities/bridge-amenity-lounge.jpg"
  }
];
