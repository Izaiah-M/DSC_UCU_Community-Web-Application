import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/Firebase";

// creating an auth context
const Context = createContext();

// Function to use the context
// export const useAuth = () => {
//   return useContext(Context);
// };

function AuthContextProvider({ children }) {
  // defining a user
  const [currentUser, setCurrentUser] = useState();

  //   Our log in function
  const signUp = (email, password) => {
    // creating a user to our firebase
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = async (email, password) => {
    // signing In the user
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in

        // Adding token to session storage
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );

        // Get user's profile
        const profile = await auth.currentUser.getIdTokenResult();
        console.log(profile);

        // You can access the user's name and phone number using profile.claims.name and profile.claims.phone_number

        // Seetting the current user name and what not to the user profile
        setCurrentUser({
          name: profile.claims.name,
          email: profile.claims.email,
        });
        // console.log(currentUser);

        // navigate("/dashboard", { state: { userProfile } });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    //   called to set the current user in firebase
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // const value = {
  //   currentUser,
  //   signUp,
  //   logIn,
  // };

  return (
    <Context.Provider value={{ currentUser, signUp, logIn }}>
      {children}
    </Context.Provider>
  );
}

export { AuthContextProvider, Context };
