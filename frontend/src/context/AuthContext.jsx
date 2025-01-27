
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged  } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const googleProvider = new GoogleAuthProvider();

 export const AuthProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            if(user) {
                const {email, displayName, photoURL, uid} = user;
                const userData = {
                    email,
                    username:displayName,
                    photo: photoURL,
                    uid
                }
            }
        });
        return unsubscribe;
    }, []);

    const registerUser = async (email, password) => {
     return  await createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = async (email, password) => {
     return  await signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);
    }

    const logout = async () => {
        return await signOut(auth);
    }

const value = {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        loading
        
}

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );

}