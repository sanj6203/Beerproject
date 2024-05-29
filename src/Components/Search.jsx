import React, { useState, useContext } from "react";
import "./Search.css";
import { BeerContext } from "../context/BeerContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { beerData, searchedData, setSearchedData, searched, setSearched } =
    useContext(BeerContext);
  const navigate = useNavigate();

  const findData = () => {
    const newData = beerData.filter((el) =>
      el.name.toLowerCase().includes(searched.toLowerCase())
    );
    setSearchedData(newData);
    navigate(`/search`, { state: { id: 4 } });
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="search">
      <h1 onClick={navigateHome} className="title">
        {" "}
        &#9734;Discover Beers
      </h1>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
        />
        <button onClick={findData}>Search</button>
      </div>
    </div>
  );
};

export default Search;
