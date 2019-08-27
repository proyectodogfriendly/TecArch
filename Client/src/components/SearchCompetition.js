import React, { Component } from "react";
import CompetitionList from "./Competition-list";

class SearchCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <input
        onChange={this.handleOnChange}
        type="text"
        placeholder="Buscador"
        value={this.state.value}
        name="value"
      />
    );
  }
}
export default SearchCompetition;
