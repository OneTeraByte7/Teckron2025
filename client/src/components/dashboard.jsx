import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const Dashboard = () => {
  const [figSales, setFigSales] = useState(null);
  const [figWaste, setFigWaste] = useState(null);
  const [figRecycling, setFigRecycling] = useState(null);
  const [figInventory, setFigInventory] = useState(null);

  // Fetch visualizations data from the backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/visualizations')
      .then(response => {
        console.log('Data fetched:', response.data);
        setFigSales(response.data.figSales);
        setFigWaste(response.data.figWaste);
        setFigRecycling(response.data.figRecycling);
        setFigInventory(response.data.figInventory);
      })
      .catch(error => {
        console.error('Error fetching visualizations:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg h-96">
          {figSales ? (
            <Plot 
              data={figSales.data} 
              layout={{ ...figSales.layout, autosize: true }} 
              useResizeHandler={true}
              style={{ width: "100%", height: "100%" }} 
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg h-96">
          {figWaste ? (
            <Plot 
              data={figWaste.data} 
              layout={{ ...figWaste.layout, autosize: true }} 
              useResizeHandler={true}
              style={{ width: "100%", height: "100%" }} 
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg h-96">
          {figRecycling ? (
            <Plot 
              data={figRecycling.data} 
              layout={{ ...figRecycling.layout, autosize: true }} 
              useResizeHandler={true}
              style={{ width: "100%", height: "100%" }} 
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg h-96">
          {figInventory ? (
            <Plot 
              data={figInventory.data} 
              layout={{ ...figInventory.layout, autosize: true }} 
              useResizeHandler={true}
              style={{ width: "100%", height: "100%" }} 
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
