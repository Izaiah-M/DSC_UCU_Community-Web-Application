import { useState, useEffect } from "react";
import { SignUpForm } from "./SignUpForm/SignUpForm";

export const SignUp = ({ setMembers, members }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
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
    setNewMember({
      ...newMember,
      password: target.value,
    });
  };
  //   To handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newMember);
    // Set new member and update members state with new member
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);

    // Add updatedMembers to local storage
    localStorage.setItem("members", JSON.stringify(updatedMembers));

    setFormSubmitted(true);

    // Reset form and state variables
    setNewMember({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    setEmail("");
    setName("");
    setPhone("");
    setPassword("");
  };

  return (
    <div>
      {/* TODO: using the submitted form state, create an Alert message */}
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
      />
    </div>
  );
};
