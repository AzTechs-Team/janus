import React from "react";
import { Button, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import auth from "../auth/auth";

const SettingsScreen = () => {
  const navigate = useNavigate();
  return (
    <Container centerContent alignSelf="center">
      <Text
        bgGradient="linear(to-l, #4B4CCC, #9C9DF3)"
        bgClip="text"
        fontSize="xl"
        fontWeight="extrabold"
      >
        User Settings
      </Text>
      <Button
        marginTop="10"
        onClick={() => {
          auth.logout(() => navigate("/", { replace: true }));
        }}
      >
        Signout
      </Button>
    </Container>
  );
};

export default SettingsScreen;
