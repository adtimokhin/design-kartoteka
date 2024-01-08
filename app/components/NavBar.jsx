import React from 'react';

const NavBar = ({addTagDile}) => {
    return (
        <nav className="flex p-4 justify-end fixed top-0 w-full">
            <div className="space-x-4 flex">
                <p href="#" className="text-slate-800 hover:text-slate-300 cursor-pointer" onClick={addTagDile}>Add Tag</p>
                <p href="#" className="text-slate-800 hover:text-slate-300 cursor-pointer">Add Element</p>
            </div>
        </nav>
    );
};

export default NavBar;
