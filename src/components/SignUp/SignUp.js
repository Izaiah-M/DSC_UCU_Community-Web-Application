import { Alert, AlertTitle } from "@mui/material";
import { useState, useContext } from "react";
import { SignUpForm } from "./SignUpForm/SignUpForm";
import { auth, db } from "../../utils/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { Context } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { setCurrentUser } = useContext(Context);

  //   setting the different form fields
  const setname = ({ target }) => {
    setName(target.value);
    setNewMember({
      ...newMember,
      name: target.value,
    });
  };

  const setemail = ({ target }) => {
    setEmail(target.value);
    setNewMember({
      ...newMember,
      email: target.value,
    });
  };

  const setphone = ({ target }) => {
    setPhone(target.value);
    setNewMember({
      ...newMember,
      phone: target.value,
    });
  };

  const setpassword = ({ target }) => {
    setPassword(target.value);
  };

  //   TODO: add unique ids to each member

  //   To handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create new user
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setLoading(true);

        // Adding token to session storage
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );
        // Signed up
        const user = userCredential.user;
        console.log(user);

        // Update user profile with name and phone number
        await updateProfile(user, {
          displayName: name,
          phoneNumber: phone,
        });

        setCurrentUser({
          name: name,
          email: email,
        });

        navigate("/dashboard");

        // Add user to Firestore
        try {
          const docRef = await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: name,
            email: email,
            phone: phone,
          });
          console.log(docRef);
        } catch (error) {
          console.log("Error adding doc: ", error);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    setLoading(false);

    // Reset form and state variables
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div>
      {/* TODO: make alert message appear for a certain period of time */}
      {formSubmitted && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Signed Up <strong>successfully!</strong>
        </Alert>
      )}

      <SignUpForm
        name={name}
        setName={setname}
        email={email}
        setEmail={setemail}
        phone={phone}
        setPhone={setphone}
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setpassword}
        loading={loading}
      />
    </div>
  );
};
