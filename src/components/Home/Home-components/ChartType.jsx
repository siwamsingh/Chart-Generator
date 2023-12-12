import React from "react";

function ChartType({ chartLogo, label = "bar" , onButtonClick }) {
  return (
    <>
      <div className=" justify-between w-1/3  sm:w-1/5 p-1 pb-1 sm:pb-0 sm:p-2 md:p-5 lg:p-7 rounded-xl hover:scale-110 transition duration-300 ">
        <button className="w-full  m-auto " onClick={onButtonClick}>
          <img src={chartLogo} alt="logo" className="border p-4 rounded-xl hover:shadow-gray-800 hover:shadow-2xl " />
          <label className="text-sm font-semibold sm:text-base">{label}</label>
        </button>
      </div>
    </>
  );
}

export default ChartType;
