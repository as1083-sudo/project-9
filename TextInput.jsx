import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);  // Update state dynamically
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <button type="submit">Submit</button>
      <p>You typed: {text}</p>
    </form>
  );
}

export default TextInput;
