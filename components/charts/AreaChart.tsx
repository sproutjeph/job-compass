"use client";

import React, { FC } from "react";
// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface AreaChartProps {
  seriesData: { name: string; data: number[] }[];
}

const AreaChart: FC<AreaChartProps> = ({ seriesData }) => {
  const chartTheme = useChartTheme();
  const options: any = {
    chart: {
      type: "area",
      background: "inherit",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    colors: ["#17C964", "#F5A524"],
    legend: {
      position: "top",
      offsetX: 100,
      labels: {
        colors: ["inherit", "inherit"],
        useSeriesColors: false,
      },
    },
    theme: chartTheme,
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={seriesData}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
