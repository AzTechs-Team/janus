import React from "react";
import { Container, HStack, Image, Text } from "@chakra-ui/react";

import extension_img from "../assets/extension_img.png";
import blurred_box_bg from "../assets/blurred_box_bg.png";

const BlurredBox = () => {
  return (
    <Container
      width={48}
      height={14}
      bgImage={blurred_box_bg}
      bgPosition="center"
      centerContent
      pt={2}
      borderRadius="lg"
      cursor="pointer"
    >
      <Container
        className="blur"
        width={44}
        height={10}
        centerContent
        borderRadius="lg"
      >
        <HStack pt={1} gridGap={2}>
          <Image src={extension_img} width={8} />
          <Text color="white" fontSize="md">
            Github
          </Text>
        </HStack>
      </Container>
    </Container>
  );
};

export default BlurredBox;
