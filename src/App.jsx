import { Header } from "./components/Header/Header";
import { Grid } from "./components/Grid/Grid";
import "react-grid-layout/css/styles.css";
import { useState } from "react";
import { getRandomChartName } from "./helpers/getRandomChartName";

const INITIAL_CHARTS = [
  { id: 1, name: "PieChart" },
  { id: 2, name: "LineChart" },
  { id: 3, name: "AreaChart" },
];

export default function App() {
  const [charts, setCharts] = useState(INITIAL_CHARTS);

  const handleAddChart = () => {
    const name = getRandomChartName();
    const id = charts[charts.length - 1].id + 1;
    setCharts((state) => [...state, { id, name }]);
  };

  return (
    <>
      <Header addChart={handleAddChart} />
      <main style={{ padding: "0 20px" }}>
        <Grid charts={charts} />
      </main>
    </>
  );
}
