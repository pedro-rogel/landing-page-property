"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const handleValueChange = (url: string) => {
    url && window.open(url, "_blank");
  };

  const route = useRouter()

  const socialNetwork = [
    {
      value:
        "https://www.linkedin.com/company/mbras-solu%C3%A7%C3%B5es-imobili%C3%A1rias/",
      label: "Linkedin",
    },
    {
      value: "https://www.instagram.com/mbrasempreendimentos/",
      label: "Instagram",
    },
    {
      value: "https://x.com/mbrasimoveis",
      label: "X",
    },
    {
      value:
        "https://www.glassdoor.com.br/Vis%C3%A3o-geral/Trabalhar-na-MBRAS-EI_IE5440702.13,18.htm",
      label: "Glassdoor",
    },
    {
      value: "https://www.youtube.com/@mbrasempreendimentos",
      label: "Youtube",
    },
  ];

  return (
    <header className="bg-[#000] h-20 flex justify-end items-center  top-0 left-0 w-full z-10 shadow-lg">
      <div className="mr-auto flex gap-5 p-3 max-lg:hidden ">
        <Link href={'/'}>
     
          <Image
            width={100}
            height={100}
            alt="Logo MBRAS"
            src={"https://www.mbras.com.br/mbras-logo-header-light.png"}
            className="bg-[#fff] p-3 rounded-lg"
          />
        </Link>
      </div>

      <ul className="flex gap-8 mr-3 max-[400px]:gap-1 max-[450px]:gap-3 max-lg:mx-auto">
        <li>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="text-white">
              <SelectValue placeholder="Redes Sociais" />
            </SelectTrigger>
            <SelectContent>
              {socialNetwork.map((value, i) => (
                <SelectItem key={i} value={value.value}>
                  {value.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </li>
        <li>
          <Button onClick={() => route.push('/galery')} variant="ghost" className="border">
           Galeria de Fotos
          </Button>
        </li>
        <li>
          <Button onClick={() => route.push('/forms')} variant={"ghost"} className="border">
           Contato
          </Button>
        </li>
      </ul>
    </header>
  );
}
