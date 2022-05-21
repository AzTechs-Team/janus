import { Box, Textarea } from "@chakra-ui/react";
import React from "react";

const NotesOverlay = ({ text, setText }) => {
  return (
    <Box>
      <Textarea
        placeholder="Note description"
        border="none"
        height="50vh"
        bgColor="primary.900"
        value={text}
        onChange={(e) => setText(e.target.value)}
        _focus={{ outlineStyle: "none" }}
        resize="none"
        borderRadius="xl"
        mb={5}
      />
    </Box>
  );
};

export default NotesOverlay;
