import React from "react";
import { Container, Text } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <Container centerContent alignSelf="center">
      <Text
        bgGradient="linear(to-l, #4B4CCC, #9C9DF3)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Janus
      </Text>
    </Container>
  );
};

export default HomeScreen;
