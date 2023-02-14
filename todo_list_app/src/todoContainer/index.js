import React, { useState } from "react";
import AddTodo from "../components/addTodo/AddTodo";
import TodoList from "../components/todoList";

export default function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
