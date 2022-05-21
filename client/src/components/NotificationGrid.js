import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import GridLayout from "react-grid-layout";

import NotificationContainer from "./NotificationContainer";
import bg from "../assets/notification_bg.png";
import "../theme/grid.css";

const NotificationGrid = ({ notificationCollection }) => {
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

  notificationCollection.map((notification, i) => {
    layout.push(generateLayout(i, notification));
    return null;
  });

  return (
    <>
      <Flex flexDirection="column">
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
                  <NotificationContainer notification={notification} />
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
