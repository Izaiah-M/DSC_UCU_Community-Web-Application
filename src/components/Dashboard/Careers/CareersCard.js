import { Card, Text, Row, Grid } from "@nextui-org/react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Googleimg from "../../../images/Google (1).jpg";

export const CareersCard = ({ jobs }) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentLogo, setCurrentLogo] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setCurrentTitle(jobs[selectedIndex].title);
    setCurrentUrl(jobs[selectedIndex].applyLink);
    setCurrentLogo(jobs[selectedIndex].logo);
  };

  return (
    <>
      <Card isPressable css={{ h: "400px", w: "400px" }}>
        <Card.Body
          css={{
            p: 0,
            mh: "400px",
            minHeight: "300px",
            w: "400px",
          }}
        >
          {jobs.length > 0 ? (
            <Carousel
              fade
              onSelect={handleSelect}
              style={{ maxHeight: "100%", overflow: "hidden" }}
            >
              {jobs.map((job, key) => (
                <Carousel.Item key={key + 1}>
                  <img
                    src={Googleimg}
                    alt=""
                    style={{
                      display: "block",
                      margin: "0 auto",
                      maxHeight: "100%",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>Loading</p>
          )}
        </Card.Body>
        <Card.Footer
          css={{
            justifyItems: "flex-start",
            mh: "200px",
            mw: "400px",
          }}
        >
          <Row wrap="wrap" justify="center" align="center">
            <p
              b
              style={{
                width: "100%",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentTitle}
            </p>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              <a href={currentUrl} target="_blank">
                Apply
              </a>
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
