import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { SignUp } from "./components/SignUp/SignUp";
import { Login } from "./components/Login/Login";

function App() {
  const ROUTES = {
    LandingPage: "/",
    SignUp: "/sign-up",
    Dashboard: "/dashboard",
    Login: "/login",
  };

  return (
    <div className="App">
      <div className="sign-up">
        <Routes>
          <Route path={ROUTES.SignUp} element={<SignUp />} />
          <Route path={ROUTES.LandingPage} element={<LandingPage />} />
          <Route path={ROUTES.Dashboard} element={<Dashboard />} />
          <Route path={ROUTES.Login} element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
