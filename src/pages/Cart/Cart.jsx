import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/CartSlice";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const cartItems = useSelector((state) => state.CartItems);
  console.log(cartItems);
  const navigate  = useNavigate()
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
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-titles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <div>
          {cartItems.length !== 0 && (
            <div>
              {cartItems.map((item) => (
                <>
                  <div key={item._id} className="cart-item-titles cart-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <p>{item.price * item.quantity}</p>
                    <p
                      onClick={() => dispatch(removeFromCart(item))}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="cart-bottom">
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
              <p>${getTotalCartAmount()===0? 0:2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0:getTotalCartAmount()+2}</p>
            </div>
            <hr />
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-total-right">
            <p>If you have a promo code, Enter it here</p>

            <div className="promo-input">
              <input type="text" placeholder="Enter promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
