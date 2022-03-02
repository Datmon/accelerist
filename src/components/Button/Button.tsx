import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onClick: () => void;
  style: any;
}

const Container = styled.button`
  height: 46px;
  width: 100%;
  border-radius: 6px;
  background: #2baee0;
  text-align: center;
  border: solid 0px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
  &:active {
    opacity: 70%;
  }
`;

const Button = ({ text, onClick, style }: Props) => {
  return (
    <Container style={style} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;
