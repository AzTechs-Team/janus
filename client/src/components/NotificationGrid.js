import React from "react";
import { Box, Button, Flex, Text, Tooltip, useToast } from "@chakra-ui/react";
import GridLayout from "react-grid-layout";

import NotificationContainer from "./NotificationContainer";
import bg from "../assets/notification_bg.png";
import "../theme/grid.css";
import { MdFileCopy } from "react-icons/md";

const NotificationGrid = ({
  notificationCollection,
  payloadUrl,
  onRemindMeLater,
}) => {
  const layout = [];
  let x_loc = 0;
  const generateLayout = (i) => {
    const y = Math.ceil(0.6 * 6) + 1;
    const minW = 2;
    const minH = 4;
    const maxW = 2;
    const maxH = 12;
    if (x_loc !== 6) x_loc += 2;
    else x_loc = 0;
    return {
      x: x_loc,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: 6,
      i: i.toString(),
      minW,
      maxW,
      minH,
      maxH,
    };
  };

  console.log("in notifications grid", notificationCollection);

  notificationCollection.map((notification, i) => {
    layout.push(generateLayout(i, notification));
    return null;
  });

  const toast = useToast();

  const handleButtonClick = () => {
    navigator.clipboard.writeText(payloadUrl);
    toast({
      title: "Link copied!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex flexDirection="column">
        <Tooltip
          label="Copy payload link and add to github webhooks of a repository"
          placement="bottom"
          bgColor="primary.900"
          fontSize="xs"
        >
          <Button
            alignSelf="flex-end"
            mt={-16}
            mb={6}
            rightIcon={<MdFileCopy color="accent.700" size="20" />}
            bgColor="accent.100"
            color="accent.700"
            _active={{ bgColor: "accent.50" }}
            _hover={{ bgColor: "accent.50" }}
            width="15%"
            iconSpacing="6"
            size="md"
            onClick={handleButtonClick}
          >
            Copy payload
          </Button>
        </Tooltip>
        <Box
          bgColor="accent.700"
          borderRadius="xl"
          height="70vh"
          py={4}
          px={6}
          overflowY="auto"
          overflowX="auto"
        >
          <GridLayout
            className="layout notes_grid scrollbar"
            layout={layout}
            cols={8}
            rowHeight={30}
            width={1150}
            maxRows={5}
            isResizable={false}
          >
            {notificationCollection.map((notification, i) => {
              return (
                <Flex
                  bg="blue.600"
                  color="white"
                  key={i.toString()}
                  bgImage={bg}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  objectFit="scale-down"
                  borderRadius="xl"
                  flexDirection="column"
                  pt={6}
                  pb={3}
                  px={3}
                >
                  <NotificationContainer
                    notification={notification}
                    onRemindMeLater={onRemindMeLater}
                  />
                </Flex>
              );
            })}
          </GridLayout>
        </Box>
      </Flex>
    </>
  );
};

export default NotificationGrid;
