import React from "react";
import Logo from "../Logo/index.js"
import Form from "../Header/form.js"

const Header = () => {
  return(
    <header className="header">
    <Logo/>
    <Form/>
  </header>
  )
};

export default Header;
