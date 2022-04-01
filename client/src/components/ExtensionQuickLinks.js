import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";

const linkComponent = (item) => {
  return (
    <HStack key={item} color="accent.100" cursor="pointer">
      <BiLink />
      <Text>{item}</Text>
    </HStack>
  );
};

const ExtensionQuickLinks = () => {
  const links = [
    "Quick Link 1",
    "Quick Link 2",
    "Quick Link 3",
    "Quick Link 4",
  ];

  return (
    <Box
      width={44}
      height="27.5vh"
      bgColor="accent.700"
      p={5}
      color="white"
      borderRadius="xl"
    >
      <VStack>
        <Text fontWeight="bold" mb={4}>
          Quick Links
        </Text>
        {links.map((l) => linkComponent(l))}
      </VStack>
    </Box>
  );
};

export default ExtensionQuickLinks;
