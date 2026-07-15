import { useState } from "react";

function App() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const referenceNumber =
      "CMP" + Math.floor(100000 + Math.random() * 900000);

    alert(
      `Thanks ${employeeName}.\n\nYour complaint has been submitted successfully.\nReference Number: ${referenceNumber}`
    );

    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ color: "red", textAlign: "center" }}>
        Register your complaints here!!
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <br />

        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "15px" }}
        />

        <label>Complaint</label>
        <br />

        <textarea
          rows="5"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
          style={{ width: "100%" }}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;