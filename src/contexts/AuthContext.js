import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../utils/Firebase";

// creating an auth context
const Context = createContext();

function AuthContextProvider({ children }) {
  // defining a user
  const [currentUser, setCurrentUser] = useState();
  const [events, setEvents] = useState([
    {
      title: "Present GDSC Application",
      description:
        "You will have to stand infront of tons of people, including the lecturer and present this that you have done with the work..... you better pass mann!!",
      img: "../images/couresel.jpg",
      start: Date.now(),
      end: Date.now(),
    },
  ]);

  //   Our log in function
  const signUp = (email, password) => {
    // creating a user to our firebase
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = async (email, password) => {
    // signing In the user
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Adding token to session storage
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );

        // Get user's profile
        const profile = await auth.currentUser.getIdTokenResult();
        // console.log(profile);

        // You can access the user's name and phone number using profile.claims.name and profile.claims.phone_number
        setCurrentUser({
          name: profile.claims.name,
          email: profile.claims.email,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Context.Provider
      value={{ currentUser, signUp, logIn, setCurrentUser, events, setEvents }}
    >
      {children}
    </Context.Provider>
  );
}

export { AuthContextProvider, Context };
