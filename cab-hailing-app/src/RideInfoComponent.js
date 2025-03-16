import React, { useState } from 'react';

const RideInfoComponent = () => {
  const [showSecondRider, setShowSecondRider] = useState(false);
  const [rideAccepted, setRideAccepted] = useState(false);

  const firstRider = {
    name: "Suresh",
    pickup: "MG Road",
    drop: "REVA University",
    fare: "₹300",
    rating: "⭐⭐⭐⭐",
  };

  const secondRider = {
    name: "Rahul",
    pickup: "Indiranagar",
    drop: "Yeshwanthpur",
    fare: "₹250",
    rating: "⭐⭐⭐⭐⭐",
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ride Information</h2>
      
      {/* First Rider Details */}
      <div style={styles.infoBox}>
        <p><strong>Rider's Name:</strong> {firstRider.name}</p>
        <p><strong>Pick-Up Place:</strong> {firstRider.pickup}</p>
        <p><strong>Drop Place:</strong> {firstRider.drop}</p>
        <p><strong>Fare:</strong> {firstRider.fare}</p>
        <p><strong>Customer Rating:</strong> {firstRider.rating}</p>
      </div>

      {!showSecondRider ? (
        <button style={styles.button} onClick={() => setShowSecondRider(true)}>
          Accept Auto Sharing
        </button>
      ) : (
        <>
          {/* Second Rider Details */}
          <div style={styles.infoBox}>
            <p><strong>Rider's Name:</strong> {secondRider.name}</p>
            <p><strong>Pick-Up Place:</strong> {secondRider.pickup}</p>
            <p><strong>Drop Place:</strong> {secondRider.drop}</p>
            <p><strong>Fare:</strong> {secondRider.fare}</p>
            <p><strong>Customer Rating:</strong> {secondRider.rating}</p>
          </div>

          {!rideAccepted ? (
            <button style={styles.button} onClick={() => setRideAccepted(true)}>
              Accept Ride
            </button>
          ) : (
            <p style={styles.success}>✅ Ride Shared Successfully!</p>
          )}
        </>
      )}
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '10px',
  },
  infoBox: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  },
  success: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default RideInfoComponent;
