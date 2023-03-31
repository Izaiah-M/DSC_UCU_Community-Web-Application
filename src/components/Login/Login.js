import { useState, useContext } from "react";
import { LoginForm } from "./LoginForm";

import { Context } from "../../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useContext(Context);
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

    await logIn(email, password);

    const authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard");
    }

    if (!authToken) {
      alert("Invalid login details");
    }
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
