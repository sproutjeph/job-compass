"use client";

// import Chart from "react-apexcharts";
import useChartTheme from "./ChartTheme";
import { FC } from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  colors?: string[];
  data?: number[];
}
const LineChart: FC<Props> = ({ colors, data = [10, 15, 15, 8, 10, 20] }) => {
  const chartTheme = useChartTheme();
  const options: any = {
    theme: chartTheme,
    chart: {
      background: "inherit",
      id: "basic-line",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      min: undefined,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    colors: colors,
  };
  const series = [
    {
      type: "line",
      data: data,
    },
  ];
  return (
    <div id="chart">
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default LineChart;
