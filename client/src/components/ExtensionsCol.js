import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import React from "react";

const buttons = (active, name, handleClick) => {
  return (
    <Box
      bg="primary.900"
      paddingX={4}
      paddingY={2}
      color="white"
      width={60}
      height={12}
      borderRadius="xl"
      className={
        name === active ? "gray-purple-gradient" : "gray-black-gradient"
      }
      marginY={2}
      boxShadow="md"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={() => handleClick(name)}
    >
      {name}
      <MdOutlineArrowForwardIos />
    </Box>
  );
};

const ExtensionsCol = ({ active, values, handleClick }) => {
  return (
    <VStack bgColor="primary.800" p="6" borderRadius="xl" marginRight={6}>
      <InputGroup>
        <InputLeftElement
          color="accent.200"
          pointerEvents="none"
          children={<BiSearchAlt fontSize={20} />}
        />
        <Input
          placeholder="Search..."
          bgColor="#2B2F3B"
          border="accent.200"
          color="white"
        />
      </InputGroup>
      <Flex flexDir="column" paddingTop="4">
        {values.map((e) => buttons(active, e, handleClick))}
      </Flex>
    </VStack>
  );
};

export default ExtensionsCol;
