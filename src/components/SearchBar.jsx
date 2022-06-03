import React, { useState } from "react";
import './SearchBar.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form>
      <input id="input"
        type="text"
        placeholder="City..."
        value={city}
        onChange={(event) =>
          setCity((prevCity) => prevCity = event.target.value)
        }
      />
      <input type="submit" value="Add city" id="button" onClick={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}/>
    </form>
    
  );
}