import React from "react";
import "./style.scss";

function Poster() {
  return (
    <div className="poster">
      <div className="poster-content">
        <span>Agents. Tours. Loans. Homes.</span>
        <input type="text" placeholder="Search" />
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export default Poster;
