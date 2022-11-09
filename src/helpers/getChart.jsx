import { PieChart } from "../components/Charts/PieChart";
import { LineChart } from "../components/Charts/LineChart";
import { AreaChart } from "../components/Charts/AreaChart";

export const getChart = (chart) => {
  switch (chart) {
    case "PieChart":
      return <PieChart />;

    case "LineChart":
      return <LineChart />;

    case "AreaChart":
      return <AreaChart />;

    default:
      break;
  }
};
