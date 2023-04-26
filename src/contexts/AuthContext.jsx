import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setError(null);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  };

  const userSignin = async (email, password, name) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      navigate("/");
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  };

  const userLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, error, userLogout, userSignin, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
