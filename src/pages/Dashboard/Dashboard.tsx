import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Header = styled.header`
  display: flex;
  height: 96px;
  width: 100%;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  padding: 0 60px;
`;

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header>Dashboard</Header>
      {isLoading ? (
        <ClipLoader
          color="#ffffff"
          loading={isLoading}
          css={override}
          size={150}
        />
      ) : (
        <div>Done</div>
      )}
    </>
  );
};

export default Dashboard;
