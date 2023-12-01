import { useEffect, useState,createContext } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
// import useAxiosPublic from "../../customehooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState();
    const [user,setUser] = useState();
    // const axiosPublic = useAxiosPublic()


    const createUser = (email,password)=>{
        setLoading(true) ;
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser = (email,password)=>{
        setLoading(true) ;
        return  signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            
            // if(currentUser){
            //     const useremail = {email:currentUser.email}
            //     axiosPublic.post(`/jwt`,useremail)
            //     .then(res=>{
            //         console.log(res)
            //         setLoading(false)
            //     })
            // }else{
            //     setLoading(false)
            // }

            setLoading(false)
        })
        return ()=> {return unSubscribe()};
    },[]) 


    const userInfo = {
        user,
        createUser,
        loading,
        logInUser,
        logOutUser,
    }

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;