import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Eye, Trash } from 'lucide-react';
import { 
  fetchUsers, 
  deleteUser, 
  setSearchQuery, 
  setCurrentPage 
} from '../redux/userSlice';
import { RootState, AppDispatch } from '../redux/store';
import { useDebounce } from '../utils/debounce';

const UserDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    filteredUsers, 
    searchQuery, 
    loading, 
    error, 
    currentPage, 
    usersPerPage 
  } = useSelector((state: RootState) => state.users);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearchQuery));
  }, [debouncedSearchQuery, dispatch]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500 mb-4"></div>
          <p className="text-xl text-gray-700">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center">
          <p className="text-2xl text-red-500 mb-4">Error Loading Users</p>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name or email"
            className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <div className="text-sm text-gray-500 mt-1">
              Searching for: "{searchQuery}"
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left border">Name</th>
                <th className="p-3 text-left border">Email</th>
                <th className="p-3 text-center border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr 
                  key={user.id} 
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">
                    <div className="flex justify-center space-x-2">
                      <button 
                        className="text-blue-500 hover:text-blue-700 flex items-center"
                        title="View Details"
                      >
                        <Eye className="mr-1" size={16} />
                        View
                      </button>
                      <button 
                        className="text-red-500 hover:text-red-700 flex items-center"
                        onClick={() => handleDeleteUser(user.id)}
                        title="Delete User"
                      >
                        <Trash className="mr-1" size={16} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {currentUsers.length === 0 && (
            <div className="text-center p-4 text-gray-500">
              {searchQuery 
                ? `No users found matching "${searchQuery}"` 
                : 'No users available'}
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;