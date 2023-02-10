import React, { useState } from "react";
import Image from "next/image";
import CollapseColores from "./CollapseColores";
import { SELECCIONAR_BASE } from "@/constants";

export default function Personalizador({ modelo, setPaso }) {
  const { imagen, personalizacion } = modelo;
  const valoresIniciales = {
    base: modelo.personalizacion[0].imagenBase,
    cordon: modelo.personalizacion[1].imagenBase,
    vivos: modelo.personalizacion[2].imagenBase,
  };
  const [color, setColor] = useState(valoresIniciales);

  const handleReturn = () => {
    setPaso(SELECCIONAR_BASE);
    setColor(valoresIniciales);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl font-bold mt-20 ">Personaliza tu guante</h1>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-10 mb-40"
        onClick={() => handleReturn()}
      >
        Cambiar modelo
      </button>
      <div className="flex flex-row items-center w-screen ">
        <div className="flex flex-col justify-center items-center w-1/2">
          <Image
            className="absolute"
            src={imagen}
            width={700}
            height={700}
            alt="Guante"
          />

          <Image
            className="absolute z-10"
            src={color.base}
            width={700}
            height={700}
            alt="Guante"
          />

          <Image
            className="absolute z-20"
            src={color.cordon}
            width={700}
            height={700}
            alt="Guante"
          />

          <Image
            className="absolute z-30"
            src={color.vivos}
            width={700}
            height={700}
            alt="Guante"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 px-40">
          {personalizacion.map((tipo) => (
            <CollapseColores info={tipo} setColor={setColor} key={tipo} />
          ))}
        </div>
      </div>
    </div>
  );
}
