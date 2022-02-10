import React from "react";

const FormInput = ({ handleChange, label, ...otherInputProps }) => {
  return (
    <div className="relative cursor-pointer my-11">
      <input
        onChange={handleChange}
        {...otherInputProps}
        className="pl-1 pr-2 pt-2 pb-2 text-3xl border-black border-b-2 transition duration-200 mb-6 block w-full"
      />
      { 
        label? (<span className={`${otherInputProps.value.length ? 'shrink' : ''} text-2xl absolute left-1 px-1 top-2 transition duration-200 input-text`}>
        {label}
        </span>) : null
      }
    </div>
  );
};

export default FormInput;
