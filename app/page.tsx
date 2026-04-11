"use client";

import type { ReactNode, SVGProps } from "react";

const navLinks = ["How It Works", "Restaurants", "Offers", "Blog"];

const steps = [
  {
    number: "01",
    title: "Choose your location",
    description:
      "Enter your address and discover the best restaurants delivering to your neighbourhood across Lagos, Abuja, and Port Harcourt.",
    icon: LocationPinIcon,
  },
  {
    number: "02",
    title: "Pick your meal",
    description:
      "Browse curated menus from top-rated local chefs and restaurants. Filter by cuisine, dietary needs, or mood.",
    icon: UtensilsIcon,
  },
  {
    number: "03",
    title: "Sit back & enjoy",
    description:
      "Track your order in real-time as our riders bring your food fresh and hot straight to your door.",
    icon: DeliveryIcon,
  },
];

const categories = [
  {
    name: "Jollof & Rice Dishes",
    emoji: "🍚",
    count: "85+ dishes",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300&q=80",
  },
  {
    name: "Suya & Grills",
    emoji: "🔥",
    count: "60+ dishes",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&q=80",
  },
  {
    name: "Soups & Swallows",
    emoji: "🥘",
    count: "70+ dishes",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80",
  },
  {
    name: "Small Chops",
    emoji: "🥟",
    count: "45+ dishes",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&q=80",
  },
  {
    name: "Shawarma & Wraps",
    emoji: "🌯",
    count: "50+ dishes",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&q=80",
  },
  {
    name: "Healthy Bowls",
    emoji: "🥗",
    count: "40+ dishes",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80",
  },
];

const features = [
  {
    title: "Real-time tracking",
    description:
      "Watch your order journey from kitchen to your door with live GPS tracking and push notifications.",
    icon: LocationPinIcon,
  },
  {
    title: "Curated restaurants",
    description:
      "Every partner restaurant is quality-verified. We only work with kitchens that meet our freshness and hygiene standards.",
    icon: StarOutlineIcon,
  },
  {
    title: "No hidden fees",
    description:
      "The price you see is the price you pay. Transparent delivery fees and no surprise charges at checkout.",
    icon: CurrencyIcon,
  },
  {
    title: "Scheduled orders",
    description:
      "Plan your meals ahead. Schedule deliveries for breakfast, lunch or dinner — we arrive exactly when you want.",
    icon: ClockIcon,
  },
];

const stats = [
  { value: "2,000+", label: "Partner restaurants across Nigeria" },
  { value: "500K+", label: "Completed deliveries" },
  { value: "45 min", label: "Average delivery time" },
  { value: "4.8/5", label: "Customer satisfaction rating" },
];

const testimonials = [
  {
    quote:
      "Savoria has completely changed how I eat during busy weeks. The restaurant selection is incredible and the food genuinely arrives hot and fresh.",
    name: "Amara Nwosu",
    role: "Food Blogger",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",
  },
  {
    quote:
      "I've tried every delivery app in Lagos. Savoria is the only one I keep coming back to. The tracking is flawless and I've never had a cold order.",
    name: "James Okonkwo",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
  {
    quote:
      "My go-to for office lunch orders. The scheduled delivery feature means food arrives exactly when our team is ready to eat.",
    name: "Chidinma Eze",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=80&q=80",
  },
];

const footerColumns = [
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "Blog"],
  },
  {
    title: "For Restaurants",
    links: ["Partner with us", "Restaurant portal", "Marketing tools", "Help center"],
  },
  {
    title: "Support",
    links: ["Contact us", "FAQ", "Privacy policy", "Terms of service"],
  },
];

function LogoMark() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--amber)]">
      <FlameLeafIcon className="h-3.5 w-3.5 text-[var(--bg-primary)]" />
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--amber)]">
      {children}
    </p>
  );
}

function SavoriaLogo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <LogoMark />
      <span className="font-display text-[20px] font-semibold lowercase text-[var(--cream)]">
        savoria
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)] text-[var(--cream)]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(12,12,12,0.9)] backdrop-blur-md">
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-6 md:h-16 md:px-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-16">
          <div className="flex items-center">
            <SavoriaLogo />
          </div>
          <div className="hidden items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[14px] font-normal text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="hidden items-center justify-end gap-5 lg:flex">
            <a
              href="#"
              className="text-[14px] font-normal text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-full bg-[var(--amber)] px-5 py-2 text-[14px] font-medium text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
            >
              Get started
            </a>
          </div>
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)] lg:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </nav>

      <section
        className="relative flex min-h-[calc(100vh-60px)] items-center overflow-hidden pt-[60px] md:min-h-[calc(100vh-64px)] md:pt-16 lg:min-h-[calc(100vh-64px)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(212, 144, 60, 0.18), transparent 32%)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.16),rgba(12,12,12,0.94))]" />
        <div className="relative mx-auto grid w-full max-w-[1280px] gap-14 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-center lg:px-16 lg:py-20 xl:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] xl:py-24">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--amber)]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--muted)]">
                NOW DELIVERING IN LAGOS, ABUJA &amp; PH
              </span>
            </div>

            <h1 className="mt-8 max-w-[620px] font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--cream)] sm:text-[48px] lg:text-[64px]">
              Food that
              <br />
              <span className="text-[var(--amber)]">moves you.</span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[16px] font-normal leading-[1.7] text-[var(--muted)] lg:text-[18px]">
              Discover the finest local restaurants and have your favourite Nigerian dishes delivered fresh to your door — in under 30 minutes.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <label className="flex flex-1 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3.5">
                <LocationPinIcon className="h-[18px] w-[18px] shrink-0 text-[var(--muted)]" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="w-full bg-transparent text-[14px] text-[var(--cream)] outline-none placeholder:text-[rgba(168,152,128,0.6)]"
                />
              </label>
              <button
                type="button"
                className="whitespace-nowrap rounded-xl bg-[var(--amber)] px-6 py-3.5 text-[14px] font-semibold text-[var(--bg-primary)] transition-colors duration-300 hover:bg-[var(--amber-hover)]"
              >
                Find restaurants
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                ["45min", "avg. delivery"],
                ["4.8★", "app rating"],
                ["2,000+", "restaurants"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[16px] font-semibold text-[var(--cream)]">{value}</span>
                  <span className="text-[13px] font-normal text-[var(--muted)]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[430px] lg:block xl:min-h-[500px]">
            <div className="absolute left-8 top-6 h-72 w-72 rounded-full bg-[rgba(212,144,60,0.08)] blur-3xl" />
            <div className="absolute bottom-4 right-8 h-64 w-64 rounded-full bg-[rgba(242,237,228,0.05)] blur-3xl" />

            <div className="absolute left-2 top-6 w-[232px] rotate-[-3deg] rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 shadow-float xl:left-8 xl:top-10 xl:w-[252px]">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=120&q=80"
                  alt="Jollof Rice & Chicken"
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div>
                  <p className="text-[15px] font-medium text-[var(--cream)]">Jollof Rice &amp; Chicken</p>
                  <p className="mt-1 text-[13px] text-[var(--muted)]">The Yellow Chilli</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[14px] font-semibold text-[var(--amber)]">₦4,500</span>
                <span className="rounded-full bg-[rgba(212,144,60,0.15)] px-2.5 py-1 text-[11px] text-[var(--amber)]">
                  25 min
                </span>
              </div>
            </div>

            <div className="absolute right-0 top-[238px] w-[232px] rotate-[2deg] rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 shadow-float xl:right-6 xl:top-[280px] xl:w-[252px]">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=120&q=80"
                  alt="Suya Platter"
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div>
                  <p className="text-[15px] font-medium text-[var(--cream)]">Suya Platter</p>
                  <p className="mt-1 text-[13px] text-[var(--muted)]">Yahuza Suya Spot</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[14px] font-semibold text-[var(--amber)]">₦3,200</span>
                <span className="rounded-full bg-[rgba(212,144,60,0.15)] px-2.5 py-1 text-[11px] text-[var(--amber)]">
                  18 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[620px] text-center">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              Three simple steps
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-[48px] font-bold leading-none text-[rgba(212,144,60,0.2)]">
                    {step.number}
                  </p>
                  <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(212,144,60,0.1)]">
                    <Icon className="h-[22px] w-[22px] text-[var(--amber)]" />
                  </div>
                  <h3 className="mt-5 text-[20px] font-semibold text-[var(--cream)]">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[var(--muted)]">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>EXPLORE</SectionLabel>
              <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
                Browse by cuisine
              </h2>
            </div>
            <a
              href="#"
              className="hidden border-b border-[var(--border)] pb-1 text-[14px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)] md:inline-flex"
            >
              View all →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] transition-colors duration-300 hover:border-[rgba(212,144,60,0.4)]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,12,12,0.92)_0%,rgba(12,12,12,0.42)_40%,rgba(12,12,12,0)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.emoji}</span>
                    <span className="text-[16px] font-semibold text-[var(--cream)]">{category.name}</span>
                  </div>
                  <p className="mt-1 text-[12px] text-[var(--muted)]">{category.count}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <a
              href="#"
              className="inline-flex border-b border-[var(--border)] pb-1 text-[14px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
            >
              View all →
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionLabel>WHY SAVORIA</SectionLabel>
            <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-[var(--cream)] md:text-[34px] lg:text-[40px]">
              Built for people who
              <br />
              <span className="text-[var(--amber)]">love great food.</span>
            </h2>
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.7] text-[var(--muted)]">
              We partner only with restaurants that meet our quality standards. Every meal is prepared fresh, packed with care, and delivered fast — because you deserve better than lukewarm food in a soggy bag.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-2xl border border-[var(--border)] bg-[rgba(22,22,22,0.55)] p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(212,144,60,0.1)]">
                      <Icon className="h-5 w-5 text-[var(--amber)]" />
                    </div>
                    <h3 className="mt-4 text-[16px] font-medium text-[var(--cream)]">{feature.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[var(--muted)]">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] px-8 py-6 md:px-10 md:py-8 lg:px-10 lg:py-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`py-6 ${index !== stats.length - 1 ? "border-b border-[var(--border)]" : ""}`}
              >
                <p className="font-display text-[36px] font-bold text-[var(--cream)]">{stat.value}</p>
                <p className="mt-1 text-[14px] text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[620px] text-center">
            <SectionLabel>REVIEWS</SectionLabel>
            <h2 className="mt-4 font-display text-[32px] font-bold text-[var(--cream)] lg:text-[44px]">
              What our customers say
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-colors duration-300 hover:border-[rgba(212,144,60,0.2)]"
              >
                <div className="flex gap-1 text-[16px] text-[var(--amber)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="mt-6 text-[16px] italic leading-[1.7] text-[var(--muted)]">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[15px] font-medium text-[var(--cream)]">{testimonial.name}</p>
                    <p className="text-[13px] text-[var(--muted)]">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-card)] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div
          className="mx-auto overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-subtle)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(212, 144, 60, 0.16), transparent 34%)",
          }}
        >
          <div className="grid gap-12 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16 lg:py-12">
            <div>
              <SectionLabel>MOBILE APP</SectionLabel>
              <h2 className="mt-4 font-display text-[32px] font-bold leading-tight text-[var(--cream)] lg:text-[44px]">
                Take Savoria
                <br />
                wherever you go
              </h2>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[var(--muted)]">
                Order in seconds, track in real-time and reorder your favourites with one tap. Available on iOS and Android.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#"
                  className="flex min-w-[220px] flex-1 items-center gap-4 rounded-xl bg-[var(--cream)] px-5 py-3 text-[var(--bg-primary)] transition-transform duration-300 hover:-translate-y-0.5 sm:flex-none"
                >
                  <AppleIcon className="h-6 w-6" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[rgba(12,12,12,0.68)]">
                      Download on the
                    </span>
                    <span className="block text-[14px] font-semibold">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex min-w-[220px] flex-1 items-center gap-4 rounded-xl border border-[#3A3A3A] bg-[#2A2A2A] px-5 py-3 text-[var(--cream)] transition-transform duration-300 hover:-translate-y-0.5 sm:flex-none"
                >
                  <PlayStoreIcon className="h-6 w-6 text-[var(--cream)]" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      Get it on
                    </span>
                    <span className="block text-[14px] font-semibold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-center">
              <div className="w-full max-w-[240px] rounded-[32px] border border-[#3A3A3A] bg-[#2A2A2A] p-3 shadow-float">
                <div className="overflow-hidden rounded-[26px] border border-[rgba(255,255,255,0.04)] bg-[linear-gradient(180deg,#1D1D1D_0%,#141414_100%)] p-4">
                  <div className="mx-auto h-1.5 w-16 rounded-full bg-[rgba(242,237,228,0.12)]" />
                  <div className="mt-5 overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&q=80"
                      alt="Savoria app food preview"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[rgba(12,12,12,0.48)] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[13px] font-medium text-[var(--cream)]">Order tracking</p>
                        <p className="mt-1 text-[11px] text-[var(--muted)]">Victoria Island • Rider 8 min away</p>
                      </div>
                      <div className="h-9 w-9 rounded-full bg-[rgba(212,144,60,0.16)]" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 rounded-full bg-[rgba(242,237,228,0.12)]" />
                      <div className="h-2 w-3/4 rounded-full bg-[rgba(242,237,228,0.08)]" />
                      <div className="h-2 w-1/2 rounded-full bg-[rgba(242,237,228,0.08)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div className="max-w-[320px]">
              <SavoriaLogo />
              <p className="mt-4 whitespace-pre-line text-[14px] leading-[1.6] text-[var(--muted)]">
                {"Premium food delivery.\nRestaurant quality, delivered to your door."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-[14px] font-semibold text-[var(--cream)]">{column.title}</p>
                  <div className="mt-4 space-y-2">
                    {column.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-[14px] leading-[2.4] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-[var(--border)] pt-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-[14px] text-[var(--muted)]">© 2026 Savoria Technologies Ltd. All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 md:justify-end">
              <a href="#" aria-label="Twitter" className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="TikTok" className="text-[var(--muted)] transition-colors duration-300 hover:text-[var(--cream)]">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function IconBase({ children, ...props }: SVGProps<SVGSVGElement> & { children?: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function FlameLeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3C10.4 6.2 6.6 7.8 6.6 12.2C6.6 15.5 8.9 18 12 18C15.1 18 17.4 15.5 17.4 12.2C17.4 9.5 15.8 7.1 13.9 5.5C13.5 8 11.8 9.1 10.3 10.1C10.4 7.9 11.1 5.9 12 3Z" fill="currentColor" />
      <path d="M12 11.5C11 12.4 10.3 13.2 10.3 14.4C10.3 15.7 11.1 16.7 12.2 16.7C13.4 16.7 14.2 15.8 14.2 14.5C14.2 13.4 13.6 12.5 12 11.5Z" fill="rgba(12,12,12,0.4)" />
    </svg>
  );
}

function LocationPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 21C15.6 16.8 18 13.9 18 10.5C18 6.9 15.3 4 12 4C8.7 4 6 6.9 6 10.5C6 13.9 8.4 16.8 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </IconBase>
  );
}

function UtensilsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 4V12" />
      <path d="M10 4V12" />
      <path d="M7 8H10" />
      <path d="M8.5 12V20" />
      <path d="M15 4C16.7 5.5 17.5 7.5 17.5 10V20" />
      <path d="M15 4V20" />
    </IconBase>
  );
}

function DeliveryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 13H13" />
      <path d="M13 9H17L20 12V16H18" />
      <path d="M6 16H13" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M3 10H9" />
    </IconBase>
  );
}

function StarOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3.8L14.7 9.3L20.8 10.2L16.4 14.5L17.4 20.6L12 17.8L6.6 20.6L7.6 14.5L3.2 10.2L9.3 9.3L12 3.8Z" />
    </IconBase>
  );
}

function CurrencyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 5V19" />
      <path d="M17 5V19" />
      <path d="M7 9H17" />
      <path d="M7 15H17" />
      <path d="M17 7.5C16.1 6.5 14.9 6 13.3 6C10.8 6 9.5 7 9.5 8.6C9.5 10.4 11.2 10.9 13.1 11.4C15.3 12 17 12.6 17 14.7C17 16.7 15.2 18 12.8 18C11 18 9.4 17.4 8.3 16.2" />
    </IconBase>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8V12L14.8 14.5" />
    </IconBase>
  );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.7 12.4C15.7 10.3 17.5 9.3 17.6 9.2C16.6 7.7 15.1 7.4 14.5 7.4C13.1 7.3 11.7 8.2 11 8.2C10.3 8.2 9.1 7.4 7.9 7.4C5.3 7.5 3 9.5 3 13.2C3 14.8 3.3 16.5 4.2 18C5 19.3 6 20.8 7.4 20.7C8.7 20.7 9.2 19.9 10.8 19.9C12.3 19.9 12.8 20.7 14.2 20.7C15.6 20.7 16.5 19.4 17.3 18.1C18.2 16.7 18.5 15.4 18.5 15.3C18.5 15.2 15.7 14.2 15.7 12.4Z" />
      <path d="M13.7 6.1C14.3 5.4 14.8 4.4 14.7 3.4C13.8 3.4 12.7 4 12.1 4.7C11.5 5.3 11 6.4 11.1 7.4C12.1 7.5 13.1 6.9 13.7 6.1Z" />
    </svg>
  );
}

function PlayStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4.8 4.2L13.9 13.1L16.9 10.1L4.8 4.2Z" fill="#34A853" />
      <path d="M4.8 4.2L4.7 19.8L13.9 13.1L4.8 4.2Z" fill="#4285F4" />
      <path d="M19.3 8.8L16.9 10.1L13.9 13.1L16.9 16.1L19.4 14.7C21.1 13.8 21.1 9.8 19.3 8.8Z" fill="#FBBC04" />
      <path d="M4.7 19.8L16.9 16.1L13.9 13.1L4.7 19.8Z" fill="#EA4335" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.8 3H21L14 11L22.2 21H15.8L10.8 14.9L5.5 21H2.2L9.7 12.4L1.8 3H8.3L12.8 8.6L17.8 3ZM16.7 19.2H18.5L7.3 4.7H5.3L16.7 19.2Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.4 8.3C6.8 8.3 7.9 7.2 7.9 5.8C7.9 4.4 6.8 3.3 5.4 3.3C4.1 3.3 2.9 4.4 2.9 5.8C2.9 7.2 4.1 8.3 5.4 8.3ZM3.3 9.8H7.5V20.7H3.3V9.8ZM10 9.8H14V11.3H14.1C14.7 10.2 16 9.5 17.6 9.5C21 9.5 21.7 11.7 21.7 14.7V20.7H17.6V15.4C17.6 14.1 17.6 12.3 15.7 12.3C13.8 12.3 13.5 13.7 13.5 15.3V20.7H9.4V9.8H10Z" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.8 3C15.2 5 16.4 6.7 18.3 7.6C19.2 8 20.1 8.2 21 8.2V11.6C19.4 11.6 17.8 11.2 16.4 10.4V15.8C16.4 19.2 13.7 21.8 10.3 21.8C6.9 21.8 4.2 19.2 4.2 15.8C4.2 12.4 6.9 9.8 10.3 9.8C10.7 9.8 11.1 9.8 11.5 10V13.5C11.1 13.3 10.7 13.2 10.3 13.2C8.8 13.2 7.6 14.4 7.6 15.8C7.6 17.3 8.8 18.5 10.3 18.5C11.7 18.5 12.9 17.3 12.9 15.8V3H14.8Z" />
    </svg>
  );
}
