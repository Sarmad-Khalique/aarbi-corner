import React from 'react';

const MenuItem = ({ title, imageURL, size }) => {
    return (
        <div style={{
            backgroundImage: `url(${imageURL})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}
            className={`menu-item min-w-30 ${size?size:"h-64"} flex-auto flex items-center justify-center border border-black my-2 mx-2`}>
            <div className="content h-20 p-6 flex flex-col items-center justify-center border border-black m-5 cursor-pointer bg-stone-200 opacity-60 hover:opacity-90">
                <h1 className="title text-xl font-bold mb-1">{title.toUpperCase()}</h1>
                <p className="subtitle font-light hover:underline text-lg">SHOP NOW</p>
            </div>
        </div>
    );
};

export default MenuItem;
