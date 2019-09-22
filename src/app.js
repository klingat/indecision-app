import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = "Mike";
  }
  getGreeting() {
    return `Hi, my name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

// -------------------------------------
class NewSyntax {
  name = "Jen";
}

const newSyntax = new NewSyntax();

console.log(newSyntax);
