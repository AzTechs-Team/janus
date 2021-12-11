import React from "react";
import {
  Container,
  Flex,
  Text,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { BsArrowRightCircleFill } from "react-icons/bs";

const LoginForm = ({ animateSlider, isBlur }) => {
  return (
    <Container
      bgColor="primary.900"
      sx={{ filter: isBlur ? "blur(12px)" : "" }}
      centerContent
      h="100vh"
      w="50vw"
      maxW="50vw"
      paddingTop="10%"
    >
      <Flex
        flexDir="column"
        align="flex-start"
        justify="center"
        w="80%"
        paddingX="5%"
      >
        <Text
          textColor="white"
          paddingBottom="2"
          fontSize="2xl"
          textAlign="left"
        >
          Login
        </Text>
        <Text
          textColor="primary.100"
          paddingBottom="2"
          textAlign="left"
          fontSize="sm"
        >
          Sign in to your account
        </Text>
        <Divider marginBottom="6" size="sm" />
        <FormControl id="email" textColor="white">
          <FormLabel>Username/email</FormLabel>
          <Input
            type="email"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="email@email.com/username"
          />
        </FormControl>
        <FormControl id="password" textColor="white" marginTop="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="*******"
          />
        </FormControl>
        <Button marginTop="8" w="100%">
          Signin
        </Button>
        <Text
          textColor="primary.100"
          marginTop="12"
          textAlign="center"
          fontSize="sm"
          w="100%"
        >
          Don't have an account yet?
        </Text>
        <Button
          onClick={animateSlider}
          marginTop="2"
          w="70%"
          alignSelf="center"
          rightIcon={<BsArrowRightCircleFill color="white" />}
        >
          Signup
        </Button>
      </Flex>
    </Container>
  );
};

export default LoginForm;
