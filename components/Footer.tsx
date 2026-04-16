import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterXIcon } from "@/components/Icons";
import { footerLinkGroups } from "@/lib/utils";

const socials = [
  { label: "Twitter", icon: <TwitterXIcon className="h-[18px] w-[18px]" />, href: "#" },
  { label: "Instagram", icon: <InstagramIcon className="h-[18px] w-[18px]" />, href: "#" },
  { label: "LinkedIn", icon: <LinkedInIcon className="h-[18px] w-[18px]" />, href: "#" },
  { label: "Facebook", icon: <FacebookIcon className="h-[18px] w-[18px]" />, href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t-[4px] border-brass bg-navy px-6 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-[20px] font-semibold uppercase tracking-[0.04em] text-warm-white"
            >
              HAVENSTONE
            </Link>
            <p className="mt-3 whitespace-pre-line font-sans text-[14px] leading-[1.6] text-[#8BA0B2]">
              {"Premium Nigerian real estate.\nBuying. Selling. Investing."}
            </p>
            <p className="mt-4 whitespace-pre-line font-sans text-[13px] leading-[1.7] text-ink-muted">
              {"14 Bourdillon Road, Ikoyi\nLagos, Nigeria"}
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-warm-white">
                {group.title}
              </p>
              <div className="flex flex-col gap-2">
                {group.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-sans text-[14px] leading-[2.4] text-[#8BA0B2] transition-colors hover:text-warm-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-sans text-[14px] leading-[2.4] text-[#8BA0B2] transition-colors hover:text-warm-white"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-dark pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-sans text-[13px] text-ink-muted">
            © 2026 Havenstone Properties Ltd. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
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
  );
}
