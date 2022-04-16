import React from "react";
import { Box, Container, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import NameCard from "../components/NameCard";
import BlurredBox from "../components/BlurredBox";
import ProfileInfo from "../components/ProfileInfo";

const ProfileScreen = () => {
  const content = {
    title: "John doe",
    description: "Short description about John doe!",
  };

  const temp = [1, 2, 3, 4];

  const details = {
    Username: "username01",
    Email: "email@email.com",
    "Date of birth": "03/09/11",
    "Phone No.": "+XX XXXXXXXXXX",
    Gender: "Male",
  };

  return (
    <Container
      bgColor="primary.800"
      py={16}
      px={32}
      m={6}
      borderRadius="xl"
      maxH="100%"
      maxW="92%"
    >
      <NameCard content={content} id={0} />
      <HStack alignItems="flex-start">
        <Box
          height="54vh"
          width="58vw"
          bgColor="accent.700"
          p={12}
          borderRadius="2xl"
        >
          {Object.keys(details).map((detail) => (
            <ProfileInfo
              text={detail}
              placeholder={details[detail]}
              key={detail}
            />
          ))}
        </Box>
        <Spacer />
        <VStack gridGap={3}>
          <Text fontWeight="bold" color="white">
            Linked accounts
          </Text>
          {temp.map((t) => (
            <BlurredBox key={t} />
          ))}
        </VStack>
      </HStack>
    </Container>
  );
};

export default ProfileScreen;
