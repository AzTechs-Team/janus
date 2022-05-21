import React, { useRef } from "react";
import { Text, Spacer, HStack, Button, useDisclosure } from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";

const getDescriptionLen = (desc) => {
  const len = desc.length;
  if (len <= 25) return 50;
  else if (len <= 50) return 120;
  else return 200;
};

const NoteContainer = ({ note, updateNote, deleteNote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Text pb={4} casing="uppercase" fontWeight="bold">
        {note.title}
      </Text>
      <Text
        bgGradient="linear(to-b, #FFF, rgba(255,255,255,0.1))"
        bgClip="text"
      >
        {note.description.slice(0, getDescriptionLen(note.description)) + "..."}
      </Text>
      <Spacer />
      <HStack>
        <Button
          size="sm"
          bgColor="accent.700"
          inlineSize={28}
          pr={14}
          fontSize="xs"
          _hover={{ bgColor: "accent.600" }}
          _focus={{ outlineStyle: "none" }}
          _active={{ bgColor: "accent.600" }}
          ref={btnRef}
          onClick={onOpen}
        >
          Read
        </Button>
        <Spacer />
        <Text color="accent.100" fontSize="xs" fontWeight="bold">
          5 May, 2022
        </Text>
      </HStack>
      <ModalContainer
        id="Notes"
        onClose={onClose}
        btnRef={btnRef}
        isOpen={isOpen}
        note={note}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </>
  );
};

export default NoteContainer;
