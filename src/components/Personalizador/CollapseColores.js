import React from "react";

export default function CollapseColores({ info, setColor }) {
  return (
    <div className=" w-full collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{info.nombre}</div>
      <div className="collapse-content flex flex-row">
        {info.coloresBase.map((color) => (
          <button
            className="w-10 h-10 mr-5 rounded-full"
            style={{ backgroundColor: color.hex }}
            key={color.color}
            onClick={() =>
              setColor((prev) => ({ ...prev, [info.id]: color.imagen }))
            }
          ></button>
        ))}
      </div>
    </div>
  );
}
