import React, { useState } from "react";
import { Text, HStack, Box, Button } from "@chakra-ui/react";
import TodoUploadImage from "./TodoUploadImage";
import { handleImageFile } from "../helpers/uploadImage";

const AddTodosOverlay = ({ onClose }) => {
  const fileTypes = ["JPG", "PNG"];
  const [image, setImage] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const updateImageState = (url) => {
    let temp = image;
    temp.push(url);
    setImage(temp);
    setImage([...image]);
  };

  const handleChange = (files) => {
    handleImageFile(files, updateImageState);
  };

  const onDeleteTodo = (j) => {
    let temp = todoList;
    temp.splice(j, 1);
    setTodoList(temp);
    setTodoList([...todoList]);
  };

  const onAddTodo = () => {
    let temp = todoList;
    const t = {
      value: todo,
      isDone: false,
      createdAt: "12 - April - 2022",
    };
    temp.push(t);
    setTodoList(temp);
    setTodoList([...todoList]);
    setTodo("");
  };

  const onToggleTodo = (j) => {
    let temp = todoList;
    temp[j].isDone = !temp[j].isDone;
    setTodoList(temp);
    setTodoList([...todoList]);
  };

  const onDeleteImage = (j) => {
    let temp = image;
    temp.splice(j, 1);
    setImage(temp);
    setImage([...image]);
  };

  return (
    <>
      <Box
        bgColor="accent.700"
        px={4}
        py={6}
        overflowY="auto"
        h="52vh"
        borderRadius="xl"
        maxH="100%"
        color="white"
      >
        <Text fontSize="sm" textColor="accent.300" cursor="default" pb={4}>
          Upload a photo
        </Text>
        <TodoUploadImage
          fileTypes={fileTypes}
          handleChange={handleChange}
          image={image}
          onDeleteImage={onDeleteImage}
          onAddTodo={onAddTodo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          setTodo={setTodo}
          todo={todo}
          todoList={todoList}
        />
      </Box>
      <HStack justifyContent="flex-end">
        <Button
          bgColor="primary.200"
          color="accent.100"
          my={3}
          size="sm"
          _hover={{ bgColor: "primary.200" }}
          _focus={{ outlineStyle: "none" }}
          _active={{ bgColor: "accent.700" }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          bgColor="accent.100"
          color="primary.750"
          my={3}
          size="sm"
          _hover={{ bgColor: "accent.200" }}
          _focus={{ outlineStyle: "none" }}
          _active={{ bgColor: "accent.100" }}
          isDisabled={todoList.length > 0 ? false : true}
        >
          Add Todo Collection
        </Button>
      </HStack>
    </>
  );
};

export default AddTodosOverlay;
