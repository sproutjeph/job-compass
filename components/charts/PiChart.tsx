"use client";

import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PiChart = () => {
  const chartTheme = useChartTheme();
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43],
    options: {
      theme: chartTheme,
      chart: {
        // width: "100%",
        type: "pie",
        background: "inherit",
      },
      labels: ["Africa", "Asia", "Europe", "America"],

      colors: ["#17C964", "#F5A524", "#7EE7FC", "#006FEE"],
      legend: {
        position: "bottom",
        offsetX: 0,
        offsetY: 2,
        labels: {
          colors: ["inherit", "inherit", "inherit"],
          useSeriesColors: false,
        },
      },
      stroke: {
        curve: "smooth",
        show: false,
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
        type="pie"
        width="100%"
      />
    </div>
  );
};

export default PiChart;
