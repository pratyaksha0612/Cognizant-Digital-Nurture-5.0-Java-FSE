import { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function TicketBooking() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>

      <button
        onClick={() => setLoggedIn(!loggedIn)}
      >
        {loggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {loggedIn ? <UserPage /> : <GuestPage />}

    </div>
  );

}

export default TicketBooking;