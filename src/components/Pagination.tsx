interface Props {
    totalUsers: number;
    usersPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination: React.FC<Props> = ({ totalUsers, usersPerPage, currentPage, onPageChange }) => {
    if (totalUsers === 0) return null;
  
    const totalPages = Math.ceil(totalUsers / usersPerPage);
  
    return (
      <div className="flex justify-center gap-2 mt-4 mb-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  