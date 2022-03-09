import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import exampleAvatar from '../../assets/images/ava.png';
import { auth, companies, saved, team, user } from '../../api';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions, selectors } from '../../store';
import Corp from '../../assets/svg/corp.svg';

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

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const savedComp = useAppSelector(selectors.saved.selectSavedComp);
  const favoritesComp = useAppSelector(selectors.companies.selectFavorites);
  const teams = useAppSelector(selectors.team.selectTeams);
  const [isLoading, setIsLoading] = useState(true);

  const getSaved = async () => {
    const res = await dispatch(actions.saved.getSaved({ pages: 1, limit: 2 }));
  };

  const getFavorites = async () => {
    const res = await dispatch(
      actions.companies.getFavorites({ pages: 1, limit: 4 }),
    );
    console.log(`res`, res);
  };

  const getTeams = async () => {
    const res = await dispatch(actions.team.getTeam());
    console.log(`team`, res);
  };

  const goToPage = async () => {
    navigate(`/prospects`);
  };

  const getData = async () => {
    getSaved();
    getFavorites();
    getTeams();
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => getData(), 500);
  }, []);

  return (
    <Body>
      <Header>Dashboard</Header>

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
          <Container>
            <CardTitle>Prospecting Sessions</CardTitle>
            <div>see more</div>
          </Container>
          <Container>
            <CardsContainer style={{ marginRight: `24px` }}>
              <CardContainer>
                <CardHeader>{savedComp[0].name}</CardHeader>
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
                    <CounterNumbers>
                      {savedComp[0].prospectsAvailable}
                    </CounterNumbers>
                  </CardCounter>
                  <CardCounter>
                    <CounterLabel>№ of Contacts Pursued</CounterLabel>
                    <CounterNumbers>
                      {savedComp[0].filters.length || `0`}
                    </CounterNumbers>
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
                          {`${savedComp[0].lastAuthor.firstName} ${savedComp[0].lastAuthor.lastName}`}
                        </AuthorTitle>
                        <AuthorLabel>
                          {savedComp[0].lastAuthor.role}
                        </AuthorLabel>
                      </AuthorCredentials>
                    </RowContainer>
                    <AuthorCredentials>
                      <AuthorLabel>Last activity</AuthorLabel>
                      <AuthorTitle>
                        {savedComp[0].updatedAt.split(`T`)[0]}
                      </AuthorTitle>
                    </AuthorCredentials>
                  </AuthorContainer>
                </RowContainer>
              </CardContainer>
              <TitleContainer>
                <CardTitle style={{ margin: `30px 0` }}>Favorites</CardTitle>
                <div>see more</div>
              </TitleContainer>
              <RowContainer style={{ marginBottom: `20px` }}>
                <CardContainer style={{ marginRight: `24px` }}>
                  <FavoriteHeader>
                    <ImgBorder>
                      <img src={Corp} alt="Avatar" width={24} />
                    </ImgBorder>
                    <AuthorCredentials>
                      <AuthorTitle>{favoritesComp[0].name}</AuthorTitle>
                      <AuthorLabel>
                        Priority ranking {favoritesComp[0].score}
                      </AuthorLabel>
                    </AuthorCredentials>
                  </FavoriteHeader>
                  <AuthorCredentials style={{ marginTop: `10px` }}>
                    <AuthorLabel>{favoritesComp[0].street}</AuthorLabel>
                    <AuthorTitle>{favoritesComp[0].revenueRange}</AuthorTitle>
                  </AuthorCredentials>
                </CardContainer>
                <CardContainer>
                  <FavoriteHeader>
                    <ImgBorder>
                      <img src={Corp} alt="Avatar" width={24} />
                    </ImgBorder>
                    <AuthorCredentials>
                      <AuthorTitle>{favoritesComp[1].name}</AuthorTitle>
                      <AuthorLabel>
                        Priority ranking {favoritesComp[1].score}
                      </AuthorLabel>
                    </AuthorCredentials>
                  </FavoriteHeader>
                  <AuthorCredentials style={{ marginTop: `10px` }}>
                    <AuthorLabel>{favoritesComp[1].street}</AuthorLabel>
                    <AuthorTitle>{favoritesComp[1].revenueRange}</AuthorTitle>
                  </AuthorCredentials>
                </CardContainer>
              </RowContainer>
              <RowContainer style={{ marginBottom: `20px` }}>
                <CardContainer style={{ marginRight: `24px` }}>
                  <FavoriteHeader>
                    <ImgBorder>
                      <img src={Corp} alt="Avatar" width={24} />
                    </ImgBorder>
                    <AuthorCredentials>
                      <AuthorTitle>{favoritesComp[2].name}</AuthorTitle>
                      <AuthorLabel>
                        Priority ranking {favoritesComp[2].score}
                      </AuthorLabel>
                    </AuthorCredentials>
                  </FavoriteHeader>
                  <AuthorCredentials style={{ marginTop: `10px` }}>
                    <AuthorLabel>{favoritesComp[2].street}</AuthorLabel>
                    <AuthorTitle>{favoritesComp[2].revenueRange}</AuthorTitle>
                  </AuthorCredentials>
                </CardContainer>
                <CardContainer>
                  <FavoriteHeader>
                    <ImgBorder>
                      <img src={Corp} alt="Avatar" width={24} />
                    </ImgBorder>
                    <AuthorCredentials>
                      <AuthorTitle>{favoritesComp[3].name}</AuthorTitle>
                      <AuthorLabel>
                        Priority ranking {favoritesComp[3].score}
                      </AuthorLabel>
                    </AuthorCredentials>
                  </FavoriteHeader>
                  <AuthorCredentials style={{ marginTop: `10px` }}>
                    <AuthorLabel>{favoritesComp[3].street}</AuthorLabel>
                    <AuthorTitle>{favoritesComp[3].revenueRange}</AuthorTitle>
                  </AuthorCredentials>
                </CardContainer>
              </RowContainer>
            </CardsContainer>
            <CardsContainer>
              <CardContainer>
                <CardHeader>{savedComp[1].name}</CardHeader>
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
                    text="Travel industry"
                  />
                </RowContainer>
                <RowContainer>
                  <CardCounter style={{ marginRight: `18px` }}>
                    <CounterLabel>№ of Prospects Available</CounterLabel>
                    <CounterNumbers>
                      {savedComp[1].prospectsAvailable}
                    </CounterNumbers>
                  </CardCounter>
                  <CardCounter>
                    <CounterLabel>№ of Contacts Pursued</CounterLabel>
                    <CounterNumbers>
                      {savedComp[1].filters.length || `0`}
                    </CounterNumbers>
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
                          {`${savedComp[1].lastAuthor.firstName} ${savedComp[1].lastAuthor.lastName}`}
                        </AuthorTitle>
                        <AuthorLabel>
                          {savedComp[1].lastAuthor.role}
                        </AuthorLabel>
                      </AuthorCredentials>
                    </RowContainer>
                    <AuthorCredentials>
                      <AuthorLabel>Last activity</AuthorLabel>
                      <AuthorTitle>
                        {savedComp[1].updatedAt.split(`T`)[0]}
                      </AuthorTitle>
                    </AuthorCredentials>
                  </AuthorContainer>
                </RowContainer>
              </CardContainer>
              <TitleContainer>
                <CardTitle style={{ margin: `30px 0` }}>Reports</CardTitle>
                <div>see more</div>
              </TitleContainer>
              <CardContainer>
                <RowContainer>
                  <CardsContainer style={{ marginRight: `24px` }}>
                    <CardHeader>Search Sessions</CardHeader>
                    <CardCounter>
                      <CardLabel>Total</CardLabel>
                      <CounterNumbers>{teams.searchCount}</CounterNumbers>
                    </CardCounter>
                  </CardsContainer>
                  <CardsContainer>
                    <CardHeader>Sent pitches</CardHeader>

                    <CardCounter>
                      <CardLabel>Company</CardLabel>
                      <CounterNumbers>{teams.pitchCount}</CounterNumbers>
                    </CardCounter>
                  </CardsContainer>
                </RowContainer>
                <CardHeader style={{ margin: `24px 0` }}>
                  Prospect navigator
                </CardHeader>
                <CardCounter>
                  <NavigatorButton
                    style={{ padding: `0 24px` }}
                    onClick={() => goToPage()}>
                    <CardHeader>Go to page</CardHeader>
                    <CardHeader>{`>`}</CardHeader>
                  </NavigatorButton>
                </CardCounter>
                <CardHeader style={{ marginTop: `24px` }}>
                  Last login
                </CardHeader>
                <RowContainer>
                  <AuthorContainer>
                    <RowContainer>
                      <Avatar>
                        <img src={exampleAvatar} alt="Avatar" width={44} />
                      </Avatar>
                      <AuthorCredentials>
                        <AuthorTitle>
                          {`${teams.members[0].firstName} ${teams.members[0].lastName}`}
                        </AuthorTitle>
                      </AuthorCredentials>
                    </RowContainer>
                    <AuthorCredentials>
                      <CardLabel>
                        {teams.members[0].updatedAt.split(`T`)[0]}
                      </CardLabel>
                    </AuthorCredentials>
                  </AuthorContainer>
                </RowContainer>
                {teams.members[1] && (
                  <RowContainer>
                    <AuthorContainer>
                      <RowContainer>
                        <Avatar>
                          <img src={exampleAvatar} alt="Avatar" width={44} />
                        </Avatar>
                        <AuthorCredentials>
                          <AuthorTitle>
                            {`${teams.members[1].firstName} ${teams.members[1].lastName}`}
                          </AuthorTitle>
                        </AuthorCredentials>
                      </RowContainer>
                      <AuthorCredentials>
                        <CardLabel>
                          {teams.members[1].updatedAt.split(`T`)[0]}
                        </CardLabel>
                      </AuthorCredentials>
                    </AuthorContainer>
                  </RowContainer>
                )}

                {teams.members[2] && (
                  <RowContainer>
                    <AuthorContainer>
                      <RowContainer>
                        <Avatar>
                          <img src={exampleAvatar} alt="Avatar" width={44} />
                        </Avatar>
                        <AuthorCredentials>
                          <AuthorTitle>
                            {`${teams.members[2].firstName} ${teams.members[2].lastName}`}
                          </AuthorTitle>
                        </AuthorCredentials>
                      </RowContainer>
                      <AuthorCredentials>
                        <CardLabel>
                          {teams.members[2].updatedAt.split(`T`)[0]}
                        </CardLabel>
                      </AuthorCredentials>
                    </AuthorContainer>
                  </RowContainer>
                )}
              </CardContainer>
            </CardsContainer>
          </Container>
        </>
      )}
    </Body>
  );
};

export default Dashboard;
