import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/redux';
import { actions } from '../../store';

const LogoutButton = styled.button``;

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(actions.auth.signOut());
    navigate(`/login`);
  };
  return (
    <>
      <div>Profile</div>
      <LogoutButton onClick={logOut}>logout</LogoutButton>
    </>
  );
};

export default Profile;
