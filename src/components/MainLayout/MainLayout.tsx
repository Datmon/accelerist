import React from 'react';
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import { useAppDispatch } from '../../hooks/redux';
import { actions } from '../../store';
import Button from '../Button';
import CustomLink from '../CustomLink';

const Header = styled.header`
  padding: 0 60px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  background-color: #d5f3ff;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(actions.auth.signOut());
    navigate(`/login`);
  };
  return (
    <>
      <Header>
        <Link to="/dashboard">
          <img src={Logo} alt="Logo" width={180} />
        </Link>
        <Links>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          <CustomLink to="/search">Search</CustomLink>
          <CustomLink to="/favorites">Favorites</CustomLink>
          <CustomLink to="/prospects">Prospects</CustomLink>
          <CustomLink to="/services">Services</CustomLink>
        </Links>
        <Button text="Logout" onClick={logOut} filterBut />
      </Header>
      <div className="body">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
