import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Flex,
  Text,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  HStack,
} from "@chakra-ui/react";

import { BsArrowLeftCircleFill } from "react-icons/bs";

const SignupForm = ({ animateSlider, isBlur }) => {
  const navigate = useNavigate();
  return (
    <Container
      bgColor="primary.900"
      sx={{ filter: isBlur ? "blur(12px)" : "" }}
      centerContent
      h="100vh"
      w="50vw"
      paddingTop="6%"
      maxW="50vw"
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
          Signup
        </Text>
        <Text
          textColor="primary.100"
          paddingBottom="2"
          textAlign="left"
          fontSize="sm"
        >
          Create your account
        </Text>
        <Divider marginBottom="6" size="sm" />
        <FormControl id="email" textColor="white">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="email@email.com/username"
          />
        </FormControl>
        <HStack marginTop="4">
          <FormControl id="username" textColor="white">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              bgColor="#2B2F3B"
              border="#2B2F3B"
              placeholder="username01"
            />
          </FormControl>
          <FormControl id="dob" textColor="white">
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="text"
              bgColor="#2B2F3B"
              border="#2B2F3B"
              placeholder="10/12/2000"
            />
          </FormControl>
        </HStack>
        <FormControl id="password" textColor="white" marginTop="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="*******"
          />
        </FormControl>
        <Button marginTop="8" w="100%" onClick={() => navigate("/home")}>
          Signup
        </Button>
        <Text
          textColor="primary.100"
          marginTop="12"
          textAlign="center"
          fontSize="sm"
          w="100%"
        >
          Already have an account?
        </Text>
        <Button
          onClick={animateSlider}
          marginTop="2"
          w="70%"
          alignSelf="center"
          leftIcon={<BsArrowLeftCircleFill color="white" />}
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};

export default SignupForm;
