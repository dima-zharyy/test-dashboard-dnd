export const Header = ({ addChart }) => {
  return (
    <header>
      <h1>Dashboard</h1>
      <button onClick={() => addChart()}>Add chart</button>
    </header>
  );
};
