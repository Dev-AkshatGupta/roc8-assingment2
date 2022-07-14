import React from 'react'
import {CartCard} from "Components";
import { useSelector } from 'react-redux';
const CartCardGroup = () => {
const {cart}=useSelector(state=>state.operations);
    return (
    <div className="flex flex-wrap justify-center gap-0.5">
      {cart.length>0&&cart.map(item=><CartCard product={item}/>)}
      {cart.length===0&&<span>Humein kuch dikh nahi rha hai </span>}
    </div>
  )
}

export { CartCardGroup}
