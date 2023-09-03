import React from "react";
import styled from "styled-components";
import Header from "./components/header";

function App() {
  return (
    <Container className="bg-VeryLightGray">
      <Header />
    </Container>
  );
}

export default App;

export const Container = styled.div`
  min-height: 100vh;
`;
