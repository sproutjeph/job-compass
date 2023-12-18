"use client";

import { formatNumberWithCommas } from "@/lib/utils";
// import ReactApexChart from "react-apexcharts";
import useChartTheme from "./ChartTheme";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DonutChartProps {
  series: number[];
  labels: string[];
  donutSize?: string;
}

const DonutChart: FC<DonutChartProps> = ({
  series,
  labels,
  donutSize = "90%",
}) => {
  const chartTheme = useChartTheme();

  const [chartData, setChartData] = useState({
    series: series,
    options: {
      theme: chartTheme,
      chart: {
        type: "donut",
        width: "550px",
        height: "550px",
        background: "inherit",
      },

      colors: ["#17C964", "#F5A524", "#F31260", "#006FEE"],
      labels: labels,
      plotOptions: {
        pie: {
          donut: {
            size: donutSize,
            labels: {
              show: false,
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      legend: {
        position: "bottom",
        offsetY: 5,
        labels: {
          colors: ["inherit", "inherit", "inherit", "inherit"],
          useSeriesColors: false,
        },
      },
    } as any,
  });

  const totalValue = formatNumberWithCommas(
    chartData.series.reduce((total, current) => total + current, 1000)
  );

  return (
    <div
      id="chart"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        maxHeight: "480px",
        maxWidth: "480px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <p className="text-center text-default-500">Total</p>
        <p>{totalValue}</p>
      </div>
    </div>
  );
};

export default DonutChart;
