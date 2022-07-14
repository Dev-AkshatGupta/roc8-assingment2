import React from 'react'
import {ProductsCard} from "Components";
import { useSelector  } from 'react-redux';
const CardGroup = () => {
    const products=useSelector(state=>state.operations.products);
  return <div className="flex flex-wrap justify-center gap-0.5">
    {products.map(item=><ProductsCard product={item}/>)}
  </div>;
}

export  {CardGroup}
