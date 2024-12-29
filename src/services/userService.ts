import axios from "axios";

// Función para obtener usuarios desde la API
export const fetchUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=50");
    return response.data.results;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw new Error("No se pudo obtener los usuarios");
  }
};
