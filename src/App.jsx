import React, { useEffect } from "react";
import "./reset.css";
import Clock from "./clock";
import ToDo from "./to-do";
import { List } from "./list";
import "./App.css";

function App() {
  return (
    <>
      <div className="app"></div>
      <Clock />
      <ToDo />
    </>
  );
}

export default App;
