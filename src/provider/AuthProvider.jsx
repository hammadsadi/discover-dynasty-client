import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  // Create Account Email and Password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login USer
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignInWithGoogle
  const userLoginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout User
  const userLogout = () => {
    return signOut(auth);
  };

  // Get Currently Sign In User
  useEffect(() => {
    let unsubscrie = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscrie();
    };
  }, []);

  const authStoreInfo = {
    user,
    registerUser,
    userLogin,
    userLogout,
    userLoginWithGoogle,
  };
  return (
    <div>
      <AuthContext.Provider value={authStoreInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
