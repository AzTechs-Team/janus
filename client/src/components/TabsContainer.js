import React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const TabsContainer = ({ content }) => {
  return (
    <Tabs
      isFitted
      color="white"
      display="flex"
      alignItems="center"
      flexDir="column"
    >
      <TabList width="40vw" color="primary.200" borderBottomColor="primary.200">
        <Tab
          _active={{
            backgroundColor: "primary.800",
          }}
          _focus={{ outlineStyle: "none" }}
          _selected={{
            color: "accent.200",
            borderBottomColor: "accent.200",
          }}
        >
          Overview
        </Tab>
        <Tab
          _active={{ backgroundColor: "primary.800" }}
          _focus={{ outlineStyle: "none" }}
          _selected={{
            color: "accent.200",
            borderBottomColor: "accent.200",
          }}
        >
          About
        </Tab>
        <Tab
          _active={{ backgroundColor: "primary.800" }}
          _focus={{ outlineStyle: "none" }}
          _selected={{
            color: "accent.200",
            borderBottomColor: "accent.200",
          }}
        >
          Settings
        </Tab>
      </TabList>
      <Box
        height="50vh"
        bgColor="accent.700"
        px={6}
        py={4}
        borderRadius="2xl"
        width="48vw"
      >
        <TabPanels>
          <TabPanel>
            {/* <Text fontSize="sm"> */}

            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content["overview"] }}
            ></div>

            {/* </Text> */}
          </TabPanel>
          <TabPanel>
            {/* <Text fontSize="sm"> */}
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content["about"] }}
            ></div>
            {/* </Text> */}
          </TabPanel>
          <TabPanel>
            {/* <Text fontSize="sm"> */}
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content["settings"] }}
            ></div>
            {/* </Text> */}
          </TabPanel>
        </TabPanels>
      </Box>
    </Tabs>
  );
};

export default TabsContainer;
