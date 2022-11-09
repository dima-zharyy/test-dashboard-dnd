import { Responsive } from "react-grid-layout";
import { Item } from "./Grid.styled";
import { getChart } from "../../helpers/getChart";

const GRID_STYLES = {
  width: "1300px",
  backgroundColor: "rgba(209, 209, 209, 0.747)",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  marginBottom: "20px",
};

const DATA_GRID = {
  w: 3,
  h: 6,
  x: 0,
  y: Infinity,
  minH: 6,
  minW: 2,
};

const BREAKPOINTS = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
const COLUMNS = { lg: 10, md: 10, sm: 6, xs: 4, xxs: 2 };

export const Grid = ({ charts }) => {
  return (
    <Responsive
      className="layout"
      breakpoints={BREAKPOINTS}
      cols={COLUMNS}
      rowHeight={20}
      width={1300}
      margin={[20, 20]}
      style={GRID_STYLES}
      isBounded={true}
    >
      {charts.map(({ id, name }) => (
        <Item key={id} data-grid={DATA_GRID}>
          {getChart(name)}
        </Item>
      ))}
    </Responsive>
  );
};
