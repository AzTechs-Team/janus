import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ExtensionsCol from "../components/ExtensionsCol";
import ExtensionsContent from "../components/ExtensionsContent";
import { info } from "../assets/content/extensions";
import { manageExtensions } from "../helpers/manageExtensions";

const ExtensionsScreen = () => {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [active, setActive] = useState("Todos");
  const [extensionsInfo, setExtensionsInfo] = useState(info);

  useEffect(() => {
    let temp = info;
    Object.keys(info).forEach((extension) => {
      if (userDetails.extensionList.includes(extension)) {
        console.log("in if", extension, userDetails.extensionList);
        temp[extension]["installed"] = "Uninstall";
      } else {
        console.log("in else", extension, userDetails.extensionList);

        temp[extension]["installed"] = "Install";
      }
    });
    setExtensionsInfo({ ...temp });
  }, []);

  const updateActive = (active) => {
    setActive(active);
  };

  const downloadExtension = (id) => {
    let t = userDetails;
    t.extensionList.push(id);
    // setUserDetails(t);
    setUserDetails({ ...t });

    let e = extensionsInfo;
    e[id]["installed"] = "Uninstall";
    setExtensionsInfo({ ...e });
    manageExtensions(t.extensionList.toString());
  };

  const removeExtension = (id) => {
    let t = userDetails;
    t.extensionList = t.extensionList.filter((i) => i !== id);
    setUserDetails({ ...t });

    let e = extensionsInfo;
    e[id]["installed"] = "Install";
    setExtensionsInfo({ ...e });
    manageExtensions(t.extensionList.toString());
  };

  return (
    <Flex flexDir="row" p="6" width="94vw">
      <ExtensionsCol
        active={active}
        values={Object.keys(info)}
        handleClick={updateActive}
      />
      <ExtensionsContent
        content={info[active]}
        downloadExtension={downloadExtension}
        removeExtension={removeExtension}
      />
    </Flex>
  );
};

export default ExtensionsScreen;
