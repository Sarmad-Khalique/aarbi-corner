import { takeEvery, call, put } from "redux-saga/effects";

import { shopActionTypes } from "./shop.types";

import { fetchCollectionSuccess, fetchCollectionError } from "./shop.actions";

import {
  convertCollectionsToMap,
  firestore,
} from "../../firebase/firebase.utils";

export function* fetchCollectionStartAsync() {
  const CollectionRef = firestore.collection("collection");

  try {
    const snapshot = yield CollectionRef.get();
    const collectionMap = yield call(convertCollectionsToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionError(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(
    shopActionTypes.FETCHING_SHOP_COLLECTION_START,
    fetchCollectionStartAsync
  );
}
