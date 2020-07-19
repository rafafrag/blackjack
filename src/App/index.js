import React, { Component } from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import styled from "styled-components";

const Button = styled.div`
  background-color: #a52a2a;
  color: #ffffff;
`;

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <Button> Button </Button>
      </div>
    );
  }
}

export default App;
