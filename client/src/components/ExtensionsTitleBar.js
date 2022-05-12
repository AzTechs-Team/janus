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
import React, { useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { GrAdd } from "react-icons/gr";
import ModalContainer from "./ModalContainer";

const ExtensionsTitleBar = ({ title, btn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [search, setSearch] = useState("");

  const onClear = () => {
    setSearch("");
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
        <HStack width="100%">
          <InputGroup alignSelf="flex-start">
            <InputLeftElement
              color="accent.200"
              pointerEvents="none"
              children={<BiSearchAlt fontSize={20} />}
            />
            <Input
              width="65%"
              placeholder="Search..."
              bgColor="#2B2F3B"
              border="accent.200"
              color="white"
              value={search}
              onChange={setSearch}
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
      <ModalContainer onClose={onClose} btnRef={btnRef} isOpen={isOpen} />
    </>
  );
};

export default ExtensionsTitleBar;
