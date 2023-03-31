import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../utils/Firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

export function Dashboard() {
  const navigate = useNavigate();

  //   function to handle log out
  const handleLogOut = async () => {
    try {
      // Signing the user out
      sessionStorage.removeItem("Auth Token");

      navigate("/");
    } catch (error) {
      console.log("Failed to log out", error);
    }
  };

  //   Trying to create and auth Token
  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    // If the token exists, navigate to dashboard
    if (authToken) {
      navigate("/dashboard");
    }

    // if it does not, navigate to login
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <p>Welcome</p>
      <button className="btn" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
