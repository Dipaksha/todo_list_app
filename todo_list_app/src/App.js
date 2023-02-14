import React, { Component } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import TodoContainer from "./todoContainer";
const App = () => {
  return (
    <Container maxWidth="sm">
      <TodoContainer />
    </Container>
  );
};

export default App;
