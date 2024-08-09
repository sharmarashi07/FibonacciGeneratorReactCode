// src/GenerateButton.js

import React, { useState } from 'react';
import axios from 'axios';
import './CustomButton.css';

const GenerateButton = () => {
    const [data, setData] = useState(null);

    const handleClick = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/fibo/10');
            setData(response.data);
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    };

    return (
        <div>
            <button className="custom-button" onClick={handleClick}>Generate</button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default GenerateButton;
