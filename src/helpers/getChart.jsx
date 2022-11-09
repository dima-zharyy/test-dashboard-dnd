import { PieChart, LineChart, AreaChart } from "../components";

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
