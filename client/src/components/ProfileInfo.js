import { HStack, Input, Text } from "@chakra-ui/react";
import React from "react";

const ProfileInfo = ({ text, placeholder }) => {
  return (
    <HStack color="white" pb={6}>
      <Text width="20%">{text}</Text>
      <Input disabled value={placeholder} width="65%" />
    </HStack>
  );
};

export default ProfileInfo;
