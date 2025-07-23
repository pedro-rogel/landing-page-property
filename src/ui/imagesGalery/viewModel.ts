import { propertyImages } from "@/data/imovel";
import { Dispatch, SetStateAction, useState } from "react";

export interface ImagesGaleryModelProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
  openModal: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
}

export default function ImagesGaleryModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
    );
  };
  return {
    isOpen,
    setIsOpen,
    currentImageIndex,
    setCurrentImageIndex,
    openModal,
    nextImage,
    prevImage,
  };
}
