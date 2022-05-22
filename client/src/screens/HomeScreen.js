import React, { useEffect, useState } from "react";
import {
  Container,
  HStack,
  Text,
  VStack,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import GraphContainer from "../components/GraphContainer";
import WelcomeBox from "../components/WelcomeBox";
import DashboardNav from "../components/DashboardNav";
import notifications_btn from "../assets/notification_btn.png";
import todo_btn from "../assets/todo_btn.png";
import notes_btn from "../assets/notes_btn.png";
import blurred_box_bg from "../assets/blurred_box_bg2.png";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/details";
import { getUserInfo } from "../helpers/getUserInfo";

const HomeScreen = () => {
  const [date, setDate] = useState(new Date());
  // const userDetails = useRecoilValue(userState);
  const [userDetails, setUserDetails] = useRecoilState(userState);

  useEffect(() => {
    const getDetails = async () => {
      const info = await getUserInfo();
      info.extensionList = info.extensionList ? info.extensionList : [];
      setUserDetails(info);
    };
    if (Object.keys(userDetails).length === 0) {
      getDetails();
    }
  }, []);

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

  let activeExtensions = userDetails
    ? userDetails.extensionList
      ? extensions.filter((e) => userDetails.extensionList.includes(e.name))
      : []
    : [];

  return (
    <Container
      bgColor="primary.800"
      py={7}
      px={14}
      m={6}
      borderRadius="xl"
      maxH="100%"
      maxW="92%"
      color="white"
    >
      <DashboardNav name={userDetails.name} />
      <HStack paddingTop={6} spacing={6}>
        <WelcomeBox name={userDetails.name} />
        <Calendar onChange={setDate} value={date} className="calendar" />
      </HStack>
      <HStack pt={4} spacing={6} alignItems="flex-start">
        <GraphContainer />
        <VStack spacing="4">
          <Text fontWeight="bold" color="white" pt={1}>
            Your extensions
          </Text>
          {activeExtensions.map((t) => (
            <Container
              width={48}
              height={16}
              bgImage={blurred_box_bg}
              bgPosition="center"
              pt={2}
              borderRadius="lg"
              cursor="pointer"
            >
              <Box className="blur" width={44} height={12} borderRadius="lg">
                <Flex
                  pt={2.5}
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

export default HomeScreen;
