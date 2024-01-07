import React from "react";
import "./style.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src="./Zillow_logo.svg.png" alt="logo" />
      </div>
      <div className="header-right">
        <span>Buy</span>
        <span>Rent</span>
        <span>Sign In</span>
      </div>
    </div>
  );
}

export default Header;
