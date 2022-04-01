import React from "react";
import { Container, Text } from "@chakra-ui/react";

const ExampleScreen = () => {
  return (
    <Container centerContent alignSelf="center">
      <Text
        bgGradient="linear(to-l, #4B4CCC, #9C9DF3)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Details of the extension!
      </Text>
    </Container>
  );
};

export default ExampleScreen;
