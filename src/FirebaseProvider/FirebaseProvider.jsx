import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebaseConfiq";

export const AuthContext = createContext(null)

// social auth providers



const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, image) => {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image
        })

    }

    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        });
        return () => unsubscribe();
    },[])

    const allValues = {
        createUser,
        updateUserProfile,
        user,
        signInUser
    }



    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node
}

export default FirebaseProvider;