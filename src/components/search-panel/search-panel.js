import React, { Component } from "react";

import "./search-panel.css";
import { render } from "react-dom";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Тицяй щоб знайти"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
