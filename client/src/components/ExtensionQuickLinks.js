import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";

const linkComponent = (item, link) => {
  return (
    <HStack
      key={item}
      color="accent.100"
      cursor="pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <BiLink />
      <Text>{item}</Text>
    </HStack>
  );
};

const ExtensionQuickLinks = () => {
  const links = {
    "Quick Links 1":
      "https://github.com/Azure-Samples/cognitive-services-quickstart-code/blob/master/go/ComputerVision/REST/go-print-text.md",
    "Quick Links 2":
      "https://strml.github.io/react-grid-layout/examples/0-showcase.html",
    "Quick Links 3": "https://github.com/gofiber/websocket",
    "Quick Links 4": "https://github.com/shreyaparadkar/imprint",
  };

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
        {Object.keys(links).map((l) => linkComponent(l, links[l]))}
      </VStack>
    </Box>
  );
};

export default ExtensionQuickLinks;
