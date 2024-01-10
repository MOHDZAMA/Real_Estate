import React, { useEffect, useState } from "react";
import "./style.scss";
import Filterbar from "./filterbar/Filterbar";
import { useNavigate, useLocation } from "react-router-dom";
// import { data } from "../../components/Data";

import useFetch from "../../components/hooks/useFetch";

function Explore(purpose) {
  const navigate = useNavigate();
  const location = useLocation();

  const ls = location.state;

  console.log(purpose);

  const [paramData, setParamData] = useState({
    locationExternalIDs: "5002,6020",
    purpose: ls.purpose,
    hitsPerPage: "25",
    page: "0",
    lang: "en",
  });

  const { data, loading, error } = useFetch("/properties/list", paramData);

  const updateParamData = (name, value) => {
    setParamData((paramData) => ({ ...paramData, [name]: value }));
  };
  console.log(paramData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  console.log(paramData);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Filterbar updateParamData={updateParamData} />
      {!loading ? (
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
      ) : (
        "loading"
      )}
    </>
  );
}

export default Explore;
