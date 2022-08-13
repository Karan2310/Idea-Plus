// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYZbbePgSEZNnzJLy7b62oneQYS55JDAA",
    authDomain: "ideaplus-9307e.firebaseapp.com",
    projectId: "ideaplus-9307e",
    storageBucket: "ideaplus-9307e.appspot.com",
    messagingSenderId: "234561055762",
    appId: "1:234561055762:web:9fea5b2de3c6cccbec3ccb",
    measurementId: "G-LRKX8BNKVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub;
    }, [])

    return currentUser;
}

