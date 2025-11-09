import React from "react";

function DeleteButton() {
  const handleClick = (id) => {
    console.log("Clicked item:", id);
    alert(`Deleted Item ID: ${id}`);
  };

  return (
    <div>
      {/* ✅ Correct way using Arrow function */}
      <button onClick={() => handleClick(101)}>Delete Item</button>

      {/* ✅ Another valid method using .bind() */}
      <button onClick={handleClick.bind(this, 202)}>Delete Item (Bind)</button>
    </div>
  );
}

export default DeleteButton;
