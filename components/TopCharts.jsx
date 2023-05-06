import Charts from "./Charts";
const TopCharts = () => {
  return (
    <>
      <div className="hidden md:flex gap-y-4 flex-col">
        <h3 className="text-[24px]">Top Charts</h3>
        <div className="flex flex-col gap-y-3">
          <Charts />
        </div>
      </div>
    </>
  );
};

export default TopCharts;
