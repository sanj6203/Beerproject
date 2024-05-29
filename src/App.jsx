import React from "react";
import { Route, Routes } from "react-router-dom";
import { BeerProvider } from "./context/BeerContext";
import Home from "./Pages/Home";
import SearchDisplay from "./Pages/SearchDisplay";

const App = () => {
  return (
    <>
      <BeerProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={SearchDisplay} />
        </Routes>
      </BeerProvider>
    </>
  );
};

export default App;
