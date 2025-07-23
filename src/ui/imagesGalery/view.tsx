"use client";
import { motion } from "framer-motion";
import { propertyImages } from "../../data/imovel";
import { ArrowLeft, ArrowRight, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagesGaleryModelProps } from "./viewModel";
import Image from "next/image";

export default function ImagesGaleryView({isOpen,setIsOpen,currentImageIndex,nextImage,openModal,prevImage}:ImagesGaleryModelProps) {


  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div >
          <div className="bg-white mx-10 rounded-lg flex justify-center">
            <h1 className="text-4xl text-black p-3">Galeria de Fotos</h1>
          </div>
          <div className="grid md:grid-cols-4 gap-x-20 gap-y-5 my-10 mx-10">
            {propertyImages.map((img, i) => (
              <Image
                alt="Galeria de fotos"
                className="object-cover rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer"
                height={300}
                width={300}
                key={i}
                src={img}
                unoptimized
                onClick={() => openModal(i)}
              />
            ))}
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                <CircleX />
              </button>

              <div className="relative max-w-4xl w-full">
                <Image
                width={700}
                height={700}
                unoptimized
                  src={propertyImages[currentImageIndex]}
                  alt="Imagem selecionada"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                <Button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2  bg-white hover:text-white text-black p-2 rounded-full"
                >
                  <ArrowLeft />
                </Button>

                <Button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 bg-white hover:text-white text-black p-2 rounded-full"
                >
                  <ArrowRight />
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
