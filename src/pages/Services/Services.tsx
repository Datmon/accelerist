import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import ProfileCard from '../../components/ProfileCard';
import SavedCard from '../../components/SavedCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions, selectors } from '../../store';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Body = styled.div`
  background-color: #f9f9f9;
  flex: 1;
  width: 100%;
  min-height: calc(100vh - 80px);
`;

const Header = styled.header`
  display: flex;
  background-color: white;
  height: 96px;
  width: 100%;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  padding: 0 60px;
`;

const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Container = styled.div`
  margin: 32px 60px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RowOrList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const dataCompanies = useAppSelector(selectors.companies.selectCompanies);
  const navigate = useNavigate();

  const getSaved = async (numberPage: number) => {
    const res = await dispatch(
      actions.companies.getCompanies({ pages: numberPage, limit: 4 }),
    );
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => getSaved(1), 500);
  }, []);
  return (
    <Body>
      <Header>Favorites</Header>
      <Container>
        <CardTitle>4 companies</CardTitle>
        {isLoading ? (
          <div
            style={{
              marginTop: `100px`,
            }}>
            <ClipLoader
              color="#ffffff"
              loading={isLoading}
              css={override}
              size={150}
            />
          </div>
        ) : (
          <>
            {` `}
            <RowOrList>
              {dataCompanies.slice(0, 2).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
            <RowOrList>
              {dataCompanies.slice(2, 4).map(comp => (
                <ProfileCard {...comp} key={comp.id} onClick={navigate} />
              ))}
            </RowOrList>
          </>
        )}
      </Container>
    </Body>
  );
};

export default Services;
