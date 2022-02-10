import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const config = {
  apiKey: "AIzaSyCQDPVX_vjf7C0HKCQL-6JTPX5Z0xPY35I",
  authDomain: "aarbi-corner.firebaseapp.com",
  projectId: "aarbi-corner",
  storageBucket: "aarbi-corner.appspot.com",
  messagingSenderId: "706346076649",
  appId: "1:706346076649:web:14216c425b15b3f946a378",
  measurementId: "G-XKZBW8B7F5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth Provider with Popup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;