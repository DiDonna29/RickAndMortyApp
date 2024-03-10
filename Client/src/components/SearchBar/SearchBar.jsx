import { useState } from "react";
import "./searchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = e => setId(e.target.value);
  const handleSearch = () => setId("");
  return (
    <div className="search">
      <input
        className="input"
        type="search"
        value={id}
        placeholder="ID del personaje..."
        onChange={handleChange}
      />
      <button
        className="button"
        onClick={() => {
          onSearch(id), handleSearch();
        }}>
        <span className="actual-text">&nbsp;Agregar&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Agregar&nbsp;
        </span>
      </button>
    </div>
  );
}
