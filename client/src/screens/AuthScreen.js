import React, { useState } from "react";
import { Box, Image, HStack, useToast } from "@chakra-ui/react";

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import sliderImg from "../assets/slider.png";
import "./AuthScreenStyle.css";

const AuthScreen = () => {
  const [view, setView] = useState(true);

  const animateSlider = () => {
    setView(!view);
  };
  const toast = useToast();

  return (
    <Box bgColor="primary.900" w="100%">
      <Image
        width={{ base: "0", md: "50%" }}
        zIndex="5"
        pos="absolute"
        height="100vh"
        fit="cover"
        src={sliderImg}
        alt="Janus slider"
        className={`slider-box ${view ? "move-right" : "move-left"}`}
      />
      <Box
        width={{ base: "0", md: "50%" }}
        zIndex="4"
        pos="absolute"
        height="100vh"
        className={`blur-container slider-box ${
          view ? "move-right" : "move-left"
        }`}
      />
      <HStack w="100%" top="0">
        <LoginForm animateSlider={animateSlider} isBlur={view ? false : true} />
        <SignupForm
          toast={toast}
          animateSlider={animateSlider}
          isBlur={view ? true : false}
        />
      </HStack>
    </Box>
  );
};

export default AuthScreen;
