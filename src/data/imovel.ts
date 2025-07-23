import {
  Car,
  Home,
  Shield,
  School,
  Hospital,
  Trees,
  RulerDimensionLine,
} from "lucide-react";
import { PropertyData } from "@/models/propertyData";

export const propertyImages = [
  "https://img.mbras.com.br/property_photos/MB18004/118d84fd-718e-4f7c-aed4-50a952ab79c2.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/255ea40a-7701-47c2-beb7-d41985eaf2d9.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/9ca71c73-38df-48a2-b245-4099d9054fed.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/6d654c90-5634-4979-8622-364b2c1bbb89.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/3f61efe9-24a4-4917-b6c8-5eedaca6c78b.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/80e88526-5a03-4f4e-942d-24529d74593b.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/1e7024e8-4483-4a9d-9ca2-9accb1884d8f.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/02b76a72-ca38-4a96-a1c7-e3faa838a25d.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/1507a78d-2073-45b3-9c6e-06ac77fd7d2d.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/69f25d37-4099-49d2-937d-99b4b52f55ab.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB4919/654079ec-288c-442d-a08a-27c5a58c7344.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
 
  "https://img.mbras.com.br/property_photos/MB16912/0329a7fc-71f0-4a45-a3d2-71cc25bf3ede.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB16655/65e5ca80-e5a7-4217-ba37-11f7ebf61644.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB16912/e6e181e0-c799-41a5-9c28-4a055cd88516.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/728b84c8-b622-4f78-a881-65b0f1f454f5.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
];

export const propertys: Array<PropertyData> = [
  {
    name: "ITACEMA 366",
    code: "MB18004",
    tagline: "Viva o melhor do Itaim Bibi",
    location: "Itaim Bibi, São Paulo",
    toSell: true, // para fazer a logica do filtro,
    phone: "551151856999",
    summary: {
      details: "145 m² | 3 dorms (1 suíte)",
      parking: "1 vaga",
    },
    images: [
      "https://img.mbras.com.br/property_photos/MB16655/65e5ca80-e5a7-4217-ba37-11f7ebf61644.jpeg?tr=f-auto,q-auto,pr=true,w=auto",
    ],
    about: {
      description:
        "Em uma das ruas mais cobiçadas do Itaim, o ITACEMA 366 combina tranquilidade, mobilidade e uma infraestrutura completa ao seu redor. A poucos passos de restaurantes renomados, lojas exclusivas, centros comerciais premium e serviços essenciais, proporcionando máxima praticidade ao seu dia a dia.",
      highlights: [
        "145 m² | 3 dormitórios (1 suíte)",
        "Sala ampla com excelente iluminação natural",
        "Planta quadrada e inteligente, maximizando espaços",
        "1 vaga de garagem",
      ],
    },
    characteristics: [
      { icon: RulerDimensionLine, label: "Área Total", value: "145 m²" },
      { icon: Home, label: "Dormitórios", value: "3 (sendo 1 suíte)" },
      { icon: Car, label: "Vagas", value: "1 vaga de garagem" },
    ],
    neighborhoodDifferentials: [
      {
        icon: Shield,
        iconColor: "text-blue-600",
        iconBackground: "bg-blue-100",
        title: "Segurança Reforçada",
        description: "15º DP a apenas 280m de distância",
      },
      {
        icon: School,
        iconColor: "text-purple-600",
        iconBackground: "bg-purple-100",
        title: "Educação de Excelência",
        description: "Pueri Domus (140m), Meu Castelinho e Gracinha (400m)",
      },
      {
        icon: Hospital,
        iconColor: "text-red-600",
        iconBackground: "bg-red-100",
        title: "Saúde de Referência",
        description: "Hospital Sancta Maggiore (1km), São Luiz Itaim (1,4km)",
      },
      {
        icon: Trees,
        iconColor: "text-green-600",
        iconBackground: "bg-green-100",
        title: "Lazer e Cultura",
        description:
          "Clube Pinheiros, Harmonia, Parque Ibirapuera, Parque do Povo",
      },
    ],
    walkDistanceStats: [
      { value: "15+", label: "Restaurantes Premium" },
      { value: "3", label: "Shoppings Centers" },
      { value: "5", label: "Supermercados" },
      { value: "10+", label: "Escolas de Elite" },
    ],
    contact: {
      whatsappNumber: "5511977998888",
      formId: "mbljlonp",
    },
  },
  {
    name: "RESIDENCIAL JARDIM PAULISTA",
    code: "MB16912",
    phone: "551151856999",
    tagline: "Elegância no coração de São Paulo",
    location: "Jardim Paulista, São Paulo",
    summary: {
      details: "752 m² | 8 suítes",
      parking: "12 vagas",
    },
    images: [
      "https://img.mbras.com.br/property_photos/MB16912/e6e181e0-c799-41a5-9c28-4a055cd88516.jpeg?tr=f-auto,q-auto,pr=true,w=auto",
      "https://img.mbras.com.br/property_photos/MB16912/0329a7fc-71f0-4a45-a3d2-71cc25bf3ede.jpeg?tr=f-auto,q-auto,pr=true,w=auto",
      "https://img.mbras.com.br/property_photos/MB4919/654079ec-288c-442d-a08a-27c5a58c7344.jpeg?tr=f-auto,q-auto,pr=true,w=auto",
    ],
    about: {
      description:
        "Localizada no Jardim Paulistano, área nobre de São Paulo, esta propriedade destaca-se por seus mais de 1.027 m² de construção, representando um exemplo de conforto e design moderno.",
      highlights: [
        "720 m² | 8 suítes",
        "Varanda gourmet com vista panorâmica",
        "Acabamentos de alto padrão",
        "12 vagas de garagem cobertas",
      ],
    },
    characteristics: [
      { icon: RulerDimensionLine, label: "Área Total", value: "720 m²" },
      { icon: Home, label: "Suítes", value: "8" },
      { icon: Car, label: "Vagas", value: "12 vagas de garagem" },
    ],
    neighborhoodDifferentials: [
      {
        icon: Shield,
        iconColor: "text-blue-600",
        iconBackground: "bg-blue-100",
        title: "Segurança 24h",
        description: "Portaria e segurança 24 horas no edifício",
      },
      {
        icon: School,
        iconColor: "text-purple-600",
        iconBackground: "bg-purple-100",
        title: "Educação Premium",
        description: "Colégio Bandeirantes e outras escolas renomadas",
      },
      {
        icon: Hospital,
        iconColor: "text-red-600",
        iconBackground: "bg-red-100",
        title: "Saúde Completa",
        description: "Hospital Sírio-Libanês e Einstein próximos",
      },
      {
        icon: Trees,
        iconColor: "text-green-600",
        iconBackground: "bg-green-100",
        title: "Cultura e Lazer",
        description: "MASP, Trianon, Parque Ibirapuera",
      },
    ],
    walkDistanceStats: [
      { value: "20+", label: "Restaurantes Gourmet" },
      { value: "5", label: "Shopping Centers" },
      { value: "8", label: "Supermercados" },
      { value: "12+", label: "Escolas Particulares" },
    ],
    contact: {
      whatsappNumber: "5511977998888",
      formId: "mbljlonp",
    },
    toSell: true,
  },
  {
    name: "VILA MADALENA",
    toSell: false,
    phone: "551151856999",
    code: "MB4919",
    tagline: "Modernidade e charme boêmio",
    location: "Vila Madalena, São Paulo",
    summary: {
      details: "386 m² | 4 suítes",
      parking: "6 vagas",
    },
    images: [
      "https://img.mbras.com.br/property_photos/MB4919/654079ec-288c-442d-a08a-27c5a58c7344.jpeg?tr=f-auto,q-auto,pr=true,w=auto",
    ],
    about: {
      description:
        "Belíssimo apartamento em uma das ruas mais nobres e charmosas da Vila Madalena. Condomínio ícone, desenhado pelo renomado escritório Aflalo & Gasparini, estrutura de lazer, de fácil acesso as principais vias da região e apenas poucos metros do Mambo e melhores restobares de São Paulo",
      highlights: [
        "386 m² | 4 dormitórios (4 suítes)",
        "4 quartos",
        "4 suítes",
        "6 vagas de garagem",
      ],
    },
    characteristics: [
      { icon: RulerDimensionLine, label: "Área Total", value: "180 m²" },
      { icon: Home, label: "Dormitórios", value: "4 (sendo 2 suítes)" },
      { icon: Car, label: "Vagas", value: "2 vagas + depósito" },
    ],
    neighborhoodDifferentials: [
      {
        icon: Shield,
        iconColor: "text-blue-600",
        iconBackground: "bg-blue-100",
        title: "Bairro Seguro",
        description: "Policiamento constante e comunidade unida",
      },
      {
        icon: School,
        iconColor: "text-purple-600",
        iconBackground: "bg-purple-100",
        title: "Educação Criativa",
        description: "Escolas alternativas e cursos de arte",
      },
      {
        icon: Hospital,
        iconColor: "text-red-600",
        iconBackground: "bg-red-100",
        title: "Saúde Acessível",
        description: "Hospital das Clínicas e UBS próximos",
      },
      {
        icon: Trees,
        iconColor: "text-green-600",
        iconBackground: "bg-green-100",
        title: "Vida Cultural",
        description: "Bares, galerias, teatro e vida noturna",
      },
    ],
    walkDistanceStats: [
      { value: "30+", label: "Bares e Restaurantes" },
      { value: "2", label: "Shopping Centers" },
      { value: "6", label: "Supermercados" },
      { value: "15+", label: "Galerias de Arte" },
    ],
    contact: {
      whatsappNumber: "5511977998888",
      formId: "mbljlonp",
    },
  },
];
