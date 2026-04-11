"use client";

import { useEffect, useState, type ReactNode } from "react";

type SearchTab = "Buy" | "Rent" | "Sell";

type Property = {
  image: string;
  badge: string;
  price: string;
  name: string;
  location: string;
  specs: [string, string, string];
};

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

const navLinks = ["Properties", "Services", "About", "Contact"];
const searchTabs: SearchTab[] = ["Buy", "Rent", "Sell"];

const properties: Property[] = [
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    badge: "PREMIUM",
    price: "₦185,000,000",
    name: "Oceanview Terrace",
    location: "Banana Island, Ikoyi, Lagos",
    specs: ["5 Beds", "5 Baths", "420 sqm"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    badge: "NEW",
    price: "₦95,000,000",
    name: "The Asokoro Residence",
    location: "Asokoro, Abuja",
    specs: ["4 Beds", "4 Baths", "310 sqm"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    badge: "PREMIUM",
    price: "₦120,000,000",
    name: "Lekki Gardens Villa",
    location: "Lekki Phase 1, Lagos",
    specs: ["4 Beds", "3 Baths", "280 sqm"],
  },
];

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

const footerLinks = {
  Properties: ["Lagos", "Abuja", "Port Harcourt", "Luxury Homes", "New Developments"],
  Company: ["About us", "Our Team", "Careers", "Press"],
  Support: ["Contact us", "FAQ", "Privacy Policy", "Terms of Service"],
};

const sectionLabelClass =
  "inline-flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brass";

export default function Home() {
  const [activeTab, setActiveTab] = useState<SearchTab>("Buy");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <main className="bg-warm-white text-ink">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-border transition-all duration-300 ${
          scrolled
            ? "bg-warm-white shadow-[0_10px_30px_rgba(13,27,42,0.08)] backdrop-blur-md"
            : "bg-warm-white"
        }`}
      >
        <div className="mx-auto flex h-[60px] max-w-shell items-center justify-between px-6 md:h-[72px] md:px-10 lg:px-16">
          <div className="w-full md:w-1/4">
            <a
              href="#"
              className="font-display text-[22px] font-semibold uppercase tracking-[0.04em] text-navy"
            >
              HAVENSTONE
            </a>
          </div>

          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-9">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-[13px] font-normal uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-navy"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex md:w-1/4 md:items-center md:justify-end md:gap-6">
            <p className="font-sans text-[13px] font-normal text-ink-muted">
              +234 901 234 5678
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-navy px-6 py-2.5 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
            >
              List Your Property
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-navy md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <HamburgerIcon className="h-5 w-5" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-warm-white px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-sans text-[13px] font-normal uppercase tracking-[0.06em] text-ink-muted"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <p className="pt-2 font-sans text-[13px] text-ink-muted">+234 901 234 5678</p>
              <a
                href="#"
                className="mt-2 inline-flex items-center justify-center bg-navy px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-warm-white"
                onClick={() => setMenuOpen(false)}
              >
                List Your Property
              </a>
            </div>
          </div>
        )}
      </header>

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
              Premium properties across Lagos, Abuja and Port Harcourt. Expert
              guidance from search to settlement — whether it&apos;s your first home or
              your finest investment.
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
            <a
              href="#"
              className="font-sans text-[13px] text-ink-muted transition-colors hover:text-navy"
            >
              View all listings →
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.name}
                className="overflow-hidden rounded-[4px] border border-border bg-white"
              >
                <div className="group relative aspect-[16/10] overflow-hidden bg-paper">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="h-full w-full rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 inline-flex bg-brass px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-white">
                    {property.badge}
                  </span>
                  <button
                    type="button"
                    aria-label={`Save ${property.name}`}
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-muted shadow-md transition-colors hover:text-brass"
                  >
                    <HeartIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6">
                  <p className="font-display text-[26px] font-semibold text-navy">
                    {property.price}
                  </p>
                  <h3 className="mt-2 font-sans text-[18px] font-medium text-ink">
                    {property.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 font-sans text-[14px] text-ink-muted">
                    <LocationPinIcon className="h-4 w-4 flex-none" />
                    <span>{property.location}</span>
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4 font-sans text-[13px] text-ink-muted">
                    {property.specs.map((spec, index) => (
                      <span key={spec} className="inline-flex items-center gap-2">
                        {index > 0 && <span className="text-border-dark/40">·</span>}
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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
                <a
                  href="#"
                  className="mt-5 inline-flex font-sans text-[13px] font-medium text-brass transition-all hover:underline"
                >
                  Learn more →
                </a>
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
              <p className="font-display text-[40px] font-semibold text-warm-white">
                {value}
              </p>
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
                  className={`mb-10 border-l-2 pl-8 ${
                    index === 0 ? "border-brass" : "border-border"
                  }`}
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
              <h3 className="mt-4 font-sans text-[18px] font-medium text-ink">
                Emeka Okafor
              </h3>
              <p className="mt-1 font-sans text-[14px] text-ink-muted">
                Senior Property Advisor
              </p>
              <p className="mt-3 flex items-center gap-2 font-sans text-[14px] text-ink">
                <span className="font-medium">4.9</span>
                <span className="text-brass">★</span>
                <span className="text-ink-muted">(127 reviews)</span>
              </p>
              <div className="my-5 border-t border-border" />
              <p className="font-sans text-[13px] text-ink-muted">
                12 years experience · 350+ properties sold
              </p>
              <button
                type="button"
                className="mt-6 w-full bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
              >
                Book free consultation
              </button>
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
                Whether buying, selling or investing — our team is ready to guide
                you home.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-brass px-8 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-navy transition-colors hover:bg-brass-light"
                >
                  Browse Properties
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border border-border-dark px-8 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
                >
                  Speak to an Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-[4px] border-brass bg-navy px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-shell">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <a
                href="#"
                className="font-display text-[20px] font-semibold uppercase tracking-[0.04em] text-warm-white"
              >
                HAVENSTONE
              </a>
              <p className="mt-3 whitespace-pre-line font-sans text-[14px] leading-[1.6] text-[#8BA0B2]">
                {"Premium Nigerian real estate.\nBuying. Selling. Investing."}
              </p>
              <p className="mt-4 whitespace-pre-line font-sans text-[13px] leading-[1.7] text-ink-muted">
                {"14 Bourdillon Road, Ikoyi\nLagos, Nigeria"}
              </p>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-warm-white">
                  {title}
                </p>
                <div className="flex flex-col gap-2">
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="font-sans text-[14px] leading-[2.4] text-[#8BA0B2] transition-colors hover:text-warm-white"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-border-dark pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="font-sans text-[13px] text-ink-muted">
              © 2026 Havenstone Properties Ltd. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-4 md:justify-end">
              {[
                { label: "Twitter", icon: <TwitterXIcon className="h-[18px] w-[18px]" /> },
                { label: "Instagram", icon: <InstagramIcon className="h-[18px] w-[18px]" /> },
                { label: "LinkedIn", icon: <LinkedInIcon className="h-[18px] w-[18px]" /> },
                { label: "Facebook", icon: <FacebookIcon className="h-[18px] w-[18px]" /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="text-ink-muted transition-colors hover:text-warm-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LocationPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21C15.5 17.1 18 14.1 18 10.8C18 7.04 15.31 4 12 4C8.69 4 6 7.04 6 10.8C6 14.1 8.5 17.1 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20.5L10.7 19.33C5.8 14.94 3 12.41 3 9.3C3 6.77 5.04 4.8 7.58 4.8C9 4.8 10.36 5.46 11.2 6.5C12.04 5.46 13.4 4.8 14.82 4.8C17.36 4.8 19.4 6.77 19.4 9.3C19.4 12.41 16.6 14.94 11.7 19.33L12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="24" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M23 24H40V19H35V14H30V19H23" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 17L16 10L24 17L16 24L8 17Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 17L32 10L40 17L32 24L24 17Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 24L20.5 28.5C22.2 30.2 25 30.2 26.7 28.5L32 23.2M20 20L23 23C24.7 24.7 27.5 24.7 29.2 23L32 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M12 28L18 34M36 28L30 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 38V14L24 8L38 14V38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 38V28H30V38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 18H18.01M24 18H24.01M30 18H30.01M18 23H18.01M24 23H24.01M30 23H30.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 38H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 33V24M24 33V16M34 33V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18L20 11L27 16L36 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 10V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 19V13.5C12 11.84 13.34 10.5 15 10.5C16.66 10.5 18 11.84 18 13.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13.5 20V12H16.5L17 9H13.5V7.2C13.5 6.33 13.86 6 14.73 6H17V3H14.1C11.38 3 10.5 4.19 10.5 6.45V9H8V12H10.5V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
