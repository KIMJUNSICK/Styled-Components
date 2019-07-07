import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <Button>HELLO</Button>
        <Button danger>JUNSIK</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: #e7e9bb;
  height: 100vh;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 5px;
  min-width: 120px;
  color: white;
  background-color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#26D0CE" : "#1A2980")};
`;

export default App;
