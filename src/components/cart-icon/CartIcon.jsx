import React from 'react'

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { useDispatch, useSelector } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartIconContainer,
  ShoppingBagContainer,
  CartItemCount,
} from "./CartIcon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartDropdown())}>
      <ShoppingBagContainer>
        <Icon />
      </ShoppingBagContainer>
      <CartItemCount>{itemCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
