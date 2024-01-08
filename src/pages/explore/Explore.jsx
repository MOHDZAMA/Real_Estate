import React from "react";
import "./style.scss";
import Filterbar from "./filterbar/Filterbar";

import { data } from "../../components/Data";
import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();

  return (
    <>
      <Filterbar />
      <div className="explore">
        {data?.hits?.map(
          ({
            hash,
            coverPhoto,
            price,
            rentFrequency,
            rooms,
            title,
            baths,
            area,
            agency,
            isVerified,
            externalID,
          }) => (
            <div
              className="explore-c"
              key={hash}
              onClick={() => navigate(`/detail/${externalID}`)}
            >
              <img
                src={coverPhoto?.url}
                alt="cover-photo"
                className="explore-c-i"
              />
              <div className="explore-c-m">
                <div className="explore-c-m-l">
                  {isVerified && <span>y</span>}
                  <span>{`${price}/${rentFrequency}`}</span>
                  <div>
                    <span>{`${baths} | `}</span>
                    <span>{`${area.toFixed(1)} | `}</span>
                    <span>{`${rooms} | `}</span>
                  </div>
                  <span>{`${title.slice(0, 25)}...`}</span>
                </div>
                <div className="explore-c-m-r">
                  <img src={agency?.logo?.url} alt="agency-logo" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Explore;
