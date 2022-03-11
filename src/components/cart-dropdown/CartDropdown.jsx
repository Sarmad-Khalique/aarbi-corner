import React from 'react'

import CustomButton from "../custom-button/CustomButton";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

import {
  CartDropdownContainer,
  CloseButton,
  CloseButtonContainer,
  CartItemsContainer,
  EmptyCartContainer,
} from "./CartDropdown.styles";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <CartDropdownContainer>
      <CloseButtonContainer onClick={()=>dispatch(toggleCartDropdown())}>
        <CloseButton />
      </CloseButtonContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyCartContainer>Your Cart is Empty</EmptyCartContainer>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdown());
        }}
      >
        Checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
