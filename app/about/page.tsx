import Link from "next/link";
import { LinkedInIcon } from "@/components/Icons";
import { sectionLabelClass } from "@/lib/utils";

type Value = {
  number: string;
  title: string;
  description: string;
};

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

type PressQuote = {
  publication: string;
  quote: string;
  date: string;
};

const values: Value[] = [
  {
    number: "01",
    title: "Transparency",
    description:
      "No hidden fees, no vague timelines, no 'trust me' handshakes. Every step of every transaction is documented and shared with you in real time.",
  },
  {
    number: "02",
    title: "Quality over quantity",
    description:
      "We'd rather help 10 families find the perfect home than rush 100 through a broken process. Every client gets senior-level attention.",
  },
  {
    number: "03",
    title: "Local expertise",
    description:
      "We don't just sell properties — we know neighbourhoods. School districts, traffic patterns, flood risk, upcoming infrastructure. We share what agents typically hide.",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Adeyemi Ogundimu",
    title: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Amina Bello-Kano",
    title: "Head of Sales",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Chinedu Okwuosa",
    title: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Oluwaseun Adeyinka",
    title: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const positions = [
  ["Senior Property Advisor", "Lagos · Full-time"],
  ["Marketing Coordinator", "Abuja · Full-time"],
  ["Client Success Associate", "Lagos · Full-time"],
  ["Property Valuation Analyst", "Port Harcourt · Contract"],
] as const;

const pressQuotes: PressQuote[] = [
  {
    publication: "BusinessDay",
    quote:
      "Havenstone is quietly setting a new standard for property transactions in Lagos. Their data-driven approach and client-first model is a breath of fresh air.",
    date: "March 2026",
  },
  {
    publication: "TechCabal",
    quote:
      "In a market plagued by opacity, Havenstone's commitment to transparency has earned them a fiercely loyal client base across three Nigerian cities.",
    date: "January 2026",
  },
  {
    publication: "The Guardian Nigeria",
    quote:
      "The company's 14-day average sell time — compared to the industry's 45 — speaks volumes about their marketing effectiveness and buyer network.",
    date: "November 2025",
  },
];

export default function AboutPage() {
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
              <span>About</span>
            </nav>
            <p className="mt-8 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brass-light">
              OUR STORY
            </p>
            <h1 className="mt-5 font-display text-[36px] font-semibold leading-[1.04] text-warm-white md:text-[52px]">
              <span className="block">Built on trust.</span>
              <span className="block text-brass">Driven by results.</span>
            </h1>
            <p className="mt-6 max-w-[640px] font-sans text-[17px] leading-[1.7] text-[#8BA0B2] md:text-[18px]">
              Havenstone was founded in 2018 with a single mission: to bring transparency,
              professionalism, and genuine care to Nigerian real estate. Six years later,
              we've helped over 4,000 families find home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className={sectionLabelClass}>WHO WE ARE</p>
            <h2 className="mt-4 font-display text-[34px] font-medium leading-[1.08] text-navy md:text-[40px]">
              A different kind of real estate company
            </h2>
            <div className="mt-6 space-y-4 font-sans text-[16px] leading-[1.7] text-ink-muted">
              <p>
                Havenstone was born out of frustration. Our founders — seasoned
                professionals in law, finance, and property development — saw firsthand how
                broken the Nigerian property market was. Misleading listings, hidden fees,
                zero accountability.
              </p>
              <p>
                They built Havenstone as the company they wished had existed when they were
                buying their own homes. Every process is transparent. Every property is
                verified. Every client gets a dedicated advisor who answers their phone on
                the first ring.
              </p>
              <p>
                Today, we operate across Lagos, Abuja, and Port Harcourt with a team of 45
                specialists. We're not the biggest — we're the most trusted.
              </p>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-[8px] bg-paper">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Havenstone team working from a modern office"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="bg-paper px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className={sectionLabelClass}>OUR VALUES</p>
            <h2 className="mt-4 font-display text-[32px] font-medium text-navy md:text-[40px] lg:text-[44px]">
              What we stand for
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="rounded-[4px] border border-border bg-warm-white px-8 py-10">
                <p className="font-display text-[48px] leading-none text-brass/30">{value.number}</p>
                <h3 className="mt-4 font-sans text-[20px] font-medium text-ink">{value.title}</h3>
                <p className="mt-2 font-sans text-[15px] leading-[1.7] text-ink-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div>
            <p className={sectionLabelClass}>LEADERSHIP</p>
            <h2 className="mt-4 font-display text-[32px] font-medium text-navy md:text-[40px] lg:text-[44px]">
              Meet the team
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="group">
                <div className="overflow-hidden rounded-[4px] bg-paper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-4 font-sans text-[18px] font-medium text-ink">{member.name}</h3>
                <p className="mt-1 font-sans text-[14px] text-ink-muted">{member.title}</p>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} LinkedIn profile`}
                  className="mt-3 inline-flex text-ink-muted transition-colors hover:text-brass"
                >
                  <LinkedInIcon className="h-4 w-4" />
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
              <p className="font-display text-[40px] font-semibold text-warm-white">{value}</p>
              <p className="mt-1 font-sans text-[14px] text-[#8BA0B2]">{label}</p>
              <p className="mt-1 font-sans text-[12px] text-ink-muted">{sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div>
            <p className={sectionLabelClass}>CAREERS</p>
            <h2 className="mt-4 font-display text-[34px] font-medium leading-[1.08] text-navy md:text-[40px]">
              Join our team
            </h2>
            <div className="mt-6 space-y-4 font-sans text-[16px] leading-[1.7] text-ink-muted">
              <p>
                We're always looking for ambitious, client-obsessed people who want to
                redefine how real estate works in Nigeria. If that sounds like you, we'd
                love to talk.
              </p>
              <p>
                We offer competitive salaries, performance bonuses, flexible work
                arrangements, and the chance to work with some of the best properties in the
                country.
              </p>
            </div>
          </div>
          <div className="rounded-[4px] border border-border bg-paper p-8">
            <h3 className="font-sans text-[18px] font-medium text-ink">Open positions</h3>
            <div className="mt-6">
              {positions.map(([title, detail], index) => (
                <div
                  key={title}
                  className={`${index < positions.length - 1 ? "border-b border-border pb-5" : ""} ${index > 0 ? "pt-5" : ""}`}
                >
                  <p className="font-sans text-[16px] font-medium text-ink">{title}</p>
                  <p className="mt-1 font-sans text-[13px] text-ink-muted">{detail}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-brass transition-colors hover:text-brass-light"
            >
              View all openings
            </Link>
          </div>
        </div>
      </section>

      <section id="press" className="bg-paper px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div>
            <p className={sectionLabelClass}>IN THE PRESS</p>
            <h2 className="mt-4 font-display text-[32px] font-medium text-navy md:text-[40px] lg:text-[44px]">
              What people are saying
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pressQuotes.map((quote) => (
              <article key={quote.publication} className="rounded-[4px] border border-border bg-warm-white p-8">
                <p className="font-display text-[20px] italic text-ink-muted">{quote.publication}</p>
                <p className="mt-3 font-sans text-[16px] italic leading-[1.7] text-ink-muted">
                  “{quote.quote}”
                </p>
                <p className="mt-4 font-sans text-[13px] text-[#9CA3AF]">{quote.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
