import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { detailData } from "./detailData";
import ImageSlider from "../../components/imageSlider/ImageSlider";

function Detail() {
  const { id } = useParams();

  console.log(detailData);

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
  } = detailData;
  return (
    <div className="detail">
      <div className="detail-t">
        <ImageSlider slides={photos} />
      </div>

      <div className="detail-m">
        <div className="detail-m-l">
          <span>{`${price}/${rentFrequency}`}</span>
          <div>
            <span>{`${baths} | `}</span>
            <span>{`${area.toFixed(1)} | `}</span>
            <span>{`${rooms} | `}</span>
          </div>
          <span>{title}</span>
        </div>

        <div className="explore-c-m-r">
          <img src={agency?.logo?.url} alt="agency-logo" />
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className="detail-b">
        <span>{type}</span>
        <span>{purpose}</span>
        <span>{furnishingStatus}</span>
        <div>
          {amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <p key={amenity.text}>{amenity.text}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
