// @ts-nocheck

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Counter/CounterSlice";
import { remove } from "./CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

//   handle cart function
  const cartProduct = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  //   handle counter function
  const counter = useSelector((state) => state.count);
  const handleIncrement = (counter) => {
    dispatch(increment(counter));
  };
  const handleDecrement = (counter) => {
    dispatch(decrement(counter));
  };

  return (
    <div>
      <p className="text-xl font-bold my-6">Cart Page</p>

      <div className="mx-20 ">
        {cartProduct.map((product) => (
          <div
            className="flex w-full items-center justify-between bg-gray-200 px-4 py-2 rounded"
            key={product.id}
          >
            <img src={product.img} className="h-10" alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>

            <div className="inline-flex items-center">
              <button
                onClick={() => handleIncrement(counter)}
                className="text-3xl mr-2 outline-none"
              >
                +
              </button>

              <input
                type="text"
                name="qty"
                id="qty"
                readOnly
                className="w-10 h-8 outline-none border-none"
                value={counter.value}
              />

              <button
                onClick={() => handleDecrement(counter)}
                className="text-3xl ml-2 outline-none"
              >
                -
              </button>
            </div>

            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
