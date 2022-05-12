import React from "react";
import { Container } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import ExtensionsTitleBar from "../components/ExtensionsTitleBar";
import NotesGrid from "../components/NotesGrid";

const NotesScreen = () => {
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
      <ExtensionsTitleBar title="Notes" btn="Add a note" />
      <NotesGrid />
    </Container>
  );
};

export default NotesScreen;
