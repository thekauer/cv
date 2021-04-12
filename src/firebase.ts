import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebase-config';

firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const doGoogleSignIn = () =>  auth.signInWithPopup(googleProvider);
export const signOut = () => auth.signOut();
export const db = firebase.firestore();
export default firebase;