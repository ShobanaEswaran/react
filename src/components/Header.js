import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div id="header" className="container">
      <div>
        <img src={LOGO_URL} className="nav-logo" alt="Logo" />
      </div>
      <div className="menus">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
