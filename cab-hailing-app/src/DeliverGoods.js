import React, { useState } from "react";

function DeliverGoods() {
  const [showDetails, setShowDetails] = useState(false);

  const deliveryDetails = {
    supplier: "ABC Logistics",
    pickupLocation: "Koramangala, Bangalore",
    dropLocation: "Whitefield, Bangalore",
    productType: "Electronics",
    quantity: "5 Boxes",
    fare: "₹450",
  };

  return (
    <div style={styles.container}>
      {!showDetails ? (
        <button style={styles.button} onClick={() => setShowDetails(true)}>
          📦 Deliver Goods
        </button>
      ) : (
        <div style={styles.card}>
          <h2>Delivery Details</h2>
          <p><strong>Supplier:</strong> {deliveryDetails.supplier}</p>
          <p><strong>Pickup:</strong> {deliveryDetails.pickupLocation}</p>
          <p><strong>Drop:</strong> {deliveryDetails.dropLocation}</p>
          <p><strong>Product:</strong> {deliveryDetails.productType}</p>
          <p><strong>Quantity:</strong> {deliveryDetails.quantity}</p>
          <p><strong>Fare:</strong> {deliveryDetails.fare}</p>
          <button style={styles.closeButton} onClick={() => setShowDetails(false)}>Close</button>
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
    width: "350px",
    backgroundColor: "#fff",
    margin: "10px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "#fff",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#dc3545",
    color: "#fff",
  }
};

export default DeliverGoods;
