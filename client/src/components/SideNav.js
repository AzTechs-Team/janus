import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IconButton,
  Divider,
  Flex,
  Image,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import active_extension from "../assets/active_extension_btn.png";
import extension1 from "../assets/extension1.png";
import extension2 from "../assets/extension2.png";
import more_extensions from "../assets/more_extensions_btn.png";
import profile from "../assets/profile_btn.png";
import settings from "../assets/settings_btn.png";

const largeBtn = (src, alt) => {
  return (
    <Link to={returnPath(alt)} key={alt}>
      <Tooltip label={alt} placement="auto" bgColor="primary.900" fontSize="xs">
        <Image borderRadius="full" boxSize="50px" src={src} alt={alt} />
      </Tooltip>
    </Link>
  );
};

const smallBtn = (src, alt, navigate, setActive) => {
  return (
    <IconButton
      onClick={() => {
        if (alt !== "Profile" && alt !== "Settings") setActive(alt);
        else setActive("Home");
        navigate(returnPath(alt));
      }}
      marginTop={2}
      key={alt}
      borderRadius={25}
    >
      <Tooltip label={alt} placement="auto" bgColor="primary.900" fontSize="xs">
        <Image
          borderRadius="full"
          boxSize="40px"
          src={src}
          alt={alt}
          marginY="1"
          _hover={{
            boxShadow: "dark-lg",
          }}
        />
      </Tooltip>
    </IconButton>
  );
};

const returnPath = (alt) => {
  return alt === "Profile"
    ? "/profile"
    : alt === "Settings"
    ? "/settings"
    : alt === "Download extensions"
    ? "/extensions"
    : alt === "Home"
    ? "/home"
    : "/example";
};

const SideNav = () => {
  const nav = {
    Home: active_extension,
    "Extension 1": extension1,
    "Extension 2": extension2,
    "Download extensions": more_extensions,
  };
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const settingBtnDetails = [
    [profile, "Profile"],
    [settings, "Settings"],
  ];

  return (
    <Flex
      flexDir="column"
      bgColor="primary.800"
      align="center"
      color="white"
      h="100vh"
      w={16}
      paddingX="2"
      paddingY="8"
    >
      {largeBtn(nav[active], active)}
      <Divider marginBottom="3" marginTop="3" />
      {Object.keys(nav).map((detail) =>
        detail === active
          ? null
          : smallBtn(nav[detail], detail, navigate, setActive)
      )}
      <Spacer />
      <Divider marginBottom="3" />
      {settingBtnDetails.map((detail) =>
        smallBtn(detail[0], detail[1], navigate, setActive)
      )}
    </Flex>
  );
};

export default SideNav;
