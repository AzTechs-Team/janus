import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  HStack,
  Spacer,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import NameCard from "../components/NameCard";
import BlurredBox from "../components/BlurredBox";
import ProfileInfo from "../components/ProfileInfo";
import { getUserInfo } from "../helpers/getUserInfo";
import notifications_btn from "../assets/notification_btn.png";
import todo_btn from "../assets/todo_btn.png";
import notes_btn from "../assets/notes_btn.png";
import blurred_box_bg from "../assets/blurred_box_bg2.png";

const ProfileScreen = () => {
  const details = {
    name: "username01",
    email: "email@email.com",
    "Date of birth": "03/09/11",
    "phone No.": "+XX XXXXXXXXXX",
    gender: "Male",
  };

  const extensions = [
    {
      name: "Notifications",
      image: notifications_btn,
    },
    {
      name: "Todos",
      image: todo_btn,
    },
    {
      name: "Notes",
      image: notes_btn,
    },
  ];

  const [userDetails, setUserDetails] = useState(details);
  const temp = [1];

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

        <VStack gridGap={2}>
          <Text fontWeight="bold" color="white">
            Linked accounts
          </Text>
          {temp.map((t) => (
            <BlurredBox key={t} />
          ))}

          <Text fontWeight="bold" color="white" pt={2}>
            Your extensions
          </Text>
          {extensions.map((t) => (
            <Container
              width={48}
              height={14}
              bgImage={blurred_box_bg}
              bgPosition="center"
              centerContent
              pt={2}
              borderRadius="lg"
              cursor="pointer"
            >
              <Container
                className="blur"
                width={44}
                height={10}
                centerContent
                borderRadius="lg"
              >
                <HStack pt={1} gridGap={1}>
                  <Image src={t.image} width={8} />
                  <Text color="white" fontSize="md">
                    {t.name}
                  </Text>
                </HStack>
              </Container>
            </Container>
          ))}
        </VStack>
      </HStack>
    </Container>
  );
};

export default ProfileScreen;
