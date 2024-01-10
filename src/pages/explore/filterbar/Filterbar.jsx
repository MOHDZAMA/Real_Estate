import React, { useState, useEffect } from "react";
import "./style.scss";
import { filterData } from "./filterData";

function Filterbar({ updateParamData }) {
  const changeParamData = (name, value) => {
    // setSearch((search) => ({ ...search, [name]: value }));
    updateParamData(name, value);
  };
  return (
    <div className="filterbar">
      {filterData?.map(({ items, placeholder, queryName }) => (
        <div key={queryName}>
          <select
            name={queryName}
            id={queryName}
            onChange={(e) => changeParamData(e.target.name, e.target.value)}
          >
            <option value={queryName}>{placeholder}</option>
            {items?.map((item) => (
              <option value={item.value} key={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default Filterbar;
