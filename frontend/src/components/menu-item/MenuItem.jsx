import React from "react";

const MenuItem = ({ title, imageURL, size }) => {
  return (
    <div
      className={`menu-item overflow-hidden md:min-w-30 min-w-full ${
        size ? size : "h-64"
      } flex-auto flex items-center justify-center border border-black my-2 mx-2 hover:cursor-pointer`}
    >
        <div className="background-image w-full h-full" style={{
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }} />
      <div className="content absolute h-20 p-6 flex flex-col items-center justify-center border border-black cursor-pointer bg-white opacity-70 hover:opacity-90">
        <h1 className="title text-3xl font-semibold mb-1">{title.toUpperCase()}</h1>
        <p className="subtitle font-light text-lg">SHOP NOW</p>
      </div>
    </div>
  );
};

export default MenuItem;
