import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  Spacer,
  HStack,
  Button,
  useDisclosure,
  Box,
  Image,
} from "@chakra-ui/react";
import NotificationModalContainer from "./NotificationModalContainer";
import { FiExternalLink } from "react-icons/fi";

const getDescriptionLen = (desc) => {
  const len = desc.length;
  if (len <= 25) return 50;
  else if (len <= 50) return 120;
  else return 200;
};

const NotificationContainer = ({ notification, onRemindMeLater }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HStack pb={2} px={3} spacing={4}>
        <Image
          h={14}
          w={14}
          borderRadius="50px"
          src={notification.repo.imageUrl}
        />
        <Text casing="uppercase" fontWeight="bold" fontSize="14px">
          {notification.repo.org}
        </Text>
      </HStack>

      <Box
        className="blur2"
        display="flex"
        flexDirection="column"
        p={4}
        mt={2}
        h="22vh"
      >
        <HStack
          pb={1}
          cursor="pointer"
          onClick={() => window.open(notification.repoUrl, "_blank")}
        >
          <Text
            casing="uppercase"
            fontWeight="bold"
            fontSize="12px"
            color="accent.100"
          >
            {notification.repo.name}
          </Text>
          <FiExternalLink color="accent.100" size="10" />
        </HStack>

        <Text fontSize="10px">
          Issue:{" "}
          {notification.body.slice(
            0,
            90,
            getDescriptionLen(notification.body)
          ) + "..."}
        </Text>
        <Spacer></Spacer>
        <HStack pt={2}>
          <Button
            size="sm"
            bgColor="accent.700"
            inlineSize={28}
            borderRadius={10}
            fontSize="10px"
            _hover={{ bgColor: "accent.600" }}
            _focus={{ outlineStyle: "none" }}
            _active={{ bgColor: "accent.600" }}
            ref={btnRef}
            onClick={onOpen}
          >
            Read
          </Button>
          <Spacer />
          <Button
            size="sm"
            bgColor="accent.700"
            inlineSize={28}
            borderRadius={10}
            px={16}
            fontSize="10px"
            _hover={{ bgColor: "accent.600" }}
            _focus={{ outlineStyle: "none" }}
            _active={{ bgColor: "accent.600" }}
            onClick={() => onRemindMeLater(notification.id)}
          >
            Remind Me Later
          </Button>
        </HStack>
      </Box>
      <NotificationModalContainer
        onClose={onClose}
        btnRef={btnRef}
        isOpen={isOpen}
        notification={notification}
        onRemindMeLater={onRemindMeLater}
      />
    </>
  );
};

export default NotificationContainer;
