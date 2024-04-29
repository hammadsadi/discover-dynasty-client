import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
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
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // Create Account Email and Password
  const registerUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login USer
  const userLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignInWithGoogle
  const userLoginWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in With Github
  const signInGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Logout User
  const userLogout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // Get Currently Sign In User
  useEffect(() => {
    let unsubscrie = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
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
    isLoading,
    signInGithub,
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
