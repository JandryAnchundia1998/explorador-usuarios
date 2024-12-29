import { motion } from "framer-motion";
import { User } from "../hooks/useUsers";

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => (
  <div>
    {/* Mostrar tabla en pantallas grandes */}
    <motion.table
      className="hidden md:table min-w-full border border-gray-200 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Foto</th>
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Correo</th>
          <th className="border p-2">País</th>
        </tr>
      </thead>
      <tbody >
        {users.map((user, index) => (
          <motion.tr
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <td className="border p-2 flex justify-center items-center">
              <img
                src={user.picture.thumbnail}
                alt="avatar"
                className="rounded-full "
              />
            </td>
            <td className="border p-2">
              {user.name.first} {user.name.last}
            </td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.location.country}</td>
          </motion.tr>
        ))}
      </tbody>
    </motion.table>

    {/* Mostrar tarjetas en dispositivos móviles */}
    <div className="md:hidden grid grid-cols-1 gap-4 mt-4">
      {users.map((user, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <img
            src={user.picture.thumbnail}
            alt="avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-lg font-bold">
              {user.name.first} {user.name.last}
            </p>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-600 text-sm">{user.location.country}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default UserTable;
