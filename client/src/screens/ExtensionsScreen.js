import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ExtensionsCol from "../components/ExtensionsCol";
import ExtensionsContent from "../components/ExtensionsContent";

const ExtensionsScreen = () => {
  const extensions = {
    Todos: "Todos description",
    Notes: "Notes description",
    Notifications: "Notifications description",
  };

  const [active, setActive] = useState("");

  const updateActive = (active) => {
    console.log("active", active);
    setActive(active);
  };

  return (
    <Box bgColor="primary.750" w="100vw" h="100vh">
      <Flex flexDir="row" p="6" height="100%" width="100%">
        <ExtensionsCol
          active={active}
          values={Object.keys(extensions)}
          handleClick={updateActive}
        />
        <ExtensionsContent content={extensions[active]} />
      </Flex>
    </Box>
  );
};

export default ExtensionsScreen;
