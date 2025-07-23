'use client'
import ImagesGaleryView from "@/ui/imagesGalery/view";
import ImagesGaleryModel from "@/ui/imagesGalery/viewModel";

export default function ImagesGalery() {
  const {
    isOpen,
    setIsOpen,
    currentImageIndex,
    setCurrentImageIndex,
    nextImage,
    openModal,
    prevImage,
  } = ImagesGaleryModel();
  return (
    <ImagesGaleryView
      currentImageIndex={currentImageIndex}
      isOpen={isOpen}
      nextImage={nextImage}
      openModal={openModal}
      prevImage={prevImage}
      setCurrentImageIndex={setCurrentImageIndex}
      setIsOpen={setIsOpen}
    />
  );
}