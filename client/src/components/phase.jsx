import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Phase = () => {
    const [redProducts, setRedProducts] = useState([]);
    const [yellowProducts, setYellowProducts] = useState([]);
    const [greenProducts, setGreenProducts] = useState([]);

    // Fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                const { red, yellow, green } = response.data;
                setRedProducts(red);
                setYellowProducts(yellow);
                setGreenProducts(green);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    // Render tables
    const renderTable = (products, tag) => (
        <div className="mb-8">
            <h2 className={`text-2xl mb-4 ${tag === 'red' ? 'text-red-500' : tag === 'yellow' ? 'text-yellow-500' : 'text-green-500'}`}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)} Products
            </h2>
            <table className="w-full text-left border-collapse border border-gray-600">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="p-2 border border-gray-600">Product</th>
                        <th className="p-2 border border-gray-600">Price</th>
                        <th className="p-2 border border-gray-600">Weight</th>
                        <th className="p-2 border border-gray-600">Manufacturing Date</th>
                        <th className="p-2 border border-gray-600">Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="odd:bg-gray-800 even:bg-gray-700 text-white">
                            <td className="p-2 border border-gray-600">{product.product || 'N/A'}</td>
                            <td className="p-2 border border-gray-600">${product.price}</td>
                            <td className="p-2 border border-gray-600">{product.weight}g</td>
                            <td className="p-2 border border-gray-600">{new Date(product.manufacturing_date).toLocaleDateString()}</td>
                            <td className="p-2 border border-gray-600">{new Date(product.expiry_date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 p-8 text-white">
            <h1 className="text-3xl mb-6 text-center">Product Expiry Tagger</h1>
            {redProducts.length > 0 && renderTable(redProducts, 'red')}
            {yellowProducts.length > 0 && renderTable(yellowProducts, 'yellow')}
            {greenProducts.length > 0 && renderTable(greenProducts, 'green')}
        </div>
    );
};

export default Phase;
