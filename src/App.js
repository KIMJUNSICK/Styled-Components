import React, { Component, Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.dangerColor};
`;
const Card = styled.div`
  background-color: ${props => props.theme.mainColor};
`;

const Form = () => (
  <Card>
    <Button>JUNSIK</Button>
  </Card>
);

const Container = styled.div`
  background-color: #e7e9bb;
  height: 100vh;
  width: 100%;
`;

export default App;
