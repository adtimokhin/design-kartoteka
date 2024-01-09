"use client";
import React, { useEffect, useRef } from 'react';
import Tag from './Tag';

const Input = ({ selectedTags, placeholder, handleInputChange }) => {
    const inputRef = useRef(null);

    const handleInput = (event) => {
        const inputValue = event.target.value;
        // Do something with the input value
        handleInputChange(inputValue);
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-md p-2 w-full">
            <div className='flex space-x-1'>
            {selectedTags}
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="flex-grow outline-none pl-2 py-1"
                ref={inputRef}
                onChange={handleInput}
            />
        </div>
    );
};

export default Input;
