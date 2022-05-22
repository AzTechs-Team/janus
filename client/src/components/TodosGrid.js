import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import GridLayout from "react-grid-layout";
import bg from "../assets/todos_bg.png";
import "../theme/grid.css";
import TodosContainer from "./TodosContainer";
import { GrAdd } from "react-icons/gr";
import ModalContainer from "./ModalContainer";
import { useRecoilState } from "recoil";
import { todosState } from "../atoms/todos";
import { createTodos, delTodos, postTodos } from "../helpers/todosService";

const TodosGrid = ({ todosCollection }) => {
  let x_loc = 0;
  const generateLayout = useCallback((i) => {
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
  }, []);

  const [todos, setTodos] = useRecoilState(todosState);
  const [layout, setLayout] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    let t = [];
    todos.map((note, i) => {
      t.push(generateLayout(i, note));
      return null;
    });
    setLayout(t);
  }, [generateLayout, todos]);

  const updateTodo = (title, todogrp) => {
    let temp = JSON.parse(JSON.stringify(todos));
    let flag = false;
    temp.map((n) => {
      if (n._id === todogrp._id) {
        flag = true;
        todogrp.title = title;
        n.todo = todogrp.todo;
      }
      return null;
    });

    if (!flag) {
      todogrp.title = title;
      temp.push(todogrp);
      createTodos(todogrp);
      console.log("in !flag", temp);
    } else {
      postTodos(todogrp);
    }

    setTodos([...temp]);
    if (!flag) {
      let t = [];
      temp.map((x, i) => {
        t.push(generateLayout(i, x));
        return null;
      });
      setLayout(t);
    }
  };

  const deleteTodo = (todo) => {
    if (!todo) return;
    let temp = JSON.parse(JSON.stringify(todos));
    temp = temp.filter((t) => {
      return t._id !== todo._id;
    });

    setTodos([...temp]);
    delTodos(todo);
    let t = [];
    temp.map((note, i) => {
      t.push(generateLayout(i, note));
      return null;
    });
    setLayout(t);
  };

  return (
    <>
      <Flex flexDirection="column">
        <Button
          alignSelf="flex-end"
          mt={-16}
          mb={6}
          rightIcon={<GrAdd color="accent.700" size="20" />}
          bgColor="accent.100"
          color="accent.700"
          _active={{ bgColor: "accent.50" }}
          _hover={{ bgColor: "accent.50" }}
          width="18%"
          iconSpacing="12"
          size="md"
          ref={btnRef}
          onClick={onOpen}
        >
          Add a Todo
        </Button>
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
            {todos.map((todo, i) => {
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
                  <TodosContainer
                    todoList={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                  />
                </Flex>
              );
            })}
          </GridLayout>
        </Box>
      </Flex>
      <ModalContainer
        id={"AddTodos"}
        onClose={onClose}
        btnRef={btnRef}
        isOpen={isOpen}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodosGrid;
