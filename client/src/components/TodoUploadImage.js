import React from "react";
import { Box, HStack, IconButton, Image } from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import { MdAdd, MdDeleteForever } from "react-icons/md";
import TodoItemList from "./TodoItemList";

const TodoUploadImage = ({
  image,
  handleChange,
  fileTypes,
  onDeleteImage,
  onAddTodo,
  todo,
  todoList,
  onDeleteTodo,
  onToggleTodo,
  setTodo,
}) => {
  return (
    <>
      <HStack spacing={4}>
        <FileUploader
          handleChange={handleChange}
          multiple={true}
          name="file"
          types={fileTypes}
        >
          <Box
            display="flex"
            p={7}
            alignItems="center"
            justifyContent="center"
            bgColor="rgba(30, 30, 41,0.75)"
            border="3px"
            borderColor="accent.300"
            cursor="pointer"
            borderStyle="dashed"
            borderRadius="lg"
            color="white"
          >
            <MdAdd color="accent.200" size="40" />
          </Box>
        </FileUploader>
        {image.map((i, j) => {
          return (
            <Box position="relative" key={i}>
              <Image
                borderRadius="7px"
                key={i}
                src={i}
                boxSize="24"
                objectFit="cover"
              ></Image>
              <IconButton
                top={-3}
                right={-3}
                size="xs"
                fontSize={20}
                position="absolute"
                bgColor="primary.600"
                _active={{ bgColor: "accent.700" }}
                _focus={{ outlineStyle: "none" }}
                _hover={{ bgColor: "primary.900" }}
                onClick={() => onDeleteImage(j)}
                icon={<MdDeleteForever color="#F56D64" />}
              ></IconButton>
            </Box>
          );
        })}
      </HStack>
      <TodoItemList
        onAddTodo={onAddTodo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        setTodo={setTodo}
        todo={todo}
        todoList={todoList}
      />
    </>
  );
};

export default TodoUploadImage;
