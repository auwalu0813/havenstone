"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { FilterIcon } from "@/components/Icons";
import PropertyCard from "@/components/PropertyCard";
import { allProperties } from "@/lib/properties";
import {
  areFiltersEqual,
  bedOptions,
  buildPropertySearchParams,
  buyBudgetOptions,
  cityOptions,
  defaultPropertyFilters,
  filterProperties,
  parsePropertyFilters,
  propertyTypeOptions,
  rentBudgetOptions,
  type PropertyFilters,
} from "@/lib/utils";

const selectClassName =
  "w-full border border-border bg-white px-3 py-3 font-sans text-[14px] text-ink outline-none transition-colors focus:border-brass";
const PAGE_SIZE = 9;

function PropertiesPageContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const filters = useMemo(() => parsePropertyFilters(searchParams), [searchParams]);

  const filteredProperties = useMemo(() => filterProperties(allProperties, filters), [filters]);
  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / PAGE_SIZE));
  const activePage = Math.min(currentPage, totalPages);
  const paginatedProperties = filteredProperties.slice(
    (activePage - 1) * PAGE_SIZE,
    activePage * PAGE_SIZE,
  );
  const hasActiveFilters = Object.values(filters).some(Boolean);
  const budgetOptions = filters.category === "rent" ? rentBudgetOptions : buyBudgetOptions;

  const updateFilter = <Key extends keyof PropertyFilters>(key: Key, value: PropertyFilters[Key]) => {
    const nextFilters = { ...filters, [key]: value };
    if (areFiltersEqual(filters, nextFilters)) return;
    const nextQuery = buildPropertySearchParams(nextFilters).toString();
    setCurrentPage(1);
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
  };

  const clearFilters = () => {
    if (areFiltersEqual(filters, defaultPropertyFilters)) return;
    router.replace(pathname, { scroll: false });
    setCurrentPage(1);
    setMobileFiltersOpen(false);
  };

  return (
    <main className="bg-warm-white pt-[84px] md:pt-[96px]">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <nav className="flex flex-wrap items-center gap-2 pt-6 font-sans text-[13px] text-ink-muted">
          <Link href="/" className="transition-colors hover:text-navy">
            Home
          </Link>
          <span>/</span>
          <span>Properties</span>
        </nav>

        <div className="mt-6 flex flex-col gap-3 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-[32px] font-medium leading-none text-navy md:text-[44px]">
              Find Your Property
            </h1>
            <p className="mt-3 font-sans text-[16px] text-ink-muted">
              Browse premium properties across Nigeria
            </p>
          </div>
          <p className="font-sans text-[14px] text-ink-muted">
            Showing {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"}
          </p>
        </div>
      </div>

      <div className="sticky top-[60px] z-30 border-y border-border bg-white md:top-[72px]">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between py-4 md:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((open) => !open)}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-ink"
            >
              <FilterIcon className="h-4 w-4" />
              Filters
            </button>
            {hasActiveFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="font-sans text-[13px] font-medium text-brass"
              >
                Clear all
              </button>
            ) : null}
          </div>

          <div className="hidden items-center gap-4 py-4 md:flex">
            <div className="inline-flex overflow-hidden border border-border">
              {[
                { label: "Buy", value: "buy" as const },
                { label: "Rent", value: "rent" as const },
              ].map((option) => {
                const active = filters.category === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateFilter("category", active ? "" : option.value)}
                    className={`min-w-[84px] px-5 py-3 font-sans text-[13px] font-medium uppercase tracking-[0.08em] transition-colors ${
                      active
                        ? "bg-navy text-warm-white"
                        : "border-l border-border bg-transparent text-ink-muted first:border-l-0 hover:text-navy"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <select
              value={filters.city}
              onChange={(event) => updateFilter("city", event.target.value)}
              className={`${selectClassName} max-w-[190px]`}
            >
              {cityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={filters.type}
              onChange={(event) => updateFilter("type", event.target.value)}
              className={`${selectClassName} max-w-[220px]`}
            >
              {propertyTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              {filters.type === "luxury" ? <option value="luxury">Luxury Homes</option> : null}
            </select>
            <select
              value={filters.budget}
              onChange={(event) => updateFilter("budget", event.target.value)}
              className={`${selectClassName} max-w-[220px]`}
            >
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={filters.beds}
              onChange={(event) => updateFilter("beds", event.target.value)}
              className={`${selectClassName} max-w-[150px]`}
            >
              {bedOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {hasActiveFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="font-sans text-[13px] font-medium text-brass"
              >
                Clear all
              </button>
            ) : null}
          </div>

          {mobileFiltersOpen ? (
            <div className="space-y-4 border-t border-border py-4 md:hidden">
              <div className="inline-flex overflow-hidden border border-border">
                {[
                  { label: "Buy", value: "buy" as const },
                  { label: "Rent", value: "rent" as const },
                ].map((option) => {
                  const active = filters.category === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateFilter("category", active ? "" : option.value)}
                      className={`min-w-[84px] px-5 py-3 font-sans text-[13px] font-medium uppercase tracking-[0.08em] transition-colors ${
                        active
                          ? "bg-navy text-warm-white"
                          : "border-l border-border bg-transparent text-ink-muted first:border-l-0"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
              <select
                value={filters.city}
                onChange={(event) => updateFilter("city", event.target.value)}
                className={selectClassName}
              >
                {cityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                value={filters.type}
                onChange={(event) => updateFilter("type", event.target.value)}
                className={selectClassName}
              >
                {propertyTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                {filters.type === "luxury" ? <option value="luxury">Luxury Homes</option> : null}
              </select>
              <select
                value={filters.budget}
                onChange={(event) => updateFilter("budget", event.target.value)}
                className={selectClassName}
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                value={filters.beds}
                onChange={(event) => updateFilter("beds", event.target.value)}
                className={selectClassName}
              >
                {bedOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      </div>

      <section className="mx-auto max-w-shell px-6 py-10 md:px-10 lg:px-16 lg:pb-24">
        {paginatedProperties.length ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>

            {filteredProperties.length > PAGE_SIZE ? (
              <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 font-sans text-[14px] text-ink md:flex-row">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={activePage === 1}
                  className="bg-navy px-5 py-3 text-warm-white transition-colors hover:bg-navy-mid disabled:cursor-not-allowed disabled:bg-border-dark/30"
                >
                  Previous
                </button>
                <p>
                  Page {activePage} of {totalPages}
                </p>
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={activePage === totalPages}
                  className="bg-navy px-5 py-3 text-warm-white transition-colors hover:bg-navy-mid disabled:cursor-not-allowed disabled:bg-border-dark/30"
                >
                  Next
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="rounded-[4px] border border-border bg-white px-6 py-12 text-center">
            <p className="font-display text-[28px] font-medium text-navy">No properties match your criteria</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex items-center justify-center bg-navy px-6 py-[14px] font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-warm-white transition-colors hover:bg-navy-mid"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-warm-white pt-[84px] md:pt-[96px]">
          <div className="mx-auto max-w-shell px-6 py-24 font-sans text-[14px] text-ink-muted md:px-10 lg:px-16">
            Loading properties...
          </div>
        </main>
      }
    >
      <PropertiesPageContent />
    </Suspense>
  );
}
