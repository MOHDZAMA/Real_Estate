import React from "react";
import "./style.scss";
import { filterData } from "./filterData";

function Filterbar() {
  return (
    <div className="filterbar">
      {filterData?.map(({ items, placeholder, queryName }, index) => (
        <div>
          <select name={queryName} id={queryName}>
            <option value={queryName}>{placeholder}</option>
            {items?.map((item, index) => (
              <option value={item.value}>{item.name} </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default Filterbar;
