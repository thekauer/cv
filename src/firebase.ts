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
export const isMe =(uid : string |undefined) : boolean =>{ return  uid === "9Of0B4l2rFMcysupQ5Z7DAqGPYd2";}
export default firebase;