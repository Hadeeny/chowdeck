"use client";
import { useQueries } from "@tanstack/react-query";

const getFirstChart = async (API_KEY) => {
  const res = await fetch("api/accesscode");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getSecondChart = async (API_KEY) => {
  const res = await fetch("api/secondchart");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getThirdChart = async (API_KEY) => {
  const res = await fetch("api/thirdchart");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const useChartQueries = () => {
  const queryResults = useQueries({
    queries: [
      {
        queryKey: ["firstChart"],
        queryFn: getFirstChart,
      },

      {
        queryKey: ["secondChart"],
        queryFn: getSecondChart,
      },
      {
        queryKey: ["thirdChart"],
        queryFn: getThirdChart,
      },
    ],
  });
  return [queryResults];
};

export default useChartQueries;
