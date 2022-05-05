import React from "react";
import { Container, Text } from "@chakra-ui/react";

const SettingsContent = ({ content }) => {
  console.log("!!!!!!!!!!!!", content);
  return (
    <Container
      bgColor="primary.800"
      p={16}
      borderRadius="xl"
      height="100%"
      maxW="100%"
      color="white"
    >
      <Text fontSize="3xl">{content["title"]}</Text>
      <Text color="primary.100" paddingTop="5">
        {" "}
        {content["description"]}
      </Text>
    </Container>
  );
};

export default SettingsContent;
