import { getSanityData } from "../../lib/sanityQuery";

export async function getDeportes() {
  const query = `*[_type == "deporte"]{_id,nombre}`;
  return await getSanityData(query);
}

export async function getPosicion() {
  const query = `*[_type == "posicion"]{_id,nombre,deporte}`;
  return await getSanityData(query);
}

export async function getModelo() {
  const query = `*[_type == "modelo"]{_id,nombre,descripcion,posicion}`;
  return await getSanityData(query);
}

export async function getMedida() {
  const query = `*[_type == "medida"]{_id,medida,posicion}`;
  return await getSanityData(query);
}

export async function getColor() {
  const query = `*[_type == "color"]{_id,nombre}`;
  return await getSanityData(query);
}

export async function getBandera() {
  const query = `*[_type == "bandera"]{_id,nombre,imagen{asset->{url}}} `;
  return await getSanityData(query);
}

export async function getTexto() {
  const query = `*[_type == "texto"]{texto,tipografia}`;
  return await getSanityData(query);
}

export async function getTipografia() {
  const query = `*[_type == "tipografia"]{_id,nombre}`;
  return await getSanityData(query);
}

export async function getLogotipo() {
  const query = `*[_type == "logotipo"]{_id,nombre,imagen{asset->{url}}}`;
  return await getSanityData(query);
}

export async function getNumero() {
  const query = `*[_type == "numero"]{_id,nombre,imagen{asset->{url}}}`;
  return await getSanityData(query);
}

export async function getCanasta() {
  const query = `*[_type == "canasta"]{_id,nombre,descripcion,coloresBase[]{_key,color,imagen{asset->{url}}},coloresCordones[]{_key,color,imagen{asset->{url}}},coloresCosturas[]{_key,color,imagen{asset->{url}}},modelo}`;
  return await getSanityData(query);
}

export async function getPalmaexterna() {
  const query = `*[_type == "palmaExterna"]{_id,nombre,descripcion,modelo,imgBase{asset->{url}}} `;
  return await getSanityData(query);
}

export async function getPalmainterna() {
  //es posible que necesite cambios en logotipos
  const query = `*[_type == "palmaInterna"]{_id,nombre,descripcion,modelo,coloresBase[]{_key,color,imagen{asset->{url}}},imgBase{asset->{url}},coloresLatiguillos[]{_key,color,imagen{asset->{url}}},logotipos[]{logotipo}}`;
  return await getSanityData(query);
}

export async function getLatigo() {
  const query = `*[_type == "latigo"]{_id,nombre,descripcion,imgBase{asset->{url}}} `;
  return await getSanityData(query);
}

export async function getPulgar() {
  //es posible que necesite cambios en logotipo
  const query = `*[_type == "pulgar"]{_id,nombre,descripcion,modelo,coloreBase{asset->{url}},colores[]{_key,color},bandera[]{_key,bandera},logotipo[]{logotipo},texto[]{_key,texto},numero[]{_key,numero}}`;
  return await getSanityData(query);
}

export async function getIndice() {
  const query = `*[_type == "pulgar"]{_id,nombre,descripcion,modelo,coloreBase{asset->{url}},colores[]{_key,color}}`;
  return await getSanityData(query);
}

export async function getMedio() {
  const query = `*[_type == "medio"]{_id,nombre,descripcion,modelo,coloreBase{asset->{url}},colores[]{_key,color}}`;
  return await getSanityData(query);
}

export async function getAnular() {
  const query = `*[_type == "anular"]{_id,nombre,descripcion,modelo,coloreBase{asset->{url}},colores[]{_key,color}}`;
  return await getSanityData(query);
}

export async function getMenique() {
  //es posible que necesite cambios en logotipos
  const query = `*[_type == "menique"]{_id,nombre,descripcion,modelo,coloreBase{asset->{url}},colores[]{_key,color},bandera[]{_key,bandera},logotipo[]{logotipo},texto[]{_key,texto},numero[]{_key,numero}}`;
  return await getSanityData(query);
}
