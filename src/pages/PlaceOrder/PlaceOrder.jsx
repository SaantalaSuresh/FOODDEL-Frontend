import React from "react";
import "./PlaceOrder.css";
import { useDispatch, useSelector } from "react-redux";

const PlaceOrder = () => {
  const cartItems = useSelector((state) => state.CartItems);
  console.log(cartItems);
 
  const dispatch = useDispatch();
  const getTotalCartAmount = () => {
    let total = 0;
    for (const item of cartItems) {
      console.log(item)
      total += item.price * item.quantity;
    }
    return total;
  };
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="multi-fields">
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Street" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Phone'/>
          </div>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <div className="cart-total-left">
            <h2>Cart Totals</h2>
            <div className="cart-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>{" "}
            <hr />
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ? 0:2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0:getTotalCartAmount()+2}</p>
            </div>
            <hr />
            <button className="proceed-to-pay">PROCEED TO CHECKOUT</button>
          </div>
          
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
