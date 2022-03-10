import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import { signInSuccess, signInFailure, signUpSuccess } from "./user.actions";

export function* getSnapshotFromUser(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield signInFailure(error.message);
  }
}

export function* googleSignInStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* emailSignInStart({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpStart({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserProfileDocument, user, { displayName });
    yield alert(`User named ${displayName} Created`);
    yield put(signUpSuccess());
  } catch (error) {
    yield alert("Error creating a user");
    yield put(signInFailure(error.message));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignInStart);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignInStart);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpStart);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
  ]);
}
