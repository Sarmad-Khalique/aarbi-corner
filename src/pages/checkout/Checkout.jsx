import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";

const Checkout = ({cartItems, total}) => {
  return (
    <div className="checkout-page px-6 md:px-[23%] relative">
        <div className="checkout-table">
            <div className="checkout-header py-2 flex justify-center border-y border-slate-400">
                <div className="header-block w-1/2 px-2">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block w-1/4 text-center">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block w-1/4 text-center">
                    <span>
                        Price
                    </span>
                </div>
            </div>
            {
                cartItems.length?
                cartItems.map(
                    cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ):
                <div className="border-b border-slate-400 p-4 text-center">Your Cart is Empty</div>
            }
        </div>
        <div className="text-3xl text-right py-2">
            Total: $ {total}
        </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout);