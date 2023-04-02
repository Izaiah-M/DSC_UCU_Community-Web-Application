import { Card, Text, Row, Grid } from "@nextui-org/react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Googleimg from "../../../images/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg";

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
      <Card isPressable>
        <Card.Body css={{ p: 0 }}>
          {jobs.length > 0 ? (
            <Carousel fade onSelect={handleSelect}>
              {jobs.map((job, key) => (
                <Carousel.Item key={key + 1}>
                  <Card.Image
                    src={Googleimg}
                    objectFit="cover"
                    width="100%"
                    height={200}
                    alt={job.title}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>Loading</p>
          )}
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>
              <strong>Google Job Opportunitues</strong>
            </Text>
            <Text b>{currentTitle}</Text>
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
