import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyCard } from "@/components/ui/propertyCard";
import { PropertyData } from "@/models/propertyData";
import MainViewModelProps from "@/ui/main/viewModel";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MainView({
  searchTerm,
  setSearchTerm,
  propertyType,
  setPropertyType,
  filteredProperties,
}: MainViewModelProps) {
  const route = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen">
        <section className="relative h-[80vh]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
            loop
            autoPlay
            muted
          >
            <source
              src={
                "https://img.mbras.com.br/site/hero/vd-hero-hor.mp4?format=mp4&quality=75"
              }
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-4 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Referência em Altíssimo Padrão
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Há mais de uma década no mercado, a MBRAS conecta você a
                propriedades exclusivas no Brasil e ao redor do mundo.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 -mt-16 relative z-10">
          <div className="bg-white p-6 rounded-lg shadow-xl grid grid-cols md:grid-cols-3 gap-4 text-[#000]">
            <Input
              placeholder="Buscar por localização ou pelo nome da propriedade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Propriedades</SelectItem>
                <SelectItem value="tosell">Para vender</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={() =>
                route.push(
                  `/imovel/${filteredProperties.map((code) => code.code)}`
                )
              }
            >
              Buscar{}
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Imóveis em Destaque</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property: PropertyData) => (
              <PropertyCard
                key={property.code}
                property={property}
                urlSrc={
                  property.name === "ITACEMA"
                    ? property.images[0]
                    : property.name === "RESIDENCIAL JARDIM PAULISTA"
                    ? property.images[0]
                    : property.images[0]
                }
              />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
