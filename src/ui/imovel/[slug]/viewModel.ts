import { notFound } from "next/navigation";
import { propertys } from "../../../data/imovel";

export function ImovelViewModel(params: { slug: string }) {
  const property = propertys.find((p) => p.code === params.slug);

  if (!property) {
    notFound();
  }

  return {
    property,
  };
}
