import React from "react";

const Header = () => {
  return(
    <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <form className="search">
      <input
        type="text"
        placeholder="Buscar productos, marcas y mas"
        className="input"
      ></input>
      <button></button>
    </form>
  </header>
  )
};

export default Header;
