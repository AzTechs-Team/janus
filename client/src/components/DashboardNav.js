import React from "react";
import { HStack, Spacer, Text, Image } from "@chakra-ui/react";
import profile from "../assets/profile_btn.png";

const DashboardNav = ({ name }) => {
  return (
    <HStack>
      <Text fontSize="2xl" fontWeight="extrabold">
        Dashboard
      </Text>
      <Spacer />
      <Text fontSize="lg" paddingRight={2}>
        {name ? name : "User"}
      </Text>
      <Image
        borderRadius="full"
        boxSize="35px"
        src={profile}
        alt={"Profile"}
        marginRight={8}
      />
    </HStack>
  );
};

export default DashboardNav;
