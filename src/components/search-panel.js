import React from "react";
import ReactDOM from "react-dom";
import "./search-panel.css";

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Тицяй щоб знайти"
    />
  );
};

export default SearchPanel;
