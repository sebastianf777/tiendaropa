import firebase from "firebase/app";
import "@firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyDQHDYR6lqutdpWEPzKibzLmR7bEQ0CVG0",
  
    authDomain: "tiendaropa-sebastianfontana.firebaseapp.com",
  
    projectId: "tiendaropa-sebastianfontana",
  
    storageBucket: "tiendaropa-sebastianfontana.appspot.com",
  
    messagingSenderId: "717141692827",
  
    appId: "1:717141692827:web:8b67042c3983e873ec913e",
  
    measurementId: "G-8D3ZSHR09B"
  
});


export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);