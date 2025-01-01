import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.init";


 export const authContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loader ,setLoader]=useState(false)
    const auth = getAuth(app);


    const createUser=(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
      
    }
    const loginUser= (email ,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email ,password)
       
    }
    useEffect(()=>{
     const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
            setUser(createUser)
            setLoader(false)
        })
        return ()=>{
            return unsubscribe()
        } 
    },[])

    const authInfo= {
      user,
      loader,
      loginUser,
      createUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;