import { Card, Text } from "@nextui-org/react";
import { useContext } from "react";
import { Context } from "../../../contexts/AuthContext";

export const EventsCard = () => {
  const { events } = useContext(Context);

  const currentDate = new Date();
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.start);
    return (
      eventDate.getDate() === currentDate.getDate() &&
      eventDate.getMonth() === currentDate.getMonth() &&
      eventDate.getFullYear() === currentDate.getFullYear()
    );
  });

  return (
    <>
      <Card isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Body>
          {filteredEvents.length > 0 ? (
            <Text>
              {filteredEvents.map((event, key) => {
                return event.title;
              })}
            </Text>
          ) : (
            <Text>No events scheduled for today</Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
