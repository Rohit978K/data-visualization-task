import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../Utils/Utility";
import React, { useState, useEffect } from "react";

// Function to calculate the gamma value for a given data point
const calculateGamma = (point) => {
  return (point.Ash * point.Hue) / point.Magnesium;
};

// Component to display statistics table for gamma values
const GammaStatsTable = ({ dataset }) => {
  // State to store computed statistics
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Calculate gamma values for the entire dataset
    const gammaData = dataset.map(calculateGamma);
    console.log(gammaData, "gammaData");

    // Find unique classes based on the 'Alcohol' property
    const uniqueClasses = [...new Set(dataset.map((item) => item.Alcohol))];

    // Calculate statistics for each unique class
    const computedStats = uniqueClasses.map((currentClass) => {
      // Filter data for the current class and calculate gamma values
      const classData = dataset
        .filter((item) => item.Alcohol === currentClass)
        .map(calculateGamma);

      return {
        class: currentClass,
        mean: calculateMean(classData),
        median: calculateMedian(classData),
        mode: calculateMode(classData),
      };
    });

    // Update the state with the computed statistics
    setStats(computedStats);
  }, [dataset]);

  // Render the statistics table
  return (
    <table>
      <caption>Gamma Stats Table</caption>
      <thead>
        <tr>
          <th>Measure</th>
          {/* Render table headers for each class */}
          {stats.map((stat) => (
            <th key={stat.class}>{`Class ${stat.class}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render rows for gamma mean, median, and mode */}
        <tr>
          <td>Gamma Mean</td>
          {stats.map((stat) => (
            <td key={stat.class}>{stat.mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Median</td>
          {stats.map((stat) => (
            <td key={stat.class}>{stat.median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Mode</td>
          {stats.map((stat) => (
            <td key={stat.class}>{Number(stat.mode).toFixed(3)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default GammaStatsTable;
