import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

const center = [12.9716, 77.5946]; // MG Road, Bangalore

const randomPoints = (count) => {
  let points = [];
  for (let i = 0; i < count; i++) {
    let lat = 12.91 + Math.random() * 0.1; // Random lat around MG Road - Koramangala
    let lng = 77.57 + Math.random() * 0.1; // Random lng around MG Road - Koramangala
    let intensity = Math.random() * 2; // Random intensity between 0-2
    points.push([lat, lng, intensity]);
  }
  return points;
};

const HeatmapLayer = ({ points }) => {
  const map = useMap();
  useEffect(() => {
    const heatLayer = L.heatLayer(points, { radius: 25, blur: 15, maxZoom: 17 }).addTo(map);
    return () => map.removeLayer(heatLayer);
  }, [points, map]);
  return null;
};

const MapComponent = () => {
  const [data, setData] = useState(randomPoints(50)); // 50 random points
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const highDensityAreas = data.filter((point) => point[2] > 1.5); // Filter high-density areas
    setRewards(
      highDensityAreas.map((point) => ({
        lat: point[0],
        lng: point[1],
        reward: Math.random() > 0.5 ? "₹50 Cash Reward" : "Petrol Reimbursement",
      }))
    );
  }, [data]);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "50%", width: "100%",paddingLeft:20  }}>
        <MapContainer center={center} zoom={14} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <HeatmapLayer points={data} />
          {rewards.map((reward, index) => (
            <Marker key={index} position={[reward.lat, reward.lng]}>
              <Popup>{reward.reward}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div
        style={{
          height: "50%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h2>Ride Info & Controls</h2>
      </div>
    </div>
  );
};

export default MapComponent;
