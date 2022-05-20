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
  Tooltip,
} from "@chakra-ui/react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import auth from "../auth/auth";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "../auth/validators";

const SignupForm = ({ animateSlider, isBlur }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (validateEmail(email)) {
      setErr("Enter valid email");
      return;
    } else if (validateName(username)) {
      setErr("Enter valid name");
      return;
    } else if (validatePassword(password)) {
      setErr("Enter valid password");
      return;
    } else if (validatePhone(phone)) {
      setErr("Enter valid phone number");
      return;
    }

    const info = JSON.stringify({
      email: email,
      password: password,
      name: username,
      phone: phone,
    });

    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    try {
      const res = await fetch("http://localhost:8082/api/Register", {
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
      setErr("Error signing up! Try again!");
    }
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
        <FormControl id="email" textColor="white" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <HStack marginTop="4">
          <FormControl id="username" textColor="white" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              width={72}
              isRequired
              type="text"
              bgColor="#2B2F3B"
              border="#2B2F3B"
              placeholder="User name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="phone" textColor="white">
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              bgColor="#2B2F3B"
              border="#2B2F3B"
              placeholder="9999999999"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
        </HStack>
        <FormControl id="password" textColor="white" marginTop="4" isRequired>
          <Tooltip
            label="Password should have 8 characters, including uppercase, lowecase, number and symbol"
            placement="top"
            bgColor="primary.800"
            fontSize="xs"
          >
            <FormLabel>Password</FormLabel>
          </Tooltip>
          <Input
            isRequired
            type="password"
            bgColor="#2B2F3B"
            border="#2B2F3B"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          marginTop="8"
          w="100%"
          onClick={handleSignup}
          className="purple-button-gradient"
        >
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
          className="purple-button-gradient"
        >
          Login
        </Button>
      </Flex>
    </Container>
  );
};

export default SignupForm;
