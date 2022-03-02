import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../../assets/svg/headerLogo.svg';
import img from '../../assets/images/background.png';

const Header = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #122434;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2em;
  margin-left: 16px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px);
  width: 100%;
  background-image: url(${img});
  justify-content: center;
  padding: 16px;
`;

const AuthLayout = () => {
  return (
    <>
      <Header>
        <img src={HeaderLogo} alt="HeaderLogo" />
        <Title>ACCELERIST</Title>
      </Header>
      <Body>
        <Outlet />
      </Body>
    </>
  );
};

export default AuthLayout;
