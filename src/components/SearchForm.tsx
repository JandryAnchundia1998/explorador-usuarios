import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 p-4">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        className="flex-1 p-2 border border-gray-300 rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
