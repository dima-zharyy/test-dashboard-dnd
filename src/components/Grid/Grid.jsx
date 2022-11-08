import { AreaChart } from "../Charts/AreaChart";
import { LineChart } from "../Charts/LineChart";
import { PieChart } from "../Charts/PieChart";

export const Grid = () => {
  return (
    <>
      <h1>Grid Layout</h1>
      <div style={{ width: "500px", height: "500px", margin: "20px 0" }}>
        <PieChart />
      </div>
      <div style={{ width: "500px", height: "500px", marginBottom: "20px" }}>
        <LineChart />
      </div>
      <div style={{ width: "500px", height: "500px", marginBottom: "20px" }}>
        <AreaChart />
      </div>
    </>
  );
};
