import React, { useState } from 'react';
import Input from './Input';
import MainActionButton from './MainActionButton';

const AddTagWindow = ({ closeWindow, createTag }) => {
    const [selectedTag, setSelectedTag] = useState('');
    const [tagText, setTagText] = useState('');

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 w-full h-full">
            <div className="flex flex-col items-center justify-center bg-white border border-black rounded-md p-4 w-[60%] relative">
                {/* Your content goes here */}
                <h3 className="text-black font-bold text-[40px]">ADD TAG</h3>
                <div className="w-2/3">
                    <Input placeholder={"Enter Name"} handleInputChange={(text) => {setTagText(text)}} />
                </div>
                <div className="mt-3">
                    <h4 className="text-black font-regular text-[30px]">Select tag type</h4>
                    <div className="space-y-2 ">
                        <div
                            className={`bg-slate-800 text-white px-2 py-1 rounded-md cursor-pointer ${
                                selectedTag === 'effect category' ? 'bg-lime-300 text-black' : 'hover:bg-slate-300 hover:text-black'
                            } transition-colors duration-150 ease-linear`}
                            onClick={() => handleTagClick('effect category')}
                        >
                            effect category
                        </div>

                        <div
                            className={`bg-slate-800 text-white px-2 py-1 rounded-md cursor-pointer ${
                                selectedTag === 'emotion' ? 'bg-lime-300 text-black' : 'hover:bg-slate-300 hover:text-black'
                            } transition-colors duration-150 ease-linear`}
                            onClick={() => handleTagClick('emotion')}
                        >
                            emotion
                        </div>

                        <div
                            className={`bg-slate-800 text-white px-2 py-1 rounded-md cursor-pointer ${
                                selectedTag === 'site type' ? 'bg-lime-300 text-black' : 'hover:bg-slate-300 hover:text-black'
                            } transition-colors duration-150 ease-linear`}
                            onClick={() => handleTagClick('site type')}
                        >
                            site type
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <MainActionButton
                        text={"Add Tag"}
                        onClick={() => {
                            console.log(tagText, selectedTag);
                            createTag();
                            closeWindow();
                        }}
                    />
                </div>

                <div className="absolute top-0 right-0 m-2" onClick={closeWindow}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default AddTagWindow;
