import React, { Children, useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({Children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);

    const createUser=(name,password) =>{

        setLoading(true);   
        return createUserWithEmailAndPassword(auth,name,password);
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              setUser(user);
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          return ()=>{
            unsubscribe();
          }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        setUser,
        setLoading,
    }
  return (

    <AuthContext.Provider value={authInfo}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthProvider