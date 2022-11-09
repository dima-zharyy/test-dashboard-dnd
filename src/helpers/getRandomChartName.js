export const getRandomChartName = () => {
  const randomKey = Math.round(Math.random() * (3 - 1) + 1);
  console.log(randomKey);

  switch (randomKey) {
    case 1:
      return "PieChart";
    case 2:
      return "LineChart";
    case 3:
      return "AreaChart";

    default:
      break;
  }
};
