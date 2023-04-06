import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import ReactPlayer from "react-player";

export const StudyBuddyCard = ({ thumbnail, title, videoId }) => {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="100%"
        height="100%"
        controls
      />

      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src={thumbnail}
                  css={{ bg: "black", br: "50%" }}
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  {title}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${videoId}`,
                    "_blank"
                  )
                }
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Youtube
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
