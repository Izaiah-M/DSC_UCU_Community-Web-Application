// import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  Card,
  Text,
  Grid,
  Navbar,
  Button,
  Link,
  useTheme,
  Row,
} from "@nextui-org/react";

import { useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import img3 from "../../images/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg";
import img4 from "../../images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg";
import img5 from "../../images/james-harrison-UVMPVIRCF5w-unsplash.jpg";

import will from "../../images/will.jpg";
import nkata from "../../images/nkata.jpg";
import isaac from "../../images/isaac.jpg";

import lee from "../../images/Peter Lee.jpg";
import moga from "../../images/Moga.jpg";

import { Footer } from "./Footer";

export function LandingPage() {
  const [variant, setVariant] = useState("default");
  const [activeColor, setActiveColor] = useState("error");

  const { isDark } = useTheme();

  const ROLES = [
    {
      name: "Izaiah Mukisa",
      img: img4,
      role: "Club lead",
    },
    {
      name: "Arou Isaac",
      img: isaac,
      role: "Technical Lead",
    },
    {
      name: "Moga Adbul",
      img: moga,
      role: "Mentorship lead",
    },
    {
      name: "Conrad William",
      img: will,
      role: "Design Lead",
    },
    {
      name: "Nkata Joshua",
      img: nkata,
      role: "Outreach Lead",
    },
    {
      name: "Peter Lee",
      img: lee,
      role: "Back End Dev",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard/*");
    }
  }, []);

  return (
    <>
      <Grid.Container gap={4} justify="center">
        {/* Nav Bar from next UI */}
        <Navbar isBordered={isDark} variant="sticky">
          <Navbar.Content
            activeColor={activeColor}
            hideIn="xs"
            variant={variant}
          >
            <Navbar.Brand>
              <Text b color="inherit" hideIn="xs">
                DSC UCU Community
              </Text>
            </Navbar.Brand>
            <Navbar.Link href="#">Features</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link color="inherit">
              <NavLink to="/login">Login</NavLink>
            </Navbar.Link>
            <Navbar.Item>
              <NavLink to="/sign-up">
                <Button auto flat as={Link} color={activeColor}>
                  Sign Up
                </Button>
              </NavLink>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>

        {/* Carousel from react-bootsrap */}
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img5} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="Third slide" src={img3} />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Cards from NExt-UI */}
        <Grid>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "1250px" }}
          >
            <Card.Body>
              <Text>
                <strong>Google Developer Student Clubs</strong> (DSCs) are
                community groups for university and college students interested
                in learning about Google technologies and developer tools. These
                clubs are open to any student, regardless of their academic
                background or major. DSCs are organized and supported by Google
                Developers, who provide resources and guidance to help students
                learn, grow, and build projects using Google's technologies.
                DSCs offer a variety of activities, including workshops, study
                jams, speaker sessions, hackathons, and hands-on projects. The
                primary goal of DSCs is to help students become better
                developers by providing them with opportunities to learn from
                experienced developers, collaborate with other students, and
                build real-world projects using Google's technologies. Through
                these activities, students can gain valuable skills, build their
                portfolios, and prepare for careers in the tech industry. DSCs
                are present in universities and colleges all around the world
                and are a great way for students to connect with like-minded
                individuals, learn new skills, and make an impact in their
                communities through technology.
              </Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid.Container gap={2} justify="center">
          {ROLES.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={item.img}
                    objectFit="cover"
                    width="100%"
                    height={300}
                    alt={item.name}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{item.name}</Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {item.role}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Grid.Container>
      <Footer />
    </>
  );
}
