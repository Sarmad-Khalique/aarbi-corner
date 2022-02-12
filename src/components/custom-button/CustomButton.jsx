import React from "react";

const CustomButton = ({ children, ...otherButtonProps }) => {
  return (
    <button
      className="custom-button w-auto min-w-24 h-12 px-9 bg-black text-white text-base font-bold leading-[50px] tracking-wider hover:bg-white hover:text-black hover:border-black hover:border"
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
