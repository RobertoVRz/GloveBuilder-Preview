import React from "react";
import Image from "next/image";


export default function CardBase({ modelo }) {
  return (
    <div className="w-96 mx-20 flex flex-col justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-125">
      <Image className="mb-20" src={modelo.imagen} width={500} height={500} alt="Guante" />
      <h1 className="text-5xl">{modelo.nombre}</h1>
      <p className="text-xl my-5">{modelo.descripcion}</p>
      <h2 className="text-4xl">${modelo.precio}</h2>
    </div>
  );
}
