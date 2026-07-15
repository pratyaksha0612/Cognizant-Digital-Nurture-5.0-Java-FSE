import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (form.name.length < 5)
      temp.name = "Name must contain at least 5 characters.";

    if (!(form.email.includes("@") && form.email.includes(".")))
      temp.email = "Enter a valid email address.";

    if (form.password.length < 8)
      temp.password = "Password must contain at least 8 characters.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful!");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px" }}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{errors.name}</span>

        <br />
        <br />

        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{errors.email}</span>

        <br />
        <br />

        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{errors.password}</span>

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;