import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

import { ReactComponent as Close } from "../../assets/x.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ toggleCartDropdown, cart }) => {
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
      <div className="cart-items mt-12 md:mt-0 h-72 flex-col overflow-y-scroll">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = ({ cart: { cart } }) => ({
  cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
