import React from "react";
import usePokeCard from "./usePokeCard";

const PokeCard = () => {
  const { mockPokemonData } = usePokeCard();

  return (
    <div className="cards">
      <h1 className="cards-title">{mockPokemonData.name}</h1>
      <div className="cards-body">
        <img src={mockPokemonData.sprites.front_default} alt="default icon" />
        <img src={mockPokemonData.sprites.front_shiny} alt="icon shiny" />
      </div>
      <div className="cards-footer">
        <a href={mockPokemonData.video}>Video</a>
      </div>
    </div>
  );
};

export default PokeCard;
