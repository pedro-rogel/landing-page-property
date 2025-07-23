import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PropertyData } from "@/models/propertyData";

export function PropertyCard({
  property,
  urlSrc,
}: {
  property: PropertyData;
  urlSrc: string;
}) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image
          src={urlSrc}
          alt={property.tagline}
          fill
          className="object-cover"
        />

        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          Destaque
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-[#fff]">
            {property.summary.details}
          </span>
          <div className="flex gap-4"></div>
        </div>
        <Button asChild className="w-full">
          <Link href={`/imovel/${property.code}`}>Mostrar Detalhes</Link>
        </Button>
      </div>
    </div>
  );
}
