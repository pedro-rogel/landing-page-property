import { useState } from "react";
import { propertys } from "../../data/imovel";

export interface socialNetwork {
  socialNetWork: Array<{ value: string; label: string }>;
}
import { Dispatch, SetStateAction } from "react";
import { PropertyData } from "@/models/propertyData";

export default interface MainViewModelProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  propertyType: string;
  setPropertyType: Dispatch<SetStateAction<string>>;
  filteredProperties: Array<PropertyData>;
}

export default function MainViewModel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const filteredProperties = propertys.filter((value) => {
    const matchesSearch =
      value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      propertyType === "all" || (propertyType === "tosell" && value.toSell);
    return matchesSearch && matchesType;
  });
  return {
    searchTerm,
    setSearchTerm,
    propertyType,
    setPropertyType,
    filteredProperties,
  };
}
