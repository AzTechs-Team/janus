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
import auth from "../auth/auth";
import { useNavigate } from "react-router-dom";

const NameCard = ({ content, id, downloadExtension, removeExtension }) => {
  const navigate = useNavigate();

  const btnTitle = id === 0 ? "Logout" : content["installed"];
  const btnColor = content["installed"] !== "Install" ? "#BD5050" : "#55904F";

  const btnHoverColor =
    content["installed"] !== "Install" ? "#9B4444" : "#396039";

  const func =
    content["installed"] === "Install"
      ? () => downloadExtension(content.id)
      : () => removeExtension(content.id);

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
          bgColor={btnColor}
          _focus={{
            outlineStyle: "none",
          }}
          _active={{ bgColor: btnColor }}
          _hover={{ bgColor: btnHoverColor }}
          onClick={
            id === 0
              ? () => {
                  auth.logout(() => navigate("/", { replace: true }));
                }
              : func
          }
        >
          {btnTitle}
        </Button>
        <IconButton
          color="white"
          bgColor={btnColor}
          _focus={{
            outlineStyle: "none",
          }}
          _active={{ bgColor: btnColor }}
          _hover={{ bgColor: btnHoverColor }}
          icon={id === 0 ? <MdLogout /> : <MdOutlineKeyboardArrowDown />}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default NameCard;
