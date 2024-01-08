import React from 'react';

const Tag = ({ text }) => {
    return (
        <div className="bg-slate-800 text-white px-2 py-1 rounded-md">
            {text}
        </div>
    );
};

export default Tag;
