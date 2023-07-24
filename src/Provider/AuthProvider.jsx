import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        signOut(auth);
    }

    const popupRegister = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('loggedUser', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    },[])

    // const cUser = auth.currentUser;
    // if(cUser !== null){
    //     const displayName = cUser.displayName;
    //     const name = cUser.name;
    //     const photoUrl = cUser.photoURL;

    // }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        popupRegister,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;