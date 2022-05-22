import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import GridLayout from "react-grid-layout";

import NoteContainer from "./NoteContainer";
import bg from "../assets/notes_bg.png";
import "../theme/grid.css";
import { GrAdd } from "react-icons/gr";
import ModalContainer from "./ModalContainer";
import { useRecoilState } from "recoil";
import { notesState } from "../atoms/notes";
import { createNote, delNote, postNotes } from "../helpers/notesService";

const getRatio = (note) => {
  const len = note.description.length;
  if (len <= 50) return 4;
  else if (len <= 150) return 8;
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
  const [notes, setNotes] = useRecoilState(notesState);
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
    let temp = JSON.parse(JSON.stringify(notes));
    let tempNote = note ? JSON.parse(JSON.stringify(note)) : null;
    if (tempNote) {
      temp.map((n, i) => {
        if (n._id === tempNote._id) {
          n.title = title;
          n.description = text;
        }
        return null;
      });
      postNotes({ title: title, description: text, _id: tempNote._id });
    } else {
      temp.push({
        title: title,
        description: text,
      });
      createNote({ title: title, description: text });
    }
    setNotes([...temp]);

    let t = [];
    temp.map((note, i) => {
      t.push(generateLayout(i, note));
      return null;
    });
    setLayout(t);
    onClose();
  };

  const deleteNote = (note) => {
    if (!note) return;
    let temp = JSON.parse(JSON.stringify(notes));
    temp = temp.filter((t) => {
      return t._id !== note._id;
    });

    setNotes([...temp]);
    delNote({ _id: note._id });
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
                  <NoteContainer
                    note={note}
                    updateNote={updateNote}
                    deleteNote={deleteNote}
                  />
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
        deleteNote={deleteNote}
      />
    </>
  );
};

export default NotesGrid;
