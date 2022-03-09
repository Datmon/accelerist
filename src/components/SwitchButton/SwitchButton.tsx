import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  names: Array<string>;
  setName: (name: string) => void;
  initName: string;
}

interface IButton {
  active: boolean;
}

const Case = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f8f8f8;
  border-radius: 6px;
`;

const Button = styled.div`
  ${(props: IButton) =>
    props.active &&
    `
background-color: #CAF0FF;
`}
  height: 36px;
  padding: 9px 68px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
  &:active {
    opacity: 60%;
  }
  @media (max-width: 600px) {
    padding: 9px 36px;
  }
`;

const SwitchButton = ({ names, setName, initName }: Props) => {
  const [activeName, setActiveName] = useState(initName);
  useEffect(() => {
    setName(activeName);
  }, [activeName]);

  return (
    <Case>
      {names.map(name => (
        <Button
          active={activeName === name}
          onClick={() => setActiveName(name)}>
          {name}
        </Button>
      ))}
    </Case>
  );
};

export default SwitchButton;
