import React, { useState } from "react";
import { FaSistrix} from "react-icons/fa";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
  const [city , setCity] = useState ('');
  return (
    <form className="FormSearch" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        className="inputSearch"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button className="buttonSearch" type="submit">
        <FaSistrix/>
      </button>
    </form>
  );
}
