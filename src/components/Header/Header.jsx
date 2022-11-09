import { Button, StyledHeader, Title } from "./Header.styled";

export const Header = ({ addChart }) => {
  return (
    <StyledHeader>
      <Title>Dashboard</Title>
      <Button onClick={() => addChart()}>Add chart</Button>
    </StyledHeader>
  );
};
