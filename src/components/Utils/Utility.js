// Function to calculate the mean of a dataset
const calculateMean = (data) => {
  const dataLength = data.length;
  const sum = data.reduce((acc, value) => acc + parseFloat(value), 0);
  return sum / dataLength;
};

// Function to calculate the median of a dataset
const calculateMedian = (data) => {
  const sortedData = [...data].sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (sortedData[middle - 1] + sortedData[middle]) / 2;
  } else {
    return sortedData[middle];
  }
};

// Function to calculate the mode of a dataset
const calculateMode = (data) => {
  const frequencyMap = {};

  data.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });

  let mode;
  let maxFrequency = 0;

  for (const key in frequencyMap) {
    if (frequencyMap[key] > maxFrequency) {
      mode = key;
      maxFrequency = frequencyMap[key];
    }
  }

  return mode;
};

export { calculateMean, calculateMedian, calculateMode };
