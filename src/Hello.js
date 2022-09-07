import React from "react";
import "./Hello.css";

class Hello extends React.Component {
  render() {
    return (
      <div class="f1 tc">
        <h1> Hello Samson this is the changes made </h1>
        <h2> new the changes made </h2>
        <p>{this.props.greeting} </p>
      </div>
    );
  }
}

export default Hello;
