import { useState } from "react";
import { auth } from "../../utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from "./LoginForm";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  //   setting the different form fields
  const setemail = ({ target }) => {
    setEmail(target.value);
  };

  const setpassword = ({ target }) => {
    setPassword(target.value);
  };

  //   To handle the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);

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
        setUserProfile({
          name: profile.claims.name,
          email: profile.claims.email,
        });

        // navigate("/dashboard", { state: { userProfile } });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    // Reset form and state variables
    setEmail("");
    setPassword("");
  };

  //   TODO: pass the user down as a prop to Dashboard

  //   console.log(userProfile);

  return (
    <div>
      {/* TODO: make alert message appear for a certain period of time */}

      <LoginForm
        email={email}
        setEmail={setemail}
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setpassword}
      />
    </div>
  );
};
