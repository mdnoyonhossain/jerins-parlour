import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setisLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userProfileNameUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const createLoginUser = (email, password) => {
        setisLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setisLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userSignOut = () => {
        setisLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUsesr) =>{
            console.log(currentUsesr);
            setisLoading(false);
            setUser(currentUsesr)
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        createLoginUser,
        signInWithGoogle,
        userSignOut,
        isLoading,
        setisLoading,
        userProfileNameUpdate
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;