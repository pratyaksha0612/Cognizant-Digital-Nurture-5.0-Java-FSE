function ListOfPlayers() {

  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 82 },
    { name: "KL Rahul", score: 45 },
    { name: "Shubman Gill", score: 74 },
    { name: "Hardik Pandya", score: 61 },
    { name: "Ravindra Jadeja", score: 88 },
    { name: "Rishabh Pant", score: 69 },
    { name: "Suryakumar Yadav", score: 91 },
    { name: "Mohammed Shami", score: 40 },
    { name: "Jasprit Bumrah", score: 72 },
    { name: "Kuldeep Yadav", score: 58 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      {players.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}

      <h2>Players with Scores Below 70</h2>

      {lowScorers.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListOfPlayers;