import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      `✅ Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`
    );
  };

  return (
    <div className="app">
      <h2>📝 User Registration Form</h2>

      <form onSubmit={handleSubmit} className="card">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            min="1"
            max="120"
            required
          />
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>

      <div className="preview">
        <h3>Current Form Data</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}
