import React from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-left">
        <img src="./Zillow_logo.svg.png" alt="logo" />
      </div>
      <div className="header-right">
        <span
          onClick={() =>
            navigate("/explore", { state: { purpose: "for-sale" } })
          }
        >
          Buy
        </span>
        <span
          onClick={() =>
            navigate("/explore", { state: { purpose: "for-rent" } })
          }
        >
          Rent
        </span>
        <span>Sign In</span>
      </div>
    </div>
  );
}

export default Header;
