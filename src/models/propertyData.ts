import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface PropertyData {
  name: string;
  code: string;
  tagline: string;
  toSell: boolean;
  phone: string;
  location: string;
  summary: {
    details: string;
    parking: string;
  };
  images: Array<string>;
  about: {
    description: string;
    highlights: Array<string>;
  };
  characteristics: Array<{
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    label: string;
    value: string;
  }>;
  neighborhoodDifferentials: Array<{
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    iconColor: string;
    iconBackground: string;
    title: string;
    description: string;
  }>;
  walkDistanceStats: Array<{ value: string; label: string }>;
  contact: {
    whatsappNumber: string;
    formId: string;
  };
}
