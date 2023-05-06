import React, { useEffect, useState } from "react";
import "./NavBar.css";
import axios from "axios";

function NavBar() {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  const handelNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const feactData = async (event) => {
    event.preventDefault();
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${name}&key=${
        import.meta.env.VITE_API_KEY
      }` + `&maxResults=10`
    );
    setResults(res.data.items);
    console.log(res.data.items);
  };

  return (
    <div>
      <div className="navbar">
        <div>
          <input value={name} onChange={handelNameChange} />
          <button onClick={feactData}>Search</button>
        </div>
        <div>
          <div className="title">Nerd Store</div>
        </div>
        <div>
          <button>Profile</button>
        </div>
      </div>
      <div>
        {results.map((result) => {
          return (
            <img
              src={result.volumeInfo.imageLinks.smallThumbnail}
              alt={result.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
