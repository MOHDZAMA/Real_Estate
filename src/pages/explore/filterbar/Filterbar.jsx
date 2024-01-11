import React, { useState, useEffect } from "react";
import "./style.scss";
import { filterData } from "./filterData";

function Filterbar({ updateParamData, purpose }) {
  const changeParamData = (name, value) => {
    // setSearch((search) => ({ ...search, [name]: value }));
    updateParamData(name, value);
  };

  return (
    <div className="filterbar">
      {filterData?.map(({ items, placeholder, queryName }, index) => (
        <div key={queryName}>
          <select
            name={queryName}
            id={queryName}
            onChange={(e) => changeParamData(e.target.name, e.target.value)}
            disabled={purpose ? purpose === "for-sale" && index === 1 : false}
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
