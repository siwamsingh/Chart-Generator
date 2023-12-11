import { useState, useEffect } from "react";

const useChart = () => {
  const [data, setData] = useState(null);

  let fetchData = (chart, bgColour, width, height, format) => {
    let str = `https://quickchart.io/chart?chart=${chart}&backgroundColor=${bgColour}&width=${width}&height=${height}&devicePixelRatio=2.0&format=${format}&version=2.9.3`;
    fetch(str)
      .then((res) => res.blob())
      .then((blob) => setData(URL.createObjectURL(blob)))
      .catch((err) => {
        console.log(err);
      });
  };
  return [data, fetchData];
};

export default useChart;
