// src/TextInput.js

import React from 'react';
import './TextInput.css';

const CustomTextBox = ({ text, handleChange }) => {
    return (
        <div className="custom-text-box">
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter number of terms"
            />
        </div>
    );
};

export default CustomTextBox;
