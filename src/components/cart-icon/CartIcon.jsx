import {ReactComponent as Icon} from "../../assets/shopping-bag.svg"

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartDropdown}) => {
  return (
    <div onClick={toggleCartDropdown} className="cart-icon relative w-11 h-7 flex justify-center items-center">
        <div className="shopping-bag w-10 h-10">
            <Icon />
        </div>
        <span className="item-count absolute top-1">
            0
        </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null,mapDispatchToProps)(CartIcon);