import React, { useCallback, useEffect, useState } from "react";
import { Text, Image, VStack } from "@chakra-ui/react";
import welcome from "../assets/welcome_bg.png";
import { getQuotes } from "../helpers/getQuotes";

const WelcomeBox = ({ name }) => {
  const [quote, setQuote] = useState("");

  const generateQuotes = useCallback(async () => {
    setQuote(await getQuotes());
  }, []);

  useEffect(() => {
    generateQuotes();
  }, [generateQuotes]);

  return (
    <>
      <Image width="75%" src={welcome} alt="welcome" position="relative" />
      <VStack position="absolute" overflowWrap="break-word" width="55%" p={4}>
        <Text
          fontSize="2xl"
          alignSelf="flex-start"
          color="accent.100"
          paddingBottom="3"
          fontWeight="bold"
        >
          Hello {name ? name : "User"}!
        </Text>
        <Text alignSelf="flex-start">{quote}</Text>
      </VStack>
    </>
  );
};

export default WelcomeBox;
