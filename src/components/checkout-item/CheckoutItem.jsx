import React from "react";
import { useDispatch } from "react-redux";
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

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ItemDescriptionContainer>
        <ItemImageContainer>
          <CheckoutItemImage src={imageUrl} alt="cart Item" />
        </ItemImageContainer>
        <ItemTextContainer>
          <ItemName> {name}</ItemName>
          <ItemRemove onClick={() => dispatch(clearItem(cartItem))}>Remove</ItemRemove>
        </ItemTextContainer>
      </ItemDescriptionContainer>

      <QuantityContainer>
        <QuantityArrows onClick={() => dispatch(removeItem(cartItem))}>
          &lt;
        </QuantityArrows>
        <Quantity className="quantity">{quantity}</Quantity>
        <QuantityArrows onClick={() => dispatch(addItem(cartItem))}>&gt;</QuantityArrows>
      </QuantityContainer>
      <PriceContainer>
        <span>{price}</span>
      </PriceContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
