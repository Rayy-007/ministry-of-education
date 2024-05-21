// src/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const [currentUser, setCurrentUser] = useState(null);

  // Checking if the user is signed in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      navigate(from, { replace: true });
    });
    return () => unsubscribe();
  }, []);

  // Sign In with Email
  const login = (signInData) => {
    signInWithEmailAndPassword(auth, signInData.email, signInData.password)
      .then((userInfo) => {
        alert("Successfully signed in");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Sign out successfully!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
