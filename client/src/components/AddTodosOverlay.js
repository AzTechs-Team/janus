import React, { useState } from "react";
import {
  Container,
  Image,
  Text,
  VStack,
  HStack,
  Box,
  Divider,
  Button,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { MdDeleteForever, MdAdd } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FileUploader } from "react-drag-drop-files";

const AddTodosOverlay = ({onClose}) => {
  const fileTypes = ["JPG", "PNG"];
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (file) => {
    setFile(file);
    for (const key in file) {
      if (key !== "length" && key !== "item") {
        const _image = file[key];
        const rf = new FileReader();
        rf.readAsDataURL(_image);
        rf.onloadend = (event) => {
          handleApiCall(event.target.result);
        };
      }
    }
  };

  const handleApiCall = async (result) => {
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_API_KEY}`;
    const body = new FormData();
    body.append("image", result.split(",").pop());
    body.append("name", "test.jpg");
    body.append("expiration", "300");
    try {
      let res = await fetch(url, {
        method: "POST",
        body: body,
      });
      res = await res.json();
      let temp = image;
      temp.push(res.data.url);
      setImage(temp);
      setImage([...image]);
      // computerVison(res.data.url)
    } catch (error) {
      console.log(error);
    }
  };
  const fileUploader = () => {
    return (
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
          bgColor="accent.800"
          border="3px"
          w={image.length === 0 ? "41vw" : 24}
          borderColor="accent.300"
          cursor="pointer"
          borderStyle="dashed"
          borderRadius="lg"
          color="white"
        >
          {dragDropRatio()}
        </Box>
      </FileUploader>
    );
  };

  const onDeleteTodo = (j) => {
    let temp = todoList;
    temp.splice(j, 1);
    setTodoList(temp);
    setTodoList([...todoList]);
  };

  const onDeleteImage = (j) => {
    let temp = image;
    temp.splice(j, 1);
    setImage(temp);
    setImage([...image]);
  };

  const onAddTodo = () => {
    let temp = todoList;
    temp.push(todo);
    setTodoList(temp);
    setTodoList([...todoList]);
  };

  const dragDrop = () => {
    if (image.length === 0) {
      {
        fileUploader();
      }
    } else {
      return (
        <Box>
          <HStack spacing={4}>
            {fileUploader()}
            {image.map((i, j) => {
              return (
                <Box position="relative">
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
                    fontSize={18}
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
              color="accent.300"
            />
            <InputRightElement
              mx={2}
              cursor="pointer"
              onClick={onAddTodo}
              children={<RiSendPlane2Fill />}
            />
          </InputGroup>

          {todoList.map((i, j) => (
            <InputGroup my={4}>
              <Input
                value={i}
                cursor="default"
                fontSize={14}
                variant="filled"
                isReadOnly={true}
                bgColor="primary.600"
                color="accent.300"
                _focus={{ backgroundColor: "primary.600" }}
                _hover={{ backgroundColor: "primary.600" }}
              />
              <InputRightElement
                fontSize={20}
                mx={2}
                cursor="pointer"
                onClick={() => onDeleteTodo(j)}
                children={<MdDeleteForever color="#F56D64" />}
              />
            </InputGroup>
          ))}

          {/* <HStack justifyContent="flex-end">

          <Button
            bgColor="primary.200"
            color="accent.100"
            my={3}
            size='sm'
            _hover={{ bgColor: "primary.200" }}
            _focus={{ outlineStyle: "none" }}
            _active={{ bgColor: "accent.700" }}
          >
            Cancel
          </Button>

          <Button
            bgColor="accent.100"
            color="primary.750"
            my={3}
            size='sm'
            _hover={{ bgColor: "accent.200" }}
            _focus={{ outlineStyle: "none" }}
            _active={{ bgColor: "accent.100" }}
          >
            Add Todo Collection
          </Button>
          </HStack> */}
        </Box>
      );
    }
    return (
      <HStack spacing={4}>
        {fileUploader()}
        {image.map((i) => {
          return (
            <Image
              borderRadius="7px"
              key={i}
              src={i}
              boxSize="24"
              objectFit="cover"
            ></Image>
          );
        })}
      </HStack>
    );
  };

  const dragDropRatio = () => {
    if (image.length === 0) {
      return (
        <VStack w="100%" justifyContent="center" textColor="accent.300" h="26vh">
          <Text fontSize="lg">Drag a photo here</Text>
          <Text fontSize="xs">or</Text>
          <Button
            bgColor="accent.100"
            color="primary.750"
            _hover={{ bgColor: "accent.200" }}
            _focus={{ outlineStyle: "none" }}
          >
            Select a photo from your device
          </Button>
        </VStack>
      );
    }
    return <MdAdd color="accent.200" size="40" />;
  };

  return (
    // <Container
    //   bgColor="primary.750"
    //   py={7}
    //   px={14}
    //   m={6}
    //   borderRadius="xl"
    //   maxH="100%"
    //   maxW="92%"
    //   color="white"
    // >
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
        <Box py={4}>{dragDrop()}</Box>
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

          isDisabled={todoList.length>0?false:true}
        >
          Add Todo Collection
        </Button>
      </HStack>
    </>
    // </Container>
  );
};

export default AddTodosOverlay;
