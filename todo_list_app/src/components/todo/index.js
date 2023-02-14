import React from "react";
import { List, Button } from "@mui/material";

const Todo = ({ todo, todoList, setTodoList }) => {
  const handleClickOnDone = () => {
    const tempTodoList = [...todoList];
    tempTodoList.map((item) => {
      if (item.userInput === todo.userInput) {
        item.crossedLine = !item.crossedLine;
      }
      return item;
    });
    setTodoList(tempTodoList);
  };
  return (
    <List variant="dark" action>
      <span className={todo.crossedLine ? "crossed-line" : "none-line"}>
        {todo.userInput}
      </span>
      <Button
        variant="contained"
        style={{ marginLeft: "20px" }}
        onClick={() => {
          handleClickOnDone(todo.userInput);
        }}
      >
        Done
      </Button>
    </List>
  );
};
export default Todo;
