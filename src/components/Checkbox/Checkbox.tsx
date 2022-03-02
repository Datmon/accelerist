import React from 'react';
import styled from 'styled-components';

type Props = { label: string; onClick: () => void };

const Box = styled.input`
  margin-right: 11px;
  border-radius: 3px;
  border: 1px solid #e8e8e8;
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
