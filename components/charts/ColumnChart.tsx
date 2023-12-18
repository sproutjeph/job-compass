"use client";

// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";
import React from "react";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart = () => {
  const chartTheme = useChartTheme();

  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: "Income",
        data: [94, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Expenses",
        data: [76, 85, 47, 30, 57, 45, 56, 30, 44],
      },
    ],
    options: {
      theme: chartTheme,
      chart: {
        type: "bar",
        background: "inherit",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          endingShape: "rounded",
        },
      },
      legend: {
        position: "top",
        offsetX: 0,
      },
      colors: ["#17C964", "#F5A524"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return `$ ${val} thousands`;
          },
        },
      },

      grid: {
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
        maxWidth: 880,
        maxHeight: 880,
      }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
      />
    </div>
  );
};

export default ColumnChart;
