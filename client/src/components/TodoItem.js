import {
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ screen, item, id, onDeleteTodo, onToggleTodo }) => {
  return (
    <InputGroup my={4} w="50">
      <InputLeftElement>
        <Checkbox
          isChecked={item.isDone}
          css={`
            > span:first-of-type {
              box-shadow: unset;
              outline-style: none;
            }
          `}
          onChange={(e) => onToggleTodo(id)}
        />
      </InputLeftElement>
      <Input
        textDecoration={item.isDone ? "line-through" : null}
        value={item.value}
        cursor="default"
        fontSize={14}
        variant="filled"
        isReadOnly={true}
        bgColor={screen !== "Read" ? "rgba(30, 30, 41, 0.75)" : "primary.900"}
        color="accent.300"
        _focus={{ backgroundColor: "accent.900" }}
        _hover={
          screen !== "Read"
            ? { backgroundColor: "accent.900" }
            : { backgroundColor: "primary.800" }
        }
      />
      <InputRightElement
        fontSize={20}
        mx={2}
        cursor="pointer"
        onClick={() => onDeleteTodo(id)}
        children={<MdDeleteForever color="#F56D64" />}
      />
    </InputGroup>
  );
};

export default TodoItem;
