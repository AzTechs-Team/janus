import React, { useRef } from "react";
import {
  Text,
  Spacer,
  HStack,
  Button,
  useDisclosure,
  Divider,
  Box,
} from "@chakra-ui/react";
import ModalContainer from "./ModalContainer";

const getDescriptionLen = (desc) => {
  const len = desc.length;
  if (len <= 25) return 50;
  else if (len <= 50) return 120;
  else return 200;
};

const TodosContainer = ({ todoList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Text pb={4} casing="uppercase" fontWeight="bold">
        {todoList.title}
      </Text>
      <Box>
        {todoList.todo.slice(0, 3).map((t) => {
          return (
            <>
              <Text
                bgGradient="linear(to-b, #FFF, rgba(255,255,255,0.1))"
                bgClip="text"
                fontSize="xs"
              >
                {t.value}
              </Text>
              <Divider my={1} className="divider-todo2" />
            </>
          );
        })}
      </Box>
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
          {todoList.createdAt}
        </Text>
      </HStack>
      <ModalContainer
        id="ReadTodos"
        onClose={onClose}
        btnRef={btnRef}
        isOpen={isOpen}
      />
    </>
  );
};

export default TodosContainer;
