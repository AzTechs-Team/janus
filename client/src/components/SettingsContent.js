import React from "react";
import { Container, Text } from "@chakra-ui/react";

const SettingsContent = ({ content }) => {
  console.log("!!!!!!!!!!!!", content);
  return (
    <Container
      bgColor="primary.800"
      p={16}
      borderRadius="xl"
      maxH="94vh"
      maxW="100%"
      color="primary.100"
      overflowY="auto"
    >
      <Text fontSize="3xl">{content["title"]}</Text>
      {/* <Text color="primary.100" paddingTop="5"> */}
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content["description"] }}
      ></div>
      {/* </Text> */}
    </Container>
  );
};

export default SettingsContent;
