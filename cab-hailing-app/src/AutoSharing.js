import React, { useState } from "react";

function AutoSharing() {
  const [step, setStep] = useState(0);
  const [PinkAuto, setPinkAuto] = useState(false);

  const autoDetails = {
    driverName: "Kaveri",
    pickupLocation: "MG Road, Bangalore",
    dropLocation: "Electronic City, Bangalore",
    fare: "₹120",
    arrivalTime: "5 min",
    rating: "4.8 ★",
    autoType: PinkAuto ? "Pink Auto" : "Standard Auto",
  };

  return (
    <div style={styles.container}>
      {step === 0 && (
        <button style={styles.button} onClick={() => setStep(1)}>
          Go for Auto Sharing
        </button>
      )}

      {step === 1 && (
        <div style={styles.card}>
          <p style={styles.text}>Do you prefer a Pink Auto?</p>
          <div style={styles.buttonGroup}>
            <button
              style={{ ...styles.button, backgroundColor: "#ff69b4" }}
              onClick={() => {
                setPinkAuto(true);
                setStep(2);
              }}
            >
              Yes
            </button>
            <button
              style={{ ...styles.button, backgroundColor: "#666" }}
              onClick={() => setStep(2)}
            >
              No
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={styles.card}>
          <p style={styles.text}>
            {PinkAuto ? "Pink Auto is booked!" : "Auto is booked!"}
          </p>
          <button style={styles.button} onClick={() => setStep(3)}>
            View Driver Details
          </button>
        </div>
      )}

      {step === 3 && (
        <div style={styles.card}>
          <h2 style={styles.heading}>Driver Details</h2>
          <p><strong>Name:</strong> {autoDetails.driverName}</p>
          <p><strong>Pickup:</strong> {autoDetails.pickupLocation}</p>
          <p><strong>Drop:</strong> {autoDetails.dropLocation}</p>
          <p><strong>Fare is reduced to:</strong> {autoDetails.fare}</p>
          <p><strong>Travelling with:</strong> Gauri</p>
          <p><strong>Travelling together from:</strong> Yelahanka to Nagwara</p>
          <p><strong>Arrival Time:</strong> {autoDetails.arrivalTime}</p>
          <p><strong>Rating:</strong> {autoDetails.rating}</p>
          <p><strong>Auto Type:</strong> {autoDetails.autoType}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
    backgroundColor: "#fff",
    margin: "10px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    margin: "5px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default AutoSharing;
