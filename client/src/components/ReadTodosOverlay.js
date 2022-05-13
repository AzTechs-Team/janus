import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const ReadTodosOverlay = ({ onClose, desc, todoList }) => {
  const [todoItemList, setTodoItemList] = useState(todoList.todo);

  const onDeleteTodo = (j) => {
    let temp = todoItemList;
    temp.splice(j, 1);
    setTodoItemList(temp);
    setTodoItemList([...todoItemList]);
  };

  const onToggleTodo = (j) => {
    let temp = todoItemList;
    temp[j].isDone = !temp[j].isDone;
    setTodoItemList(temp);
    setTodoItemList([...todoItemList]);
  };

  return (
    <Box>
      <Box overflowY="auto">
        {todoItemList.map((item, id) => (
          <TodoItem
            key={id}
            item={item}
            id={id}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            screen="Read"
          />
        ))}
      </Box>
      <HStack justifyContent="flex-end">
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
        >
          Save
        </Button>
      </HStack>
    </Box>
  );
};

export default ReadTodosOverlay;
