import { Alert, AlertTitle } from "@mui/material";
import { useState } from "react";
import { SignUpForm } from "./SignUpForm/SignUpForm";
import { auth, db } from "../../utils/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

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

    // adding our newMember to our firebase db
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setLoading(true);
        // signed In
        const user = userCredential.user;
        console.log(user);

        // Adding the user to firestore
        try {
          const docRef = await addDoc(collection(db, "users"), newMember);
          //   setFormSubmitted(true);

          console.log(docRef);
        } catch (error) {
          console.log("Error adding doc: ", error);
        }

        // console.log(docRef);
        // // console.log(docRef.id);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    setLoading(false);

    console.log(newMember);

    // Reset form and state variables
    setNewMember({
      name: "",
      email: "",
      phone: "",
    });

    setEmail("");
    setName("");
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
