import { useNavigate, Routes, Route } from "react-router-dom";
import { Context } from "../../contexts/AuthContext";
import { useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { News } from "./News/News";
import { Careers } from "./Careers/Careers";
import { NavBar } from "./NavBar/NavBar";
import { Grid } from "@nextui-org/react";

import "./Dashboard.css";
import { Calendar } from "../Upcoming/Calendar";

export function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { currentUser, setCurrentUser } = useContext(Context);

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
    <>
      <NavBar />

      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={12} sm={12} justify="center">
          <p className="msg">Welcome Back {currentUser.name} 👋</p>
        </Grid>
        <Grid xs={12} sm={12}>
          <Grid xs={12} sm={4}>
            <Careers />
          </Grid>
        </Grid>
        <Grid xs={12} sm={7}>
          <News />
        </Grid>
      </Grid.Container>
    </>
  );
}
