"use client";

import React from "react";
// import ReactApexChart from "react-apexcharts";

import useChartTheme from "./ChartTheme";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const ApexBarChart = () => {
  const chartTheme = useChartTheme();
  const chartData = {
    series: [
      {
        name: "Actual",
        data: [
          {
            x: "2019",
            y: 12,
            goals: [
              {
                name: "Expected",
                value: 14,
                strokeWidth: 2,
                strokeDashArray: 2,
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2020",
            y: 44,
            goals: [
              {
                name: "Expected",
                value: 54,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2021",
            y: 54,
            goals: [
              {
                name: "Expected",
                value: 52,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2022",
            y: 66,
            goals: [
              {
                name: "Expected",
                value: 61,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2023",
            y: 81,
            goals: [
              {
                name: "Expected",
                value: 66,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2024",
            y: 67,
            goals: [
              {
                name: "Expected",
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2024",
            y: 67,
            goals: [
              {
                name: "Expected",
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2024",
            y: 67,
            goals: [
              {
                name: "Expected",
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2024",
            y: 67,
            goals: [
              {
                name: "Expected",
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#F5A524",
              },
            ],
          },
          {
            x: "2024",
            y: 67,
            goals: [
              {
                name: "Expected",
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#F5A524",
              },
            ],
          },
        ],
      },
    ],
    options: {
      theme: chartTheme,
      chart: {
        // height: "100%",
        type: "bar",
        background: "inherit",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%",
          // borderRadius: 8,
          margin: 0,
        },
      },
      colors: ["#17C964", "#F5A524"],
      dataLabels: {
        formatter: function (val: any, opt: any) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#17C964", "#F5A524"],
        },
      },

      grid: {
        show: false,
      },
    } as any,
  };

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
        height={350}
      />
    </div>
  );
};

export default ApexBarChart;
