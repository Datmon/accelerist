import React from 'react';
import styled from 'styled-components';

type Props = { label: string; onClick: () => void };

const Box = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 11px;
  border-radius: 3px;
  border-color: #e8e8e8;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = ({ label, onClick }: Props) => {
  return (
    <Label onClick={onClick}>
      <Box type="checkbox" />
      {label}
    </Label>
  );
};

export default Checkbox;
