import type { Property } from "@/lib/properties";

export const sectionLabelClass =
  "inline-flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brass";

export const navigationLinks = [
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinkGroups = [
  {
    title: "Properties",
    links: [
      { label: "Lagos", href: "/properties?city=lagos" },
      { label: "Abuja", href: "/properties?city=abuja" },
      { label: "Port Harcourt", href: "/properties?city=port-harcourt" },
      { label: "Luxury Homes", href: "/properties?type=luxury" },
      { label: "New Developments", href: "/properties?badge=new" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Careers", href: "/about#careers" },
      { label: "Press", href: "/about#press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "FAQ", href: "/contact#faq" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
] as const;

export const cityOptions = [
  { label: "All cities", value: "" },
  { label: "Lagos", value: "lagos" },
  { label: "Abuja", value: "abuja" },
  { label: "Port Harcourt", value: "port-harcourt" },
] as const;

export const propertyTypeOptions = [
  { label: "Any type", value: "" },
  { label: "Detached Duplex", value: "detached-duplex" },
  { label: "Semi-Detached", value: "semi-detached" },
  { label: "Terrace", value: "terrace" },
  { label: "Flat / Apartment", value: "flat-apartment" },
  { label: "Penthouse", value: "penthouse" },
  { label: "Land", value: "land" },
] as const;

export const buyBudgetOptions = [
  { label: "Any budget", value: "" },
  { label: "Under ₦50M", value: "under-50m" },
  { label: "₦50M – ₦100M", value: "50m-100m" },
  { label: "₦100M – ₦250M", value: "100m-250m" },
  { label: "₦250M – ₦500M", value: "250m-500m" },
  { label: "₦500M+", value: "500m-plus" },
] as const;

export const rentBudgetOptions = [
  { label: "Any budget", value: "" },
  { label: "Under ₦5M/yr", value: "under-5m" },
  { label: "₦5M – ₦10M/yr", value: "5m-10m" },
  { label: "₦10M+/yr", value: "10m-plus" },
] as const;

export const bedOptions = [
  { label: "Any beds", value: "" },
  { label: "1+", value: "1" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
  { label: "5+", value: "5" },
] as const;

export type PropertyFilters = {
  category: "" | "buy" | "rent";
  city: string;
  type: string;
  budget: string;
  beds: string;
  badge: string;
};

export const defaultPropertyFilters: PropertyFilters = {
  category: "",
  city: "",
  type: "",
  budget: "",
  beds: "",
  badge: "",
};

const cityValueToLabel: Record<string, string> = {
  lagos: "Lagos",
  abuja: "Abuja",
  "port-harcourt": "Port Harcourt",
};

const propertyTypeValueToLabel: Record<string, string> = {
  "detached-duplex": "Detached Duplex",
  "semi-detached": "Semi-Detached",
  terrace: "Terrace",
  "flat-apartment": "Flat / Apartment",
  penthouse: "Penthouse",
  land: "Land",
};

const badgeValues = new Set(["premium", "new", "featured"]);

type SearchParamsLike = {
  get(name: string): string | null;
};

export function parsePropertyFilters(searchParams: SearchParamsLike): PropertyFilters {
  const category = normalizeCategory(searchParams.get("category"));
  const city = normalizeCity(searchParams.get("city"));
  const type = normalizeType(searchParams.get("type"));
  const budget = normalizeBudget(searchParams.get("budget"), category);
  const beds = normalizeBeds(searchParams.get("beds"));
  const badge = normalizeBadge(searchParams.get("badge"));

  return { category, city, type, budget, beds, badge };
}

export function buildPropertySearchParams(filters: PropertyFilters) {
  const params = new URLSearchParams();

  if (filters.category) params.set("category", filters.category);
  if (filters.city) params.set("city", filters.city);
  if (filters.type) params.set("type", filters.type);
  if (filters.budget) params.set("budget", filters.budget);
  if (filters.beds) params.set("beds", filters.beds);
  if (filters.badge) params.set("badge", filters.badge);

  return params;
}

export function areFiltersEqual(a: PropertyFilters, b: PropertyFilters) {
  return (
    a.category === b.category &&
    a.city === b.city &&
    a.type === b.type &&
    a.budget === b.budget &&
    a.beds === b.beds &&
    a.badge === b.badge
  );
}

export function filterProperties(properties: Property[], filters: PropertyFilters) {
  return properties.filter((property) => {
    if (filters.category && property.category !== filters.category) return false;
    if (filters.city && property.city !== cityValueToLabel[filters.city]) return false;
    if (filters.type && !matchesType(property, filters.type)) return false;
    if (filters.badge && property.badge?.toLowerCase() !== filters.badge) return false;
    if (filters.beds && property.beds < Number(filters.beds)) return false;
    if (filters.budget && !matchesBudget(property, filters.budget, filters.category)) return false;
    return true;
  });
}

function normalizeCategory(value: string | null): PropertyFilters["category"] {
  return value === "buy" || value === "rent" ? value : "";
}

function normalizeCity(value: string | null) {
  if (!value) return "";
  const normalized = value.toLowerCase();
  return normalized in cityValueToLabel ? normalized : "";
}

function normalizeType(value: string | null) {
  if (!value) return "";
  const normalized = value.toLowerCase();
  return normalized === "luxury" || normalized in propertyTypeValueToLabel ? normalized : "";
}

function normalizeBudget(value: string | null, category: PropertyFilters["category"]) {
  if (!value) return "";
  const normalized = value.toLowerCase();
  const categoryOptions = category === "rent" ? rentBudgetOptions : buyBudgetOptions;

  if (categoryOptions.some((option) => option.value === normalized)) {
    return normalized;
  }

  if (category === "") {
    const allBudgetValues = new Set<string>(
      [...buyBudgetOptions, ...rentBudgetOptions].map((option) => option.value),
    );
    if (allBudgetValues.has(normalized)) return normalized;
  }

  return "";
}

function normalizeBeds(value: string | null) {
  if (!value) return "";
  return new Set(["1", "2", "3", "4", "5"]).has(value) ? value : "";
}

function normalizeBadge(value: string | null) {
  if (!value) return "";
  const normalized = value.toLowerCase();
  return badgeValues.has(normalized) ? normalized : "";
}

function matchesType(property: Property, type: string) {
  if (type === "luxury") {
    return property.badge === "PREMIUM" || property.priceValue >= 100000000;
  }

  return property.type === propertyTypeValueToLabel[type];
}

function matchesBudget(
  property: Property,
  budget: string,
  category: PropertyFilters["category"],
) {
  const useRentRanges =
    category === "rent" ||
    budget === "under-5m" ||
    budget === "5m-10m" ||
    budget === "10m-plus";

  if (useRentRanges) {
    if (budget === "under-5m") return property.priceValue < 5000000;
    if (budget === "5m-10m") return property.priceValue >= 5000000 && property.priceValue <= 10000000;
    if (budget === "10m-plus") return property.priceValue >= 10000000;
    return true;
  }

  if (budget === "under-50m") return property.priceValue < 50000000;
  if (budget === "50m-100m") return property.priceValue >= 50000000 && property.priceValue <= 100000000;
  if (budget === "100m-250m") return property.priceValue >= 100000000 && property.priceValue <= 250000000;
  if (budget === "250m-500m") return property.priceValue >= 250000000 && property.priceValue <= 500000000;
  if (budget === "500m-plus") return property.priceValue >= 500000000;
  return true;
}
