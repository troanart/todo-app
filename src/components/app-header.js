import React from "react";
import ReactDOM from "react-dom";
import "./app-header.css";

const Appheader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Список Задач</h1>
      <h2>
        {toDo} не виконаних,{done} виконано
      </h2>
    </div>
  );
};
export default Appheader;
