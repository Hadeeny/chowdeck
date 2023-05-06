import FirstChart from "./FirstChart";
import SecondChart from "./SecondChart";
import ThirdChart from "./ThirdChart";
const TopCharts = () => {
  const key = process.env.RAPID_API_KEY;
  return (
    <>
      <div className="hidden md:flex gap-y-4 flex-col">
        <h3 className="text-[24px]">Top Charts</h3>
        <div className="flex flex-col gap-y-3">
          {/* first chart */}
          {/* {topCharts.map((chart, i) => ( */}
          <FirstChart API_KEY={key} />
          <SecondChart />
          <ThirdChart />
          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default TopCharts;
