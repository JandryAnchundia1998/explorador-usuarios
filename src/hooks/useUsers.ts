import { useQuery } from "react-query";
import { fetchUsers } from "../services/userService";

// Interfaz para los datos del usuario
export interface User {
  name: { first: string; last: string };
  picture: { thumbnail: string };
  email: string;
  location: { country: string };
}

// Hook personalizado para obtener usuarios
export const useUsers = () => {
  return useQuery<User[]>("users", fetchUsers, {
    retry: 2, // Reintenta en caso de error
    staleTime: 300000, // Los datos se consideran frescos por 5 minutos
  });
};
