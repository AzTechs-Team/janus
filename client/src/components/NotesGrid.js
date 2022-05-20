import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import GridLayout from "react-grid-layout";

import NoteContainer from "./NoteContainer";
import bg from "../assets/notes_bg.png";
import "../theme/grid.css";
import { GrAdd } from "react-icons/gr";
import ModalContainer from "./ModalContainer";

const getRatio = (note) => {
  const len = note.description.length;
  if (len <= 25) return 4;
  else if (len <= 50) return 8;
  else return 12;
};

let x_loc = 0;

const generateLayout = (i, note) => {
  const y = Math.ceil(0.6 * getRatio(note)) + 1;
  const minW = 2;
  const minH = 4;
  const maxW = 2;
  const maxH = 12;
  if (x_loc !== 6) x_loc += 2;
  else x_loc = 0;
  return {
    x: x_loc,
    y: Math.floor(i / 6) * y,
    w: 2,
    h: y,
    i: i.toString(),
    minW,
    maxW,
    minH,
    maxH,
  };
};

const NotesGrid = ({ notesCollection }) => {
  const [notes, setNotes] = useState(notesCollection);
  const [layout, setLayout] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    let t = [];
    notes.map((note, i) => {
      t.push(generateLayout(i, note));
      return null;
    });
    setLayout(t);
  }, [notes]);

  const updateNote = (note, title, text) => {
    let temp = notes;
    if (note) {
      temp.map((n, i) => {
        if (n.id === note.id) {
          note.title = title;
          note.description = text;
        }
        return null;
      });
    } else {
      temp.push({
        id: (temp.length + 1).toString(),
        title: title,
        description: text,
      });
    }
    onClose();

    setNotes(temp);
    console.log(temp);
    let t = [];
    notes.map((note, i) => {
      t.push(generateLayout(i, note));
      return null;
    });
    setLayout(t);
  };

  return (
    <>
      <Flex flexDirection="column">
        <Button
          alignSelf="flex-end"
          mt={-16}
          mb={6}
          rightIcon={<GrAdd color="accent.700" size="20" />}
          bgColor="accent.100"
          color="accent.700"
          _active={{ bgColor: "accent.50" }}
          _hover={{ bgColor: "accent.50" }}
          width="18%"
          iconSpacing="12"
          size="md"
          ref={btnRef}
          onClick={onOpen}
        >
          Add a Note
        </Button>
        <Box
          bgColor="accent.700"
          borderRadius="xl"
          height="70vh"
          py={4}
          px={6}
          overflowY="auto"
          overflowX="auto"
        >
          <GridLayout
            className="layout notes_grid scrollbar"
            layout={layout}
            cols={8}
            rowHeight={30}
            width={1150}
            maxRows={5}
            allowOverlap={false}
            isResizable={false}
          >
            {notes.map((note, i) => {
              return (
                <Flex
                  bg="blue.600"
                  color="white"
                  key={i.toString()}
                  bgImage={bg}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  objectFit="scale-down"
                  borderRadius="xl"
                  flexDirection="column"
                  p={6}
                >
                  <NoteContainer note={note} updateNote={updateNote} />
                </Flex>
              );
            })}
          </GridLayout>
        </Box>
      </Flex>
      <ModalContainer
        id={"Notes"}
        onClose={onClose}
        btnRef={btnRef}
        isOpen={isOpen}
        updateNote={updateNote}
      />
    </>
  );
};

export default NotesGrid;
