"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HamburgerIcon } from "@/components/Icons";
import { navigationLinks } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-warm-white shadow-[0_10px_30px_rgba(13,27,42,0.08)] backdrop-blur-md"
          : "bg-warm-white"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-shell items-center justify-between px-6 md:h-[72px] md:px-10 lg:px-16">
        <div className="w-full md:w-1/4">
          <Link
            href="/"
            className="font-display text-[22px] font-semibold uppercase tracking-[0.04em] text-navy"
          >
            HAVENSTONE
          </Link>
        </div>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-9">
          {navigationLinks.map((link) => {
            const active = isActivePath(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[13px] uppercase tracking-[0.06em] transition-colors hover:text-navy ${
                  active ? "font-medium text-navy" : "font-normal text-ink-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex md:w-1/4 md:items-center md:justify-end md:gap-6">
          <p className="font-sans text-[13px] font-normal text-ink-muted">+234 901 234 5678</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-navy px-6 py-2.5 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
          >
            List Your Property
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-navy md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <HamburgerIcon className="h-5 w-5" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-warm-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-sans text-[13px] uppercase tracking-[0.06em] ${
                    active ? "font-medium text-navy" : "font-normal text-ink-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <p className="pt-2 font-sans text-[13px] text-ink-muted">+234 901 234 5678</p>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-navy px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-warm-white"
            >
              List Your Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
