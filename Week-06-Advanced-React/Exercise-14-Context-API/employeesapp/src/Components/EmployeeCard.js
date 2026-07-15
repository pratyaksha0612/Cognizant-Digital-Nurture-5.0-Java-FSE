import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>{employee.name}</h3>
      <p>Department: {employee.department}</p>
      <button
        style={{
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        View Details
      </button>
    </div>
  );
}

export default EmployeeCard;