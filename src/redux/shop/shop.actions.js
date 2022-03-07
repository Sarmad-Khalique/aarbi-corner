import { shopActionTypes } from "./shop.types";

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCHING_SHOP_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCHING_SHOP_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionError = (errorMessage) => ({
  type: shopActionTypes.FETCHING_SHOP_COLLECTION_ERROR,
  payload: errorMessage,
});
