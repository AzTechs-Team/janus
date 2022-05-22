import React from "react";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

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
      <Box className="blur" width={44} height={10} borderRadius="lg">
        <Flex
          pt={1.5}
          pl={4}
          gridGap={3}
          flexDirection="row"
          alignItems="flex-start"
        >
          <Image src={extension_img} width={7} />
          <Text color="white" fontSize="md">
            Github
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default BlurredBox;
