import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardBase from "@/components/Cards/CardBase";
import { SELECCIONAR_COLOR_BASE } from "@/constants";

export default function SeleccionadorModeloSwiper({
  modelos,
  setGuantePreview,
  setPaso,
}) {
  const handleSelection = (modelo) => {
    setGuantePreview(modelo);
    setPaso(SELECCIONAR_COLOR_BASE);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mb-20">Selecciona un modelo</h1>
      <div className="flex flex-row justify-center items-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        >
          {modelos.map((modelo) => (
            <SwiperSlide>
              <button key={modelo} onClick={() => handleSelection(modelo)}>
                <CardBase key={modelo} modelo={modelo} setPaso={setPaso} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
