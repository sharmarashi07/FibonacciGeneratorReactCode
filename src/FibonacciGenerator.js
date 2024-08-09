import React, { useState } from 'react';
import axios from 'axios';
import CustomTextBox from './TextInput';
import './CustomButton.css';
import './FibonacciGenerator.css';

const FibonacciGenerator = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState(null);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = async () => {
        const numTerms = parseInt(text, 10);
        if (isNaN(numTerms) || numTerms < 1 || text.includes('.')) {
            alert('Please enter a valid positive integer');
            return;
        }
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/fibo/${numTerms}`);
            setData(response.data);
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    };

    return (
        <div className="fibonacci-generator">
            <CustomTextBox text={text} handleChange={handleChange} />
            <button className="custom-button" onClick={handleClick}>Generate</button>
            {data && (
                <div className="fibonacci-output">
                    <h3>Fibonacci Sequence:</h3>
                    <div>
                        {data.terms.join(', ')}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FibonacciGenerator;
