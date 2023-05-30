import { useState } from "react";
import React, { useEffect } from "react";
import "./reset.css";
import Clock from "./clock";
import ToDo from "./to-do";
import List from "./list";
import "./App.css";

function App() {
  const [todoValue, setTodoValue] = useState("");
  return (
    <>
      <div className="app"></div>
      <Clock />
      <ToDo todoValue={todoValue} setTodoValue={setTodoValue} />
      <List value={todoValue} />
    </>
  );
}

export default App;
