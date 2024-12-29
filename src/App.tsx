import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import UserTable from "./components/UserTable";
import { User, useUsers } from "./hooks/useUsers";
import Pagination from "./components/Pagination";

const App = () => {
  const { data: users, isLoading, isError } = useUsers(); // Hook para obtener los usuarios
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
 // Estado para usuarios filtrados
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const usersPerPage = 10; // Número de usuarios por página

  // Efecto para inicializar los usuarios filtrados cuando se cargan los datos
  useEffect(() => {
    if (users && users.length > 0) {
      setFilteredUsers(users);
    }
  }, [users]);

  // Función para cambiar de página
  const handlePageChange = (page: number) => setCurrentPage(page);

  // Usuarios que se mostrarán en la página actual
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Función para manejar el filtro de búsqueda
  const handleSearch = (query: string) => {
    if (users && users.length > 0) {
      const filtered = users.filter((user: any) =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
      setCurrentPage(1); // Reinicia la paginación al aplicar un filtro
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <p className="text-center">Cargando...</p>
      ) : isError ? (
        <p className="text-center text-red-500">Error al cargar los datos</p>
      ) : (
        <>
          <UserTable users={paginatedUsers} />
          <Pagination
            totalUsers={filteredUsers.length}
            usersPerPage={usersPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;
