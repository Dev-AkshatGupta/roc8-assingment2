import React from 'react';
import "./PriceSummary.css";
import { useSelector } from 'react-redux'
const PriceSummary = () => {
   const { cart } = useSelector((state) => state.operations);
  return (
    <div className="px-1 cart-page__price-summary w-80">
      <h1>Price details</h1>
      <div className="h-0.5 bg-current"></div>
      <p className="flex px-2 justify-between">
        <span>Price {` ${cart.length} Items`}:</span>
        <span>
          ₹
          {Math.ceil(cart.reduce((acc, curr) => {
            return +curr.quantity * +curr.price + acc;
          }, 0))}
        </span>
      </p>
    </div>
  );
}
export  {PriceSummary}