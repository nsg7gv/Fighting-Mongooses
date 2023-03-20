import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/firestore";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCHk3kAxHAMmoWCXVmkbPAmAL6z18mKgeQ",
    authDomain: "cs-451r.firebaseapp.com",
    projectId: "cs-451r",
    storageBucket: "cs-451r.appspot.com",
    messagingSenderId: "871873470005",
    appId: "1:871873470005:web:9cf721debe83642fc4db7c"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const dbStorage = getStorage();