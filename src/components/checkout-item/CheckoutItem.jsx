import React from "react";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";

import "./CheckoutItem.styles.css";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="description">
        <div className="image-container">
          <img src={imageUrl} alt="cart Item" />
        </div>
        <div className="text">
          <span className="name"> {name}</span>
          <span className="remove" onClick={() => clearItem(cartItem)}>Remove</span>
        </div>
      </div>

      <div className="quantity-container">
        <span
          className="arrows"
          onClick={() => removeItem(cartItem)}
        >
          &lt;
        </span>
        <span className="quantity">{quantity}</span>
        <span
          className="arrows"
          onClick={() => addItem(cartItem)}
        >
          &gt;
        </span>
      </div>
      <div className="price">
        <span>{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
