import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";


const auth = getAuth(app);

export const AuthCont = createContext('')


const AuthContext = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);



    // Create a new user by email & password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // Login user by Email and Password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Keep trace on the user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    }, [])


    // Log out a user
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = { createNewUser, auth, currentUser, signInUser, logout, loading }

    return (
        <AuthCont.Provider value={authInfo}>
            {children}
        </AuthCont.Provider>
    );
};

export default AuthContext;