import React, { useEffect } from 'react';
import {
  LoginModal,
  ModalBackdrop,
  LoginTextContainer,
  LoginButton,
  LoginButtonContainer,
  KakaoLogo,
} from './LoginModal.style';
import { useStore } from './LoginModal.hooks';

const Login: React.FC = () => {
  const toggleLoginModal = useStore((state) => state.toggleLoginModal);

  const closeModal = () => {
    toggleLoginModal();
  };

  const KAKAO_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const KAKAO_REDIRECT_URI = 'https://cafegory.netlify.app/oauth';
  k;
  // const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth';
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_URL;
  };

  return (
    <>
      <LoginModal>
        <LoginTextContainer>로그인</LoginTextContainer>
        <LoginButtonContainer>
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
