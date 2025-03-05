import React, { useState, useEffect } from 'react';
import brain from 'brain.js';
import axios from 'axios';

const ExpiryPredictor = () => {
    const [data, setData] = useState([]);
    const [net, setNet] = useState(null);
    const [manufacturingDate, setManufacturingDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [prediction, setPrediction] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                const fetchedData = response.data;

                // Preprocess data
                fetchedData.forEach(item => {
                    item.manufacturing_date = new Date(item.manufacturing_date).getTime() / 1000;
                    item.expiry_date = new Date(item.expiry_date).getTime() / 1000;
                });

                const X = fetchedData.map(item => [item.expiry_date, item.manufacturing_date]);
                const y = fetchedData.map(item => item.price / 100);  // Scale for training

                const trainingData = X.map((input, index) => ({
                    input,
                    output: [y[index]]
                }));

                const net = new brain.NeuralNetwork({ hiddenLayers: [10] });
                net.train(trainingData, { iterations: 2000, learningRate: 0.01 });

                setNet(net);
            })
            .catch(error => console.error(error));
    }, []);

    const handlePredict = () => {
        if (net) {
            const mDate = new Date(manufacturingDate).getTime() / 1000;
            const eDate = new Date(expiryDate).getTime() / 1000;
            const result = net.run([eDate, mDate])[0] * 100;
            setPrediction(Math.round(result));
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen p-8 flex flex-col items-center">
            <h1 className="text-3xl text-white mb-6">Expiry Date Predictor</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-white mb-2">Manufacturing Date:</label>
                    <input
                        type="date"
                        value={manufacturingDate}
                        onChange={(e) => setManufacturingDate(e.target.value)}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2">Expiry Date:</label>
                    <input
                        type="date"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
                    />
                </div>
                <button
                    onClick={handlePredict}
                    className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition">
                    Predict Price
                </button>
                {prediction !== null && (
                    <div className="mt-4 text-white text-center">
                        <p>Predicted Price: <span className="font-bold">${prediction}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpiryPredictor;
