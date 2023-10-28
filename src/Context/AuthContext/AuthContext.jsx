import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useState } from "react";


const auth = getAuth(app);

export const AuthCont = createContext('')


const AuthContext = ({ children }) => {

    // const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)



    // Create a new user by email & password
    const createNewUser = (email, password) => {
        console.log("creating user is working properly");
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // Login user by Email and Password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })

        return () => {
            return unSubscribe();
        }
    }, [])



    const authInfo = { createNewUser, auth, currentUser, signInUser }

    return (
        <AuthCont.Provider value={authInfo}>
            {children}
        </AuthCont.Provider>
    );
};

export default AuthContext;