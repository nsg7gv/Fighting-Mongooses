// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHk3kAxHAMmoWCXVmkbPAmAL6z18mKgeQ",
  authDomain: "cs-451r.firebaseapp.com",
  projectId: "cs-451r",
  storageBucket: "cs-451r.appspot.com",
  messagingSenderId: "871873470005",
  appId: "1:871873470005:web:9cf721debe83642fc4db7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);