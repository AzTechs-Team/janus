import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import ExtensionsCol from "../components/ExtensionsCol";
import ExtensionsContent from "../components/ExtensionsContent";
import { info } from "../assets/content/extensions";

const ExtensionsScreen = () => {
  // const extensions = {
  //   Todos: "Todos description",
  //   Notes: "Notes description",
  //   Notifications: "Notifications description",
  // };

  const [active, setActive] = useState("Todos");

  const updateActive = (active) => {
    setActive(active);
  };
  return (
    <Flex flexDir="row" p="6" width="94vw">
      <ExtensionsCol
        active={active}
        values={Object.keys(info)}
        handleClick={updateActive}
      />
      <ExtensionsContent content={info[active]} />
    </Flex>
  );
};

export default ExtensionsScreen;
