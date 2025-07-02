// UserSearch.jsx
import { useEffect, useState } from "react";
import "./UserSearch.css";

export const UserSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${search}`)
      .then(res => res.json())
      .then(data => setResults(data.users));
  }, [search]);

  return (
    <div className="user-search">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar nombre"
      />

      <ul>
        {results.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
};
