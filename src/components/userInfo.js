// src/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const auth = getAuth();
  
      // Listen for authentication state changes
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          // If the user is logged in, fetch their data from Firestore
          const userDocRef = doc(collection(db, "profile"), firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUser(userDoc.data());
          } else {
            console.error("User document not found");
          }
        } else {
          // If the user is logged out, set the user state to null
          setUser(null);
        }
      });
  
      // Clean up the listener when the component is unmounted
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

export { AuthContext, AuthProvider };
