import React, { useEffect } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
// import { detailData as data } from "./detailData";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import useFetch from "../../components/hooks/useFetch";

function Detail() {
  const { id } = useParams();

  const { data, loading, error } = useFetch("/properties/detail", {
    externalID: id,
  });
  if (data != null) {
    const {
      price,
      rentFrequency,
      rooms,
      title,
      baths,
      area,
      agency,
      isVerified,
      description,
      type,
      purpose,
      furnishingStatus,
      amenities,
      photos,
    } = data;

    return (
      <div className="detail">
        {data ? (
          <>
            <div className="detail-t">
              <ImageSlider slides={photos} />
            </div>

            <div className="detail-m">
              <div className="detail-m-l">
                <span>
                  {price}/{rentFrequency}
                </span>
                <div>
                  <span>{baths} | </span>
                  <span>{area.toFixed(1)} | </span>
                  <span>{rooms} | </span>
                </div>
                <span>{title}</span>
              </div>

              <div className="explore-m-l-r">
                <img src={agency?.logo?.url} alt="agency-logo" />
              </div>
            </div>

            <div>
              <p>{description}</p>
            </div>

            <div className="detail-b-t">
              <span>Type: {type}</span>
              <span>Purpose: {purpose}</span>
              <span>Furnishing: {furnishingStatus}</span>
            </div>
            <div className="detail-b-b">
              <h2>Amenities:</h2>
              {amenities
                ?.slice(0, 4)
                ?.map((item) =>
                  item?.amenities?.map((amenity) => (
                    <span key={amenity.text}>{amenity.text}</span>
                  ))
                )}
            </div>
          </>
        ) : (
          "null"
        )}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default Detail;
