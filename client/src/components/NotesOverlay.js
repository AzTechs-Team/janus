import { Box, Button, HStack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const NotesOverlay = ({ onClose, desc }) => {
  const [text, setText] = useState(desc);
  console.log(desc);
  return (
    <Box>
      <Textarea
        placeholder="Note description"
        border="none"
        height="35vh"
        bgColor="primary.900"
        value={text}
        onChange={(e) => setText(e.target.value)}
        _focus={{ outlineStyle: "none" }}
        resize={false}
        borderRadius="xl"
        mb={5}
      />
      <HStack justifyContent="flex-end">
        <Button
          bgColor="primary.200"
          color="accent.100"
          _active={{ bgColor: "primary.200" }}
          _hover={{ bgColor: "primary.200" }}
          _focus={{ outlineStyle: "none" }}
          size="sm"
          px={8}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          bgColor="accent.100"
          color="accent.700"
          _active={{ bgColor: "accent.50" }}
          _hover={{ bgColor: "accent.50" }}
          _focus={{ outlineStyle: "none" }}
          size="sm"
          px={8}
        >
          Save
        </Button>
      </HStack>
    </Box>
  );
};

export default NotesOverlay;
