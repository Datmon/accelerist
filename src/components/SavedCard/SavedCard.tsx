import React from 'react';
import styled from 'styled-components';
import { Companies } from '../../types/interfaces';
import Button from '../Button';
import exampleAvatar from '../../assets/images/ava.png';

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
  font-size: 24px;
  font-weight: 500;
`;

const Container = styled.div`
  margin: 32px 60px 16px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 6px;
  margin-right: 24px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e8e8e8;
`;

const CardHeader = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const CardLabel = styled.div`
  font-size: 12px;
  color: #737373;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const CardCounter = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  height: 71px;
  width: 100%;
  background-color: #f9f9f9;
  margin-top: 20px;
  padding: 8px 10px;
  align-items: center;
  justify-content: space-between;
`;

const CounterLabel = styled.div`
  color: #737373;
  font-size: 12px;
`;

const CounterNumbers = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const AuthorContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Avatar = styled.div`
  border-radius: 50px;
  height: 44px;
  width: 44px;
  background-color: grey;
`;

const AuthorCredentials = styled.div`
  padding: 2px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100px;
`;

const AuthorTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const AuthorLabel = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #737373;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ImgBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: solid #f9f9f9 1px;
`;

const FavoriteHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavigatorButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
  &:active {
    opacity: 20%;
  }
`;

const SavedCard = ({
  name,
  prospectsAvailable,
  filters,
  lastAuthor,
  updatedAt,
}: any) => {
  return (
    <CardContainer>
      <CardHeader>{name || `Unknown`}</CardHeader>
      <Line style={{ marginTop: `9px`, marginBottom: `16px` }} />
      <CardLabel>Filters</CardLabel>
      <RowContainer style={{ marginTop: `10px` }}>
        <Button
          filterBut
          onClick={() => {
            ('');
          }}
          text="Gender: Both"
        />
        <Button
          filterBut
          onClick={() => {
            ('');
          }}
          text="National"
        />
      </RowContainer>
      <RowContainer>
        <CardCounter style={{ marginRight: `18px` }}>
          <CounterLabel>№ of Prospects Available</CounterLabel>
          <CounterNumbers>{prospectsAvailable}</CounterNumbers>
        </CardCounter>
        <CardCounter>
          <CounterLabel>№ of Contacts Pursued</CounterLabel>
          <CounterNumbers>{filters.length || `0`}</CounterNumbers>
        </CardCounter>
      </RowContainer>
      <RowContainer>
        <AuthorContainer>
          <RowContainer>
            <Avatar>
              <img src={exampleAvatar} alt="Avatar" width={44} />
            </Avatar>
            <AuthorCredentials>
              <AuthorTitle>
                {`${lastAuthor.firstName} ${lastAuthor.lastName}`}
              </AuthorTitle>
              <AuthorLabel>{lastAuthor.role}</AuthorLabel>
            </AuthorCredentials>
          </RowContainer>
          <AuthorCredentials>
            <AuthorLabel>Last activity</AuthorLabel>
            <AuthorTitle>{updatedAt.split(`T`)[0]}</AuthorTitle>
          </AuthorCredentials>
        </AuthorContainer>
      </RowContainer>
    </CardContainer>
  );
};

export default SavedCard;
