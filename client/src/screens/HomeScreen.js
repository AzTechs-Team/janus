import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import SideNav from "../components/SideNav";

const HomeScreen = () => {
  return (
    <Box bgColor="primary.900">
      <Flex flexDir="row">
        <SideNav />
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
      </Flex>
    </Box>
  );
};

export default HomeScreen;
