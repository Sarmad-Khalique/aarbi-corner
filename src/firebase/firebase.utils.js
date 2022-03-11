import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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

//Adding Collections to Firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// Data Transformation from firestore data to required format
export const convertCollectionsToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(`shop/${title.toLowerCase()}`),
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//Firestore For users
export const createUserProfileDocument = async (
  userAuth,
  additionalUserData
) => {
  // returning if the user is nt logged in
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toDateString();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalUserData,
      });
    } catch (error) {
      console.log("An error occoured: ", error);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Google Auth Provider with Popup
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
