import React, { useState } from "react";
import { Container, HStack, Text, VStack } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import GraphContainer from "../components/GraphContainer";
import BlurredBox from "../components/BlurredBox";
import WelcomeBox from "../components/WelcomeBox";
import DashboardNav from "../components/DashboardNav";

const HomeScreen = () => {
  const [date, setDate] = useState(new Date());
  const apps = [1, 2, 3];
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
      <DashboardNav />
      <HStack paddingTop={6} spacing={6}>
        <WelcomeBox />
        <Calendar onChange={setDate} value={date} className="calendar" />
      </HStack>
      <HStack pt={6} spacing={6}>
        <GraphContainer />
        <VStack>
          <Text fontWeight="bold" fontSize="xl" color="white" pb={6}>
            Top extensions
          </Text>
          {apps.map((e) => (
            <BlurredBox key={e} />
          ))}
        </VStack>
      </HStack>
    </Container>
  );
};

export default HomeScreen;
