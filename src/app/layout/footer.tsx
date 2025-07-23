import { AtSign, MapPin, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">
            Fale Conosco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Número Empresárial",
                value: "+55 11 5185 6999",
                type: "number",
                icon: <PhoneCall />,
              },
              {
                title: "WhatsApp Empresárial",
                value: "+55 11 97799 8888",
                type: "appNumber",
                icon: <Phone />,
              },
              {
                title: "Endereço Empresárial",
                value:
                  "Av. Magalhães de Castro 4.800 Park Tower – 23° andarCidade Jardim - São Paulo - SP05676-120 Brasil",
                type: "address",
                icon: <MapPin />,
              },
              {
                title: "E-mail Empresárial",
                value: "contato@mbras.com.br",
                type: "email",
                icon: <AtSign />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#a9a9a9a7] p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4 text-black">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {service.title}
                </h3>
                <Link
                  href={
                    service.type === "number"
                      ? `tel:${service.value}`
                      : service.type === "appNumber"
                      ? `whatsapp://send?phone=${service.value.trim()}`
                      : service.type === "address"
                      ? `https://maps.app.goo.gl/8FqHgfei2yJPbiKr7`
                      : service.type === "email"
                      ? `mailto:${service.value}`
                      : ""
                  }
                  className="text-[#141414]"
                >
                  {service.value}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white p-5">
        <div className="container mx-auto px-4 flex ">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MBRAS - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
