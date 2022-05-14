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
} from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import auth from "../auth/auth";

const LoginForm = ({ animateSlider, isBlur }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const info = JSON.stringify({ email: email, password: password });
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    try {
      const res = await fetch("http://localhost:8082/api/Login", {
        method: "POST",
        headers: headers,
        credentials: "include",
        body: info,
      });
      if (res)
        auth.login(() => {
          navigate("/home", { replace: true });
        });
    } catch (error) {
      setErr("Error logging in! Try again!");
    }
  };

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
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" textColor="white" marginTop="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.password)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
          />
        </FormControl>
        <Button
          marginTop="8"
          w="100%"
          onClick={handleLogin}
          className="purple-button-gradient"
        >
          Login
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
          Don't have an account yet?
        </Text>
        <Button
          onClick={animateSlider}
          marginTop="2"
          w="70%"
          alignSelf="center"
          rightIcon={<BsArrowRightCircleFill color="white" />}
          className="purple-button-gradient"
        >
          Signup
        </Button>
      </Flex>
    </Container>
  );
};

export default LoginForm;
