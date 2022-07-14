import React from 'react';
import "./CartPage.css";
import {CartCardGroup, PriceSummary} from "Components";
const CartPage = () => {
  return (
    <div className=' cart-page__container'>
      <CartCardGroup/>
      <PriceSummary/>
    </div>
  )
}

export  {CartPage}
