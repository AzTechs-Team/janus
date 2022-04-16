import React from "react";
import { MdOutlineKeyboardArrowDown, MdLogout } from "react-icons/md";
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
import profile_icon from "../assets/profile_icon.png";

const NameCard = ({ content, id }) => {
  return (
    <HStack marginBottom={12} gridGap={6}>
      <Image
        borderRadius="full"
        boxSize="100px"
        src={id === 0 ? profile_icon : extension_img}
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
          bgColor={id === 0 ? "#BD5050" : "#55904F"}
          _hover={{
            background: id === 0 ? "#9B4444" : "#396039",
          }}
        >
          {id === 0 ? "Logout" : "Install"}
        </Button>
        <IconButton
          color="white"
          bgColor={id === 0 ? "#9B4444" : "#396039"}
          _hover={{
            background: id === 0 ? "#BD5050" : "#55904F",
          }}
          icon={id === 0 ? <MdLogout /> : <MdOutlineKeyboardArrowDown />}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default NameCard;
