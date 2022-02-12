import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";

import { ReactComponent as Close } from "../../assets/x.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartDropdown = ({ toggleCartDropdown }) => {
  return (
    <div
      className={`cart-dropdown border border-black w-screen h-screen top-0 md:w-60 md:h-96 absolute md:right-10 z-10 md:top-36 flex flex-col p-5 justify-between bg-white`}
    >
      <span
        onClick={toggleCartDropdown}
        className="md:hidden bg-black text-white absolute right-6"
      >
        <Close />
      </span>
      <div className="cart-items h-72 flex-col overflow-y-scroll" />
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartDropdown);
