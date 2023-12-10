import React, { useContext } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { RegionProvider } from "./providers/countrys";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={theme}>
            <RegionProvider>
              <Header />
              <Outlet />
            </RegionProvider>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
