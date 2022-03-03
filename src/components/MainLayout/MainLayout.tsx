import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';

const Header = styled.header`
  padding: 0 60px;
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #d5f3ff;
  align-items: center;
`;

const MainLayout = () => {
  return (
    <>
      <Header>
        <Link to="/dashboard">
          <img src={Logo} alt="Logo" />
        </Link>
      </Header>
      <div className="body">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
