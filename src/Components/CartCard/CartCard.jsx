import React from "react";
import "./CartCard.css";
import {RiDeleteBin2Line} from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "Redux/Reducers/operationsSlice";
const CartCard = ({product}) => {
  const dispatch=useDispatch();
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={product.id}>
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={product.image}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">
            {product.title}
          </h2>
          <p className="text-gray-500 flex justify-evenly">
            <button
              className={`text-2xl ${product.quantity<=1?"":""}`}
              onClick={() => {
                dispatch(decreaseQuantity(product));
              }}
            >
              -
            </button>
            <span className="text-xl">{product.quantity}</span>
            <button
              className={`text-2xl`}
              onClick={() => {
                dispatch(increaseQuantity(product));
              }}
            >
              +
            </button>
            <button
              className="text-xl"
              onClick={() => {
                dispatch(removeItemFromCart(product));
              }}
            >
              <RiDeleteBin2Line />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
