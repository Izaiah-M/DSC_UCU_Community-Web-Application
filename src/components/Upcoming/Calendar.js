import { useEffect } from "react";
import { useNavigate } from "react-router";
import { NavBar } from "../Dashboard/NavBar/NavBar";
import { CalendarCard } from "./CalendarCard";

export const Calendar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <NavBar />
      <CalendarCard />
    </>
  );
};
