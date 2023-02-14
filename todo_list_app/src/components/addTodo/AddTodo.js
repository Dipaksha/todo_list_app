import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const AddTodo = ({ todoList, setTodoList }) => {
  const [todoValue, setTodoValue] = useState({ userInput: "" });

  const handleChange = (event) => {
    setTodoValue({ ...todoValue, userInput: event.target.value });
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todoValue]);
    setTodoValue({ userInput: "" });
  };
  return (
    <Grid Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          style={{ color: "black" }}
          fullWidth
          label="Todo Item"
          variant="outlined"
          focused
          name="inputTodo"
          type="text"
          size="small"
          helperText="ToDo Items"
          value={todoValue.userInput}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" fullWidth onClick={handleAddTodo}>
          Add todo
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddTodo;
