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
    <Flex flexDir="row" p="6" width="94vw">
      <ExtensionsCol
        active={active}
        values={Object.keys(extensions)}
        handleClick={updateActive}
      />
      <ExtensionsContent content={extensions[active]} />
    </Flex>
  );
};

export default ExtensionsScreen;
