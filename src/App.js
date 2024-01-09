import "./App.css";
import FlavanoidsStatsTable from "./components/FlavanoidsStatsTable/FlavanoidsStatsTable";
import GammaStatsTable from "./components/GammaStatsTable/GammaStatsTable";
import wineData from "./Wine-Data.json";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    try {
      setData(wineData);
    } catch (err) {
      console.log("Error loading data", err);
    }
  }

  return (
    <div className="app">
      <FlavanoidsStatsTable dataset={data} />
      <br />
      <GammaStatsTable dataset={data} />
    </div>
  );
}

export default App;
