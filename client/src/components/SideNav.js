import React from "react";
import { Link } from "react-router-dom";
import { Divider, Flex, Image, Spacer, Tooltip } from "@chakra-ui/react";
import active_extension from "../assets/active_extension_btn.png";
import extension1 from "../assets/extension1.png";
import extension2 from "../assets/extension2.png";
import more_extensions from "../assets/more_extensions_btn.png";
import profile from "../assets/profile_btn.png";
import settings from "../assets/settings_btn.png";

const largeBtn = (src, alt) => {
  return (
    <Link to="/home" key={alt}>
      <Tooltip label={alt} placement="auto" bgColor="primary.900" fontSize="xs">
        <Image borderRadius="full" boxSize="50px" src={src} alt={alt} />
      </Tooltip>
    </Link>
  );
};

const smallBtn = (src, alt) => {
  return (
    <Link
      to={
        alt === "Profile"
          ? "/profile"
          : alt === "Settings"
          ? "/settings"
          : "/home"
      }
      key={alt}
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
    </Link>
  );
};

const SideNav = () => {
  const smallBtnDetails = [
    [extension1, "Extension 1"],
    [extension2, "Extension 2"],
    [more_extensions, "More extensions"],
  ];
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
      paddingX="2"
      paddingY="8"
    >
      {largeBtn(active_extension, "Active extension")}
      <Divider marginBottom="3" marginTop="3" />
      {smallBtnDetails.map((detail) => smallBtn(detail[0], detail[1]))}
      <Spacer />
      <Divider marginBottom="3" />
      {settingBtnDetails.map((detail) => smallBtn(detail[0], detail[1]))}
    </Flex>
  );
};

export default SideNav;
