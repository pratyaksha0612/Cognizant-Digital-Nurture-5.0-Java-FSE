import ListOfPlayers from "./Components/ListOfPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {

  const flag = false;

  return (
    <div style={{ padding: "20px" }}>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );

}

export default App;