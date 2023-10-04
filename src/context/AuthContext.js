import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        // ...
      } else {
        console.log("Inperfect");
      }
    });
  }, []);

  const login = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("firebase email = " + user.email, "email = " + email);
        console.log("firebase password = " + user.uid, "password = " + password);
        // login(email, password);
        user && setUser(email);
        user && AsyncStorage.setItem("user", email);
        user && setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error message = " + error.message);
      });
  };

  const logout = () => {
    setIsLoading(false);
    setUser(null);
    AsyncStorage.removeItem("user");
    setIsLoading(true);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let user = await AsyncStorage.getItem("user");
      setUser(user);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
