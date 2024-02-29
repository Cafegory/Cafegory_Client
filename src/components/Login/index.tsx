//src\components\Login\index.tsx
import React from 'react';
import {
  LoginModal,
  ModalBackdrop,
  LoginTextContainer,
  LoginButton,
  LoginButtonContainer,
  NaverLogo,
  KakaoLogo,
} from './Login.style';

const Login: React.FC = () => {
  return (
    <>
      <LoginModal>
        <LoginTextContainer>로그인</LoginTextContainer>
        <>
          <LoginButtonContainer>
            <LoginButton backgroundColor="#1EC800">
              <NaverLogo src="/assets/naver-logo.png" alt="네이버로고" />
              네이버 로그인
            </LoginButton>
          </LoginButtonContainer>
          <LoginButtonContainer>
            <LoginButton backgroundColor="#FFEB00" fontColor="black">
              <KakaoLogo src="/assets/kakao-logo.png" alt="네이버로고" />
              카카오 로그인
            </LoginButton>
          </LoginButtonContainer>
        </>
      </LoginModal>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default Login;
