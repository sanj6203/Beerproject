import React from "react";
import Search from "../Components/Search";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { BeerContext } from "../context/BeerContext";
import Card from "../Components/Card";

const SearchDisplay = () => {
  const location = useLocation();

  const { beerData, searchedData, setSearchedData, searched, setSearched } =
    useContext(BeerContext);

  return (
    <>
      <div>
        <Search />
      </div>
      <div className="card-container">
        {searchedData.map((el) => (
          <Card
            className="cards"
            key={el.id}
            name={el.name}
            image={el.image}
            price={el.price}
            average={el.rating.average}
            reviews={el.rating.reviews}
          />
        ))}
      </div>
    </>
  );
};

export default SearchDisplay;
