import React from "react";
import { Container, HStack, Image, Text } from "@chakra-ui/react";

import extension_img from "../assets/extension_img.png";
import blurred_box_bg from "../assets/blurred_box_bg.png";

const BlurredBox = () => {
  return (
    <Container
      width={44}
      height={16}
      bgImage={blurred_box_bg}
      bgPosition="center"
      centerContent
      pt={2}
      borderRadius="lg"
      cursor="pointer"
    >
      <Container
        className="blur"
        width={40}
        height={12}
        centerContent
        borderRadius="lg"
      >
        <HStack pt={2} gridGap={1}>
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
