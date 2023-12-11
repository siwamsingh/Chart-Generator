import React, { useState, useEffect, useCallback } from "react";
import ChartType from "./components/ChartType";
import useChart from "./hooks/useChart.js";

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
  const [color, setColor] = useState("transparent");
  const [format, setFormat] = useState("jpg");
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);
  const [xcoords, setXcoords] = useState("");
  const [ycoords, setYcoords] = useState("");
  const [name, setName] = useState("");
  const [chart, setChart] = useState(
    JSON.stringify({
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Example",
            data: ["", "", ""],
          },
        ],
      },
    })
  );

  let [data, fetchData] = useChart();

  let updateVariables = () => {
    fetchData(chart, color, width, height, format);
    alert("File Generated");
  };

  const convertChart = useCallback(() => {
    let x = xcoords.split(",");
    let y = ycoords.split(",");

    let tempChart = {
      type: type, // Show a bar chart
      data: {
        labels: x, // Set X-axis labels
        datasets: [
          {
            label: name, // Create the 'Users' dataset
            data: y, // Add data to the chart
          },
        ],
      },
    };

    let jsonChart = JSON.stringify(tempChart);
    setChart(jsonChart);
  }, [type, name, xcoords, ycoords, setChart]);

  useEffect(convertChart, [xcoords, ycoords, name, type]);

  const handleDownload = () => {
    if (data) {
      const link = document.createElement("a");
      link.href = data;
      link.download = name; // You can customize the file name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div className=" bg-black text-white">
        <h1 className=" text-white text-5xl text-center font-mono p-3 pb-6 border-b">
          Chart Generator
        </h1>

        <h2 className=" text-white text-xl sm:text-2xl font-mono px-4 mt-4">
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
              "transparent",
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

        <h1 className="text-center text-lg font-serif pb-2">
          *Note Height and Width are in pixels
        </h1>
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
        <h1 className="text-center text-lg font-serif pb-2">
          *Note Enter Coords seperatede by "," . Example - "1,2,3"{" "}
        </h1>
        <div className="my-5">
          <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Enter the values of x-axis:
          </h2>
          <InputCoords
            label={"Enter x-axis coordinates"}
            coords={xcoords}
            onCoordChange={(val) => {
              setXcoords(val);
            }}
          />
        </div>
        <div className="my-5">
          <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Enter the values of y-axis:
          </h2>
          <InputCoords
            label={"Enter y-axis coordinates"}
            coords={ycoords}
            onCoordChange={(val) => {
              setYcoords(val);
            }}
          />
        </div>
        <div className="my-5">
          <h2 className=" text-white text-xl sm:text-2xl font-mono px-4">
            Enter the name of file:
          </h2>
          <InputCoords
            label={"Enter the label of file"}
            coords={name}
            onCoordChange={(val) => {
              setName(val);
            }}
          />
        </div>
        <div className="md:h-1/2 md:w-1/2 md:mx-auto p-5 ">
          <h1 className="text-center text-lg font-serif ">
            *Note For pdf and base64 directly click download no preview
            available.
          </h1>
          <h1 className="text-center text-lg font-serif pb-10 underline underline-offset-4">
             Scatter and Bubble will be provided in next update
          </h1>
          <div className="min-h-fit min-w-fit border">
            <img src={data} alt="no data entered" />
          </div>
          <div className="relative w-fit group m-auto">
            <div className="absolute transitiona-all duration-1000 opacity-20 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              className="relative inline-flex items-center justify-center px-8 py-1 mx-auto my-4 text-lg font-bold text-white transition-all duration-200 bg-purple-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
              onClick={updateVariables}
            >
              Generate
            </a>
          </div>
          <div className="relative w-fit group m-auto">
            <div className="absolute transitiona-all duration-1000 opacity-20 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              className="relative inline-flex items-center justify-center px-8 py-1 mx-auto my-4 text-lg font-bold text-white transition-all duration-200 bg-purple-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
              onClick={handleDownload}
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={radar}
                className="h-10"
                alt="ChartGen"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ChartGen
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a  className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a  className="hover:underline">
              ChartGen™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
