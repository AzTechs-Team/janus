import React, { useState } from "react";
import {
  Box,
  Flex,
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
import notifications_btn from "../assets/notification_btn.png";
import todo_btn from "../assets/todo_btn.png";
import notes_btn from "../assets/notes_btn.png";
import blurred_box_bg from "../assets/blurred_box_bg2.png";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/details";

const ProfileScreen = () => {
  const userDetails = useRecoilValue(userState);

  // const details = localStorage.getItem("userDetails")
  //   ? JSON.parse(localStorage.getItem("userDetails"))
  //   : {
  //       name: "username01",
  //       email: "email@email.com",
  //       "Date of birth": "03/09/11",
  //       "phone No.": "+XX XXXXXXXXXX",
  //       gender: "Male",
  //     };

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

  let activeExtensions = extensions.filter((e) =>
    userDetails.extensionList.includes(e.name)
  );

  // const [userDetails] = useState(details);
  const temp = [1];

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
          {Object.keys(userDetails)
            .slice(1, 4)
            .map((detail) => (
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

          <Text fontWeight="bold" color="white" pt={6}>
            Your extensions
          </Text>
          {activeExtensions.map((t) => (
            <Container
              width={48}
              height={14}
              bgImage={blurred_box_bg}
              bgPosition="center"
              pt={2}
              borderRadius="lg"
              cursor="pointer"
            >
              <Box className="blur" width={44} height={10} borderRadius="lg">
                <Flex
                  pt={1.5}
                  pl={4}
                  gridGap={3}
                  flexDirection="row"
                  alignItems="flex-start"
                >
                  <Image src={t.image} width={7} />
                  <Text color="white" fontSize="md">
                    {t.name}
                  </Text>
                </Flex>
              </Box>
            </Container>
          ))}
        </VStack>
      </HStack>
    </Container>
  );
};

export default ProfileScreen;
