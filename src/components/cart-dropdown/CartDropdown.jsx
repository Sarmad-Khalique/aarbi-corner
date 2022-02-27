import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

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

const CartDropdown = ({ cartItems, toggleCartDropdown, history }) => {
  return (
    <CartDropdownContainer>
      <CloseButtonContainer onClick={toggleCartDropdown}>
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
          toggleCartDropdown();
        }}
      >
        Checkout
      </CustomButton>
    </CartDropdownContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
