/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions, selectors } from '../../store';
import Linked from '../../assets/images/linkedinIcon2.png';
import Twitter from '../../assets/images/twitterIcon.png';
import { companies } from '../../api';
import Button from '../../components/Button';
import logo01 from '../../assets/images/logo01.png';
import logo02 from '../../assets/images/logo02.png';
import logo03 from '../../assets/images/logo03.png';
import logo04 from '../../assets/images/logo04.png';
import logo05 from '../../assets/images/logo05.png';
import Corp from '../../assets/svg/corp.svg';
import Phone from '../../assets/svg/phone.svg';
import Mail from '../../assets/svg/icon.svg';
import Globe from '../../assets/svg/globe.svg';
import User from '../../assets/svg/user.svg';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 6px;
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 47px;
`;

const ContentColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 32px 40px;
`;

const Body = styled.div`
  background-color: #f9f9f9;
  height: 100%;
  min-height: calc(100vh - 80px);
`;

const Container = styled.div`
  padding: 32px 0;
  margin: 0 60px;
`;

const PageHeader = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 96px;
  width: 100%;
  align-items: center;
  padding: 0 60px;
  font-size: 32px;
  font-weight: 500;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavigationColumn = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background-color: #ffffff;
  width: 204px;
  align-items: center;
`;

const NavigationRow = styled.div`
  ${(props: { active: boolean }) =>
    props.active &&
    `
    background-color: #caf0ff;
    font-weight: 500;
`}
  display: flex;
  width: 204px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #e8f5fc;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  background-color: #f2f2f2;
  border-radius: 6px 6px 0px 0px;
  align-items: center;
  padding: 40px;
`;

const Image = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const ProfileCrenedentials = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 24px;
`;

const Title = styled.h1`
  align-content: flex-start;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 16px;
`;

const Label = styled.h6`
  font-size: 12px;
  font-weight: 400;
  color: #122434;
`;

const NavButton = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 60%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 0px 0px 6px 6px;
`;

const Line = styled.div`
  width: 1px;
  height: auto;
  background-color: #ebebeb;
`;

const H3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0 16px;
`;

const Icon = styled.div`
  margin-right: 16px;
`;

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedCompany = useAppSelector(selectors.companies.selectCompany);
  const [navigationBar, setNavigationBar] = useState<
    `profile` | `user` | `users` | `password`
  >(`profile`);
  const [isLoading, setIsLoading] = useState(true);
  const { profileId } = useParams();

  const getCompany = async (id: string | undefined) => {
    if (id) {
      const res = await dispatch(actions.companies.getCompany(id));
      console.log(`res`, res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => getCompany(profileId), 500);
  }, [profileId]);

  return (
    <Body>
      <PageHeader>Organization profile</PageHeader>
      <Container>
        <Row>
          <NavigationColumn>
            <NavigationRow
              active={navigationBar === `profile`}
              onClick={() => setNavigationBar(`profile`)}>
              Profile
            </NavigationRow>
            <NavigationRow
              active={navigationBar === `user`}
              onClick={() => setNavigationBar(`user`)}>
              User
            </NavigationRow>
            <NavigationRow
              active={navigationBar === `users`}
              onClick={() => setNavigationBar(`users`)}>
              Users
            </NavigationRow>
            <NavigationRow
              active={navigationBar === `password`}
              onClick={() => setNavigationBar(`password`)}>
              Password
            </NavigationRow>
          </NavigationColumn>
          {isLoading ? (
            <div
              style={{
                marginTop: `100px`,
                width: `100%`,
              }}>
              <ClipLoader
                color="#ffffff"
                loading={isLoading}
                css={override}
                size={150}
              />
            </div>
          ) : (
            <Column>
              <ContentHeader>
                <Row>
                  <Image>
                    <img src={Corp} alt="Corp" />
                  </Image>
                  <ProfileCrenedentials>
                    <Title>{selectedCompany.name}</Title>
                    <Label style={{ marginBottom: `auto` }}>
                      {selectedCompany.state}
                    </Label>
                    <Row style={{ width: `52px` }}>
                      <NavButton style={{ marginRight: `12px` }}>
                        <img src={Twitter} alt="twitter" width="20px" />
                      </NavButton>
                      <NavButton>
                        <img src={Linked} alt="twitter" width="20px" />
                      </NavButton>
                    </Row>
                  </ProfileCrenedentials>
                </Row>
                <Button text="Edit" edit onClick={() => alert(`Edit`)} />
              </ContentHeader>
              <Content>
                <Row
                  style={{
                    borderBottom: `1px solid #EBEBEB`,
                  }}>
                  <ContentColumn>
                    <Title>Organization</Title>
                    <Label>Annual Total Contributions</Label>
                    <H3>$ {selectedCompany.revenue}</H3>
                    <Label>Total Numbers of Constituents</Label>
                    <H3>{`<`} 10 000</H3>
                  </ContentColumn>
                  <Line />
                  <ContentColumn>
                    <Title>Partners</Title>
                    <Row style={{ marginBottom: `16px` }}>
                      <Logo>
                        <img src={logo01} alt="logo01" width="50px" />
                      </Logo>
                      <Logo>
                        <img src={logo02} alt="logo02" width="50px" />
                      </Logo>
                      <Logo>
                        <img src={logo03} alt="logo03" width="50px" />
                      </Logo>
                    </Row>
                    <Row>
                      <Logo>
                        <img src={logo04} alt="logo04" width="50px" />
                      </Logo>
                      <Logo>
                        <img src={logo05} alt="logo05" width="50px" />
                      </Logo>
                      <Logo />
                    </Row>
                  </ContentColumn>
                  <Line />
                  <ContentColumn style={{ justifyContent: `space-between` }}>
                    <Title>Contact</Title>
                    <Row style={{ justifyContent: `flex-start` }}>
                      <Icon>
                        <img src={User} alt="user" width="20" />
                      </Icon>
                      <Label>{selectedCompany.name}</Label>
                    </Row>
                    <Row style={{ justifyContent: `flex-start` }}>
                      <Icon>
                        <img src={Phone} alt="phone" width="20" />
                      </Icon>
                      <Label>{selectedCompany.phone}</Label>
                    </Row>
                    <Row style={{ justifyContent: `flex-start` }}>
                      <Icon>
                        <img src={Mail} alt="mail" width="20" />
                      </Icon>
                      <Label>{selectedCompany.fax}</Label>
                    </Row>
                    <Row style={{ justifyContent: `flex-start` }}>
                      <Icon>
                        <img src={Globe} alt="globe" width="20" />
                      </Icon>
                      <Label>{selectedCompany.website}</Label>
                    </Row>
                  </ContentColumn>
                </Row>
                <ContentColumn>
                  <H3>Description</H3>
                  <Label>{selectedCompany.descriptionList}</Label>
                </ContentColumn>
              </Content>
            </Column>
          )}
        </Row>
      </Container>
    </Body>
  );
};

export default Profile;
