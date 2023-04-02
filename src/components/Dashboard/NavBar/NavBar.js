import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { useNavigate } from "react-router";

export function NavBar() {
  const collapseItems = [
    "Up coming Events",
    "Study Buddy",
    "Help & Feedback",
    "Log out",
  ];

  const navigate = useNavigate();

  // function to handle log out
  const handleLogOut = () => {
    try {
      // Signing the user out
      sessionStorage.removeItem("Auth Token");

      navigate("/");
    } catch (error) {
      console.log("Failed to log out", error);
    }
  };

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Text b color="inherit" hideIn="xs">
            Google DSC
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            <Button color="error" onClick={handleLogOut} auto flat as={Link}>
              Log Out
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index + 1}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
