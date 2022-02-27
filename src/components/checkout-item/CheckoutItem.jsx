import React from "react";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ItemDescriptionContainer,
  ItemImageContainer,
  CheckoutItemImage,
  ItemTextContainer,
  ItemName,
  ItemRemove,
  QuantityContainer,
  QuantityArrows,
  Quantity,
  PriceContainer,
} from "./Checkout.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ItemDescriptionContainer>
        <ItemImageContainer>
          <CheckoutItemImage src={imageUrl} alt="cart Item" />
        </ItemImageContainer>
        <ItemTextContainer>
          <ItemName> {name}</ItemName>
          <ItemRemove onClick={() => clearItem(cartItem)}>Remove</ItemRemove>
        </ItemTextContainer>
      </ItemDescriptionContainer>

      <QuantityContainer>
        <QuantityArrows onClick={() => removeItem(cartItem)}>
          &lt;
        </QuantityArrows>
        <Quantity className="quantity">{quantity}</Quantity>
        <QuantityArrows onClick={() => addItem(cartItem)}>&gt;</QuantityArrows>
      </QuantityContainer>
      <PriceContainer>
        <span>{price}</span>
      </PriceContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
