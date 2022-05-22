import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import ExtensionsTitleBar from "../components/ExtensionsTitleBar";
import TodosGrid from "../components/TodosGrid";
import { todos } from "../assets/content/todos";
import { getTodos } from "../helpers/todosService";
import { useRecoilState } from "recoil";
import { todosState } from "../atoms/todos";

const TodoScreen = () => {
  const [todosCollection, setTodosCollections] = useRecoilState(todosState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      const info = await getTodos();
      setTodosCollections([...info]);
      console.log(info);
    };
    getDetails();
  }, []);

  const onSearch = (text) => {
    if (text) {
      const newData = todos.filter(function (item) {
        const userData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return userData.indexOf(textData) > -1;
      });

      setTodosCollections(newData);
      setSearch(text);
    } else {
      setTodosCollections(todos);
      setSearch(text);
    }
  };

  const reset = () => {
    setTodosCollections(todos);
  };

  return (
    <Container
      bgColor="primary.800"
      py={7}
      px={14}
      m={6}
      borderRadius="xl"
      maxH="100%"
      maxW="92%"
      color="white"
    >
      <ExtensionsTitleBar
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
        reset={reset}
        title="Todos"
        btn="Add a todo"
      />
      <TodosGrid todosCollection={todosCollection} />
    </Container>
  );
};

export default TodoScreen;
