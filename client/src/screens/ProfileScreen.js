import React, { useEffect, useState } from "react";
import { Box, Container, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import NameCard from "../components/NameCard";
import BlurredBox from "../components/BlurredBox";
import ProfileInfo from "../components/ProfileInfo";
import { getUserInfo } from "../helpers/getUserInfo";

const ProfileScreen = () => {
  const details = {
    name: "username01",
    email: "email@email.com",
    "Date of birth": "03/09/11",
    "phone No.": "+XX XXXXXXXXXX",
    gender: "Male",
  };

  const [userDetails, setUserDetails] = useState(details);
  const temp = [1, 2, 3, 4];

  useEffect(() => {
    const getDetails = async () => {
      const info = await getUserInfo();
      setUserDetails(info);
    };
    getDetails();
  }, []);

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
      <NameCard
        content={{
          title: userDetails.name,
          description: `Short description of ${userDetails.name}`,
        }}
        id={0}
      />
      <HStack alignItems="flex-start">
        <Box
          height="54vh"
          width="58vw"
          bgColor="accent.700"
          p={12}
          borderRadius="2xl"
        >
          {Object.keys(userDetails).map((detail) => (
            <ProfileInfo
              text={detail}
              placeholder={userDetails[detail]}
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
