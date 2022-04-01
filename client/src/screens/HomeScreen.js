import React from "react";
import { Container, Text } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <Container centerContent alignSelf="center">
      <Text
        bgGradient="linear(to-l, #4B4CCC, #9C9DF3)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Dashboard
      </Text>
    </Container>
  );
};

export default HomeScreen;
