import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import extension_img from "../assets/extension_img.png";

const NameCard = ({ content }) => {
  return (
    <HStack marginBottom={12} gridGap={6}>
      <Image
        borderRadius="full"
        boxSize="100px"
        src={extension_img}
        alt="Dan Abramov"
      />
      <VStack alignItems="flex-start" color="white" width="45%">
        <Text fontSize="3xl" fontWeight="extrabold" letterSpacing={1}>
          {content["title"]}
        </Text>
        <Text fontSize="sm">{content["description"]}</Text>
      </VStack>
      <Spacer />
      <ButtonGroup size="sm" isAttached variant="solid">
        <Button
          width={36}
          textAlign="left"
          color="white"
          bgColor="#55904F"
          _hover={{
            background: "#396039",
          }}
        >
          Install
        </Button>
        <IconButton
          color="white"
          bgColor="#396039"
          _hover={{
            background: "#55904F",
          }}
          icon={<MdOutlineKeyboardArrowDown />}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default NameCard;
