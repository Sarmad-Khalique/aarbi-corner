import React from "react";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item h-40 border-b border-slate-400 flex items-center">
      <div className="description w-1/2 flex items-center justify-between px-1">
        <div className="image-container h-40 p-2 w-2/3 md:w-1/2 mr-1">
          <img className="w-full h-full" src={imageUrl} alt="cart Item" />
        </div>
        <div className="w-1/3 md:w-1/2 flex flex-col">
          <span className="my-3 text-lg">{name}</span>
          <span className="text-red-600 underline text-xs font-semibold cursor-pointer" onClick={()=>clearItem(cartItem)}>Remove</span>
        </div>
      </div>

      <div className="quantity-container flex w-1/4 justify-center">
        <span className="text-xl font-bold cursor-pointer" onClick={()=>removeItem(cartItem)}>&lt;</span>
        <span className="px-1 text-lg">{quantity}</span>
        <span className="text-xl font-bold cursor-pointer" onClick={()=>addItem(cartItem)}>&gt;</span>
      </div>
      <div className="price w-1/4 text-center">
        <span>{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item)=>(dispatch(addItem(item))),
    removeItem: (item)=>(dispatch(removeItem(item))),
    clearItem: (item)=>(dispatch(clearItem(item)))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);
