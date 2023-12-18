"use client";

import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PolarAreaChart = () => {
  const chartTheme = useChartTheme();
  const [chartData, setChartData] = useState({
    series: [14, 23, 21, 17, 15, 10],
    options: {
      theme: chartTheme,
      chart: {
        type: "polarArea",
        background: "inherit",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 0,
      },

      fill: {
        opacity: 0.8,
      },

      grid: {
        show: false,
      },
      colors: [
        "#17C964",
        "#F5A524",
        "#006FEE",
        "#7828C8",
        "#7EE7FC",
        "#F31260",
        "#FF4ECD",
        ,
      ],
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 1,
            strokeColor: "#27272A",
          },
          spokes: {
            strokeWidth: 1,
            connectorColors: "#27272A",
          },
        },
      },
    } as any,
  });

  return (
    <div
      id="chart"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        height: "100%",
        maxWidth: 480,
        maxHeight: 480,
      }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="polarArea"
      />
    </div>
  );
};

export default PolarAreaChart;
