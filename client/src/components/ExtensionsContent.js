import React from "react";
import { Container, HStack, Spacer, VStack } from "@chakra-ui/react";
import NameCard from "./NameCard";
import TabsContainer from "./TabsContainer";
import ExtensionQuickLinks from "./ExtensionQuickLinks";
import BlurredBox from "./BlurredBox";

const ExtensionsContent = ({ content }) => {
  console.log("in hereee", content);
  return (
    <Container
      bgColor="primary.800"
      p={16}
      borderRadius="xl"
      height="100%"
      maxW="100%"
    >
      <NameCard content={content} id={1} />
      <HStack alignItems="flex-start">
        <TabsContainer content={content} />
        <Spacer />
        <VStack paddingTop={10} gridGap={3}>
          <ExtensionQuickLinks />
          <BlurredBox />
          <BlurredBox />
        </VStack>
      </HStack>
    </Container>
  );
};

export default ExtensionsContent;
