import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyAkzRVe_hwhjCpPxoOrosvizRLaoJ8-I3U",
        authDomain: "crown-db-9560c.firebaseapp.com",
        databaseURL: "https://crown-db-9560c.firebaseio.com",
        projectId: "crown-db-9560c",
        storageBucket: "crown-db-9560c.appspot.com",
        messagingSenderId: "606423268665",
        appId: "1:606423268665:web:298a05945b6d7f7c6f7ce8",
        measurementId: "G-62EHYFX130"
    };


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error buat user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

