import "./stats.css";

const Stats = ({ stats }) => {
  const statsArray = stats.map((value) => (
    <tr>
      <td className="stat-title"> {value.stat.name.toUpperCase()} </td>
      <td>
        <progress
          className="stat-bar"
          key={value.stat.name}
          max="150"
          value={value.base_stat}
        />
      </td>
      <td className="stat-title">{value.base_stat}</td>
    </tr>
  ));

  return (
    <div>
      <table className="stats-table">
        <tbody>{statsArray}</tbody>
      </table>
    </div>
  );
};

export default Stats;
