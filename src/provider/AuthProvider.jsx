import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Create Account Email and Password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login USer
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authStoreInfo = { user, registerUser, userLogin };
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
