import { Header, Grid } from "../../components";
import { useState } from "react";
import { getRandomChartName } from "../../helpers/getRandomChartName";
import { Main } from "./App.styled";

const INITIAL_CHARTS = [
  { id: 1, name: "PieChart" },
  { id: 2, name: "LineChart" },
  { id: 3, name: "AreaChart" },
];

export const App = () => {
  const [charts, setCharts] = useState(INITIAL_CHARTS);

  const handleAddChart = () => {
    const name = getRandomChartName();
    const id = charts[charts.length - 1].id + 1;
    setCharts((state) => [...state, { id, name }]);
  };

  return (
    <>
      <Header addChart={handleAddChart} />
      <Main>
        <Grid charts={charts} />
      </Main>
    </>
  );
};
