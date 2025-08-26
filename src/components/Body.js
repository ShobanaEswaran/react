import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);
  return (
    <div id="body">
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log("button clicked");

            let filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-cards-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
