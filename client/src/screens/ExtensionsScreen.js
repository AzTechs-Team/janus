import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ExtensionsCol from "../components/ExtensionsCol";
import ExtensionsContent from "../components/ExtensionsContent";
import { info } from "../assets/content/extensions";
import { manageExtensions } from "../helpers/manageExtensions";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/details";

const ExtensionsScreen = () => {
  const [userDetails, setUserDetails] = useRecoilState(userState);

  const [active, setActive] = useState("Todos");
  const [extensionsInfo, setExtensionsInfo] = useState(info);

  useEffect(() => {
    let temp = info;
    Object.keys(info).forEach((extension) => {
      if (userDetails?.extensionList?.includes(extension)) {
        // console.log("in if", extension, userDetails.extensionList);
        temp[extension]["installed"] = "Uninstall";
      } else {
        // console.log("in else", extension, userDetails.extensionList);

        temp[extension]["installed"] = "Install";
      }
    });
    setExtensionsInfo({ ...temp });
  }, []);

  const updateActive = (active) => {
    setActive(active);
  };

  const downloadExtension = (id) => {
    setUserDetails((curVal) => ({
      ...curVal,
      extensionList: curVal.extensionList.concat(id),
    }));
    // console.log(userDetails.extensionList);
    let e = extensionsInfo;
    e[id]["installed"] = "Uninstall";
    setExtensionsInfo({ ...e });
    manageExtensions(userDetails.extensionList.concat(id).toString());
  };

  const removeExtension = (id) => {
    setUserDetails((curVal) => ({
      ...curVal,
      extensionList: curVal.extensionList.filter((i) => i !== id && i !== ""),
    }));

    let e = extensionsInfo;
    e[id]["installed"] = "Install";
    setExtensionsInfo({ ...e });
    manageExtensions(
      userDetails.extensionList.filter((i) => i !== id && i !== "").toString()
    );
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
