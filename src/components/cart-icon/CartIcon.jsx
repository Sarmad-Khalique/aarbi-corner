import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect";

const CartIcon = ({itemCount, dispatch }) => {
  return (
    <div
      onClick={()=>dispatch(toggleCartDropdown())}
      className="cart-icon relative w-11 h-7 flex justify-center items-center"
    >
      <div className="shopping-bag w-10 h-10">
        <Icon />
      </div>
      <span className="item-count absolute top-1">
        {itemCount}
      </span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
