// Pages/Home.js
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "./Home.css";
import Search from "../Components/Search";
import { useContext } from "react";
import { BeerContext } from "../context/BeerContext";
const Home = () => {
  const { beerData } = useContext(BeerContext);

  return (
    <div>
      <div>
        <Search />
      </div>

      <div className="card-container">
        {beerData.map((el) => (
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
    </div>
  );
};

export default Home;
