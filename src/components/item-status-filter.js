import React from "react";
import ReactDOM from "react-dom";
import "./item-status-filter.css";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        Усі
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Активні
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Виконані
      </button>
    </div>
  );
};

export default ItemStatusFilter;
