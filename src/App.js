import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
   padding: 0;
   margin: 0;
 }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Button>HELLO</Button>
          <Button danger rotationTime={5}>
            JUNSIK
          </Button>
          <Anchor href="http://google.com">Road to G.O.D</Anchor>
        </Container>
      </Fragment>
    );
  }
}

const Container = styled.div`
  background-color: #e7e9bb;
  height: 100vh;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 50px;
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
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

const rotation = keyframes`
 from  {
   transform : rotate(0deg)
 }
 to {
  transform : rotate(360deg)
 } 
`;

export default App;
