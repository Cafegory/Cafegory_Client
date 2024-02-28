import React from 'react';
import {
  LoginModal,
  ModalBackdrop,
  LoginTextContainer,
  LoginInput,
  LoginInputLabel,
  InputContainer,
  LoginButton,
  LoginButtonContainer,
  NaverLogo,
  KakaoLogo,
  InputBorder,
} from './Login.style';

const Login: React.FC = () => {
  return (
    <>
      <LoginModal>
        <LoginTextContainer>로그인</LoginTextContainer>
        <InputContainer>
          <LoginInputLabel>아이디</LoginInputLabel>
          <InputBorder>
            <LoginInput placeholder="아이디를 입력하세요."></LoginInput>
          </InputBorder>
          <LoginInputLabel>비밀번호</LoginInputLabel>
          <InputBorder>
            <LoginInput placeholder="비밀번호를 입력하세요."></LoginInput>
          </InputBorder>
        </InputContainer>
        <>
          <LoginButtonContainer>
            <LoginButton>로그인</LoginButton>
          </LoginButtonContainer>
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
