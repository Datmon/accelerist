import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SwitchButton from '../../components/SwitchButton';
import LockLogo from '../../assets/svg/lock.svg';
import LinkedIcon from '../../assets/images/linkedIcon.png';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox/Checkbox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-width: 630px;
  background-color: white;
  padding: 40px;
  height: fit-content;
  border-radius: 6px;
`;

const HeaderTitle = styled.h1`
  color: #122434;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  margin-top: 4px;
  height: 46px;
  width: 100%;
  border-width: 1px;
  border-color: #e8e8e8;
  border-radius: 6px;
  border-style: solid;
  padding: 10px 16px;
`;

const Label = styled.label`
  position: relative;
  height: auto;
  width: 100%;
  color: #737373;
  font-size: 12px;
  margin-bottom: 24px;
`;

const Lock = styled.div`
  position: absolute;
  top: 31px;
  right: 14px;
  cursor: pointer;
`;

const Par = styled.p`
  text-align: center;
  color: #737373;
`;

const Span = styled.span`
  color: black;
  font-weight: 500;
  cursor: pointer;
`;

const SpanPolic = styled.span`
  color: black;
  cursor: pointer;
`;

const Touchable = styled.div`
  cursor: pointer;
  &:active {
    opacity: 70%;
  }
`;

const InlinePanel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(`signIn`);
  const [showPass, setShowPass] = useState(true);
  useEffect(() => {
    if (state === `Register`) {
      navigate(`/register`);
    }
  }, [state]);

  return (
    <Container>
      <HeaderTitle>Welcome to Accelerist</HeaderTitle>
      <SwitchButton
        initName="Login"
        names={[`Register`, `Login`]}
        setName={(name: string) => setState(name)}
      />
      <Label style={{ marginTop: `50px` }}>
        Email
        <Input type="email" name="Email" />
      </Label>
      <Label>
        Password
        <Input
          type={showPass ? `password` : `text`}
          name="password"
          style={{ paddingRight: `60px` }}
        />
        <Lock onClick={() => setShowPass(!showPass)}>
          <img src={LockLogo} alt="LockLogo" />
        </Lock>
      </Label>
      <InlinePanel>
        <Checkbox
          label="Remember"
          onClick={() => {
            ('');
          }}
        />
        <Touchable>
          <Par style={{ fontSize: `12px` }}>Forgot Password?</Par>
        </Touchable>
      </InlinePanel>
      <Par style={{ marginTop: `50px` }}>
        I agree that by clicking <Span>“Registration”</Span> I accept the{` `}
        <SpanPolic>Terms Of</SpanPolic>
      </Par>
      <Par>
        <SpanPolic>Service</SpanPolic> and <SpanPolic>Privacy Policy</SpanPolic>
      </Par>
      <Button
        style={{ marginTop: `24px`, marginBottom: `40px` }}
        onClick={() => {
          ('');
        }}
        text="Login"
      />
      <Par style={{ marginBottom: `30px` }}>or continue with</Par>
      <Touchable>
        <img src={LinkedIcon} alt="LinkedIcon" />
      </Touchable>
    </Container>
  );
};

export default Register;
