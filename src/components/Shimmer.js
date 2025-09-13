import React from "react";

const Shimmer = ({ length }) => {
  return (
    <div className="shimmer-cards-container">
      {[...Array(length).keys()].map((n, i) => (
        <div className="restaurant-card" key={i}>
          <div className="res-img"></div>
          <div className="res-content"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
