import { Card, Grid, Text, Link } from "@nextui-org/react";
import CountUp from "react-countup";

export const MemberCountCard = ({ members }) => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              GDSC
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>Student Dev clubs</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <span>A Growing Community of</span>{" "}
        <span
          style={{ fontSize: "24px", fontWeight: "bold", color: "#4285F4" }}
        >
          <CountUp start={0} end={members} duration={2.5} />
        </span>
        <span style={{ color: "#4285F4" }}>Club members</span>
      </Card.Body>
    </Card>
  );
};
