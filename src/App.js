import React, { Component, Fragment } from "react";
import styled, {
  GlobalStyleComponent,
  css,
  keyframes
} from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <Input placeholder="Something you want" />
      </Container>
    );
  }
}

const cssBlock = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${cssBlock}
`;

const Container = styled.div`
  background-color: #e7e9bb;
  height: 100vh;
  width: 100%;
`;

export default App;
