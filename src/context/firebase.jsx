import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDNb1aS2ZBTHeWftOSdeHcPZyb149KrHEk",
    authDomain: "startup-pitch-portal.firebaseapp.com",
    projectId: "startup-pitch-portal",
    storageBucket: "startup-pitch-portal.firebasestorage.app",
    messagingSenderId: "428561967266",
    appId: "1:428561967266:web:f173dec8cfee0f8286cffb"
};
  
export const useFirebase = () => useContext(FirebaseContext);
const firebaseApp = initializeApp(firebaseConfig);
// console.log(firebaseApp);

// Authentication
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

    return <FirebaseContext.Provider value={{
        signinWithGoogle
    }}>
        {props.children}
    </FirebaseContext.Provider>
    
};
