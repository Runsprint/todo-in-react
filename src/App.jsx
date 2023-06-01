import React, { useEffect } from "react";
import "./reset.css";
import Clock from "./clock";
import ToDo from "./to-do";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="todo">Todo</h1>
      </div>
      <div>
        <Clock />
        <ToDo />
      </div>
    </>
  );
}

export default App;
