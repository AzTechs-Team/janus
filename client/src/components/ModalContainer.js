import React, { useState } from "react";
import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import NotesOverlay from "./NotesOverlay";
import AddTodosOverlay from "./AddTodosOverlay";
import ReadTodosOverlay from "./ReadTodosOverlay";

const ModalContainer = ({
  id,
  onClose,
  btnRef,
  isOpen,
  note,
  todoList,
  updateNote,
  updateTodo,
}) => {
  const [title, setTitle] = useState(
    note ? note.title : todoList ? todoList.title : ""
  );
  const [text, setText] = useState(note ? note.description : todoList);

  const onSave = (title, text) => {
    if (id === "Notes") {
      updateNote(note, title, text);
      onClose();
    } else {
      updateTodo(text);
      console.log(text, "in modal contatiner, set text text");
      onClose();
    }
  };

  return (
    <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} isCentered>
      <ModalOverlay className="overlay-bg" />
      <ModalContent
        bgColor="accent.900"
        color="accent.50"
        borderRadius="lg"
        maxW="50%"
        h="80vh"
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
            maxLength={20}
            placeholder="Add Title"
            fontWeight="bold"
            fontSize="xl"
            size="lg"
            border="none"
            mr={5}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <MdDeleteForever color="#F56D64" size="28" />
        </ModalHeader>
        <ModalBody>
          {id === "Notes" ? (
            <NotesOverlay
              text={text}
              onClose={onClose}
              onSave={onSave}
              setText={setText}
            />
          ) : id === "ReadTodos" ? (
            <ReadTodosOverlay todoList={text} setText={setText} />
          ) : (
            <AddTodosOverlay onClose={onClose} />
          )}
        </ModalBody>

        <ModalFooter>
          <HStack justifyContent="flex-end" mt={-4}>
            <Button
              bgColor="primary.200"
              color="accent.100"
              _active={{ bgColor: "primary.200" }}
              _hover={{ bgColor: "primary.200" }}
              _focus={{ outlineStyle: "none" }}
              size="sm"
              px={8}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              bgColor="accent.100"
              color="accent.700"
              _active={{ bgColor: "accent.50" }}
              _hover={{ bgColor: "accent.50" }}
              _focus={{ outlineStyle: "none" }}
              size="sm"
              px={8}
              onClick={() => onSave(title, text)}
            >
              Save
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
