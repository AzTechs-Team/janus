import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import ExtensionsCol from "../components/ExtensionsCol";
import { info } from "../assets/content/settings";
import SettingsContent from "../components/SettingsContent";

const SettingsScreen = () => {
  const [active, setActive] = useState("About");

  const updateActive = (active) => {
    setActive(active);
    console.log(info[active]);
  };
  return (
    <Flex flexDir="row" p="6" width="94vw">
      <ExtensionsCol
        active={active}
        values={Object.keys(info)}
        handleClick={updateActive}
      />
      <SettingsContent content={info[active]} />
    </Flex>
  );
};

export default SettingsScreen;
