/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';
import Sliders from '../../assets/svg/sliders.svg';
import SearchLogo from '../../assets/svg/search.svg';
import FolderPlus from '../../assets/svg/folder-plus.svg';
import Upload from '../../assets/svg/upload.svg';
import Mail from '../../assets/svg/mail.svg';
import Left from '../../assets/svg/left.svg';
import Right from '../../assets/svg/rigth.svg';
import ProfileCard from '../../components/ProfileCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions, selectors } from '../../store';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 60px;
`;

const SearchPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 24px 0;
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

const H2 = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const SearchBar = styled.div`
  display: flex;
  background-color: #f1f4f5;
  height: 36px;
  width: 100%;
  margin: 0 82px;
  margin-right: 15%;
  border-radius: 6px;
  align-items: center;
  padding: 9px 24px;
`;

const Input = styled.input`
  width: 100%;
  border: 0px;
  background-color: inherit;
  &:focus {
    outline-width: 0;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
  &:active {
    opacity: 50%;
  }
`;

const Body = styled.div`
  background-color: #f9f9f9;
`;

const ButtonsPanel = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowOrList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Search = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <SearchPanel>
          <H1>Search</H1>
          <SearchBar>
            <Input placeholder="Search" />
            <Button
              style={{ marginRight: `12px` }}
              onClick={() => navigate(`/search/advanced`)}>
              <img src={Sliders} alt="sliders" />
            </Button>
            <Button>
              <img src={SearchLogo} alt="SearchLogo" />
            </Button>
          </SearchBar>
        </SearchPanel>
      </Container>
      <Outlet />
    </>
  );
};

export default Search;
