import { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import { ReactComponent as Close } from "../../assets/x.svg";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
class CartDropdown extends Component {
  render() {
    return (
      <div
        className={`cart-dropdown border border-black ${
          this.props.hidden ? "hidden" : ""
        } w-screen h-screen top-0 md:w-60 md:h-96 absolute md:right-10 z-10 md:top-36 flex flex-col p-5 justify-between bg-white`}
      >
        <span
          onClick={() => this.props.toggleCartDropdown()}
          className="md:hidden bg-black text-white absolute right-6 p-2"
        >
          <Close />
        </span>
        <div className="cart-items h-72 flex-col overflow-y-scroll" />
        <CustomButton>Checkout</CustomButton>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  hidden: cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
