import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import GridLayout from "react-grid-layout";
import bg from "../assets/todos_bg.png";
import "../theme/grid.css";
import TodosContainer from "./TodosContainer";

const TodosGrid = ({ todosCollection }) => {
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
  const layout = [];
  todosCollection.map((_, i) => {
    layout.push(generateLayout(i));
    return null;
  });

  return (
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
        allowOverlap={false}
        isResizable={false}
      >
        {todosCollection.map((todo, i) => {
          return (
            <Flex
              bg="blue.600"
              color="white"
              key={i.toString()}
              bgImage={bg}
              bgPosition="center"
              borderRadius="xl"
              flexDirection="column"
              p={6}
            >
              <TodosContainer todoList={todo} />
            </Flex>
          );
        })}
      </GridLayout>
    </Box>
  );
};

export default TodosGrid;
