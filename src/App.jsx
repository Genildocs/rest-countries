import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <Container className="bg-VeryLightGray  dark:bg-VeryDarkBlue"> 
      <Header />
      <Outlet />                  
    </Container>
  );
}

export default App;

export const Container = styled.div`
  min-height: 100vh;
`;
