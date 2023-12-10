import React from "react";

function ChooseOptions({ options, value, onOptionChange }) {
  return (
    <>
      <select
        value={value}
        className="outline-none border bg-transparent rounded-md h-12 text-center w-full sm:-translate-y-1 md:w-36 text-2xl mt-3 md:mt-0"
        onChange={(e) => {
          onOptionChange && onOptionChange(e.target.value);
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default ChooseOptions;
