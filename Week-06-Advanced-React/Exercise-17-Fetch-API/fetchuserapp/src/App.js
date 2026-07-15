import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>Random User Details</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <img
            src={user.picture.large}
            alt="User"
            style={{
              borderRadius: "50%",
              border: "3px solid #1976d2",
            }}
          />

          <h2>
            {user.name.title} {user.name.first}
          </h2>

          <p>{user.email}</p>
        </>
      )}
    </div>
  );
}

export default App;