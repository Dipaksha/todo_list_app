import React, { useState } from "react";
import AddTodo from "../components/addTodo/AddTodo";

const Todo = () => {
  const [todoText, setTodoText] = useState("");

  return (
    <>
      <h1 style={{ textAlign: "center" }}>ToDo App</h1>
      <AddTodo todoText={todoText} />
    </>
  );
};
export default Todo;
