import React from 'react'
import {ProductsCard} from "Components";
import { useSelector  } from 'react-redux';
const CardGroup = () => {
    const products=useSelector(state=>state.operations.products);
  return (
    <div>
      
    </div>
  )
}

export  {CardGroup}
