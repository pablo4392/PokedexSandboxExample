import { useEffect, useState } from "react";
import Card from "./components/Card";
import Services from "./services/Services";
import "./styles.css";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    Services(limit, offset).then((response) => {
      setPokemon(response.data.results);
    });
  }, [limit, offset]);

  const pokemonArray = pokemon.map((value) => (
    <Card key={value.name} link={value.url} />
  ));

  return <div className="App">{pokemonArray}</div>;
}
