import React, { createContext, useState, useEffect } from "react";

export const BeerContext = createContext();

export const BeerProvider = ({ children }) => {
  const [beerData, setBeerData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((res) => res.json())
      .then((data) => setBeerData(data))
      .catch((e) => {
        console.log("error");
      });
  }, []);

  return (
    <BeerContext.Provider
      value={{
        beerData,
        setBeerData,
        searchedData,
        setSearchedData,
        searched,
        setSearched,
      }}
    >
      {children}
    </BeerContext.Provider>
  );
};
