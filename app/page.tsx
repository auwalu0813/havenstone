"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import PropertyCard from "@/components/PropertyCard";
import {
  BuildingIcon,
  ChartIcon,
  HandshakeIcon,
  KeyIcon,
  LocationPinIcon,
  SearchIcon,
} from "@/components/Icons";
import { allProperties } from "@/lib/properties";
import { sectionLabelClass } from "@/lib/utils";

type SearchTab = "Buy" | "Rent" | "Sell";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

const searchTabs: SearchTab[] = ["Buy", "Rent", "Sell"];
const featuredProperties = allProperties.slice(0, 3);

const services: Service[] = [
  {
    title: "Buy",
    description:
      "From first viewing to final signature — we guide you through every step of finding and purchasing your perfect home in Nigeria.",
    icon: <KeyIcon className="h-12 w-12 text-brass" />,
  },
  {
    title: "Sell",
    description:
      "Strategic pricing, professional staging and targeted marketing. We sell properties faster and at better prices than the market average.",
    icon: <HandshakeIcon className="h-12 w-12 text-brass" />,
  },
  {
    title: "Rent",
    description:
      "Whether you're a landlord or tenant, our rental service handles everything from listing to lease management.",
    icon: <BuildingIcon className="h-12 w-12 text-brass" />,
  },
  {
    title: "Invest",
    description:
      "Data-driven property investment advisory. We identify high-growth areas across Lagos, Abuja and emerging markets.",
    icon: <ChartIcon className="h-12 w-12 text-brass" />,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "We'd been searching for 8 months before finding Havenstone. They understood exactly what we needed and found our dream home in Lekki in just 3 weeks. The whole process was seamless.",
    author: "Adeola & Tunde Bakare",
    detail: "Bought in Lekki Phase 1, Lagos",
  },
  {
    quote:
      "Selling our Abuja property felt overwhelming until Havenstone stepped in. They priced it right, marketed it beautifully, and we had 3 offers within 10 days.",
    author: "Ngozi Emenike",
    detail: "Sold in Maitama, Abuja",
  },
  {
    quote:
      "As a first-time investor, I was nervous. My Havenstone advisor walked me through every step — I now own two rental properties in Lekki that pay for themselves.",
    author: "Chukwudi Obi",
    detail: "Investor, Lagos",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Speak with an advisor",
    description:
      "Book a free consultation with one of our property specialists. We'll understand your needs, budget and timeline.",
  },
  {
    number: "02",
    title: "View handpicked properties",
    description:
      "We curate a shortlist of properties that match your criteria — no endless scrolling through irrelevant listings.",
  },
  {
    number: "03",
    title: "Close with confidence",
    description:
      "From offer to completion, our legal and finance partners ensure a smooth, stress-free transaction.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<SearchTab>("Buy");

  return (
    <main className="bg-warm-white text-ink">
      <section className="relative flex min-h-screen items-end overflow-hidden bg-paper">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80"
          alt="Luxury home exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0D1B2A_0%,rgba(13,27,42,0.85)_25%,rgba(13,27,42,0.6)_55%,rgba(13,27,42,0.2)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-shell px-6 pb-16 pt-28 md:px-10 lg:px-16 lg:pb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(181,151,90,0.4)] bg-[rgba(181,151,90,0.1)] px-[14px] py-[6px]">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-light" />
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-brass-light">
                Trusted by 4,000+ Nigerian families
              </span>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-[40px] font-semibold leading-[1.08] text-warm-white md:text-[52px] lg:text-[64px]">
              <span className="block">Find where</span>
              <span className="block text-brass">life begins.</span>
            </h1>
            <p className="mt-6 max-w-[580px] font-sans text-[16px] leading-[1.7] text-[#8BA0B2] md:text-[18px]">
              Premium properties across Lagos, Abuja and Port Harcourt. Expert guidance
              from search to settlement — whether it&apos;s your first home or your finest
              investment.
            </p>
          </div>

          <div className="mt-10 max-w-[780px] overflow-hidden rounded-[4px] bg-warm-white shadow-panel">
            <div className="flex border-b border-border">
              {searchTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    className={`px-6 py-[14px] font-sans text-[13px] font-medium transition-colors ${
                      isActive
                        ? "bg-navy uppercase tracking-[0.06em] text-warm-white"
                        : "text-ink-muted hover:text-ink"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-3">
              <label className="block">
                <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                  Location
                </span>
                <span className="relative block">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted">
                    <LocationPinIcon className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Lekki, Ikoyi, Maitama..."
                    className="w-full border border-border bg-white px-10 py-2.5 font-sans text-[14px] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brass"
                  />
                </span>
              </label>
              <label className="block">
                <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                  Property Type
                </span>
                <select className="w-full border border-border bg-white px-3 py-2.5 font-sans text-[14px] text-ink outline-none transition-colors focus:border-brass">
                  <option>Any type</option>
                  <option>Detached Duplex</option>
                  <option>Semi-Detached</option>
                  <option>Terrace</option>
                  <option>Flat / Apartment</option>
                  <option>Land</option>
                  <option>Penthouse</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block font-sans text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                  Budget
                </span>
                <select className="w-full border border-border bg-white px-3 py-2.5 font-sans text-[14px] text-ink outline-none transition-colors focus:border-brass">
                  <option>Any budget</option>
                  <option>Under ₦50M</option>
                  <option>₦50M – ₦100M</option>
                  <option>₦100M – ₦250M</option>
                  <option>₦250M – ₦500M</option>
                  <option>₦500M+</option>
                </select>
              </label>
            </div>
            <div className="px-5 pb-5">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
              >
                <SearchIcon className="h-4 w-4" />
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={sectionLabelClass}>FEATURED LISTINGS</p>
              <h2 className="mt-4 font-display text-[32px] font-medium leading-none text-navy md:text-[40px] lg:text-[44px]">
                Premium Properties
              </h2>
            </div>
            <Link
              href="/properties"
              className="font-sans text-[13px] text-ink-muted transition-colors hover:text-navy"
            >
              View all listings →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className={sectionLabelClass}>WHAT WE DO</p>
            <h2 className="mt-4 font-display text-[32px] font-medium text-navy md:text-[40px] lg:text-[44px]">
              Expert guidance at every stage
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[4px] border border-border bg-warm-white px-8 py-10"
              >
                {service.icon}
                <h3 className="mt-6 font-sans text-[20px] font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-ink-muted">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex font-sans text-[13px] font-medium text-brass transition-all hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-shell gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {[
            ["4,200+", "Families served", "Across 12 Nigerian cities"],
            ["₦850B+", "Property value sold", "In the last 5 years"],
            ["97%", "Client satisfaction", "Based on post-sale surveys"],
            ["14 days", "Average time to sell", "vs. 45-day industry average"],
          ].map(([value, label, sublabel], index) => (
            <div
              key={label}
              className={`text-center lg:px-5 ${index > 0 ? "lg:border-l lg:border-border-dark" : ""}`}
            >
              <p className="font-display text-[40px] font-semibold text-warm-white">{value}</p>
              <p className="mt-1 font-sans text-[14px] text-[#8BA0B2]">{label}</p>
              <p className="mt-1 font-sans text-[12px] text-ink-muted">{sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className={sectionLabelClass}>THE PROCESS</p>
            <h2 className="mt-4 font-display text-[32px] font-medium text-navy md:text-[40px] lg:text-[44px]">
              How it works
            </h2>
            <div className="mt-12">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`mb-10 border-l-2 pl-8 ${index === 0 ? "border-brass" : "border-border"}`}
                >
                  <p className="font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-brass">
                    {step.number}
                  </p>
                  <h3 className="mt-2 font-sans text-[20px] font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-sans text-[15px] leading-[1.7] text-ink-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[4px] border border-border bg-white p-8 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80"
                alt="Emeka Okafor"
                className="h-20 w-20 rounded-full border-[3px] border-brass object-cover"
              />
              <h3 className="mt-4 font-sans text-[18px] font-medium text-ink">Emeka Okafor</h3>
              <p className="mt-1 font-sans text-[14px] text-ink-muted">Senior Property Advisor</p>
              <p className="mt-3 flex items-center gap-2 font-sans text-[14px] text-ink">
                <span className="font-medium">4.9</span>
                <span className="text-brass">★</span>
                <span className="text-ink-muted">(127 reviews)</span>
              </p>
              <div className="my-5 border-t border-border" />
              <p className="font-sans text-[13px] text-ink-muted">
                12 years experience · 350+ properties sold
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
              >
                Book free consultation
              </Link>
              <p className="mt-3 text-center font-sans text-[12px] italic text-ink-muted">
                No obligation. No fees until you find your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className={sectionLabelClass}>CLIENT STORIES</p>
            <h2 className="mt-4 font-display text-[32px] font-medium text-navy md:text-[40px] lg:text-[44px]">
              What our clients say
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="rounded-[4px] border border-border bg-warm-white p-9"
              >
                <p className="font-display text-[56px] leading-none text-brass">&quot;</p>
                <p className="mt-2 font-sans text-[16px] italic leading-[1.7] text-ink-muted">
                  {testimonial.quote}
                </p>
                <div className="mt-6">
                  <p className="font-sans text-[15px] font-medium text-ink">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 font-sans text-[13px] text-ink-muted">
                    {testimonial.detail}
                  </p>
                </div>
                <p className="mt-4 font-sans text-[18px] tracking-[0.2em] text-brass">
                  ★★★★★
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="relative overflow-hidden bg-navy px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
            <div className="absolute inset-x-0 top-0 h-1 bg-brass" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(181,151,90,0.15),transparent_45%)]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brass-light">
                START YOUR JOURNEY
              </p>
              <h2 className="mt-4 font-display text-[32px] font-semibold leading-[1.08] text-warm-white md:text-[40px] lg:text-[44px]">
                <span className="block">Your dream property</span>
                <span className="block text-brass">is closer than you think.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[560px] font-sans text-[16px] leading-[1.7] text-[#8BA0B2]">
                Whether buying, selling or investing — our team is ready to guide you
                home.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center bg-brass px-8 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-navy transition-colors hover:bg-brass-light"
                >
                  Browse Properties
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-border-dark px-8 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
                >
                  Speak to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
