import { shopActionTypes } from "./shop.types";

import {
  convertCollectionsToMap,
  firestore,
} from "../../firebase/firebase.utils";

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

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const CollectionRef = firestore.collection("collection");
    dispatch(fetchCollectionStart());

    CollectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionMap));
    });
  };
};
