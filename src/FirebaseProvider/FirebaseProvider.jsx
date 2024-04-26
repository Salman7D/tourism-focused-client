import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebaseConfiq";

export const AuthContext = createContext(null)



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
        user
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