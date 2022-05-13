import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ item, id, onDeleteTodo }) => {
  return (
    <InputGroup my={4}>
      <Input
        value={item}
        cursor="default"
        fontSize={14}
        variant="filled"
        isReadOnly={true}
        bgColor="rgba(30, 30, 41,0.75)"
        color="accent.300"
        _focus={{ backgroundColor: "accent.900" }}
        _hover={{ backgroundColor: "accent.900" }}
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
