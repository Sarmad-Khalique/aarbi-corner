import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import {
  CartIconContainer,
  ShoppingBagContainer,
  CartItemCount,
} from "./CartIcon.styles";

const CartIcon = ({ itemCount, dispatch }) => {
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartDropdown())}>
      <ShoppingBagContainer>
        <Icon />
      </ShoppingBagContainer>
      <CartItemCount>{itemCount}</CartItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
