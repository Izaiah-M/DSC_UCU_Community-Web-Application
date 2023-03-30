import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../utils/Firebase";

// creating an auth context
const AuthContext = React.createContext();

// Function to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  // defining a user
  const [currentUser, setCurrentUser] = useState();

  //   Our log in function
  const signUp = (email, password) => {
    // creating a user to our firebase
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    //   called to set the current user in firebase
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
