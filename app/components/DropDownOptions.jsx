import React, { useEffect } from 'react';

const DropDownOptions = ({ items, onItemPress }) => {
  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="absolute bg-white border border-gray-300 -translate-y-2 translate-x-3 min-w-[40vw]">
      {Array.isArray(items) &&
        items.map((item) => (
          <div key={item} className="hover:bg-slate-500 cursor-pointer p-2" onClick={()=>{
            onItemPress(item);
          }}>
            {item}
          </div>
        ))}
    </div>
  );
};

export default DropDownOptions;
