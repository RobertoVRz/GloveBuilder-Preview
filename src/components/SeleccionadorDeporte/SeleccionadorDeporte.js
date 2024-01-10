import { useEffect, useState } from "react";
import CardBase from "@/components/Cards/CardBase";
import { SELECCIONAR_BASE } from "@/constants";
import { getDeportes } from "@/pages/api/sanity";

function SeleccionadorDeporte({ setGuantePreview, setPaso }) {
  const [deportes, setDeportes] = useState([]);

  useEffect(() => {
    getDeportesInfo();
  }, []);

  const getDeportesInfo = async () => {
    const response = await getDeportes();
    if (response) {
      setDeportes(response);
    }
  };

  const handleSelection = (modelo) => {
    setPaso(SELECCIONAR_BASE);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mb-20">Selecciona un deporte</h1>
      <div className="flex flex-row justify-center items-center">
        {deportes?.length > 0 &&
          deportes?.map((deporte) => (
            <h1
              className="text-white text-5xl mx-10"
              key={deporte._id}
              onClick={() => handleSelection(deporte)}
            >
              {deporte.nombre}
            </h1>
          ))}
      </div>
    </div>
  );
}

export default SeleccionadorDeporte;
