import React from "react";
import "./CartCard.css";
const CartCard = () => {
  return (
    <div className="card-vertical smooth-square-radius card-shadow">
      <div className="card-vertical-upper-text">
        <h1 className="card-heading">Mustang Muscles</h1>
        <p className="sub-text">this is power</p>
      </div>
      <div className="card-vertical-img-cont">
        <img src="../assets/mustang-1976.jpg" alt="product" />
      </div>
      <div className="card-vertical-text">
        Lorem ipsum dolor sit amet consectetur adipisicing e
      </div>
      <div className="card-element__bottom">
        <button className="card-button btn ">Purchase</button>
      </div>
    </div>
  );
};

export { CartCard };
