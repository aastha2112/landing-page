import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="bg-[#020012] flex flex-col items-center py-4 px-4">
      {/* Search Bar */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
        className="w-full md:w-1/3 p-3 rounded-lg border border-gray-600 bg-[#0d0b1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {/* Search Results */}
      <div className="mt-4 w-full md:w-1/3 bg-[#0d0b1f] rounded-lg shadow-lg">
        {query &&
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-3 border-b border-gray-700 text-white hover:bg-blue-500/20 transition"
            >
              {user.name}
            </div>
          ))}
      </div>
    </div>
  );
};
