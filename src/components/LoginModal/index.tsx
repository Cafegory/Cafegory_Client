import React from 'react';
import {
  LoginModal,
  ModalBackdrop,
  LoginTextContainer,
  LoginButton,
  LoginButtonContainer,
  NaverLogo,
  KakaoLogo,
} from './LoginModal.style';
import { useStore } from './LoginModal.hooks';

const Login: React.FC = () => {
  const toggleLoginModal = useStore((state) => state.toggleLoginModal);

  const closeModal = () => {
    toggleLoginModal();
  };

  //env
  const KAKAO_REST_API_KEY = '42ae3036ca22f333fa7d8b01b74bacad';
  const KAKAO_REDIRECT_URI = 'http://localhost:3000/';
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_URL;
  };

  //env
  const NAVER_REST_API_KEY = 'xCfIxbbRWciauIoFEjvc';
  const NAVER_STATE = false;
  const NAVER_REDIRECT_URI = 'http://localhost:3000/';
  const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_REST_API_KEY}&state=${NAVER_STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;

  const naverLoginHandler = () => {
    window.location.href = NAVER_URL;
  };

  return (
    <>
      <LoginModal>
        <LoginTextContainer>로그인</LoginTextContainer>
        <LoginButtonContainer>
          <LoginButton backgroundColor="#1EC800" onClick={naverLoginHandler}>
            <NaverLogo src="/assets/naver-logo.png" alt="네이버로고" />
            네이버 로그인
          </LoginButton>
          <LoginButton
            backgroundColor="#FFEB00"
            fontColor="black"
            onClick={kakaoLoginHandler}
          >
            <KakaoLogo src="/assets/kakao-logo.png" alt="네이버로고" />
            카카오 로그인
          </LoginButton>
        </LoginButtonContainer>
      </LoginModal>
      <ModalBackdrop onClick={closeModal}></ModalBackdrop>
    </>
  );
};

export default Login;
