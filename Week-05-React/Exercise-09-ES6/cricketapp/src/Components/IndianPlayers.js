function IndianPlayers() {

  const team = [
    "Virat Kohli",
    "Rohit Sharma",
    "KL Rahul",
    "Shubman Gill",
    "Hardik Pandya",
    "Ravindra Jadeja"
  ];

  const oddPlayers = team.filter((_, index) => index % 2 === 0);
  const evenPlayers = team.filter((_, index) => index % 2 !== 0);

  const T20players = [
    "Virat Kohli",
    "Rohit Sharma"
  ];

  const RanjiPlayers = [
    "Cheteshwar Pujara",
    "Ajinkya Rahane"
  ];

  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>

      <h2>Odd Team Players</h2>

      {oddPlayers.map((player, index) => (
        <p key={index}>{player}</p>
      ))}

      <h2>Even Team Players</h2>

      {evenPlayers.map((player, index) => (
        <p key={index}>{player}</p>
      ))}

      <h2>Merged Players</h2>

      {mergedPlayers.map((player, index) => (
        <p key={index}>{player}</p>
      ))}

    </div>
  );
}

export default IndianPlayers;