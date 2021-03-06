import React from "react";
import "./ProductsCard.css";
import {useDispatch} from "react-redux";
import { addToCart } from "Redux/Reducers/operationsSlice";
const ProductsCard = ({ product }) => {
  const dispatch=useDispatch();
  return (
    <div className="sm:w-1/2 mb-10 px-4" key="product.id">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={product.image}
        />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {product.title}
      </h2>
      <p className="leading-relaxed text-base">
        {product.description}
      </p>
      <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=>{
        dispatch(addToCart(product));
      }}>
        Purchase
      </button>
    </div>
  );
};

export { ProductsCard };
