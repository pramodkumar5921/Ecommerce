import React, { Fragment } from 'react';
import "./Cart.css";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const item={
    product:"productID",
    price:200,
    name:"pramod",
  };
  return <Fragment>
    <div className='cartPage'>
        <div className='cartHeader'>
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div>

        <div className='cartContainer'>
            <CartItemCard item={item}/>
            <div className='cartInput'>
              <button>-</button>
              <input type='number'/>
              <button>+</button>
            </div>
        </div>
    </div>
  </Fragment>
}

export default Cart;