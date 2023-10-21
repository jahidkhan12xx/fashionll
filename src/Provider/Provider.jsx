import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";

export const AuthContext = createContext();




const Provider = ({children}) => {

    const [user,setUser] = useState();
    const [isLoading,setIsLoading] = useState(true);

    const signUp = (email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const provider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth,provider)
    }

    const LogOut = () =>{
        setIsLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const observer = onAuthStateChanged(auth, cUser=>{
            console.log(cUser);
            setUser(cUser);
            setIsLoading(false)
        })

        return ()=>{
            observer();
        }
    },[])

    const profileData = (name,url) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: url
          })
    }



    const authInformation = {
        user,
        signUp,
        signIn,
        googleLogin,
        LogOut,
        isLoading,
        profileData

    }
    return (
        <AuthContext.Provider value={authInformation}>
           {children} 
        </AuthContext.Provider>
    );
};

export default Provider;