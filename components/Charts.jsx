"use client";
import useChartQueries from "@/hooks/useChartQueries";
import Chart from "./Chart";

const Charts = ({ API_KEY }) => {
  const [queryResults] = useChartQueries();
  return (
    <>
      {queryResults.map((res, i) => (
        <>
          {res.isLoading ? (
            <p>loading data</p>
          ) : res.error ? (
            <p>an error occured</p>
          ) : (
            <Chart key={i} album={res.data.data.data.album} />
          )}
        </>
      ))}
    </>
  );
};

export default Charts;
