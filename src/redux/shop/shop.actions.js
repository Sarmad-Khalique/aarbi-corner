import { shopActionTypes } from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_SHOP_COLLECTION,
  payload: collectionsMap,
});
