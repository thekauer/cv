import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { AdminBlogItem } from '@pages/admin';

const firebaseConfig = {
    apiKey: "AIzaSyALn60GwSjT4z2ovR_V4WP0zSHhXzyJtxY",
    authDomain: "thekauercv.firebaseapp.com",
    projectId: "thekauercv",
    storageBucket: "thekauercv.appspot.com",
    messagingSenderId: "514376744937",
    appId: "1:514376744937:web:8a6335546d9295b9a11578",
    measurementId: "G-0QCKJYC2WX"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const doGoogleSignIn = () =>  auth.signInWithPopup(googleProvider);
export const signOut = () => auth.signOut();
export const db = firebase.firestore();
export const isMe =(uid : string |undefined) : boolean =>{ return  uid === "9Of0B4l2rFMcysupQ5Z7DAqGPYd2";}
export const fetchPosts = async () => {
  const postsRef = db.collection('blog');
  const items: AdminBlogItem[] = [];
  const snapshots = await postsRef.limit(10).orderBy('date','desc').get();
      snapshots.forEach((doc) => {
          const data = doc.data()
          const item: AdminBlogItem|any = {
              ...data,
              date:(data.date as firebase.firestore.Timestamp).toDate().toString(),
              id: doc.id,
              highlighted:false
          }
          items.push(item);
      });
      return items;
}
