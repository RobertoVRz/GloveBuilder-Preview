import React from "react";
import CardBase from "@/components/Cards/CardBase";
import { SELECCIONAR_COLOR_BASE } from "@/constants";

export default function SeleccionadorModelo({
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
        {modelos.map((modelo) => (
          <button key={modelo} onClick={() => handleSelection(modelo)}>
            <CardBase key={modelo} modelo={modelo} setPaso={setPaso} />
          </button>
        ))}
      </div>
    </div>
  );
}
