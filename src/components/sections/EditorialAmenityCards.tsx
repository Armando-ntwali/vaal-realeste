import type { Amenity } from "@/data/amenities";
import { sharedAmenities } from "@/data/amenities";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AssetPlaceholder } from "@/components/sections/AssetPlaceholder";

type EditorialAmenityCardsProps = {
  amenities?: Amenity[];
  headline?: string;
  body?: string;
  tone?: "light" | "dark";
};

export function EditorialAmenityCards({
  amenities = sharedAmenities,
  headline = "Amenities shaped around how life is actually lived.",
  body,
  tone = "light"
}: EditorialAmenityCardsProps) {
  const dark = tone === "dark";

  return (
    <section className={`section-pad ${dark ? "bg-vaal-black text-white" : "bg-vaal-ivory text-vaal-charcoal"}`}>
      <div className="content-rail">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <SectionLabel tone={dark ? "light" : "dark"}>Amenities</SectionLabel>
            <h2 className="max-w-3xl text-balance font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              {headline}
            </h2>
          </div>
          {body ? <p className="max-w-2xl text-lg leading-8 opacity-70 lg:justify-self-end">{body}</p> : null}
        </div>
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {amenities.map((amenity) => (
            <article key={amenity.title} className="group">
              <div className="overflow-hidden bg-vaal-charcoal shadow-image">
                {amenity.image ? (
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="image-outline aspect-[4/5] h-full w-full object-cover transition-transform duration-700 ease-vaal group-hover:scale-[1.035]"
                  />
                ) : (
                  <AssetPlaceholder label={amenity.title} tone={dark ? "dark" : "light"} />
                )}
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-none">{amenity.title}</h3>
              <p className={`mt-4 text-pretty text-base leading-7 ${dark ? "text-white/64" : "text-vaal-charcoal/68"}`}>
                {amenity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
