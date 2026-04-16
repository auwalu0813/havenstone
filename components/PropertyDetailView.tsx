"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  AreaIcon,
  BathIcon,
  BedIcon,
  CalendarIcon,
  CameraIcon,
  CarIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  EmailIcon,
  LocationPinIcon,
  PhoneIcon,
  PrintIcon,
  ShareIcon,
} from "@/components/Icons";
import type { Property } from "@/lib/properties";

type PropertyDetailViewProps = {
  property: Property;
};

const inputClassName =
  "w-full border border-border bg-white px-4 py-3 font-sans text-[14px] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brass";

export default function PropertyDetailView({ property }: PropertyDetailViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("");
  const mobileGalleryRef = useRef<HTMLDivElement>(null);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: `Hi, I'm interested in ${property.name} at ${property.location}. Please get in touch with more details.`,
  });

  const visibleDesktopImages = useMemo(
    () =>
      property.images
        .map((image, index) => ({ image, index }))
        .filter(({ index }) => index !== selectedImageIndex)
        .slice(0, 2),
    [property.images, selectedImageIndex],
  );

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((current) => (current - 1 + property.images.length) % property.images.length);
      }
      if (event.key === "ArrowRight") {
        setSelectedImageIndex((current) => (current + 1) % property.images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, property.images.length]);

  useEffect(() => {
    if (!shareFeedback) return;
    const timeout = window.setTimeout(() => setShareFeedback(""), 2200);
    return () => window.clearTimeout(timeout);
  }, [shareFeedback]);

  const handleMobileScroll = () => {
    const node = mobileGalleryRef.current;
    if (!node) return;
    const index = Math.round(node.scrollLeft / node.clientWidth);
    setMobileImageIndex(index);
    setSelectedImageIndex(index);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((current) => (current - 1 + property.images.length) % property.images.length);
  };

  const showNextImage = () => {
    setSelectedImageIndex((current) => (current + 1) % property.images.length);
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ title: property.name, text: property.location, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setShareFeedback("Link copied to clipboard");
      }
    } catch {
      setShareFeedback("Unable to share right now");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-warm-white pt-[84px] md:pt-[96px]">
      <div className="mx-auto max-w-shell px-6 pb-16 md:px-10 lg:px-16 lg:pb-24">
        <Link
          href="/properties"
          className="font-sans text-[14px] text-ink-muted transition-colors hover:text-navy"
        >
          ← Back to properties
        </Link>

        <nav className="mt-5 flex flex-wrap items-center gap-2 font-sans text-[13px] text-ink-muted">
          <Link href="/" className="transition-colors hover:text-navy">
            Home
          </Link>
          <span>/</span>
          <Link href="/properties" className="transition-colors hover:text-navy">
            Properties
          </Link>
          <span>/</span>
          <span>{property.name}</span>
        </nav>

        <section className="mt-8">
          <div className="hidden gap-2 md:grid md:grid-cols-[minmax(0,1.65fr)_minmax(0,0.9fr)]">
            <div className="relative">
              <img
                src={property.images[selectedImageIndex]}
                alt={property.name}
                className="aspect-[16/10] w-full rounded-[8px] object-cover"
              />
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-[4px] bg-white/90 px-4 py-2 font-sans text-[13px] font-medium text-ink backdrop-blur transition-colors hover:bg-white"
              >
                <CameraIcon className="h-4 w-4" />
                View all photos
              </button>
            </div>
            <div className="grid gap-2">
              {visibleDesktopImages.map(({ image, index }) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className="overflow-hidden rounded-[8px] border border-transparent transition-colors hover:border-brass"
                >
                  <img
                    src={image}
                    alt={`${property.name} view ${index + 1}`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <div
              ref={mobileGalleryRef}
              onScroll={handleMobileScroll}
              className="flex snap-x snap-mandatory overflow-x-auto rounded-[8px] scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {property.images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="w-full flex-none snap-center"
                >
                  <img
                    src={image}
                    alt={`${property.name} view ${index + 1}`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {property.images.map((image, index) => (
                  <span
                    key={`${image}-dot`}
                    className={`h-2 w-2 rounded-full ${
                      index === mobileImageIndex ? "bg-brass" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-2 rounded-[4px] bg-white px-4 py-2 font-sans text-[13px] font-medium text-ink shadow-sm"
              >
                <CameraIcon className="h-4 w-4" />
                View all photos
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.9fr)] lg:gap-10">
          <div>
            <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <p className="font-display text-[36px] font-semibold text-navy">{property.price}</p>
                {property.badge ? (
                  <span className="inline-flex bg-brass px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-white">
                    {property.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-ink-muted">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 font-sans text-[13px] transition-colors hover:text-navy"
                >
                  <ShareIcon className="h-4 w-4" />
                  Share
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 font-sans text-[13px] transition-colors hover:text-navy"
                >
                  <PrintIcon className="h-4 w-4" />
                  Print
                </button>
              </div>
            </div>
            {shareFeedback ? <p className="mt-3 font-sans text-[13px] text-brass">{shareFeedback}</p> : null}

            <div className="mt-6">
              <h1 className="font-display text-[28px] font-medium text-ink">{property.name}</h1>
              <p className="mt-2 flex items-center gap-2 font-sans text-[15px] text-ink-muted">
                <LocationPinIcon className="h-4 w-4 flex-none" />
                <span>{property.location}</span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 border-y border-border py-5">
              {[
                { icon: <BedIcon className="h-[18px] w-[18px] text-brass" />, label: `${property.beds} Beds` },
                { icon: <BathIcon className="h-[18px] w-[18px] text-brass" />, label: `${property.baths} Baths` },
                { icon: <AreaIcon className="h-[18px] w-[18px] text-brass" />, label: `${property.sqm} sqm` },
                { icon: <CarIcon className="h-[18px] w-[18px] text-brass" />, label: `${property.parking} Parking` },
                { icon: <CalendarIcon className="h-[18px] w-[18px] text-brass" />, label: `Built ${property.yearBuilt}` },
              ].map((item) => (
                <div key={item.label} className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="font-sans text-[20px] font-semibold text-ink">About this property</h2>
              <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ink-muted">
                {property.description}
              </p>
            </section>

            <section className="mt-10">
              <h2 className="font-sans text-[20px] font-semibold text-ink">Property Features</h2>
              <div className="mt-5 grid gap-x-8 md:grid-cols-2">
                {property.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex items-start gap-3 py-3 ${
                      index === property.features.length - 1 ||
                      (property.features.length % 2 === 0 && index >= property.features.length - 2)
                        ? ""
                        : "border-b border-border"
                    }`}
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-brass" />
                    <span className="font-sans text-[15px] text-ink-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-sans text-[20px] font-semibold text-ink">Location</h2>
              <p className="mt-4 font-sans text-[16px] text-ink-muted">{property.location}</p>
              <div className="mt-5 flex aspect-[16/9] items-center justify-center rounded-[8px] border border-border bg-paper px-6 text-center font-sans text-[14px] text-ink-muted">
                Map view coming soon
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="rounded-[4px] border border-border bg-white p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="h-20 w-20 rounded-full border-[3px] border-brass object-cover"
              />
              <h2 className="mt-4 font-sans text-[18px] font-medium text-ink">{property.agent.name}</h2>
              <p className="mt-1 font-sans text-[14px] text-ink-muted">{property.agent.title}</p>
              <p className="mt-3 flex items-center gap-2 font-sans text-[14px] text-ink">
                <span className="font-medium">{property.agent.rating}</span>
                <span className="text-brass">★</span>
                <span className="text-ink-muted">({property.agent.reviews} reviews)</span>
              </p>
              <div className="my-5 border-t border-border" />
              <div className="space-y-3">
                <a
                  href={`tel:${property.agent.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 font-sans text-[14px] text-ink transition-colors hover:text-brass"
                >
                  <PhoneIcon className="h-4 w-4 text-brass" />
                  <span>{property.agent.phone}</span>
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center gap-3 font-sans text-[14px] text-ink transition-colors hover:text-brass"
                >
                  <EmailIcon className="h-4 w-4 text-brass" />
                  <span>{property.agent.email}</span>
                </a>
              </div>
              <div className="my-6 border-t border-border" />

              {submitted ? (
                <div className="rounded-[4px] border border-[#CDE7D2] bg-[#F3FBF5] px-5 py-4">
                  <p className="font-sans text-[14px] font-medium text-[#215B34]">
                    Thank you! Your inquiry has been sent. An advisor will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-sans text-[18px] font-medium text-ink">Interested in this property?</h3>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formValues.fullName}
                    onChange={(event) =>
                      setFormValues((current) => ({ ...current, fullName: event.target.value }))
                    }
                    className={inputClassName}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={(event) =>
                      setFormValues((current) => ({ ...current, email: event.target.value }))
                    }
                    className={inputClassName}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formValues.phone}
                    onChange={(event) =>
                      setFormValues((current) => ({ ...current, phone: event.target.value }))
                    }
                    className={inputClassName}
                    required
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    value={formValues.message}
                    onChange={(event) =>
                      setFormValues((current) => ({ ...current, message: event.target.value }))
                    }
                    className={`${inputClassName} resize-none`}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </aside>
        </section>
      </div>

      {lightboxOpen ? (
        <div className="fixed inset-0 z-50 bg-black/90 px-4 py-6 md:px-8">
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            <div className="flex items-center justify-between text-warm-white">
              <p className="font-sans text-[14px]">
                {selectedImageIndex + 1} / {property.images.length}
              </p>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-warm-white transition-colors hover:bg-white/10"
                aria-label="Close photo viewer"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center gap-4 py-6">
              <button
                type="button"
                onClick={showPreviousImage}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-warm-white transition-colors hover:bg-white/10"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <img
                src={property.images[selectedImageIndex]}
                alt={`${property.name} enlarged view ${selectedImageIndex + 1}`}
                className="max-h-full w-full max-w-5xl rounded-[8px] object-contain"
              />
              <button
                type="button"
                onClick={showNextImage}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-warm-white transition-colors hover:bg-white/10"
                aria-label="Next image"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
