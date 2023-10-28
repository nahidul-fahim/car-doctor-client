import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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

    const createNewUser = (email, password) => {
        console.log("creating user is working properly");
        return createUserWithEmailAndPassword(auth, email, password)
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })

        console.log("from auth" ,onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        }))
        return () => {
            return unSubscribe();
        }
    }, [])



    const authInfo = { createNewUser, auth }

    return (
        <AuthCont.Provider value={authInfo}>
            {children}
        </AuthCont.Provider>
    );
};

export default AuthContext;