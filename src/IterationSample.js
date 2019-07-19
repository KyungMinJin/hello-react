import React, { Component } from "react";

class IterationSample extends Component {
  render() {
    const names = ["눈사람", "얼음", "눈", "바람"];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);

    return <div>{nameList}</div>;
  }
}

export default IterationSample;
