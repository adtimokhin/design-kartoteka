import React from 'react';

const MainActionButton = ({ text, onClick }) => {
    return (
        <button
            className="border border-slate-600 text-slate-800 rounded-xl px-4 py-2 transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default MainActionButton;
