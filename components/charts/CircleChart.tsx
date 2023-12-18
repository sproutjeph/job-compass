"use client";

import { formatNumberWithCommas } from "@/lib/utils";
import React, { FC } from "react";
// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface IProps {
  series: number[];
  labels: string[];
  colors: string[];
  valueFontSize?: string;
  hollowSize?: string;
  showTotal?: boolean;
  showDataLabels?: boolean;
}

const CircleChart: FC<IProps> = ({
  series,
  labels,
  colors,
  valueFontSize = "35px",
  hollowSize = "70%",
  showTotal = true,
  showDataLabels = true,
}) => {
  const chartTheme = useChartTheme();

  const options: any = {
    theme: chartTheme,
    chart: {
      background: "inherit",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: showDataLabels,
          name: {
            fontSize: "35px",
          },
          value: {
            fontSize: valueFontSize,
          },
          total: {
            show: showTotal,
            label: "Total",
            formatter: function () {
              return formatNumberWithCommas(
                series.reduce((total, current) => total + current, 1000)
              );
            },
          },
        },
        track: {
          background: chartTheme.mode === "dark" ? "#3F3F46" : "#E4E4E7",
          strokeWidth: "100",
        },
        hollow: {
          margin: 0,
          size: hollowSize,
        },
      },
    },
    labels: labels,
    colors: colors,
  };

  return (
    <div
      id="chart"
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "480px",
        maxWidth: "480px",
      }}
    >
      <ReactApexChart options={options} series={series} type="radialBar" />
    </div>
  );
};

export default CircleChart;
