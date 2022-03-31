import React, { useState } from "react";
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
import axios from "axios";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import auth from "../auth/auth";

const SignupForm = ({ animateSlider, isBlur }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const info = {
      email: email,
      password: password,
      username: username,
      dob: dob,
    };
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    axios
      .get("http://localhost:8082/json", info, { headers })
      .then((response) => {
        let token = response.data["token"];
        auth.login(token, () => {
          navigate("/home", { replace: true });
        });
      })
      .catch((error) => {
        setErr("Error logging in!");
      });
  };

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
            onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="dob" textColor="white">
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="text"
              bgColor="#2B2F3B"
              border="#2B2F3B"
              placeholder="10/12/2000"
              onChange={(e) => setDob(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button marginTop="8" w="100%" onClick={handleSignup}>
          Signup
        </Button>
        <Text
          textColor="red.200"
          marginTop="2"
          textAlign="center"
          fontSize="sm"
          w="100%"
        >
          {err}
        </Text>
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
