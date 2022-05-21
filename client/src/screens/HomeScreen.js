import React, { useEffect, useState } from "react";
import { Container, HStack, Text, VStack, Image } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import GraphContainer from "../components/GraphContainer";
import BlurredBox from "../components/BlurredBox";
import WelcomeBox from "../components/WelcomeBox";
import DashboardNav from "../components/DashboardNav";
import { getUserInfo } from "../helpers/getUserInfo";
import notifications_btn from "../assets/notification_btn.png";
import todo_btn from "../assets/todo_btn.png";
import notes_btn from "../assets/notes_btn.png";
import blurred_box_bg from "../assets/blurred_box_bg2.png";

const HomeScreen = () => {
  const [date, setDate] = useState(new Date());
  const [userDetails, setUserDetails] = useState({});
  const apps = [1];
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
      <HStack pt={4} spacing={6}>
        <GraphContainer />
        <VStack>
          <Text fontWeight="bold" fontSize="md" color="white" pb={1}>
            Top extensions
          </Text>
          {apps.map((e) => (
            <BlurredBox key={e} />
          ))}

          <Text fontWeight="bold" color="white" pt={1}>
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

export default HomeScreen;
