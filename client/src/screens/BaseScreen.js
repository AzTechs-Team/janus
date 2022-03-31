import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideNav from "../components/SideNav";

const BaseScreen = ({ children }) => {
  return (
    <Box bgColor="primary.900">
      <Flex flexDir="row">
        <SideNav />
        {children}
      </Flex>
    </Box>
  );
};

export default BaseScreen;
