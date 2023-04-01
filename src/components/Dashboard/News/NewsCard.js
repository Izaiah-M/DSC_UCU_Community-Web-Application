import { Card, Text, Row, Grid } from "@nextui-org/react";
import "./NewsCard.css";

export const NewsCard = ({ title, img, url }) => {
  return (
    <>
      <Grid.Container gap={4} justify="center">
        <Grid xs={12} sm={4}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={img}
                objectFit="cover"
                width="100%"
                height={400}
                alt={title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{title}</Text>
                <Text
                  css={{
                    color: "$accents7",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                  }}
                >
                  <a href={url} target="_blank">
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
