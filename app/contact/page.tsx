"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CalendarIcon, EmailIcon, LocationPinIcon, PhoneIcon } from "@/components/Icons";
import { sectionLabelClass } from "@/lib/utils";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof Pick<FormValues, "firstName" | "email" | "message">, string>>;

type Office = {
  name: string;
  address: string;
  phone: string;
  email: string;
};

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "General inquiry",
  message: "",
};

const subjectOptions = [
  "General inquiry",
  "I want to buy",
  "I want to sell",
  "I want to rent",
  "Investment advisory",
  "Careers",
  "Press & media",
  "Other",
] as const;

const offices: Office[] = [
  {
    name: "Lagos Office (HQ)",
    address: "14 Bourdillon Road, Ikoyi, Lagos",
    phone: "+234 901 234 5678",
    email: "hello@havenstone.ng",
  },
  {
    name: "Abuja Office",
    address: "25 Aminu Kano Crescent, Wuse 2, Abuja",
    phone: "+234 802 345 6789",
    email: "abuja@havenstone.ng",
  },
  {
    name: "Port Harcourt Office",
    address: "12 Aba Road, GRA Phase 2, Port Harcourt",
    phone: "+234 803 456 7890",
    email: "ph@havenstone.ng",
  },
];

const faqs = [
  {
    question: "How does the buying process work with Havenstone?",
    answer:
      "Once you contact us, we assign a dedicated advisor who'll understand your requirements — budget, location, property type, and timeline. We then curate a shortlist of verified properties, arrange viewings, and once you've found the one, we handle negotiation, legal due diligence, and documentation through to handover. The typical process takes 2–6 weeks.",
  },
  {
    question: "What are your fees for selling a property?",
    answer:
      "We charge a standard 5% commission on the final sale price, payable only upon successful completion. There are no upfront fees. We invest in professional photography, marketing, and buyer sourcing at our own cost — you only pay when we deliver results.",
  },
  {
    question: "Do you handle both residential and commercial properties?",
    answer:
      "Currently, we specialise in residential properties — including apartments, duplexes, terraces, penthouses, and land. We're expanding into commercial real estate in Q3 2026. If you have a commercial requirement, get in touch and we'll see how we can help.",
  },
  {
    question: "What cities do you operate in?",
    answer:
      "We're currently active in Lagos (including Victoria Island, Ikoyi, Lekki, and Banana Island), Abuja (Maitama, Asokoro, Wuse, Garki), and Port Harcourt (GRA, Peter Odili Road). We plan to expand to Ibadan and Enugu by end of 2026.",
  },
  {
    question: "How do you verify that properties are legitimate?",
    answer:
      "Every property listed on Havenstone goes through our verification process: we confirm title documents (C of O, Governor's Consent, or equivalent), conduct physical inspections, verify the seller's identity and ownership, and check for any encumbrances or legal disputes. Properties that don't pass are not listed.",
  },
  {
    question: "Can I schedule a property viewing online?",
    answer:
      "Absolutely. You can request a viewing from any property page or contact us directly. We offer both in-person and virtual (video call) viewings. For out-of-town buyers, our virtual tours are detailed enough to make informed decisions remotely.",
  },
] as const;

const inputClassName =
  "w-full border border-border bg-white px-4 py-3 font-sans text-[14px] text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brass";
const errorClassName = "mt-1 font-sans text-[13px] text-red-500";

function validateForm(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

function OfficeCard({ office }: { office: Office }) {
  return (
    <article className="rounded-[4px] border border-border bg-paper p-8">
      <h3 className="font-sans text-[18px] font-medium text-ink">{office.name}</h3>
      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <LocationPinIcon className="mt-0.5 h-[18px] w-[18px] flex-none text-brass" />
          <p className="font-sans text-[15px] leading-[1.7] text-ink-muted">{office.address}</p>
        </div>
        <div className="flex items-start gap-3">
          <PhoneIcon className="mt-0.5 h-[18px] w-[18px] flex-none text-brass" />
          <a
            href={`tel:${office.phone.replace(/\s+/g, "")}`}
            className="font-sans text-[15px] leading-[1.7] text-ink-muted transition-colors hover:text-ink"
          >
            {office.phone}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <EmailIcon className="mt-0.5 h-[18px] w-[18px] flex-none text-brass" />
          <a
            href={`mailto:${office.email}`}
            className="font-sans text-[15px] leading-[1.7] text-ink-muted transition-colors hover:text-ink"
          >
            {office.email}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <CalendarIcon className="mt-0.5 h-[18px] w-[18px] flex-none text-brass" />
          <div className="font-sans text-[14px] leading-[1.7] text-ink-muted">
            <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
            <p>Saturday: 9:00 AM – 3:00 PM</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ContactPage() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const isSubmitDisabled = useMemo(
    () => !formValues.firstName.trim() || !formValues.email.trim() || !formValues.message.trim(),
    [formValues.email, formValues.firstName, formValues.message],
  );

  useEffect(() => {
    if (!submitted) {
      setShowSuccess(false);
      return;
    }

    const frame = window.requestAnimationFrame(() => setShowSuccess(true));
    return () => window.cancelAnimationFrame(frame);
  }, [submitted]);

  const updateField = (field: keyof FormValues, value: string) => {
    const nextValues = { ...formValues, [field]: value };
    setFormValues(nextValues);

    if (errors[field as keyof FormErrors]) {
      setErrors((current) => {
        const nextErrors = validateForm(nextValues);
        return { ...current, [field]: nextErrors[field as keyof FormErrors] };
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormValues(initialValues);
    setErrors({});
    setSubmitted(false);
  };

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
              <span>Contact</span>
            </nav>
            <p className="mt-8 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brass-light">
              GET IN TOUCH
            </p>
            <h1 className="mt-5 font-display text-[36px] font-semibold leading-[1.04] text-warm-white md:text-[52px]">
              <span className="block">We'd love to</span>
              <span className="block text-brass">hear from you.</span>
            </h1>
            <p className="mt-6 max-w-[600px] font-sans text-[17px] leading-[1.7] text-[#8BA0B2] md:text-[18px]">
              Whether you have a question about a property, need advice on buying or selling,
              or want to list with us — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-warm-white px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div>
            <h2 className="font-sans text-[24px] font-medium text-ink">Send us a message</h2>
            <p className="mt-3 font-sans text-[15px] leading-[1.7] text-ink-muted">
              Fill out the form below and a team member will get back to you within 24 hours.
            </p>
            <div className="mt-8">
              {submitted ? (
                <div
                  className={`rounded-[4px] border border-[#CDE7D2] bg-[#F3FBF5] px-6 py-8 transition-all duration-300 ease-out ${
                    showSuccess ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8ED19E] bg-[#DFF5E5]">
                    <span className="h-5 w-2.5 rotate-45 border-b-[2px] border-r-[2px] border-[#215B34]" />
                  </div>
                  <h3 className="mt-5 font-sans text-[20px] font-medium text-[#215B34]">
                    Thank you for your message!
                  </h3>
                  <p className="mt-2 font-sans text-[15px] leading-[1.7] text-ink-muted">
                    A member of our team will respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 inline-flex items-center justify-center bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block font-sans text-[13px] font-medium text-ink">
                        First name
                      </span>
                      <input
                        type="text"
                        value={formValues.firstName}
                        onChange={(event) => updateField("firstName", event.target.value)}
                        className={inputClassName}
                      />
                      {errors.firstName ? <p className={errorClassName}>{errors.firstName}</p> : null}
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block font-sans text-[13px] font-medium text-ink">
                        Last name
                      </span>
                      <input
                        type="text"
                        value={formValues.lastName}
                        onChange={(event) => updateField("lastName", event.target.value)}
                        className={inputClassName}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block font-sans text-[13px] font-medium text-ink">Email</span>
                    <input
                      type="email"
                      value={formValues.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className={inputClassName}
                    />
                    {errors.email ? <p className={errorClassName}>{errors.email}</p> : null}
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block font-sans text-[13px] font-medium text-ink">Phone</span>
                    <input
                      type="tel"
                      value={formValues.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      className={inputClassName}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block font-sans text-[13px] font-medium text-ink">Subject</span>
                    <select
                      value={formValues.subject}
                      onChange={(event) => updateField("subject", event.target.value)}
                      className={inputClassName}
                    >
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block font-sans text-[13px] font-medium text-ink">Message</span>
                    <textarea
                      rows={5}
                      value={formValues.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      className={`${inputClassName} resize-none`}
                    />
                    {errors.message ? <p className={errorClassName}>{errors.message}</p> : null}
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="w-full bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid disabled:cursor-not-allowed disabled:bg-navy/50"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {offices.map((office) => (
              <OfficeCard key={office.name} office={office} />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-paper px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className={sectionLabelClass}>FREQUENTLY ASKED</p>
            <h2 className="mt-4 font-display text-[32px] font-medium text-navy md:text-[40px] lg:text-[44px]">
              Common questions
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-[800px] border-t border-border">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-sans text-[16px] font-medium text-ink">{faq.question}</span>
                    <span
                      className={`font-sans text-[20px] text-brass transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="pb-6 font-sans text-[15px] leading-[1.7] text-ink-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
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
                STILL HAVE QUESTIONS?
              </p>
              <h2 className="mt-4 font-display text-[32px] font-semibold leading-[1.08] text-warm-white md:text-[40px] lg:text-[44px]">
                Let's talk.
              </h2>
              <p className="mx-auto mt-4 max-w-[560px] font-sans text-[16px] leading-[1.7] text-[#8BA0B2]">
                Call us directly or visit any of our three offices across Nigeria.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+2349012345678"
                  className="inline-flex items-center justify-center bg-brass px-8 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-navy transition-colors hover:bg-brass-light"
                >
                  Call +234 901 234 5678
                </a>
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center border border-border-dark px-8 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
                >
                  Browse Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
