import { cartActionTypes } from "./cart.types";
import addItemToCart from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cart: []
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
                cart:addItemToCart(state.cart, action.payload)
            }

        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cart:state.cart.filter((item)=>(item.id!==action.payload.id))
            }
    
        default:
            return state;
    }
}