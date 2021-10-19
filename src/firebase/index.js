// import * as firebase from "firebase/app";
// import firebase from 'firebase/compat/app';

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // const app = firebase.initializeApp({
    const firebaseConfig = {
    apiKey: "AIzaSyDQHDYR6lqutdpWEPzKibzLmR7bEQ0CVG0",
  
    authDomain: "tiendaropa-sebastianfontana.firebaseapp.com",
  
    projectId: "tiendaropa-sebastianfontana",
  
    storageBucket: "tiendaropa-sebastianfontana.appspot.com",
  
    messagingSenderId: "717141692827",
  
    appId: "1:717141692827:web:8b67042c3983e873ec913e",
  
    measurementId: "G-8D3ZSHR09B"
  
  };
// export function getFirebase() {
//     return app;
// }
// export function getFirestore() {
//     return firebase.firestore(app);
// }

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
const db = getFirestore(app);

export default db;