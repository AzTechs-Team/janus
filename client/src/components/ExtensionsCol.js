import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import React, { useState } from "react";

const buttons = (active, name, handleClick) => {
  return (
    <Box
      key={name}
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
  const [items, setItems] = useState(values);
  const [search, setSearch] = useState("");

  const onSearch = (text) => {
    if (text) {
      const newData = values.filter(function (item) {
        console.log("new dataaaa", item);
        const userData = item ? item.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return userData.indexOf(textData) > -1;
      });
      setItems(newData);
      setSearch(text);
    } else {
      setItems(values);
      setSearch(text);
    }
  };

  const onClear = () => {
    setSearch("");
    setItems(values);
  };

  return (
    <VStack
      bgColor="primary.800"
      p="6"
      borderRadius="xl"
      marginRight={6}
      minWidth="72"
    >
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
          onChange={(text) => onSearch(text.target.value)}
          value={search}
        />
        {search.length > 0 ? (
          <InputRightElement
            color="accent.200"
            cursor="pointer"
            onClick={onClear}
            children={<TiDelete fontSize={20} />}
          />
        ) : null}
      </InputGroup>
      <Flex flexDir="column" paddingTop="4">
        {items.map((e) => buttons(active, e, handleClick))}
      </Flex>
    </VStack>
  );
};

export default ExtensionsCol;
