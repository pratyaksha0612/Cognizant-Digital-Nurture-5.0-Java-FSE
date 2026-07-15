import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [theme, setTheme] = useState("light");

  const employees = [
    {
      id: 1,
      name: "John Doe",
      department: "Development",
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Testing",
    },
    {
      id: 3,
      name: "Alice Johnson",
      department: "HR",
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          padding: "20px",
          minHeight: "100vh",
          backgroundColor: theme === "light" ? "#ffffff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h1>Employee Management System</h1>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;