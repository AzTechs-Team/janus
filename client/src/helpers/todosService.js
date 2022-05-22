export const getTodos = async () => {
  try {
    const res = await fetch("http://localhost:8082/api/TodoGroup", {
      credentials: "include",
    });
    const info = await res.json();
    return info;
  } catch (error) {
    return {};
  }
};

export const postTodos = async (todo) => {
  try {
    const res = await fetch("http://localhost:8082/api/TodoGroup", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
      body: JSON.stringify({
        todos: todo.todos,
        title: todo.title,
        _id: todo._id,
      }),
    });
    const info = await res.json();
    console.log(info, "post todos");
    return info;
  } catch (error) {
    console.log(error);
  }
};

export const delTodos = async (todo) => {
  try {
    const res = await fetch("http://localhost:8082/api/TodoGroup", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
      body: JSON.stringify({
        _id: todo._id,
      }),
    });
    const info = await res.json();
    return info;
  } catch (error) {
    console.log(error);
  }
};

export const createTodos = async (todo) => {
  try {
    const res = await fetch("http://localhost:8082/api/TodoGroup", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
      body: JSON.stringify({
        todos: todo.todos,
        title: todo.title,
      }),
    });
    const info = await res.json();
    return info;
  } catch (error) {
    console.log(error);
  }
};
