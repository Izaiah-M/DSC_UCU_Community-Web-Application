import { useState, useEffect } from "react";
import "./App.css";
import { SignUp } from "./components/SignUp/SignUp";

function App() {
  // Getting the contents from our local storage
  const gettingLocalStorage = () => {
    const retrievedMembersStr = localStorage.getItem("members");
    const retrievedMembers = JSON.parse(retrievedMembersStr);
    return retrievedMembers;
  };

  const currentMembers = gettingLocalStorage();
  const [members, setMembers] = useState(currentMembers || []);

  useEffect(() => {
    if (members.length > 0) {
      localStorage.setItem("members", JSON.stringify(members));
    }
  }, [members]);

  return (
    <div className="App">
      <header>Hey Google!</header>
      <div className="sign-up">
        <SignUp setMembers={setMembers} members={members} />
      </div>
    </div>
  );
}

export default App;
