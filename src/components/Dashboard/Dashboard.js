import { useNavigate, Routes, Route } from "react-router-dom";
import { Context } from "../../contexts/AuthContext";
import { useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { News } from "./News/News";
import { Careers } from "./Careers/Careers";
import { NavBar } from "./NavBar/NavBar";
import { Grid } from "@nextui-org/react";
import { motion } from "framer-motion";

import "./Dashboard.css";
import { useInView } from "react-intersection-observer";
import { Events } from "./EventsCard/Events";
import { RandonYoutube } from "./RandomYoutube/RandonYoutube";
import { MemberCount } from "../MemberCount/MemberCount";

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

  const [careersRef, careersInView] = useInView({ threshold: 0.2 });
  const [youtubeRef, youtubeInView] = useInView({ threshold: 0.2 });
  const [memberRef, memberInView] = useInView({ threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const careerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const youtubeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const memberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavBar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Grid.Container gap={4} justify="center">
          <Grid xs={12} sm={12} justify="center">
            <motion.p
              className="msg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.1 }}
            >
              Welcome Back {currentUser.name} 👋
            </motion.p>
          </Grid>
          <Grid.Container gap={4} justify="center">
            <Grid xs={12} sm={7} justify="center">
              <motion.div variants={variants} transition={{ duration: 0.5 }}>
                <News />
              </motion.div>
            </Grid>
            <Grid
              xs={12}
              sm={4}
              justify="center"
              style={{
                backgroundColor: "#65aefc",
                borderRadius: "8px",
                marginTop: "50px",
                height: "500px",
              }}
            >
              <motion.div variants={variants} transition={{ duration: 0.5 }}>
                <Events />
              </motion.div>
            </Grid>
          </Grid.Container>
          <Grid.Container
            gap={1}
            justify="flex-start"
            style={{ backgroundColor: "pink" }}
          >
            <Grid xs={12} sm={4} justify="center">
              <motion.div
                ref={careersRef}
                variants={careerVariants}
                animate={careersInView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <Careers />
              </motion.div>
            </Grid>

            <Grid xs={12} sm={4} justify="center">
              <motion.div
                ref={youtubeRef}
                variants={youtubeVariants}
                animate={youtubeInView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <RandonYoutube />
              </motion.div>
            </Grid>

            <Grid xs={12} sm={3} justify="center">
              <motion.div
                ref={memberRef}
                variants={memberVariants}
                animate={memberInView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
              >
                <MemberCount />
              </motion.div>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </motion.div>
    </>
  );
}
