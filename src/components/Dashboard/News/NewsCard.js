import { Card, Text, Row } from "@nextui-org/react";

import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export const NewsCard = ({ articles }) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentImg, setCurrentImg] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setCurrentTitle(articles[selectedIndex].title);
    setCurrentUrl(articles[selectedIndex].url);
    setCurrentImg(articles[selectedIndex].img);
  };

  if (!articles || articles.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Card isPressable>
        <Card.Body
          css={{
            p: 0,
            mw: "700px",
            minWidth: "700px",
          }}
        >
          <Carousel fade onSelect={handleSelect}>
            {articles.map((article, key) => (
              <Carousel.Item key={key + 1} style={{ width: "100%" }}>
                <Card.Image
                  src={article.img}
                  objectFit="cover"
                  width="100%"
                  height={400}
                  alt={article.title}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Card.Body>
        <Card.Footer
          css={{
            justifyItems: "flex-start",
            mw: "700px",
            minWidth: "700px",
          }}
        >
          <Row wrap="wrap" justify="center" align="center">
            <Text b style={{ width: "100%" }}>
              <strong>Latest in Tech News</strong>
            </Text>
            <Text b style={{ width: "100%" }}>
              {currentTitle}
            </Text>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
                width: "100%",
              }}
            >
              <a href={currentUrl} target="_blank">
                Read more
              </a>
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
