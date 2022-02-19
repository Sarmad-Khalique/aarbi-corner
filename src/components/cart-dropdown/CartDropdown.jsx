import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

import { ReactComponent as Close } from "../../assets/x.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, toggleCartDropdown, history }) => {
  return (
    <div
      className={`cart-dropdown border border-black w-screen h-screen top-0 md:w-60 md:h-96 absolute md:right-10 z-10 md:top-36 flex flex-col p-5 justify-between bg-white`}
    >
      <span
        onClick={toggleCartDropdown}
        className="md:hidden p-2 rounded-md bg-black text-white absolute right-6"
      >
        <Close />
      </span>
      <div className="cart-items mt-12 md:mt-0 h-[75vh] md:h-72 flex-col overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="text-center">Your Cart is Empty</div>
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
