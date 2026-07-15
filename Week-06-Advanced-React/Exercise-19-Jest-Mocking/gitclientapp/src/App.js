import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/octocat")
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>GitHub Client</h1>

      {user ? (
        <>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="150"
            style={{ borderRadius: "50%" }}
          />

          <h2>{user.login}</h2>

          <p>Followers : {user.followers}</p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default App;