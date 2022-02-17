import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
}

export const cartReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_DISPLAY:
            return{
                ...state,
                hidden:!state.hidden,
            }

        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            }

        case cartActionTypes.CLEAR_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter((item)=>(item.id!==action.payload.id))
            }
    
        default:
            return state;
    }
}