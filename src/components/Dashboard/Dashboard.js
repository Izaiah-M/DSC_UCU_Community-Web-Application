import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/AuthContext";
import { useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { News } from "./News/News";

export function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { currentUser, setCurrentUser } = useContext(Context);

  // function to handle log out
  const handleLogOut = async () => {
    try {
      // Signing the user out
      sessionStorage.removeItem("Auth Token");

      navigate("/");
    } catch (error) {
      console.log("Failed to log out", error);
    }
  };

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Get user's profile
        const profile = await user.getIdTokenResult();
        // console.log(profile);

        // You can access the user's name and phone number using profile.claims.name and profile.claims.phone_number
        setCurrentUser({
          name: profile.claims.name,
          email: profile.claims.email,
        });
      } else {
        navigate("/login");
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button className="btn" onClick={handleLogOut}>
        Log out
      </button>
      <p>Welcome Back {currentUser.name}</p>
      <News />
    </div>
  );
}
