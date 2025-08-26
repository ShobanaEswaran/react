import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines,
    costForTwo,
    locality,
  } = props.resData?.info;
  return (
    <div className="restaurant-card">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      </div>
      <div className="res-content">
        <h4>{name}</h4>
        <p>
          {avgRating} - {sla.slaString}
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
