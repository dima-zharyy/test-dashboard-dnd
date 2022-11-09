import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
  min-height: 40px;
  margin-bottom: 20px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background-color: #546bee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: background-color 200ms linear;
  &:hover,
  &:focus {
    background-color: #546bee4b;
  }
`;
