import React from 'react';
import "./ProductsCard.css";
const ProductsCard = ({product}) => {
  return (
  <div class="card-vertical smooth-square-radius card-shadow">
            <div class="card-vertical-upper-text">
                <h1 class="card-heading">Mustang Muscles</h1>
                <p class="sub-text">this is power</p>
            </div>
            <div class="card-vertical-img-cont">
                <img src="../assets/mustang-1976.jpg" alt="A mustang"/>
            </div>
            <div class="card-vertical-text">
                Lorem ipsum dolor sit amet consectetur adipisicing e
            </div>
            <div class="card-element__bottom">
                <button class="card-button "><i class="far fa-heart"></i></button>
                <button class="card-button "><i class="fas fa-share-alt"></i></button>
                <button class="card-button "><i class="fas fa-ellipsis-v"></i></button>
            </div>
        </div>
  );
}

export  {ProductsCard};
