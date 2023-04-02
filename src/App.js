import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { SignUp } from "./components/SignUp/SignUp";
import { Login } from "./components/Login/Login";
import { useEffect } from "react";
import { Calendar } from "./components/Upcoming/Calendar";

function App() {
  const ROUTES = {
    LandingPage: "/",
    SignUp: "/sign-up",
    Dashboard: "/dashboard/*",
    Login: "/login",
    Upcoming: "/dashboard/upcoming",
  };

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard/*");
    }
  }, []);

  return (
    <div className="App">
      <div className="sign-up">
        <Routes>
          <Route path={ROUTES.SignUp} element={<SignUp />} />
          <Route path={ROUTES.LandingPage} element={<LandingPage />} />
          <Route path={ROUTES.Login} element={<Login />} />
          <Route path={ROUTES.Dashboard} element={<Dashboard />} />
          <Route path={ROUTES.Upcoming} element={<Calendar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
