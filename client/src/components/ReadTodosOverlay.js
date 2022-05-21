import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const ReadTodosOverlay = ({ todoList, setText }) => {
  const [todoItemList, setTodoItemList] = useState(todoList.todo);

  const onDeleteTodo = (j) => {
    let temp = todoItemList;
    temp.splice(j, 1);
    setTodoItemList(temp);
    setTodoItemList([...todoItemList]);
    let x = todoList;
    x.todo = temp;
    setText(x);
  };

  const onToggleTodo = (j) => {
    let temp = todoItemList;
    temp[j].isDone = !temp[j].isDone;
    setTodoItemList(temp);
    setTodoItemList([...todoItemList]);
    let x = todoList;
    x.todo = temp;
    setText(x);
  };

  return (
    <Box overflowY="auto" h="45vh" mt={4}>
      {todoItemList.map((item, id) => (
        <TodoItem
          key={id}
          item={item}
          id={id}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          screen="Read"
        />
      ))}
    </Box>
  );
};

export default ReadTodosOverlay;
