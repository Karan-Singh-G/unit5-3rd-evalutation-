import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const product = { id: 1 };
 let  {count,setCount}=useContext(CartContext)
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>setCount(1)}>Add item cart</button>
      <div>
    
        <button data-cy="product-increment-cart-item-count-button"onClick={()=>setCount(count+1)}>increment to cart</button>
        <span data-cy="product-count">
          {"        "}
        {count}
        {"        "}
        </span>
        <button data-cy="product-decrement-cart-item-count-button"onClick={()=>setCount(count-1)}>decrement from cart</button>
        <button data-cy="product-remove-cart-item-button">deleate the cart</button>
      </div>
    </div>
  );
};

export default Product;
