import React from "react";
import {
  Box,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import NotesOverlay from "./NotesOverlay";

const ModalContainer = ({ onClose, btnRef, isOpen, note }) => {
  return (
    <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} isCentered>
      <ModalOverlay className="overlay-bg" />
      <ModalContent
        bgColor="accent.900"
        color="accent.50"
        borderRadius="lg"
        maxW="50%"
        h="65vh"
        p={6}
      >
        <HStack pb={4} onClick={onClose} cursor="pointer">
          <IoIosArrowBack />
          <Text fontSize="xs">Back to menu</Text>
        </HStack>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Input
            placeholder="Title"
            fontWeight="bold"
            fontSize="xl"
            size="lg"
            border="none"
            mr={5}
            value={note ? note.title : ""}
          />

          <MdDeleteForever color="#F56D64" size="28" />
        </ModalHeader>
        <ModalBody>
          <NotesOverlay desc={note ? note.description : ""} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
