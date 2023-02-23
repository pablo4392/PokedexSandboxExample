import "./header.css";
import PokemonColors from "./PokemonColors";

const Header = ({ id, name, types }) => {
  const typesArray = types.map((value) => (
    <h5
      style={{ background: PokemonColors(value.type.name) }}
      key={value.type.name}
      className="pokemon-type"
    >
      {value.type.name.toUpperCase()}
    </h5>
  ));

  return (
    <div>
      <h4 className="pokemon-title">
        #{id} {name.toUpperCase()}
      </h4>
      <div className="types-sort">{typesArray}</div>
    </div>
  );
};

export default Header;
