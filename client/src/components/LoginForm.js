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
import axios from "axios";
import { BsArrowRightCircleFill } from "react-icons/bs";
import auth from "../auth/auth";

const LoginForm = ({ animateSlider, isBlur }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const info = { email: email, password: password };
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
        <Button marginTop="8" w="100%" onClick={handleLogin}>
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
        >
          Signup
        </Button>
      </Flex>
    </Container>
  );
};

export default LoginForm;
