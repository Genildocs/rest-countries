import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import InputSearch from "./components/inputSearch";


function App() {
  return (
    <Container className="bg-VeryLightGray dark:bg-VeryDarkBlue">
      <Header />  
      <InputSearch />  
      
    </Container>
  );
}

export default App;

export const Container = styled.div`
  min-height: 100vh;
`;
