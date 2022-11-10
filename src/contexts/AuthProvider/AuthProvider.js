import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            // console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem('dentistry-Token');
        return signOut(auth);
    }

    const authInfo = { user, setUser, loading, setLoading, createUser, logOut, userLogin, googleSignIn, updateUserProfile, facebookSignIn, reviews, setReviews };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;