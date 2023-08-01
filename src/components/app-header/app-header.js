import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo листочок</h1>
      <h2>
        {toDo} в процесі,
        {done} виконані
      </h2>
    </div>
  );
};

export default AppHeader;
