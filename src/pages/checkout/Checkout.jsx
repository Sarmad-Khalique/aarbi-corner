import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButtonCheckout from "../../components/stripe-button-checkout/StripeButtonCheckout";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import "./Checkout.styles.css";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartItemsTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-table">
        <div className="checkout-header">
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
        </div>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="empty-cart">Your Cart is Empty</div>
        )}
      </div>
      <div className="total">Total: $ {total}</div>
      <div className="warning">
        *Please use the following account for test payment*
        <br />
        CARD NUMBER:<span className="imp">4242 4242 4242 4242</span>-EXPIRY:
        <span className="imp">01/25</span>-CVC:<span className="imp">786</span>
      </div>
      <div className="stripe-payment">
        <StripeButtonCheckout price={total} />
      </div>
    </div>
  );
};

export default Checkout;
