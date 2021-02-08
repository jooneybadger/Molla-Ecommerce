import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { media, theme, color } from '../../../../styles/CommonStyle';
import { NAV_API } from '../../../../config';

const Login = ({ closeLogin, login }) => {
  const [pickLogin, setPickLogin] = useState(true);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');

  const changeToLogin = () => {
    setPickLogin(true);
  };

  const changeToRegister = () => {
    setPickLogin(false);
  };

  const handleEmailValue = (e) => {
    setEmailValue(e.target.value);
    e.target.value ? setEmail(true) : setEmail(false);
  };

  const handlePwValue = (e) => {
    setPasswordValue(e.target.value);
    e.target.value ? setPassword(true) : setPassword(false);
  };

  const handleFirstNameValue = (e) => {
    setFirstNameValue(e.target.value);
    e.target.value ? setFirstName(true) : setFirstName(false);
  };

  const handleLastNameValue = (e) => {
    setLastNameValue(e.target.value);
    e.target.value ? setLastName(true) : setLastName(false);
  };

  const requestLogin = () => {
    fetch(`${NAV_API}`, {
      method: 'post',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            alert('Welcome');
          } else {
            alert('Check your email or password');
          }
        }),
    });
  };

  const requestRegister = () => {
    fetch(`${NAV_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        first_name: firstNameValue,
        last_name: lastNameValue,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.massage === 'SUCCESS') {
            alert('Welcome');
            setPickLogin(true);
          } else {
            alert('Fail');
          }
        }),
    });
  };

  console.log(emailValue, passwordValue);
  return (
    <Fragment>
      <Background login={login}>
        <WrapLogin pickLogin={pickLogin}>
          <CloseLogin onClick={() => closeLogin()}>
            <i className='fas fa-times'></i>
          </CloseLogin>
          <WrapHeader>
            <WrapSignin login={pickLogin} onClick={changeToLogin}>
              Login
            </WrapSignin>
            <WrapRegister login={pickLogin} onClick={changeToRegister}>
              Register
            </WrapRegister>
          </WrapHeader>
          <WrapBody>
            {pickLogin ? (
              <>
                <WrapInput>
                  <h1>Username or email address *</h1>
                  <EmailInput email={email} onChange={handleEmailValue}></EmailInput>
                </WrapInput>
                <WrapInput>
                  <h1>Password*</h1>
                  <PasswordInput password={password} onChange={handlePwValue}></PasswordInput>
                </WrapInput>
              </>
            ) : (
              <>
                <WrapInput>
                  <h1>Enter email address*</h1>
                  <EmailInput email={email} onChange={handleEmailValue} />
                </WrapInput>
                <WrapInput>
                  <h1>Enter your password*</h1>
                  <PasswordInput password={password} onChange={handlePwValue} />
                </WrapInput>
                <WrapInput>
                  <h1>Enter your First Name</h1>
                  <FirstNameInput firstName={firstName} onChange={handleFirstNameValue} />
                </WrapInput>
                <WrapInput>
                  <h1>Enter your Last Name</h1>
                  <LastNameInput lastName={lastName} onChange={handleLastNameValue} />
                </WrapInput>
              </>
            )}
            <WrapButtons pickLogin={pickLogin}>
              {pickLogin ? (
                <Button onClick={requestLogin}>Login</Button>
              ) : (
                <Button onClick={requestRegister}>Register</Button>
              )}
              {pickLogin ? (
                <>
                  <MemoryForm pickLogin={pickLogin}>
                    <input type='checkbox' />
                    <span>Remember me</span>
                  </MemoryForm>
                  <FindPw>Forgot your Password?</FindPw>
                </>
              ) : (
                <MemoryForm pickLogin={pickLogin}>
                  <input type='checkbox' />
                  <span>I agree to the privacy policy *</span>
                </MemoryForm>
              )}
            </WrapButtons>
          </WrapBody>
          <WrapFooter>
            {pickLogin ? <span>or login with</span> : <span>or register with</span>}
            <WrapSocial>
              {pickLogin ? (
                <SocialButton>
                  <img src='https://lh3.googleusercontent.com/proxy/6o2Sl6TR-Z0H0K19B9Yx2CmHLi8Pbpr6FMY-m3MEnnL4VH_bqUwOfNXRY_vkw1QedsEqO642cBDLAeOXy47FVRIkS_17GyxJHY7XMMrbH685JjthaRYJ2y3kIajd-zpZQhcKk-yO3Un-WfxHYJj8kQGNhIw23qkCy824IHLkUnGNK6Pb1Tn5zXsWU-7fCbag1btf06bQWaHBfaFDqNuA_ljqibf7BgATg_RUOVA4zCUAnWgOlZRiSHVtrAatPDfECRDWsWkE812u6j8yHL1zrej2a2IaTte3wY4' />
                  Login with Kakao
                </SocialButton>
              ) : (
                <SocialButton>
                  <img src='https://lh3.googleusercontent.com/proxy/6o2Sl6TR-Z0H0K19B9Yx2CmHLi8Pbpr6FMY-m3MEnnL4VH_bqUwOfNXRY_vkw1QedsEqO642cBDLAeOXy47FVRIkS_17GyxJHY7XMMrbH685JjthaRYJ2y3kIajd-zpZQhcKk-yO3Un-WfxHYJj8kQGNhIw23qkCy824IHLkUnGNK6Pb1Tn5zXsWU-7fCbag1btf06bQWaHBfaFDqNuA_ljqibf7BgATg_RUOVA4zCUAnWgOlZRiSHVtrAatPDfECRDWsWkE812u6j8yHL1zrej2a2IaTte3wY4' />
                  Register with Kakao
                </SocialButton>
              )}
              {pickLogin ? (
                <SocialButton>
                  <img src='https://www.dtl.coventry.domains/wp-content/uploads/2020/07/Google-Logo.png' />
                  Login with Google
                </SocialButton>
              ) : (
                <SocialButton>
                  <img src='https://www.dtl.coventry.domains/wp-content/uploads/2020/07/Google-Logo.png' />
                  Register with Google
                </SocialButton>
              )}
            </WrapSocial>
          </WrapFooter>
        </WrapLogin>
      </Background>
    </Fragment>
  );
};

export default Login;

const Background = styled.section`
  position: absolute;
  display: ${(props) => (props.login ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;
const WrapLogin = styled.section`
  position: relative;
  width: 650px;
  height: ${(props) => (props.pickLogin ? '600px' : '')};
  padding: 50px;
  background-color: ${color.white};
`;

const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const WrapSignin = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  padding-bottom: 15px;
  border-bottom: ${(props) =>
    props.login ? `3px solid ${color.gold}` : `1px solid ${color.lightGray}`};
  cursor: pointer;
`;

const WrapRegister = styled(WrapSignin.withComponent('div'))`
  border-bottom: ${(props) =>
    !props.login ? `3px solid ${color.gold}` : `1px solid ${color.lightGray}`};
`;

const WrapBody = styled.div``;

const WrapInput = styled.div`
  color: ${color.gray};
  margin-top: 32px;
  h1 {
    margin-bottom: 20px;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  color: ${color.gray};
  font-size: 16px;
  border: ${(props) => (props.email ? `2px solid ${color.gold}` : `1px solid ${color.lightGray}`)};
`;

const PasswordInput = styled(EmailInput.withComponent(`input`))`
  border: ${(props) =>
    props.password ? `2px solid ${color.gold}` : `1px solid ${color.lightGray}`};
`;

const FirstNameInput = styled(EmailInput.withComponent(`input`))`
  border: ${(props) =>
    props.firstName ? `2px solid ${color.gold}` : `1px solid ${color.lightGray}`};
`;

const LastNameInput = styled(EmailInput.withComponent(`input`))`
  border: ${(props) =>
    props.password ? `2px solid ${color.gold}` : `1px solid ${color.lightGray}`};
`;

const WrapButtons = styled.div`
  display: flex;
  justify-content: ${(props) => (props.pickLogin ? `space-between` : 'flex-start')};
  align-items: center;
  margin-top: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${color.lightGray};
  color: ${color.gray};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 40px;
  border: 1px solid ${color.gold};
  border-radius: 0px;
  background-color: ${color.white};
  color: ${color.gold};
  font-size: 16px;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    background-color: ${color.light};
  }
`;

const MemoryForm = styled.form`
  display: flex;

  input {
    margin: ${(props) => (props.pickLogin ? '0px 7px 0px 0' : '0px 7px 0 25px')};
    width: 15px;
    height: 15px;
    color: ${color.gray};
  }
`;

const FindPw = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

const WrapFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  color: ${color.gray};
`;

const WrapSocial = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  span {
  }
`;

const SocialButton = styled(Button.withComponent(`button`))`
  width: 48%;
  border: 1px solid ${color.lightGray};
  color: ${color.gray};

  &:hover {
    background-color: ${color.light};
  }

  img {
    width: 24px;
    margin-right: 15px;
  }
`;

const CloseLogin = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 20px;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
    color: black;
  }
`;
