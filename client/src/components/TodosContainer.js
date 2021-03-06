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

const TodosContainer = ({ todoList, updateTodo, deleteTodo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Text pb={4} casing="uppercase" fontWeight="bold">
        {todoList.title}
      </Text>
      <Box>
        {todoList.todos?.slice(0, 3).map((t, i) => {
          return (
            <React.Fragment key={i}>
              <Text
                bgGradient="linear(to-b, #FFF, rgba(255,255,255,0.1))"
                bgClip="text"
                fontSize="xs"
              >
                {t.value.slice(0, 38) + "..."}
              </Text>
              <Divider my={1} className="divider-todo2" />
            </React.Fragment>
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
          {new Date(todoList.createdAt * 1000)
            .toGMTString()
            .split(" ")
            .slice(1, 4)
            .join(" ")}
        </Text>
      </HStack>
      <ModalContainer
        id="ReadTodos"
        todoList={todoList}
        onClose={onClose}
        btnRef={btnRef}
        isOpen={isOpen}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodosContainer;
