import React from "react";
import "./NavBar.css";
import axios from "axios";

function NavBar() {
  const feachdata = async () => {
    const respose = await axios.get();
  };
  return (
    <div>
      <div className="navbar">
        <div>
          <input></input>
          <button>Serach</button>
        </div>
        <div>
          <div className="title">Nerd Store</div>
        </div>
        <diV>
          <button>Profile</button>
        </diV>
      </div>
      <div></div>
    </div>
  );
}

export default NavBar;
