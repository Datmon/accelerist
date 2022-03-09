import React from 'react';
import styled from 'styled-components';
import Heart from '../../assets/svg/heart.svg';
import { Companies } from '../../types/interfaces';
import Corp from '../../assets/svg/corp.svg';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 10px;
`;

const Body = styled.div`
  background-color: #f9f9f9;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  margin: 16px 8px;
  padding: 32px 26px;
  width: 100%;
  height: 268px;
  border-radius: 6px;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  margin: 20px auto;
`;

const ButtonsPanel = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e8e8e8;
`;

const CardContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CardLabel = styled.div`
  color: #737373;
  font-size: 12px;
`;

const CardTitle = styled.div`
  font-size: 16px;
`;

const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  width: 100%;
  max-width: 40%;
  min-width: 150px;
  height: 216px;
`;

const CardTags = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Point = styled.div`
  height: 4px;
  width: 4px;
  background-color: #c4c4c4;
  border-radius: 50%;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

interface Props extends Companies {
  onClick: (id: string) => void;
}

const ProfileCard = ({
  name,
  street,
  phone,
  state,
  zipCode,
  revenue,
  score,
  id,
  onClick,
}: Props) => {
  return (
    <Content>
      <CardImage>
        <Image>
          <img src={Corp} alt="corp" />
        </Image>
        <Line style={{ marginBottom: `12px` }} />
        <CardLabel style={{ marginBottom: `8px` }}>Priority Ranking</CardLabel>
        <CardTitle>{score}</CardTitle>
      </CardImage>
      <CardContent style={{ margin: `0 16px` }}>
        <CardTitle style={{ marginBottom: `12px` }}>{name}</CardTitle>
        <CardLabel>
          {street} {state} {zipCode}
        </CardLabel>
        <CardLabel style={{ marginBottom: `18px` }}>{phone}</CardLabel>
        <RowContainer>
          <CardContent
            style={{
              border: `1px solid #E8E8E8`,
              borderTopWidth: `0px`,
              borderLeftWidth: `0px`,
            }}>
            <CardLabel>CSR Focus</CardLabel>
            <RowContainer
              style={{
                padding: `10px`,
                paddingRight: `30px`,
              }}>
              <CardTags>Health</CardTags>
              <Point />
              <CardTags>Animals</CardTags>
              <Point />
              <CardTags>Education</CardTags>
            </RowContainer>
          </CardContent>
          <CardContent
            style={{
              borderBottom: `1px solid #E8E8E8`,
              width: `40%`,
              alignItems: `flex-end`,
              padding: `10px`,
            }}>
            <CardLabel>Revenue</CardLabel>
            <CardTags>$ {revenue}</CardTags>
          </CardContent>
        </RowContainer>
        <RowContainer style={{ marginTop: `auto` }}>
          <Button>
            <ButtonContainer>
              <img src={Heart} alt="Heart" />
            </ButtonContainer>
          </Button>
          <Button style={{ width: `100%`, marginLeft: `8px` }}>
            <ButtonContainer onClick={() => onClick(`/profile/${id}`)}>
              Profile
            </ButtonContainer>
          </Button>
        </RowContainer>
      </CardContent>
    </Content>
  );
};

export default ProfileCard;
