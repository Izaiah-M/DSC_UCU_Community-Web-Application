import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { SignUp } from "./components/SignUp/SignUp";
import { Login } from "./components/Login/Login";
import { Calendar } from "./components/Upcoming/Calendar";
import { StudyBuddy } from "./components/StudyBuddy/StudyBuddy";

function App() {
  const ROUTES = {
    LandingPage: "/",
    SignUp: "/sign-up",
    Dashboard: "/dashboard/*",
    Login: "/login",
    Upcoming: "/dashboard/upcoming",
    Study: "/dashboard/study-buddy",
  };

  return (
    <div className="App">
      <div className="sign-up">
        <Routes>
          <Route path={ROUTES.SignUp} element={<SignUp />} />
          <Route path={ROUTES.LandingPage} element={<LandingPage />} />
          <Route path={ROUTES.Login} element={<Login />} />
          <Route path={ROUTES.Dashboard} element={<Dashboard />} />
          <Route path={ROUTES.Upcoming} element={<Calendar />} />
          <Route path={ROUTES.Study} element={<StudyBuddy />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
