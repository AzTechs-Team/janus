import React from "react";
import { Container, Text } from "@chakra-ui/react";

const ExtensionsContent = ({ content }) => {
  return (
    <Container
      bgColor="primary.800"
      p="6"
      borderRadius="xl"
      height="100%"
      maxW="100%"
    >
      <Text color="white">{content}</Text>
    </Container>
  );
};

export default ExtensionsContent;
