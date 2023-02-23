import { useState } from "react";
import "./sprite.css";

const Sprite = ({ spriteShiny, sprite, name }) => {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <div className="pokedex-sort">
      <div>
        {isShiny ? (
          <>
            <img className="pokemon-sprite" src={spriteShiny} alt={name} />
          </>
        ) : (
          <>
            <img className="pokemon-sprite" src={sprite} alt={name} />
          </>
        )}
      </div>
      <button
        className="button"
        onClick={() => {
          setIsShiny(!isShiny);
        }}
      >
        {isShiny ? "Normal" : "Shiny"}
      </button>
    </div>
  );
};

export default Sprite;
