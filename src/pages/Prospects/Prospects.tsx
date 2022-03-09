import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
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

const Prospects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const savedComp = useAppSelector(selectors.saved.selectSavedComp);
  const navigate = useNavigate();

  const getSaved = async () => {
    const res = await dispatch(actions.saved.getSaved({ pages: 1, limit: 4 }));
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => getSaved());
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
              {savedComp.slice(0, 2).map(comp => (
                <SavedCard {...comp} />
              ))}
            </RowOrList>
            <RowOrList>
              {savedComp.slice(2, 4).map(comp => (
                <SavedCard {...comp} />
              ))}
            </RowOrList>
          </>
        )}
      </Container>
    </Body>
  );
};

export default Prospects;
