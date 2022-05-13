import {
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todo, setTodo, onAddTodo, onDeleteTodo, todoList }) => {
  return (
    <>
      <Divider my={6} py={-1} className="divider-todo" />
      <Text fontSize="sm" textColor="accent.300" cursor="default" pb={4}>
        Add a Todo
      </Text>

      <InputGroup>
        <Input
          fontSize={14}
          placeholder="Add a todo"
          borderColor="accent.300"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" ? onAddTodo(e.target.value) : null
          }
          color="accent.300"
        />
        <InputRightElement
          mx={2}
          cursor="pointer"
          onClick={onAddTodo}
          children={<RiSendPlane2Fill />}
        />
      </InputGroup>
      {todoList.map((item, id) => (
        <TodoItem item={item} id={id} onDeleteTodo={onDeleteTodo} />
      ))}
    </>
  );
};

export default TodoItemList;
