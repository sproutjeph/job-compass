"use client";

import { useTheme } from "next-themes";

const useChartTheme = () => {
  const { theme } = useTheme();

  const chartTheme = {
    mode: theme === "dark" ? "dark" : "light",
  };

  return chartTheme;
};

export default useChartTheme;
