import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

const ExtensionsTitleBar = ({
  search,
  setSearch,
  onSearch,
  reset,
  title,
  btn,
}) => {
  const onClear = () => {
    setSearch("");
    reset();
  };

  return (
    <>
      <VStack pb={6}>
        <Text
          fontWeight="bold"
          fontSize="2xl"
          color="white"
          pb={4}
          alignSelf="flex-start"
        >
          {title}
        </Text>
        <HStack justifyContent="space-between" width="100%">
          <InputGroup alignSelf="flex-start" width="65%">
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
        </HStack>
      </VStack>
    </>
  );
};

export default ExtensionsTitleBar;
