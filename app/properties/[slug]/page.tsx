import { notFound } from "next/navigation";
import PropertyDetailView from "@/components/PropertyDetailView";
import { allProperties } from "@/lib/properties";

export function generateStaticParams() {
  return allProperties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = allProperties.find((entry) => entry.slug === slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailView property={property} />;
}
