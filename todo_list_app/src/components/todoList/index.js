import React from "react";
import { List } from "@mui/material";
import Todo from "../todo";

const TodoListItem = ({ todoList, setTodoList }) => {
  return (
    <List>
      {/* map over and print items */}
      {todoList &&
        todoList.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              todoList={todoList}
              setTodoList={setTodoList}
              key={index}
            />
          );
        })}
    </List>
  );
};
export default TodoListItem;
