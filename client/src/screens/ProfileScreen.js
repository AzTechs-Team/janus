import React from "react";
import { Container, Text } from "@chakra-ui/react";

const ProfileScreen = () => {
  return (
    <Container centerContent alignSelf="center">
      <Text
        bgGradient="linear(to-l, #4B4CCC, #9C9DF3)"
        bgClip="text"
        fontSize="xl"
        fontWeight="extrabold"
      >
        User Profile
      </Text>
    </Container>
  );
};

export default ProfileScreen;
