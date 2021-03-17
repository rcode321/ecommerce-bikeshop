import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAA1HEKRrXGjKiYRfCE8vZi9mX6mFfCvmo",
  authDomain: "bikeshop101-18eae.firebaseapp.com",
  projectId: "bikeshop101-18eae",
  storageBucket: "bikeshop101-18eae.appspot.com",
  messagingSenderId: "284978674738",
  appId: "1:284978674738:web:2f297b88ed37cf3d0c102b",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Query inside of firestore for document to see if already exist.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //   console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email, emailVerified } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        emailVerified,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
