import Link from "next/link";
import { HeartIcon, LocationPinIcon } from "@/components/Icons";
import type { Property } from "@/lib/properties";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[4px] border border-border bg-white">
      <Link
        href={`/properties/${property.slug}`}
        aria-label={`View ${property.name}`}
        className="absolute inset-0 z-10"
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-paper">
        <img
          src={property.images[0]}
          alt={property.name}
          className="h-full w-full rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {property.badge ? (
          <span className="absolute left-3 top-3 inline-flex bg-brass px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-white">
            {property.badge}
          </span>
        ) : null}
        <button
          type="button"
          aria-label={`Save ${property.name}`}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-muted shadow-md transition-colors hover:text-brass"
        >
          <HeartIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="p-6">
        <p className="font-display text-[26px] font-semibold text-navy">{property.price}</p>
        <h3 className="mt-2 font-sans text-[18px] font-medium text-ink">{property.name}</h3>
        <p className="mt-1 flex items-center gap-2 font-sans text-[14px] text-ink-muted">
          <LocationPinIcon className="h-4 w-4 flex-none" />
          <span>{property.location}</span>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4 font-sans text-[13px] text-ink-muted">
          {[`${property.beds} Beds`, `${property.baths} Baths`, `${property.sqm} sqm`].map(
            (spec, index) => (
              <span key={spec} className="inline-flex items-center gap-2">
                {index > 0 ? <span className="text-border-dark/40">·</span> : null}
                {spec}
              </span>
            ),
          )}
        </div>
      </div>
    </article>
  );
}
