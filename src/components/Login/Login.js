import { useState } from "react";
import { auth } from "../../utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    // logging in our user
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // signed In
        const user = userCredential.user;
        console.log(user);
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
