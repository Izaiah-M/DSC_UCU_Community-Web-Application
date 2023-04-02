import { Card, Text } from "@nextui-org/react";
import { useContext } from "react";
import { Context } from "../../../contexts/AuthContext";

export const EventsCard = () => {
  const { events } = useContext(Context);

  return (
    <>
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Body>
          <Text>
            {events.map((event, key) =>
              event.start === new Date(Date.now()).toISOString() ? (
                <span key={key}>{event.title}</span>
              ) : (
                <span key={key}>No events for today</span>
              )
            )}
          </Text>
        </Card.Body>
      </Card>
    </>
  );
};
