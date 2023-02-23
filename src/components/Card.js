import axios from "axios";
import { useEffect, useState } from "react";
import "./card.css";
import Stats from "./subComponents/Stats";
import Sprite from "./subComponents/Sprite";
import PokemonColors from "./subComponents/PokemonColors";
import Header from "./subComponents/Header";

const Card = ({ link }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState([]);
  const [colorType, setColorType] = useState("");
  const [sprite, setSprite] = useState("");
  const [spriteShiny, setSpriteShiny] = useState("");
  const [stats, setStats] = useState([]);
  const pokeColor = PokemonColors(colorType);

  useEffect(() => {
    if (link) {
      axios(link).then((value) => {
        setId(value.data.id);
        setName(value.data.name);
        setSprite(value.data.sprites.other["official-artwork"].front_default);
        setSpriteShiny(
          value.data.sprites.other["official-artwork"].front_shiny
        );
        setType(value.data.types);
        setStats(value.data.stats);
        setColorType(value.data.types[0].type.name);
      });
    }
  }, [link]);

  return (
    <div style={{ background: pokeColor }} className="pokemon-card">
      <Header id={id} name={name} types={type} />
      <Sprite sprite={sprite} spriteShiny={spriteShiny} name={name} />
      <Stats stats={stats} />
    </div>
  );
};

export default Card;
