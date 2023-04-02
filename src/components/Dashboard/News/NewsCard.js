import { Card, Text, Row, Grid } from "@nextui-org/react";

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
      <Grid.Container gap={4} justify="center">
        <Grid xs={12} sm={7}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Carousel fade onSelect={handleSelect}>
                {articles.map((article, key) => (
                  <Carousel.Item key={key + 1}>
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
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>
                  <strong>Latest in Tech News</strong>
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
                    Read more
                  </a>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};
