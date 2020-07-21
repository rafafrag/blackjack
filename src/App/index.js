import React, { Component } from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import styled from "styled-components";
import AppLayout from "./AppLayout";
import Table from "./Table";
import Main from "./Main";

const Button = styled.div`
  background-color: #a52a2a;
  color: #ffffff;
  width: 100px;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <AppLayout>
          <WelcomeMessage />
          <Table />
          <Button> Button </Button>
        </AppLayout>
      </Main>
    );
  }
}

export default App;
