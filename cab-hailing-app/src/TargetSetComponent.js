import React, { useState } from "react";

const TargetSetComponent = () => {
  const [targetAmount, setTargetAmount] = useState("");

  const handleInputChange = (e) => {
    setTargetAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (targetAmount) {
      alert(`Your target earning for today is set to ₹${targetAmount}`);
      setTargetAmount(""); // Clear the input field after submission
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f8f8", borderRadius: "8px" }}>
      <h2>Set Your Daily Target</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={targetAmount}
          onChange={handleInputChange}
          placeholder="Enter target amount (₹)"
          style={{ padding: "10px", width: "200px", marginRight: "10px" }}
          required
        />
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Set Target
        </button>
      </form>
    </div>
  );
};

export default TargetSetComponent;