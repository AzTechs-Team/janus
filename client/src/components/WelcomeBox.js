import React from "react";
import { Text, Image, VStack } from "@chakra-ui/react";
import welcome from "../assets/welcome_bg.png";

const WelcomeBox = ({ name }) => {
  return (
    <>
      <Image width="75%" src={welcome} alt="welcome" position="relative" />
      <VStack position="absolute" overflowWrap="break-word" width="55%" p={4}>
        <Text
          fontSize="2xl"
          alignSelf="flex-start"
          color="accent.100"
          paddingBottom="3"
          fontWeight="bold"
        >
          Hello {name ? name : "User"}!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
          aenean tristique malesuada ipsum at eget. Pharetra cursus purus
          habitasse iaculis at porttitor. Morbi non mauris nibh aliquet. aenean
          tristique malesuada ipsum at eget. Pharetra cursus purus
        </Text>
      </VStack>
    </>
  );
};

export default WelcomeBox;
