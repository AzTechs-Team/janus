import React from "react";
import {
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

const NotificationModalContainer = ({
  onClose,
  btnRef,
  isOpen,
  notification,
  onRemindMeLater,
}) => {
  const repoName = notification.repo.name;
  const description = notification.body;

  return (
    <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} isCentered>
      <ModalOverlay className="overlay-bg" />
      <ModalContent
        bgColor="accent.900"
        color="accent.50"
        borderRadius="lg"
        maxW="50%"
        h="70vh"
        p={6}
      >
        <HStack pb={4} onClick={onClose} cursor="pointer">
          <IoIosArrowBack />
          <Text fontSize="xs">Back to menu</Text>
        </HStack>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack
            pb={2}
            px={3}
            spacing={4}
            cursor="pointer"
            onClick={() => window.open(notification.repo.url, "_blank")}
          >
            <Image
              h={24}
              w={24}
              borderRadius="50px"
              src={notification.repo.imageUrl}
            />
            <Text casing="uppercase" fontSize="lg" width="48%">
              {repoName}
            </Text>
            <FiExternalLink color="accent.100" size="20" />
          </HStack>
          <Text
            casing="capitalize"
            fontSize="14px"
            fontWeight="normal"
            cursor="pointer"
            onClick={() => window.open(notification.repoUrl, "_blank")}
          >
            {"Issue" + notification.action + " : By " + notification.creator}
          </Text>
        </ModalHeader>

        <ModalBody>
          <Box
            overflowY="auto"
            bgColor="primary.900"
            height="28vh"
            borderRadius={12}
          >
            <Box padding={4}>{description}</Box>
          </Box>
        </ModalBody>

        <ModalFooter>
          <HStack justifyContent="flex-end" mt={-4}>
            <Button
              bgColor="primary.200"
              color="accent.100"
              _active={{ bgColor: "primary.200" }}
              _hover={{ bgColor: "primary.200" }}
              _focus={{ outlineStyle: "none" }}
              size="sm"
              px={8}
              onClick={() => onRemindMeLater(notification.id)}
            >
              Remind me later
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NotificationModalContainer;
