import { getSanityData } from "../../lib/sanityQuery";

export async function getDeportes() {
  const query = `*[_type == "deporte"]{_id,nombre}`;
  return await getSanityData(query);
}
