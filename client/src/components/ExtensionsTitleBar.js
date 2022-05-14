import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { GrAdd } from "react-icons/gr";
import ModalContainer from "./ModalContainer";

const ExtensionsTitleBar = ({
  search,
  setSearch,
  onSearch,
  reset,
  title,
  btn,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
              // onChange={(e) => setSearch(e.target.value)}
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

          <Button
            rightIcon={<GrAdd color="accent.700" size="20" />}
            bgColor="accent.100"
            color="accent.700"
            _active={{ bgColor: "accent.50" }}
            _hover={{ bgColor: "accent.50" }}
            width="18%"
            iconSpacing="12"
            size="md"
            ref={btnRef}
            onClick={onOpen}
          >
            {btn}
          </Button>
        </HStack>
      </VStack>
      <ModalContainer
        id={title}
        onClose={onClose}
        btnRef={btnRef}
        isOpen={isOpen}
      />
    </>
  );
};

export default ExtensionsTitleBar;
