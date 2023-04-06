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
      <Card
        isPressable
        isHoverable
        variant="bordered"
        css={{ w: "400px", h: "300px" }}
      >
        <Card.Body css={{ justifyItems: "center" }}>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "50px",
              borderBottom: "2px solid #dee1e3",
              width: "100%",
            }}
          >
            Today's Plan
          </p>
          {filteredEvents.length > 0 ? (
            <Text style={{ textAlign: "center" }}>
              {filteredEvents.map((event, key) => {
                return event.title;
              })}
            </Text>
          ) : (
            <Text style={{ textAlign: "center" }}>
              No events scheduled for today
            </Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
