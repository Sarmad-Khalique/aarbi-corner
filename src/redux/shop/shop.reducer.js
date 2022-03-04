import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCHING_SHOP_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case shopActionTypes.FETCHING_SHOP_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case shopActionTypes.FETCHING_SHOP_COLLECTION_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
