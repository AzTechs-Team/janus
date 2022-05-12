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
import notesExtension from "../assets/notes_btn.png";
import more_extensions from "../assets/more_extensions_btn.png";
import profile from "../assets/profile_btn.png";
import settings from "../assets/settings_btn.png";
import todoExtension from "../assets/todo_btn.png";

const largeBtn = (src, alt) => {
  return (
    <Link to={src.path} key={alt}>
      <Tooltip label={alt} placement="auto" bgColor="primary.900" fontSize="xs">
        <Image borderRadius="full" boxSize="50px" src={src.img} alt={alt} />
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
        navigate(src.path);
      }}
      marginTop={2}
      key={alt}
      borderRadius={25}
      _focus={{ outlineStyle: "none" }}
    >
      <Tooltip label={alt} placement="auto" bgColor="primary.900" fontSize="xs">
        <Image
          borderRadius="full"
          boxSize="40px"
          src={src.img}
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

const SideNav = () => {
  const nav = {
    Home: { path: "/home", img: active_extension },
    Notes: { path: "/notes", img: notesExtension },
    Todos: { path: "/todos", img: todoExtension },
    "Download extensions": { path: "/extensions", img: more_extensions },
  };
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const settingBtnDetails = {
    Profile: { path: "/profile", img: profile },
    Settings: { path: "/settings", img: settings },
  };

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
      {Object.keys(settingBtnDetails).map((detail) =>
        smallBtn(settingBtnDetails[detail], detail, navigate, setActive)
      )}
    </Flex>
  );
};

export default SideNav;
