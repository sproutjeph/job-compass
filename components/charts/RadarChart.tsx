"use client";

import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RadarChart = () => {
  const chartTheme = useChartTheme();
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "TEAM A",
        data: [23, 11, 22, 27, 13, 22, 37],
      },
      {
        name: "TEAM B",
        data: [44, 55, 41, 67, 22, 43, 21],
      },
      {
        name: "TEAM C",
        data: [30, 25, 36, 30, 45, 35, 64],
      },
    ],
    options: {
      theme: chartTheme,
      chart: {
        type: "radar",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
        background: "inherit",
      },
      grid: {
        show: false,
      },
      colors: ["#17C964", "#F5A524", "#7EE7FC"],
      legend: {
        position: "bottom",
        offsetX: 0,
        labels: {
          colors: ["inherit", "inherit", "inherit"],
          useSeriesColors: false,
        },
      },

      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },

      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
      },
    } as any,
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        height={350}
        type="radar"
      />
    </div>
  );
};

export default RadarChart;
