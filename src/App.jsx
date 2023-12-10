import React, { useState,useEffect } from "react";
import ChartType from "./components/ChartType";
import useChart from "./hooks/useChart.js"

import bar from "./images/bar.png";
import bubble from "./images/bubble.png";
import doughnut from "./images/doughnut.png";
import horizontalBar from "./images/horizontalBar.png";
import line from "./images/line.png";
import pie from "./images/pie.png";
import polarArea from "./images/polarArea.png";
import radar from "./images/radar.png";
import scatter from "./images/scatter.png";

import ChooseOptions from "./components/ChooseOptions";
import InputData from "./components/InputData";
import InputCoords from "./components/InputCoords.jsx";

export default function App() {
  const [type, setType] = useState("bar");
  const [color, setColor] = useState("white");
  const [format, setFormat] = useState("jpg");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);

  const [xcoords,setXcoords] = useState("");
  const [ycoords,setYcoords] = useState("");

  let xstr = "";
  let ystr = "";
  
  return (
    <>
      <div className=" bg-black text-white">
        <h1 className=" text-white text-5xl text-center font-mono p-3 pb-6">
          Chart Generator
        </h1>

        <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
          Choose the Chart you want : {type.toLocaleUpperCase()}
        </h2>
        <div className="flex flex-wrap justify-evenly">
          <ChartType
            chartLogo={bar}
            label="Bar Chart"
            onButtonClick={() => {
              setType("bar");
            }}
          />
          <ChartType
            chartLogo={horizontalBar}
            label="Horizontal Bar Chart"
            onButtonClick={() => {
              setType("horizontalBar");
            }}
          />
          <ChartType
            chartLogo={line}
            label="Line Graph"
            onButtonClick={() => {
              setType("line");
            }}
          />
          <ChartType
            chartLogo={radar}
            label="Radar Chart"
            onButtonClick={() => {
              setType("radar");
            }}
          />
          <ChartType
            chartLogo={pie}
            label="Pie Chart"
            onButtonClick={() => {
              setType("pie");
            }}
          />
          <ChartType
            chartLogo={doughnut}
            label="Doughnut Chart"
            onButtonClick={() => {
              setType("doughnut");
            }}
          />
          <ChartType
            chartLogo={polarArea}
            label="Polar Chart"
            onButtonClick={() => {
              setType("polarArea");
            }}
          />
          <ChartType
            chartLogo={scatter}
            label="Scatter Plot"
            onButtonClick={() => {
              setType("scatter");
            }}
          />
          <ChartType
            chartLogo={bubble}
            label="Bubble Chart"
            onButtonClick={() => {
              setType("bubble");
            }}
          />
        </div>

        <div className="flex flex-wrap my-10">
          <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Choose the Color you want : {color.toLocaleUpperCase()}
          </h2>
          <ChooseOptions
            options={[
              "red",
              "blue",
              "green",
              "yellow",
              "orange",
              "purple",
              "pink",
              "brown",
              "cyan",
              "magenta",
              "olive",
              "lime",
              "teal",
              "navy",
              "maroon",
              "gray",
              "black",
              "white",
              "silver",
              "gold",
            ]}
            value={color}
            onOptionChange={(val) => {
              setColor(val);
            }}
          />
        </div>

        <div className="flex flex-wrap my-10">
          <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Choose the File you want : {format.toLocaleUpperCase()}
          </h2>
          <ChooseOptions
            options={["png", "webp", "jpg", "svg", "pdf", "base64"]}
            value={format}
            onOptionChange={(val) => {
              setFormat(val);
            }}
          />
        </div>
        
        <h1 className="text-center text-lg font-serif pb-2">*Note Height and Width are in pixels</h1>
        <div className="flex flex-wrap my-10">
          <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Enter the Height you want : {height}
          </h2>
          <InputData
            value={height}
            label={"height"}
            onValueChange={(val) => {
              setHeight(val);
            }}
          />
        </div>
        <div className="flex flex-wrap my-10">
          <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Enter the Width you want : {width}
          </h2>
          <InputData
            value={width}
            label={"width"}
            onValueChange={(val) => {
              setWidth(val);
            }}
          />
        </div>
        <h1 className="text-center text-lg font-serif pb-2">*Note Enter Coords seperatede by "," . Example - "1,2,3" </h1>
        <div className="my-5">
        <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Enter the values of x-axis: 
          </h2>
          <InputCoords label={"Enter x-axis coordinates"} coords={xcoords} onCoordChange={(val)=>{setXcoords(val)}}/>
        </div>
        <div className="my-5">
        <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Enter the values of y-axis: 
          </h2>
          <InputCoords label={"Enter y-axis coordinates"} coords={ycoords} onCoordChange={(val)=>{setYcoords(val)}}/>
        </div>
      </div>
    </>
  );
}
