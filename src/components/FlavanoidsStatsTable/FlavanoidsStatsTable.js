import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../Utils/Utility";
import React, { useState, useEffect } from "react";

// Component to display statistics table for flavanoids
const FlavanoidsStatsTable = ({ dataset }) => {
  // State to store computed statistics
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Extract flavanoids data from the dataset
    const flavanoidsData = dataset.map((item) => item.Flavanoids);
    console.log(flavanoidsData, "flavanoidsData");

    // Find unique classes based on the 'Alcohol' property
    const uniqueClasses = [...new Set(dataset.map((item) => item.Alcohol))];

    // Calculate statistics for each unique class
    const computedStats = uniqueClasses.map((currentClass) => {
      // Filter data for the current class and extract flavanoids values
      const classData = dataset
        .filter((item) => item.Alcohol === currentClass)
        .map((item) => item.Flavanoids);

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
      <caption>Flavanoids Stats Table</caption>
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
        {/* Render rows for flavanoids mean, median, and mode */}
        <tr>
          <td>Flavanoids Mean</td>
          {stats.map((stat) => (
            <td key={stat.class}>{stat.mean.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          {stats.map((stat) => (
            <td key={stat.class}>{stat.median.toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
          {stats.map((stat) => (
            <td key={stat.class}>{stat.mode}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default FlavanoidsStatsTable;
