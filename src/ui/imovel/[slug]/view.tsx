import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { ImovelViewModel } from "@/ui/imovel/[slug]/viewModel";

export default async function ImovelPageView(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { property } = ImovelViewModel(params);
  return (
    <div className="bg-white text-[#000]">
      <section className="relative h-[70vh] bg-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white">{property.name}</h1>
            <p className="text-xl text-gray-200 mt-2">{property.tagline}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="lg:hidden mb-8">
            <div className="grid grid-cols-2 gap-2">
              {property.images.slice(0, 4).map((img, i) => (
                <div key={i} className="relative aspect-square">
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-[#000]">Descrição</h2>
            <p className="text-gray-700 mb-6">{property.about.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.characteristics.map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <item.icon className="text-[#000]" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <p className="mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 text-[#000]">
            <h2 className="text-2xl font-bold mb-4 text-[#000]">Destaques</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {property.about.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#000]">Vizinhança</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.neighborhoodDifferentials.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className={`p-3 rounded-full ${item.iconBackground} ${item.iconColor}`}
                  >
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4">
              Interessado neste imóvel?
            </h3>

            <div className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <PhoneIcon className="mr-2" />
                <Link
                  href={`whatsapp://send?phone=${property.contact.whatsappNumber}`}
                >
                  Chamar no WhatsApp
                </Link>
              </Button>

              <Button variant="outline" className="w-full">
                <PhoneIcon className="mr-2" />
                <Link href={`tel:${property.phone}`}>Ligar Agora</Link>
              </Button>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Resumo do Imóvel</h4>
              <div className="flex justify-between">
                <span>Código:</span>
                <span className="font-medium">{property.code}</span>
              </div>
              <div className="flex justify-between">
                <span>Localização:</span>
                <span className="font-medium text-right">
                  {property.location}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span
                  className={`font-medium ${
                    property.toSell ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {property.toSell ? "Disponivel" : "Vendido"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-6 rounded-xl">
            <h4 className="font-bold mb-4">Comércios perto do Imóvel</h4>
            <div className="grid grid-cols-2 gap-4">
              {property.walkDistanceStats.map((item, i) => (
                <div key={i} className="text-center">
                  <span className="block text-2xl font-bold text-[#0162b1]">
                    {item.value}
                  </span>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
