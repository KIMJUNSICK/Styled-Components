import React, { Component } from "react";
import styled from "styled-components";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Title>
          junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!junsik!
        </Title>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 70px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 30px;
`;
