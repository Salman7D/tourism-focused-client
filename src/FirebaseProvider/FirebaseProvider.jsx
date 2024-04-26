import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebaseConfiq";

export const AuthContext = createContext(null)

// social auth providers
const goggleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


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

    // goggle login
    const googleLogin = () => {
        return signInWithPopup(auth, goggleProvider);
    }

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }


    // logout user
    const logOut = () => {
        setUser(null)
        signOut(auth)
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
        signInUser,
        googleLogin,
        githubLogin,
        logOut
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