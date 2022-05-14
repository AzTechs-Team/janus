import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import ExtensionsTitleBar from "../components/ExtensionsTitleBar";
import NotesGrid from "../components/NotesGrid";
import { notes } from "../assets/content/notes";

const NotesScreen = () => {
  const [notesCollection, setNotesCollections] = useState(notes);
  const [search, setSearch] = useState("");

  const onSearch = (text) => {
    if (text) {
      const newData = notes.filter(function (item) {
        const userData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return userData.indexOf(textData) > -1;
      });

      setNotesCollections(newData);
      setSearch(text);
    } else {
      setNotesCollections(notes);
      setSearch(text);
    }
  };

  const reset = () => {
    setNotesCollections(notes);
  };

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
      <ExtensionsTitleBar
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
        reset={reset}
        title="Notes"
        btn="Add a note"
      />
      <NotesGrid notesCollection={notesCollection} />
    </Container>
  );
};

export default NotesScreen;
