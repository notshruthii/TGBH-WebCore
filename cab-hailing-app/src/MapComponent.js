import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !points.length) return;

    const heatLayer = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
      gradient: {
        0.1: "green",
        0.3: "yellow",
        0.6: "orange",
        0.9: "red",
      },
    }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
};

const MapComponent = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    // Generate random heatmap data focused on MG Road to Koramangala
    const generateRandomPoints = (numPoints) => {
      const minLat = 12.935; // Koramangala
      const maxLat = 12.974; // MG Road
      const minLng = 77.610;
      const maxLng = 77.624;

      let points = [];
      for (let i = 0; i < numPoints; i++) {
        const lat = Math.random() * (maxLat - minLat) + minLat;
        const lng = Math.random() * (maxLng - minLng) + minLng;
        const intensity = Math.random(); // Value between 0 and 1 for heat level
        points.push([lat, lng, intensity]);
      }
      return points;
    };

    setHeatmapData(generateRandomPoints(100)); // Adjust number of points
  }, []);

  return (
    <MapContainer center={[12.950, 77.617]} zoom={14} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <HeatmapLayer points={heatmapData} />
    </MapContainer>
  );
};

export default MapComponent;
