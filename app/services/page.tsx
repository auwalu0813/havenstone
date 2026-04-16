import Link from "next/link";
import { BuildingIcon, ChartIcon, CheckIcon, HandshakeIcon, KeyIcon } from "@/components/Icons";
import { sectionLabelClass } from "@/lib/utils";

type ServiceOverview = {
  id: string;
  title: string;
  description: string;
  icon: typeof KeyIcon;
};

type ServiceDetail = {
  id: string;
  label: string;
  heading: string;
  description: string[];
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

const serviceOverviews: ServiceOverview[] = [
  {
    id: "buy",
    title: "Buy",
    description: "Tailored property search and negotiation support for discerning buyers.",
    icon: KeyIcon,
  },
  {
    id: "sell",
    title: "Sell",
    description: "Strategic marketing and deal management to maximise speed and price.",
    icon: HandshakeIcon,
  },
  {
    id: "rent",
    title: "Rent",
    description: "End-to-end rental support for tenants and landlords across key markets.",
    icon: BuildingIcon,
  },
  {
    id: "invest",
    title: "Invest",
    description: "Data-led advisory for investors seeking stronger yields and long-term upside.",
    icon: ChartIcon,
  },
];

const serviceDetails: ServiceDetail[] = [
  {
    id: "buy",
    label: "BUYING",
    heading: "Find your dream home",
    description: [
      "Buying property in Nigeria shouldn't be stressful — but too often, it is. From misleading listings to complex documentation, the process is full of landmines.",
      "At Havenstone, we simplify everything. Our buying specialists curate a shortlist based on your exact needs, handle viewings, negotiate on your behalf, and coordinate with legal teams to ensure a clean, secure transaction.",
    ],
    features: [
      "Curated property shortlists matched to your brief",
      "Accompanied viewings with detailed property reports",
      "Price negotiation by experienced market analysts",
      "Full legal due diligence and title verification",
      "Post-purchase support including renovation referrals",
    ],
    ctaLabel: "Start your search",
    ctaHref: "/properties",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    imageAlt: "Home buying consultation with keys and documents",
  },
  {
    id: "sell",
    label: "SELLING",
    heading: "Sell faster. Sell smarter.",
    description: [
      "The average property in Nigeria sits on the market for 45+ days. Our clients sell in 14 days on average — at better prices.",
      "We combine strategic pricing, professional photography, targeted digital marketing, and our network of qualified buyers to get your property the attention it deserves.",
    ],
    features: [
      "Free property valuation by certified appraisers",
      "Professional photography and virtual tour production",
      "Targeted marketing to qualified, pre-approved buyers",
      "Weekly seller reports with viewing stats and feedback",
      "Negotiation and closing handled end-to-end",
    ],
    ctaLabel: "List your property",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    imageAlt: "Elegant residential interior prepared for sale",
  },
  {
    id: "rent",
    label: "RENTING",
    heading: "Hassle-free rentals",
    description: [
      "Whether you're a tenant looking for the perfect apartment or a landlord seeking reliable tenants and peace of mind — we manage the entire rental lifecycle.",
      "Our rental team handles listings, tenant screening, lease agreements, rent collection, and maintenance coordination. You relax — we handle the rest.",
    ],
    features: [
      "Comprehensive tenant screening and verification",
      "Lease drafting and legal compliance",
      "Automated rent collection and disbursement",
      "Property maintenance coordination",
      "Quarterly property inspection reports",
    ],
    ctaLabel: "Find a rental",
    ctaHref: "/properties?category=rent",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    imageAlt: "Refined apartment interior for rental clients",
  },
  {
    id: "invest",
    label: "INVESTING",
    heading: "Grow your wealth with property",
    description: [
      "Nigerian real estate offers some of the highest returns in Africa — but only if you know where to look. Most investors leave money on the table because they lack market data.",
      "Our investment advisory team uses proprietary data on rental yields, capital appreciation trends, and infrastructure development to identify opportunities before the market catches up.",
    ],
    features: [
      "Data-driven market analysis and opportunity reports",
      "Rental yield calculations and ROI projections",
      "Portfolio diversification strategy",
      "Off-plan and pre-construction access",
      "Ongoing asset management and reporting",
    ],
    ctaLabel: "Speak to an advisor",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
    imageAlt: "Modern high-rise buildings representing property investment",
  },
];

function ServiceSection({
  service,
  reverse,
  backgroundClass,
}: {
  service: ServiceDetail;
  reverse: boolean;
  backgroundClass: string;
}) {
  return (
    <section id={service.id} className={`${backgroundClass} px-6 py-16 md:px-10 lg:px-16 lg:py-24`}>
      <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
          <p className={sectionLabelClass}>{service.label}</p>
          <h2 className="mt-4 font-display text-[34px] font-medium leading-[1.08] text-navy md:text-[40px]">
            {service.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {service.description.map((paragraph) => (
              <p key={paragraph} className="font-sans text-[16px] leading-[1.7] text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-8 space-y-4">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-none text-brass" />
                <span className="font-sans text-[15px] leading-[1.7] text-ink-muted">{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href={service.ctaHref}
            className="mt-10 inline-flex items-center justify-center bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
          >
            {service.ctaLabel}
          </Link>
        </div>
        <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <div className="overflow-hidden rounded-[8px] bg-paper">
            <img src={service.image} alt={service.imageAlt} className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-warm-white text-ink">
      <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-32 md:px-10 md:pt-40 lg:px-16 lg:pb-20 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(181,151,90,0.12),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-shell items-end">
          <div className="max-w-4xl pb-2">
            <nav className="flex flex-wrap items-center gap-2 font-sans text-[13px] text-[#8BA0B2]">
              <Link href="/" className="transition-colors hover:text-warm-white">
                Home
              </Link>
              <span>/</span>
              <span>Services</span>
            </nav>
            <p className="mt-8 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brass-light">
              WHAT WE DO
            </p>
            <h1 className="mt-5 font-display text-[36px] font-semibold leading-[1.04] text-warm-white md:text-[52px]">
              <span className="block">Expert property services</span>
              <span className="block text-brass">across Nigeria.</span>
            </h1>
            <p className="mt-6 max-w-[600px] font-sans text-[17px] leading-[1.7] text-[#8BA0B2] md:text-[18px]">
              Whether you're buying your first home, selling an investment property, or
              looking for rental income — our team of specialists is with you at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceOverviews.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="group rounded-[4px] border border-border bg-white p-8 transition-colors hover:border-brass/40"
                >
                  <Icon className="h-12 w-12 text-brass" />
                  <h2 className="mt-5 font-sans text-[20px] font-medium text-ink">{service.title}</h2>
                  <p className="mt-2 font-sans text-[15px] leading-[1.7] text-ink-muted">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex font-sans text-[14px] text-brass transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {serviceDetails.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          reverse={index % 2 === 1}
          backgroundClass={index % 2 === 0 ? "bg-warm-white" : "bg-paper"}
        />
      ))}

      <section className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="relative overflow-hidden bg-navy px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
            <div className="absolute inset-x-0 top-0 h-1 bg-brass" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(181,151,90,0.15),transparent_45%)]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brass-light">
                READY TO START?
              </p>
              <h2 className="mt-4 font-display text-[32px] font-semibold leading-[1.08] text-warm-white md:text-[40px] lg:text-[44px]">
                <span className="block">Let's find the right</span>
                <span className="block text-brass">solution for you.</span>
              </h2>
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
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
