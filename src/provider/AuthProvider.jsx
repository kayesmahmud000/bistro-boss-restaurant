import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic()
    const provider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const userInfo = {email: currentUser?.email}
            if (currentUser) {
                axiosPublic.post("/jwt", userInfo )
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem(
                            "access-token", res.data.token
                        )
                        setLoader(false)
                    }
                })
            } else {
                localStorage.removeItem("access-token")
                setLoader(false)
            }
            
           
            


        })
        return () => {
            unsubscribe()
        }
    }, [ axiosPublic])
    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        loader,
        loginUser,
        createUser,
        logout,
        updateUser,
        googleLogin
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;