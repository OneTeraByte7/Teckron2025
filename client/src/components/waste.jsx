import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const WasteChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data');  // Use relative path
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setSalesData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading data...</div>;
  }

  const labels = salesData.map(item => item.product);
  const wastePercentages = salesData.map(item => ((item.waste / item.sold) * 100).toFixed(2));
  const soldQuantities = salesData.map(item => item.sold);
  const wasteQuantities = salesData.map(item => item.waste);

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ffffff' },
      },
      x: {
        ticks: { color: '#ffffff' },
      },
    },
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl text-white text-center mb-8">Waste Management Visualization</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl text-white mb-4 text-center">Waste Percentage (%)</h2>
          <Bar
            data={{
              labels,
              datasets: [
                {
                  label: 'Waste Percentage',
                  data: wastePercentages,
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={barOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default WasteChart;
