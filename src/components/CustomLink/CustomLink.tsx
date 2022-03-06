import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

type Props = { to: string; children: JSX.Element | string; props?: any };

const Line = styled.div`
  background-color: #122434;
  width: 90%;
  height: 1px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: fit-content;
`;

const Text = styled.div`
  padding: 6px;
  color: black;
  font-size: 12px;
`;

const CustomLink = ({ to, children, props }: Props) => {
  const match = useMatch(to);
  return (
    <Container>
      <Link to={to} {...props} style={{ textDecoration: `none` }}>
        <Text> {children}</Text>
      </Link>
      {match && <Line />}
    </Container>
  );
};

export default CustomLink;
