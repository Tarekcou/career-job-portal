import React, { Children, useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({Children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);

    const createUser=(name,password) =>{
        return createUserWithEmailAndPassword(auth,name,password);
    }

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