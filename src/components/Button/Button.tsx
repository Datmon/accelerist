import React from 'react';
import styled from 'styled-components';

interface IButton {
  main?: boolean;
  filterBut?: boolean;
}

interface Props extends IButton {
  text: string;
  onClick: () => void;
  style?: any;
}

const Container = styled.button`
  ${(props: IButton) =>
    props.main &&
    `
  height: 46px;
  width: 100%;
  border-radius: 6px;
  background: #2baee0;
  text-align: center;
  border: solid 0px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
`}

  ${(props: IButton) =>
    props.filterBut &&
    `
  height: fit-content;
  padding: 5px 8px;
  width: fit-content;
  border-radius: 6px;
  text-align: center;
  border: solid 1px #D7F4FF;
  background-color: #ffffff;
  color: #122434;
  font-weight: 400;
  font-size: 12px;
  margin-right: 6px;
`}

  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
  &:active {
    opacity: 70%;
  }
`;

const Button = ({ text, onClick, style, main, filterBut }: Props) => {
  return (
    <Container
      style={style}
      onClick={onClick}
      main={main}
      filterBut={filterBut}>
      {text}
    </Container>
  );
};

export default Button;
