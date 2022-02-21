import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

import { ReactComponent as Close } from "../../assets/x.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

import "./CartDropdown.styles.css"

const CartDropdown = ({ cartItems, toggleCartDropdown, history }) => {
  return (
    <div className="cart-dropdown">
      <span
        onClick={toggleCartDropdown}
        className="close-container"
      >
        <Close className="close" />
      </span>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="empty">Your Cart is Empty</div>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartDropdown();
        }}
      >
        Checkout
      </CustomButton>
    </div>
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
