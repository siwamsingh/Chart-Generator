import { useState, useEffect } from "react";

const useChart = (chart, bgColour, width, height, format) => {
  const [data, setData] = useState(null);
  let str = `https://quickchart.io/chart?chart=${chart}&backgroundColor=${bgColour}&width=${width}&height=${height}&devicePixelRatio=2.0&format=${format}&version=2.9.3`;

  useEffect(() => {
    fetch(str)
      .then((res) => res.blob())
      .then((blob) => setData(URL.createObjectURL(blob)))
      .catch((err) => {
        console.log(err);
      });
  }, [chart, bgColour, width, height, format]);

  return data;
};


export default useChart;