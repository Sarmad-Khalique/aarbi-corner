import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./CartIcon.styles.css"

const CartIcon = ({ itemCount, dispatch }) => {
  return (
    <div onClick={() => dispatch(toggleCartDropdown())} className="cart-icon">
      <div className="shopping-bag">
        <Icon />
      </div>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
